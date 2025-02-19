import { useEffect, useRef, useState } from "react"
import Cookies from "js-cookie"
import SideBar from "../Component/sidebar/SideBar"
import Header from "../Component/header/Header"
import { useLocation } from "react-router-dom"

export default function PrintStocks() {
  // const [barcodes, setBarcodes] = useState([])
  const printRef = useRef(null)
  const token = Cookies.get("token")
  const location = useLocation();
  const barcodes = location.state?.barcodes || [];

  // useEffect(() => {
  //   const fetchBarcodes = async () => {
  //     if (!token) {
  //       console.error("No authentication token found.")
  //       return
  //     }

  //     try {
  //       const response = await fetch("https://server.grafixen.in/api/v2/spj/admin/barcodes", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })

  //       const data = await response.json()
  //       if (data.success) {
  //         setBarcodes(data.barcodes)
  //       } else {
  //         console.error("Failed to fetch barcodes:", data.message)
  //       }
  //     } catch (error) {
  //       console.error("Error fetching barcodes:", error)
  //     }
  //   }

  //   fetchBarcodes()
  // }, [token])


  useEffect(() => {
    if (!barcodes.length) {
      alert("No barcodes available for printing.");
    }
  }, [barcodes]);

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

// "use client";
// import { useEffect, useRef, useState } from "react";
// import Cookies from "js-cookie";
// import SideBar from "../Component/sidebar/SideBar";
// import Header from "../Component/header/Header";
// import { useLocation } from "react-router-dom";

// export default function PrintStocks() {
//   const printRef = useRef(null);
//   const token = Cookies.get("token");
//   const location = useLocation();
//   const barcodes = location.state?.barcodes || [];

//   useEffect(() => {
//     if (!barcodes.length) {
//       alert("No barcodes available for printing.");
//     }
//   }, [barcodes]);

//   const handlePrint = () => {
//     if (barcodes.length === 0) {
//       alert("No barcodes available for printing.");
//       return;
//     }

//     const printContent = printRef.current;
//     const printWindow = window.open("", "_blank");

//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Print Jewelry Barcode</title>
//           <style>
//             @page {
//               size: 80mm 20mm; /* Set custom size for jewelry tags */
//               margin: 0;
//             }
//             body {
//               margin: 0;
//               padding: 0;
//               display: flex;
//               flex-wrap: wrap;
//               justify-content: center;
//               align-items: center;
//               background: white;
//             }
//             .label {
//               width: 80mm;
//               height: 20mm;
//               display: flex;
//               align-items: center;
//               justify-content: space-between;
//               padding: 2mm;
//               border: 1px solid #ddd;
//               font-family: Arial, sans-serif;
//               font-size: 12px;
//             }
//             .details {
//               display: flex;
//               flex-direction: column;
//               justify-content: center;
//               line-height: 1.2;
//             }
//             .store-name {
//               font-size: 10px;
//               font-weight: bold;
//             }
//             .barcode-container {
//               display: flex;
//               flex-direction: column;
//               align-items: center;
//               justify-content: center;
//             }
//             .barcode {
//               height: 12mm;
//               width: auto;
//               object-fit: contain;
//             }
//             .barcode-number {
//               font-size: 10px;
//               text-align: center;
//             }
//           </style>
//         </head>
//         <body>
//           ${printContent.outerHTML}
//         </body>
//       </html>
//     `);

//     printWindow.document.close();

//     // Ensure images load before printing
//     const images = printWindow.document.images;
//     let loadedImages = 0;

//     if (images.length > 0) {
//       for (let img of images) {
//         img.onload = () => {
//           loadedImages++;
//           if (loadedImages === images.length) {
//             printWindow.print();
//             printWindow.close();
//           }
//         };
//       }
//     } else {
//       printWindow.print();
//       printWindow.close();
//     }
//   };

//   return (
//     <>
//       <section className="flex w-full h-full select-none p-[15px] overflow-hidden">
//         <div className="flex w-full flex-col gap-[14px] h-[96vh]">
//           <Header pageName="Print Jewelry Barcode" />
//           <div className="flex gap-[10px] w-full h-full">
//             <SideBar />
//             <div className="flex w-full md:max-h-[90%] pb-[20px] pr-[15px] gap-[30px] rounded-[10px]">
//               <div className="flex flex-col gap-[15px] w-full">
//                 <div className="p-4">
//                   <button
//                     onClick={handlePrint}
//                     className="mb-4 font-Poppins text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600"
//                   >
//                     Print Jewelry Tags
//                   </button>
//                   <div ref={printRef} className="labels-container">
//                     {barcodes.length > 0 ? (
//                       barcodes.map((barcode, index) => (
//                         <div key={index} className="label">
//                           {/* Jewelry Item Details */}
//                           <div className="details">
//                             <strong>{barcode.itemName || "Item"}</strong>
//                             <span>GW: {barcode.grossWeight || "0.000"} GM</span>
//                             <span>DIA: {barcode.diamondWeight || "0.000"} CT</span>
//                             <span>NW: {barcode.netWeight || "0.000"} GM</span>
//                           </div>

//                           {/* Purity & Size */}
//                           <div className="details">
//                             <span>{barcode.purity || "22K"}</span>
//                             <span>SZ: {barcode.size || "N/A"}</span>
//                           </div>

//                           {/* Store Name & Barcode */}
//                           <div className="barcode-container">
//                             <span className="store-name">
//                               {barcode.storeName || "Jewelry Store"}
//                             </span>
//                             <img
//                               className="barcode"
//                               src={barcode.barcodeImage || "/placeholder.svg"}
//                               alt={`Barcode ${barcode.barCode}`}
//                             />
//                             <span className="barcode-number">
//                               {barcode.barCode || "0000"}
//                             </span>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <p>No barcodes available.</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
