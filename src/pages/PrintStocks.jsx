import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';

export default function PrintStocks() {
  const [barcodes, setBarcodes] = useState([]);
  const printRef = useRef(null);

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchBarcodes = async () => {
      if (!token) {
        console.error("No authentication token found.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/api/v1/admin/barcodes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
          },
        });

        const data = await response.json();
        if (data.success) {
          setBarcodes(data.barcodes);
        } else {
          console.error("Failed to fetch barcodes:", data.message);
        }
      } catch (error) {
        console.error("Error fetching barcodes:", error);
      }
    };

    fetchBarcodes();
  }, [token]);

  const handlePrint = () => {
    const printContent = printRef.current;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Stocks</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .label {
              width: 60mm;
              height: 30mm;
              margin: 5mm;
              border: 1px solid #ddd;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: Arial, sans-serif;
              padding: 5px;
            }
            .barcode {
              width: 100%;
              height: auto;
            }
            .stock-name, .stock-price {
              font-size: 12px;
              margin-top: 5px;
            }
          </style>
        </head>
        <body>
          ${printContent.outerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  return (
    <div>
      <button
        onClick={handlePrint}
        className="font-Poppins text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600"
      >
        Print
      </button>
      <div ref={printRef}>
      {barcodes.length > 0 ? (
          barcodes.map((barcode, index) => (
            <div key={index} className="label">
              <img
                className="barcode"
                src={barcode.barcodeImage} // Fetching barcode image from API
                alt={`Barcode ${barcode.barCode}`}
              />
              <div className="stock-name">{barcode.barCode}</div>
            </div>
          ))
        ) : (
          <p>No barcodes available.</p>
        )}
      </div>
    </div>
  );
}
