import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import SideBar from "../Component/sidebar/SideBar";
import Header from "../Component/header/Header";
import { useLocation } from "react-router-dom";
import holmark from "../../public/images.png";

export default function PrintStocks() {
  // const [barcodes, setBarcodes] = useState([])
  const printRef = useRef(null);
  const token = Cookies.get("token");
  const location = useLocation();
  const barcodes = location.state?.barcodes || [];

  console.log('barcodes', barcodes)

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


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        @page {
          size: auto;
          margin: 0mm;
        }
        body {
          margin: 0;
          padding: 10mm;
          font-family: 'Poppins', sans-serif;
          // display: flex;
          // justify-content: center;
          // align-items: center;
        }
        .labels-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          // align-items: center;
        }
        .label {
          width: 5.5cm;
          height: 1.2cm;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px;
          box-sizing: border-box;
        }
          .main-text{
          display:flex ;
           flex-direction: column;
          gap:0px
;        
margin:20px 0px;
          line-height: 2px;    
          }

          .main1{
                 display:flex ;
           gap:10px;
           width:70px;

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
          margin-top:8px;
        }


                .text-content1 {
          display: flex;
          flex-direction: ;
          font-size: 6px;
          font-weight: 500;
          color: black;
          line-height: 2px;
                    margin-top:0px;
        }

                .text-content12 {
                  display: flex;
                  flex-direction: ;
                  font-size: 6px;
                  font-weight: 500;
                  color: black;
                  line-height: 2px;
                            margin-top:29px;
                }
                                     .text-content123 {
                  display: flex;
                  flex-direction: ;
                  font-size: 6px;
                  font-weight: 500;
                  color: black;
                  line-height: 2px;
                  
                }

        .text-content p:first-child {
          font-weight: 600;
          font-size: 9px;
        }
        .store-name {
          font-size: 8px;
          font-weight: 600;
          margin-top:0px;
        }
        .barcode {
          width: 54px;
          height: 23px;
        }
        .holmark {
          height: 20px;
          width: 30px;
        }

        .barimage{
            display: flex;
         justify-content: space-between;
         gap:10px;
         padding: 0px 6px;
         margin-top:-4px;
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
                        <div
                          key={index}
                          className="label bg-white border w-[230px] mb-[10px] rounded-[5px] flex-wrap  h-[60px] justify-center flex py-[4px] border-gray-200"
                        >
                          <div className="label-content">
                            <div className="barcode-container  justify-between mt-[2px] gap-[12px] w-[100%] flex   ">
                              <div className=" font-Poppins main1 flex gap-[10px]">
                                <div className="flex main-text flex-col">
                                  <p className="  text-black text-content leading-3   font-[600] text-[9px] flex ">
                                    {barcode.groupItemId?.itemName}
                                  </p>

                                  <p className="  text-black text-content1    leading-[10px]   font-[500] text-[7px] flex  ">
                                    G.W: {barcode?.toWeight} GM
                                  </p>

                                  <p className="  text-black text-content1   leading-[10px]   font-[500] text-[7px] flex ">
                                    L.W: {((barcode?.toWeight || 0) - (barcode?.netWeight || 0)).toFixed(2)} GM
                                  </p>
                                  <p className="  text-black text-content1   leading-[10px]   font-[500] text-[7px] flex  ">
                                    N.W: {barcode?.netWeight} GM
                                  </p>
                                </div>
                                <div className=" flex flex-col size">


                                  <p className="  text-black text-content12  leading-3   font-[500] text-[7px] flex  ">
                                    {barcode?.groupId?.name}
                                  </p>

                                  <p className="  text-black text-content123  leading-3   font-[500] text-[7px] flex  ">
                                    SZ: 9
                                  </p>
                                </div>
                              </div>
                              <div className=" flex flex-col  items-center gap-[8px]">
                                <p className=" font-Poppins store-name  text-black   leading-[10px]   font-[600] text-[8px] flex ">
                                  Soni Pintu Bhai Jewellers
                                </p>
                                <div className=" barimage flex  w-[100%] justify-between px-[6px] gap-[10px]">
                                  <img
                                    className="barcode w-[57px] h-[25px]"
                                    src={
                                      barcode.barcodeImage || "/placeholder.svg"
                                    }
                                    alt={`Barcode ${barcode.barCode}`}
                                  />
                                  <img
                                    className=" flex  h-[20px] holmark w-[30px]"
                                    src={holmark}
                                  />
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
