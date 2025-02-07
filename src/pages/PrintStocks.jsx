import { useSelector } from "react-redux";
import { useRef } from "react";

export default function PrintStocks() {
  const stocks = useSelector((state) => state.landing.getProduct);
  const printRef = useRef(null);

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
        {stocks && stocks.length > 0 ? (
          stocks.map((stock, index) => (
            <div key={index} className="label">
              <img
                className="barcode"
                src={`https://bwipjs-api.metafloor.com/?bcid=code128&text=${stock.id}&scale=3`}
                alt="Barcode"
              />
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">${stock.price?.toFixed(2)}</div>
            </div>
          ))
        ) : (
          <p>No stocks available.</p>
        )}
      </div>
    </div>
  );
}
