import { useEffect, useRef } from "react";
import SideBar from "../Component/sidebar/SideBar";
import Header from "../Component/header/Header";
import { useLocation } from "react-router-dom";

export default function PrintStocks() {
  // const [barcodes, setBarcodes] = useState([])
  const printRef = useRef(null);
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const barcodesData = location.state?.barcodes;
  const barcodesData = location.state?.barcodes || [];
  // Ensure barcodes is always an array
  const barcodes = Array.isArray(barcodesData) ? barcodesData : (barcodesData ? [barcodesData] : []);



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

  // useEffect(() => {
  //   if (!barcodes.length) {
  //     alert("No barcodes available for printing.");
  //   }
  // }, [barcodes]);

  //   const handlePrint = () => {
  //     const printContent = printRef.current
  //     const printWindow = window.open("", "_blank")
  //     printWindow.document.write(`
  //       <html>
  //         <head>
  //           <title>Print Stocks</title>
  //           <style>
  //            @page {
  //   size: auto;
  //   margin: 0mm;
  // }

  // body {
  //   margin: 0;
  //   padding: 10mm;
  // }

  // .labels-container {
  //   display: flex;
  //   flex-direction: column;
  //   gap: 10px;
  // }

  // .label {
  //   width: 230px;
  //   height: 60px;
  //   background: white;
  //   border: 1px solid #e5e7eb;
  //   border-radius: 5px;
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   padding: 4px 0px;
  //   margin-bottom:10px;
  // }

  // .label-content {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   width: 100%;
  // }

  // .barcode-container {
  //   display: flex;
  //   justify-content: space-between;
  //   margin-top: 2px;
  //   gap: 12px;
  //   width: 100%;
  // }

  // .text-content {
  //   display: flex;
  //   flex-direction: column;
  //   gap: 2px;
  // }

  // .text-content p {
  //   color: black;
  //   font-family: 'Poppins', sans-serif;
  //   font-weight: 500;
  //   font-size: 7px;
  //   line-height: 10px;
  //   margin: 0;
  // }

  // .text-content p:first-child {
  //   font-weight: 600;
  //   font-size: 9px;
  //   line-height: 3px;
  // }

  // .store-name {
  //   font-family: 'Poppins', sans-serif;
  //   font-size: 8px;
  //   font-weight: 600;
  //   color: black;
  // }

  // .barcode {
  //   width: 57px;
  //   height: 25px;
  // }

  // .barcode-number {
  //   font-family: Arial, sans-serif;
  //   font-size: 10px;
  //   text-align: center;
  //   margin-top: 1mm;
  // }

  // .holmark {
  //   height: 20px;
  //   width: 30px;
  // }
  //           </style>
  //         </head>
  //         <body>
  //           ${printContent.outerHTML}
  //         </body>
  //       </html>
  //     `)
  //     printWindow.document.close()
  //     printWindow.onload = () => {
  //       printWindow.print()
  //       printWindow.close()
  //     }
  //   }
  const handlePrint = () => {
    const printContent = printRef.current;
    const printWindow = window.open("", "_blank");

    //   printWindow.document.write(`
    //     <html>
    //       <head>
    //         <title>Print Stocks</title>
    //         <style>

    // @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    //           @page {
    //             size: auto;
    //             margin: 0mm;
    //           }
    //           body {
    //             margin: 0;
    //             padding: 10mm;
    //             font-family: 'Poppins', sans-serif;
    //             // display: flex;
    //             // justify-content: center;
    //             // align-items: center;
    //           }
    //           .labels-container {
    //             display: flex;
    //             flex-direction: column;
    //             gap: 10px;
    //             // align-items: center;
    //           }
    //           .label {
    //             width: 230px;
    //             height: 60px;
    //             background: white;
    //             border: 1px solid #e5e7eb;
    //             border-radius: 5px;
    //             display: flex;
    //             align-items: center;
    //             justify-content: space-between;
    //             padding: 6px;
    //             box-sizing: border-box;
    //           }
    //             .main-text{
    //             dispaly:flex ;
    //             flex-direction: column
    //             gap:0px
    // ;                  width: 180%;
    //             }
    //           .label-content {
    //             display: flex;
    //             align-items: center;
    //             justify-content: space-between;
    //             width: 100%;
    //           }
    //           .barcode-container {
    //             display: flex;
    //             align-items: center;
    //             width:420px;
    //             gap: 28px;
    //           }
    //           .text-content {
    //             display: flex;
    //             flex-direction: column;
    //             font-size: 7px;
    //             font-weight: 500;
    //             color: black;
    //             line-height: 10px;
    //           }
    //           .text-content p {
    //             // margin: 2px 0;
    //           }
    //           .text-content p:first-child {
    //             font-weight: 600;
    //             font-size: 9px;
    //           }
    //           .store-name {
    //             font-size: 8px;
    //             font-weight: 600;
    //           }
    //           .barcode {
    //             width: 57px;
    //             height: 25px;
    //           }
    //           .holmark {
    //             height: 20px;
    //             width: 30px;
    //           }
    //         </style>
    //       </head>
    //       <body>
    //         <div class="labels-container">
    //           ${printContent.outerHTML}
    //         </div>
    //       </body>
    //     </html>
    //   `);

    printWindow.document.write(`
  <html>
    <head>
      <title>Print Stocks</title>
      <style>


// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');



//      @page {
//             size: 81mm 12mm; /* Exact label size */
//             margin: 0; /* No extra margin */
//         }
//         body {
//           margin: 0;
//    width: 81mm;
//             height: 12mm;
//           padding: 2mm;
//           font-family: 'Open Sans', serif;
//           // display: flex;
//           // justify-content: center;
//           // align-items: center;
//         }
//         .labels-container {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           // align-items: center;
//         }
//         .label {
//           // width: 5.3cm;
//           // height: 1.3cm;
//              width: 81mm;
//             height: 12mm;
//           background: white;
//           border: 1px solid #e5e7eb;
//           border-radius: 5px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 6px;
//           box-sizing: border-box;
//         }
//           .main-text{
//           display:flex ;
//            flex-direction: column;
//           gap:0px
// ;        
// margin:20px 0px;
//           line-height: 2px;    
//           }





@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

 @page {
          size: 81mm 12mm; /* Exact label size */
          margin: 0 !important; /* No extra margin */
        }
        
        body {
          margin: 0;
          width: 81mm;
          height: 10mm;
          // padding: 2mm;
          font-family: Open Sans, serif;
          position:relative;
        }
.label:nth-child(4n) {
  page-break-after: always;
}

        .labels-container {
          display: flex;
          flex-direction: column;
          align-items: center;

        }
        
        .label {
          width: 81mm;
          height: 12mm;
          background: white;
          // border: 1px solid #e5e7eb;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 4px;
          box-sizing: border-box;
        }

          .main1{
                 display:flex ;
           gap:10px;
           width:78px;

          }
        .label-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .barcode-container {
          display: flex;
          align-items: center;

          gap: 28px;
        }
        .text-content {
          display: flex;
          flex-direction: ;
          font-size: 8px;
          font-weight: 600;
          color: black;
          line-height: 2px;
          margin-top:3px;
        }


                .text-content1 {
          display: flex;
          flex-direction: ;
          font-size: 9px;
          font-weight: 800;
          color: black;
          line-height: 3px;
                    margin-top:2px;
        }

                .text-content12 {
                  display: flex;
                  flex-direction: ;
                  font-size: 7px;
                  font-weight: 700;
                  color: black;
                  line-height: 2px;
                            margin-top:9px;
                }
                                     .text-content123 {
                  display: flex;
                  flex-direction: ;
                  font-size: 7px;
                  font-weight: 700;
                  color: black;
                  line-height: 2px;
                  
                }

        .text-content p:first-child {
          font-weight: 600;
          font-size: 9px;
        }
        .store-name {
          font-size: 7px;
          font-weight: 700;
          margin-top:-5px;
        }
        .barcode {
          width: 60px;
          height: 28px;
          // width:2.5cm
          // height: 0.5cm;

          margin-top:3px;
        }
        .holmark {
          height: 19px;
          width: 25px;
             margin-top:3px;
        }
        .barimage{
          display: flex;
          justify-content: space-between;
          gap:10px;
          padding: 0px 6px;
          margin-top:-4px;
        }
          .barcode-number {
              font-size: 7px;
              font-weight: bold;
              margin: 2px 0;
              padding:1px 2px ;
              background-color:white;
              position:absolute;
              top:25px;
              left:0px;
              right:0px; 
              width:fit-content;
              margin:0px auto;
            }
              .imagenumber{
                   display: flex;
          flex-direction: column ;
position:relative !important;

              }
        .size{
          display: flex;
          flex-direction: column ;
        }

      </style>
    </head>
    <body>
      <div class="labels-container">
        ${printContent.outerHTML}
      </div>
    </body>
  </html>
`);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  useEffect(() => {
    if (!barcodes.length) {
      alert("No barcodes available for printing.");
    } else {
      console.log("Barcodes ready for printing:", barcodes);
    }
  }, [barcodes]);


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
                      barcodes.map((item, index) => (
                        <div
                          key={index}
                          className="label bg-white border w-[230px] mb-[10px] rounded-[5px] flex-wrap  h-[60px] justify-between px-[10px] flex py-[4px] border-gray-200"
                        >
                          <div className="label-content">
                            <div className="barcode-container  relative justify-between  gap-[12px] w-[100%] flex   ">
                              <div className=" font-Poppins main1 flex gap-[10px]">
                                <div className="flex main-text gap-[4px] mt-[6px] w-[90px] flex-col">
                                  {/* <p className="  text-black text-content leading-3   font-[600] text-[9px] flex ">
                                    {barcode.groupItemId?.itemName}
                                  </p> */}

                                  <p className="  text-black text-content1    leading-[10px]   font-[500] text-[10px] flex  ">
                                    G.W: {item?.toWeight} GM

                                  </p>

                                  <p className="  text-black text-content1   leading-[10px]   font-[500] text-[10px] flex ">
                                    L.W: {((item?.toWeight || 0) - (item?.netWeight || 0)).toFixed(2)} GM
                                  </p>
                                  <p className="  text-black text-content1   leading-[10px]   font-[500] text-[10px] flex  ">
                                    N.W: {item?.netWeight} GM
                                  </p>
                                </div>
                                <div className=" flex flex-col size">


                                  {/* <p className="  text-black text-content12  leading-3   font-[500] text-[7px] flex  ">
                                    {barcode?.groupId?.name}
                                  </p>

                                  {barcode?.size?.sizeName && (
                                    <p className="text-black text-content123 leading-3 font-[500] text-[7px] flex">
                                      SZ: {barcode.size?.sizeName}
                                    </p>
                                  )} */}

                                </div>
                              </div>
                              <div className=" flex flex-col  items-center mt-[10px] gap-[8px]">
                                {/* <p className=" font-Poppins store-name  text-black   leading-[10px]   font-[600] text-[8px] flex ">
                                  Soni Pintu Bhai Jewellers
                                </p> */}
                                <div className=" barimage flex  w-[100%] justify-between px-[6px] gap-[10px]">
                                  <div className="  relative imagenumber">


                                    <img
                                      className="barcode w-[69px] h-[34px]"
                                      src={
                                        item.barcodeImage || "/placeholder.svg"
                                      }
                                      alt={`Barcode ${item.barcode}`}
                                    />
                                    {item.barcode || item.barCode ? (
                                      <p className="barcode-number h-fit absolute font-Poppins text-[10px] top-[27px] left-[16px] font-[500] bg-white w-fit text-black">
                                        {item.barcode || item.barCode}
                                      </p>
                                    ) : (
                                      <p className="barcode-number h-fit absolute font-Poppins text-[10px] top-[27px] left-[16px] font-[500] bg-white w-fit text-gray-500">
                                      
                                      </p>
                                    )}
                                  </div>
                                  {/* <img
                                    className=" flex  h-[20px] holmark w-[30px]"  
                                    src={holmark}
                                  /> */}
                                </div>
                              </div>
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
  );
}
