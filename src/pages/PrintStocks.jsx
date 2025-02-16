// import { useSelector } from "react-redux";
// import { useEffect, useRef, useState } from "react";
// import Cookies from "js-cookie";

// export default function PrintStocks() {
//   const [barcodes, setBarcodes] = useState([]);
//   const printRef = useRef(null);

//   const token = Cookies.get("token");

//   useEffect(() => {
//     const fetchBarcodes = async () => {
//       if (!token) {
//         console.error("No authentication token found.");
//         return;
//       }

//       try {
//         const response = await fetch(
//           "http://localhost:8000/api/v1/admin/barcodes",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const data = await response.json();
//         if (data.success) {
//           setBarcodes(data.barcodes);
//         } else {
//           console.error("Failed to fetch barcodes:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching barcodes:", error);
//       }
//     };

//     fetchBarcodes();
//   }, [token]);

//   const handlePrint = () => {
//     const printContent = printRef.current;
//     const printWindow = window.open("", "_blank");
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Print Stocks</title>
//           <style>
//             body {
//               margin: 0;
//               padding: 0;
//               display: flex;
//               flex-wrap: wrap;
//               justify-content: center;
//             }
//             .label {
//               width: 81mm;
//               height: 12mm;
//               margin: 2mm;
//               border: 1px solid #ddd;
//               display: flex;
//               flex-direction: column;
//               align-items: center;
//               justify-content: center;
//               font-family: Arial, sans-serif;
//               padding: 2px;
//             }
//             .barcode {
//               width: 100%;
//               height: 100%;
//               object-fit: contain;
//             }
//           </style>
//         </head>
//         <body>
//           ${printContent.outerHTML}
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.onload = () => {
//       printWindow.print();
//       printWindow.close();
//     };
//   };

//   return (
//     <div>
//       <button
//         onClick={handlePrint}
//         className="font-Poppins text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600"
//       >
//         Print
//       </button>
//       <div ref={printRef}>
//         {barcodes.length > 0 ? (
//           barcodes.map((barcode, index) => (
//             <div key={index} className="label">
//               <img
//                 className="barcode w-[100px]"
//                 src={barcode.barcodeImage} 
//                 alt={`Barcode ${barcode.barCode}`}
//               />
//             </div>
//           ))
//         ) : (
//           <p>No barcodes available.</p>
//         )}
//       </div>
//     </div>
//   );
// }
"use client"
import { useEffect, useRef, useState } from "react"
import Cookies from "js-cookie"
import SideBar from "../Component/sidebar/SideBar"
import Header from "../Component/header/Header"

export default function PrintStocks() {
  const [barcodes, setBarcodes] = useState([])
  const printRef = useRef(null)
  const token = Cookies.get("token")

  useEffect(() => {
    const fetchBarcodes = async () => {
      if (!token) {
        console.error("No authentication token found.")
        return
      }

      try {
        const response = await fetch("https://server.grafixen.in/api/v2/spj/admin/barcodes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })

        const data = await response.json()
        if (data.success) {
          setBarcodes(data.barcodes)
        } else {
          console.error("Failed to fetch barcodes:", data.message)
        }
      } catch (error) {
        console.error("Error fetching barcodes:", error)
      }
    }

    fetchBarcodes()
  }, [token])

  const handlePrint = () => {
    const printContent = printRef.current
    const printWindow = window.open("", "_blank")
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Stocks</title>
          <style>
            @page {
              size: auto;
              margin: 0mm;
            }
            body {
              margin: 0;
              padding: 10mm;
            }
            .labels-container {
              display: flex;
              flex-direction: column;
              gap: 0mm;
            }
            .label {
              width: 81mm;
              height: 12mm;
              display: flex;
              padding: 2mm 4mm;
              background: white;
              position: relative;
               justify-content: center;

           
            }
            .label-content {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
            }
            .text-content {
              display: flex;
              flex-direction: column;
              gap: 1mm;
            }
            .store-name {
              font-family: Arial, sans-serif;
              font-size: 12px;
              font-weight: bold;
            }
            .price {
              font-family: Arial, sans-serif;
              font-size: 14px;
              font-weight: bold;
            }
            .barcode {
              height: 12mm;
              width: auto;
            }
            .barcode-number {
              font-family: Arial, sans-serif;
              font-size: 10px;
              text-align: center;
              margin-top: 1mm;
            }
          </style>
        </head>
        <body>
          ${printContent.outerHTML}
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.onload = () => {
      printWindow.print()
      printWindow.close()
    }
  }

  return (



    <>
      <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Print Barcode" />
          <div className="flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className="flex w-[100%] md:max-h-[90%] pb-[20px] pr-[15px]  gap-[30px] rounded-[10px]">
              <div className="flex flex-col gap-[15px] w-[100%]">

                <div className="p-4">
                  <button
                    onClick={handlePrint}
                    className="mb-4 font-Poppins text-white px-4 py-2 rounded  bs-spj"
                  >
                    Print Labels
                  </button>
                  <div ref={printRef} className="labels-container">
                    {barcodes.length > 0 ? (
                      barcodes.map((barcode, index) => (
                        <div key={index} className="label bg-white border w-[200px] mb-[10px] rounded-[5px] flex-wrap  justify-center flex py-[10px] border-gray-200">
                          <div className="label-content">

                            <div className="barcode-container">
                              <img
                                className="barcode w-[100px]"
                                src={barcode.barcodeImage || "/placeholder.svg"}
                                alt={`Barcode ${barcode.barCode}`}
                              />

                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No barcodes available.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






    </>




  )
}

