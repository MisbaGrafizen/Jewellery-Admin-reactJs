import React from "react";
import SideBar from "../../Component/sidebar/SideBar";
import Header from "../../Component/header/Header";

export default function InvoicePage() {
  return (
    <>
      <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Invoice-Bill" />
          <div className="flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className="flex w-[100%] max-h-[100%] pb-[50px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
              {/* <div className="max-w-[800px]  pb-[300px] mx-auto px-4">
                 <div className="border border-gray-800 rounded-sm p-4 mb-[40px] bg-white">
                
                  <div className="text-center border border-gray-800 rounded-sm p-2 mb-4">
                    <h1 className="text-[#8B4513] text-xl font-Poppins font-semibold">
                      Soni Pintu bhai Jewellers
                    </h1>
                    <p className="text-sm font-Poppins ">Tavar chowk,main bazar,chotila</p>
                    <div className="flex justify-between font-Poppins  text-sm mt-1">
                      <span>Mo: 9825892588, Ph: 7046931708</span>
                      <span>GST : 24IDJPM3009R1ZO</span>
                    </div>
                  </div>

              
                  <div className="flex justify-between mb-4">
                    <div className="border border-gray-800 px-2 py-1">
                      <div className="flex font-Poppins  gap-2">
                        <span>State & Code :</span>
                        <span>24-Gujarat</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="border border-gray-800 px-2 py-1">
                        <span className=" font-Poppins text-[#8B4513]">
                          Original / Duplicate
                        </span>
                      </div>
                      <div className="flex gap-2 mt-1">
                        <span>Invoice Date : 04/12/2024</span>
                        <span>Invoice No : 2</span>
                      </div>
                    </div>
                  </div>


                  <div className="border border-gray-800 p-2 mb-4">
                    <div className="grid grid-cols-2">
                      <div>
                        <div className="flex gap-2">
                          <span>Name :</span>
                          <span>Rupa Bhai Mala Bhai</span>
                        </div>
                        <div className="flex gap-2">
                          <span>Address :</span>
                        </div>
                        <div className="flex gap-2">
                          <span>City :</span>
                          <span>Kherdi</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-2">
                          <span>Mo :</span>
                          <span>9924366162</span>
                        </div>
                        <div className="flex gap-2">
                          <span>PAN :</span>
                        </div>
                        <div className="flex gap-2">
                          <span>GST No :</span>
                        </div>
                        <div className="flex gap-2">
                          <span>State & Code :</span>
                          <span>24-Gujarat</span>
                        </div>
                      </div>
                    </div>
                  </div>

  
                  <div className="border border-gray-800">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="border-r border-gray-800 p-1">
                            Sr. No.
                          </th>
                          <th className="border-r border-gray-800 p-1">
                            Item Name
                          </th>
                          <th className="border-r border-gray-800 p-1">Ct.</th>
                          <th className="border-r border-gray-800 p-1">
                            HSN Code
                          </th>
                          <th className="border-r border-gray-800 p-1">PCS</th>
                          <th className="border-r border-gray-800 p-1">
                            Gross Wt.
                          </th>
                          <th className="border-r border-gray-800 p-1">
                            Net Wt.
                          </th>
                          <th className="border-r border-gray-800 p-1">
                            Labour Rate
                          </th>
                          <th className="border-r border-gray-800 p-1">
                            Labour Rs.
                          </th>
                          <th className="border-r border-gray-800 p-1">Rate</th>
                          <th className="border-r border-gray-800 p-1">
                            Extra Rs.
                          </th>
                          <th className="p-1">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-800">
                          <td className="border-r border-gray-800 p-1">1</td>
                          <td className="border-r border-gray-800 p-1">
                            Gold Har
                          </td>
                          <td className="border-r border-gray-800 p-1">916</td>
                          <td className="border-r border-gray-800 p-1">7113</td>
                          <td className="border-r border-gray-800 p-1">1</td>
                          <td className="border-r border-gray-800 p-1">
                            29.950
                          </td>
                          <td className="border-r border-gray-800 p-1">
                            0.000
                          </td>
                          <td className="border-r border-gray-800 p-1">
                            74.30
                          </td>
                          <td className="border-r border-gray-800 p-1">
                            222529
                          </td>
                          <td className="border-r border-gray-800 p-1">10 %</td>
                          <td className="border-r border-gray-800 p-1">55</td>
                          <td className="p-1">244,903</td>
                        </tr>
                        <tr>
                          <td
                            colSpan="5"
                            className="border-r border-gray-800 p-1"
                          >
                            Note:
                          </td>
                          <td className="border-r border-gray-800 p-1">
                            29.950
                          </td>
                          <td className="border-r border-gray-800 p-1">
                            29.950
                          </td>
                          <td className="border-r border-gray-800 p-1"></td>
                          <td className="border-r border-gray-800 p-1">
                            222529
                          </td>
                          <td className="border-r border-gray-800 p-1"></td>
                          <td className="border-r border-gray-800 p-1">55</td>
                          <td className="p-1">244903</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="text-sm mt-2">
                    <div>
                      Rs. Word : Rupees Two Lakh Fifty Two Thousand Thirteen and
                      Paise Th
                    </div>
                    <div>TAX Word : seven thousand three hundred forty</div>
                  </div>


                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="font-semibold mb-2">Payment Details</div>
                      <div className="border border-gray-800 p-2">
                        <div className="flex justify-between">
                          <span>CASH</span>
                          <span>252013</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr>
                            <td>Less Discount</td>
                            <td>0.1%</td>
                            <td className="text-right">230</td>
                          </tr>
                          <tr>
                            <td>Total Amount Before Tax</td>
                            <td></td>
                            <td className="text-right">244673</td>
                          </tr>
                          <tr>
                            <td>Add SGST @</td>
                            <td>1.5%</td>
                            <td className="text-right">3670.10</td>
                          </tr>
                          <tr>
                            <td>Add CGST @</td>
                            <td>1.5%</td>
                            <td className="text-right">3670.10</td>
                          </tr>
                          <tr>
                            <td>Tax Amount GST</td>
                            <td></td>
                            <td className="text-right">7340.20</td>
                          </tr>
                          <tr>
                            <td>Round Off</td>
                            <td></td>
                            <td className="text-right">0.00</td>
                          </tr>
                          <tr className="font-semibold">
                            <td>Total Amount After Tax</td>
                            <td></td>
                            <td className="text-right">252013</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

             
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="border border-gray-800 h-20 mb-2"></div>
                      <div className="text-sm">
                        Subject to chotila Jurisdiction.
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm mb-2">
                        Certified that the particulars given above are true and
                        correct.
                      </div>
                      <div className="text-sm">
                        For ,Soni Pintu bhai Jewellers
                      </div>
                      <div className="mt-8">
                        <div className="text-sm">Authorised Signature :</div>
                      </div>
                    </div>
                  </div>
                </div> 


              </div> */}





















    {/* <div className="max-w-[1200px] h-[110vh] mx-auto p-6 bg-gradient-to-br pb-[80px] from-gray-50 to-white">
      <div className="border h-fit !mb-[140px] border-gray-200 rounded-xl shadow-lg  bg-white overflow-hidden">
 
        <div className="bg-gradient-to-r from-[#8B4513]/10 to-[#8B4513]/5 p-6 border-b border-gray-200">
          <h1 className="text-[#8B4513] text-2xl font-semibold text-center font-Poppins mb-2">Soni Pintu bhai Jewellers</h1>
          <p className="text-gray-600 text-center font-Poppins">Tavar chowk,main bazar,chotila</p>
          <div className="flex flex-wrap justify-between text-sm mt-3 text-gray-600">
            <span className="flex items-center font-Poppins gap-2">
              <span className="font-medium font-Poppins">Mo:</span> 9825892588
              <span className="font-medium ml-2">Ph:</span> 7046931708
            </span>
            <span className="flex items-center font-Poppins gap-2">
              <span className="font-medium">GST:</span> 24IDJPM3009R1ZO
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6 ">
          
          <div className="flex flex-wrap justify-between gap-4">
            <div className="bg-gray-50 rounded-lg px-4 py-2">
              <div className="flex gap-2  font-Poppins text-gray-600">
                <span className="font-medium">State & Code:</span>
                <span>24-Gujarat</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-[#8B4513]/10 font-Poppins text-[#8B4513] font-medium rounded-lg px-4 py-2">
                Original / Duplicate
              </div>
              <div className="flex gap-4  font-Poppins  text-sm text-gray-600">
                <span>Invoice Date: 04/12/2024</span>
                <span>Invoice No: 2</span>
              </div>
            </div>
          </div>


          <div className="bg-gray-50  font-Poppins  rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex gap-2  font-Poppins ">
                <span className="text-gray-600 font-medium ">Name:</span>
                <span>Rupa Bhai Mala Bhai</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600 font-medium">Address:</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600 font-medium">City:</span>
                <span>Kherdi</span>
              </div>
            </div>
            <div className="space-y-2  font-Poppins ">
              <div className="flex gap-2  font-Poppins ">
                <span className="text-gray-600 font-medium">Mo:</span>
                <span>9924366162</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600 font-medium">PAN:</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600 font-medium">GST No:</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600 font-medium">State & Code:</span>
                <span>24-Gujarat</span>
              </div>
            </div>
          </div>

       
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full  font-Poppins   text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Sr.</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Item Name</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Ct.</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">HSN</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">PCS</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Gross Wt.</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Net Wt.</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Labour Rate</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Labour Rs.</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Rate</th>
                  <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Extra Rs.</th>
                  <th className="p-2 font-medium text-gray-600">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="border-r border-gray-200 p-2">1</td>
                  <td className="border-r border-gray-200 p-2">Gold Har</td>
                  <td className="border-r border-gray-200 p-2">916</td>
                  <td className="border-r border-gray-200 p-2">7113</td>
                  <td className="border-r border-gray-200 p-2">1</td>
                  <td className="border-r border-gray-200 p-2">29.950</td>
                  <td className="border-r border-gray-200 p-2">0.000</td>
                  <td className="border-r border-gray-200 p-2">74.30</td>
                  <td className="border-r border-gray-200 p-2">222529</td>
                  <td className="border-r border-gray-200 p-2">10 %</td>
                  <td className="border-r border-gray-200 p-2">55</td>
                  <td className="p-2">244,903</td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan="5" className="border-r border-gray-200 p-2 text-gray-600">
                    Note:
                  </td>
                  <td className="border-r border-gray-200 p-2">29.950</td>
                  <td className="border-r border-gray-200 p-2">29.950</td>
                  <td className="border-r border-gray-200 p-2"></td>
                  <td className="border-r border-gray-200 p-2">222529</td>
                  <td className="border-r border-gray-200 p-2"></td>
                  <td className="border-r border-gray-200 p-2">55</td>
                  <td className="p-2 font-medium">244903</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50  font-Poppins  rounded-lg p-4 space-y-2 text-sm text-gray-600">
            <div className="flex gap-2">
              <span className="font-medium">Rs. Word:</span>
              <span>Rupees Two Lakh Fifty Two Thousand Thirteen and Paise Th</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">TAX Word:</span>
              <span>seven thousand three hundred forty</span>
            </div>
          </div>

          <div className="grid grid-cols-1  font-Poppins  md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-600 mb-2">Payment Details</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-600">CASH</span>
                  <span className="text-[#8B4513] font-medium">₹252013</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg  p-4">
              <table className="w-full text-sm">
                <tbody className="space-y-2">
                  <tr className="flex justify-between py-1">
                    <td className="text-gray-600">Less Discount (0.1%)</td>
                    <td className="font-medium">₹230</td>
                  </tr>
                  <tr className="flex justify-between py-1">
                    <td className="text-gray-600">Total Amount Before Tax</td>
                    <td className="font-medium">₹244673</td>
                  </tr>
                  <tr className="flex justify-between py-1">
                    <td className="text-gray-600">Add SGST @ 1.5%</td>
                    <td className="font-medium">₹3670.10</td>
                  </tr>
                  <tr className="flex justify-between py-1">
                    <td className="text-gray-600">Add CGST @ 1.5%</td>
                    <td className="font-medium">₹3670.10</td>
                  </tr>
                  <tr className="flex justify-between py-1">
                    <td className="text-gray-600">Tax Amount GST</td>
                    <td className="font-medium">₹7340.20</td>
                  </tr>
                  <tr className="flex justify-between py-1">
                    <td className="text-gray-600">Round Off</td>
                    <td className="font-medium">₹0.00</td>
                  </tr>
                  <tr className="flex justify-between py-1 text-[#8B4513] font-medium">
                    <td>Total Amount After Tax</td>
                    <td>₹252013</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          <div className="grid grid-cols-1  font-Poppins  md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              <div className="h-20 bg-gray-50 rounded-lg"></div>
              <div className="text-sm text-gray-600">Subject to chotila Jurisdiction.</div>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                Certified that the particulars given above are true and correct.
              </div>
              <div className="text-[#8B4513] font-medium">For ,Soni Pintu bhai Jewellers</div>
              <div className="pt-8">
                <div className="text-sm text-gray-600">Authorised Signature :</div>
                <div className="mt-2 border-t-2 border-gray-200 w-48 ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 



                {/* <div>
                                            <div>
                                                <div className="pdf-page">
                                                    <div style={{
                                                        top: '286px',
                                                        width: '80%',
                                                        display: 'flex',
                                                        opacity: 0.2,
                                                        justifyContent: 'center',
                                                        position: 'absolute',
                                                        transform: 'rotate(337deg)',
                                                        left: '-23px'
                                                    }}>
                                                    </div>
                                                    <div style={{
                                                        border: `1px solid black`,
                                                        padding: '0.5rem',
                                                    }}>
                                                        <div style={{
                                                            maxWidth: '1536px',
                                                            marginLeft: 'auto',
                                                            marginRight: 'auto',
                                                        }}>
                                                            <div className='row'>
                                                                <table style={{
                                                                    textIndent: 0,
                                                                    borderColor: 'inherit',
                                                                    borderCollapse: 'collapse',
                                                                    width: '100%'
                                                                }}>
                                                                    <tr style={{
                                                                        width: '100%',
                                                                        display: 'table',
                                                                        marginTop: '1rem',
                                                                        marginBottom: '1rem'
                                                                    }}>
                                                                        <td className="font-bold flex justify-end" style={{
                                                                            width: '100%'
                                                                        }}>
                                                                            (Original for Receipient)
                                                                        </td>
                                                                    </tr>

                                                                    <tr style={{
                                                                        width: '100%',
                                                                        display: 'table',
                                                                        marginTop: '0.5rem',
                                                                        alignItems: 'center'
                                                                    }}>
                                                                        <td
                                                                            style={{
                                                                                textAlign: 'center',
                                                                                fontSize: '1.5rem',
                                                                                width: '78.3%',
                                                                                fontWeight: '600',
                                                                                textTransform: 'uppercase',
                                                                                color: 'black',
                                                                                alignItems: 'center',
                                                                            }}>
                                                                            Tax INVOICE
                                                                        </td>
                                                                    </tr>

                                                                    <tr style={{
                                                                        width: "100%",
                                                                        display: 'flex',
                                                                        marginTop: '1rem'
                                                                    }}>
                                                                        <td style={{
                                                                            width: "50%",
                                                                            border: "1px solid black",
                                                                            padding: '1.5rem'
                                                                        }}>
                                                                            <tr>
                                                                                <td
                                                                                    style={{
                                                                                        whiteSpace: 'nowrap',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '2rem',
                                                                                        fontWeight: 800,
                                                                                        display: 'table',
                                                                                        marginBottom: '0.5rem',
                                                                                        textDecoration: 'underline',
                                                                                        height: '0.5rem',
                                                                                        marginTop: "6px"
                                                                                    }}
                                                                                >Bill From</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    style={{
                                                                                        whiteSpace: 'nowrap',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '2rem',
                                                                                        fontWeight: 600,
                                                                                        display: 'table',
                                                                                        color: '#000000',
                                                                                    }}
                                                                                >Party Name:</td>
                                                                                <td
                                                                                    style={{
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '2rem',
                                                                                        fontWeight: 500,
                                                                                        color: '#000000',
                                                                                    }}
                                                                                >{props.companyData?.firm_name}</td>
                                                                            </tr>
                                                                            <tr className=''>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Address:</td>
                                                                                <td>

                                                                                    <tr>

                                                                                        <td style={{
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '2rem',
                                                                                            fontWeight: 500,
                                                                                            color: '#000000',
                                                                                        }}>
                                                                                           asdfg
                                                                                        </td>
                                                                                    </tr>


                                                                                    <tr>
                                                                                        <td style={{
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '2rem',
                                                                                            fontWeight: 500,
                                                                                            color: '#000000',
                                                                                        }}>
                                                                                            sdf
                                                                                        </td>
                                                                                    </tr>

                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>GSTN:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>asdfgh</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>PAN:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>sdf</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>State:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>swdef</td>
                                                                            </tr>
                                                                        </td>
                                                                        <td style={{
                                                                            width: "50%",
                                                                            border: "1px solid black",
                                                                            padding: '1.5rem'
                                                                        }}>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 800,
                                                                                    display: 'table',
                                                                                    marginBottom: '0.5rem',
                                                                                    textDecoration: 'underline',
                                                                                    height: '0.5rem',
                                                                                    marginTop: "6px"
                                                                                }}>Transportation Details</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Transport Mode:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>sdfg</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Date of Supply:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>jahgsdjdfqej</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Place of Supply:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>{props.data.place_of_supply}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Reference No:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>fcghchc</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}></td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Payment Mode:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>Debit</td>
                                                                            </tr>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style={{
                                                                        width: "100%",
                                                                        display: 'flex',
                                                                        marginTop: '2rem'
                                                                    }}>
                                                                        <td style={{
                                                                            width: "50%",
                                                                            border: "1px solid black",
                                                                            padding: '1.5rem'
                                                                        }}>
                                                                            <tr>
                                                                                <td
                                                                                    style={{
                                                                                        whiteSpace: 'nowrap',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '2rem',
                                                                                        fontWeight: 800,
                                                                                        display: 'table',
                                                                                        marginBottom: '0.5rem',
                                                                                        color: '#000000',
                                                                                        textDecoration: 'underline',
                                                                                        height: '0.5rem',
                                                                                        marginTop: "6px"
                                                                                    }}
                                                                                >Bill To</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    style={{
                                                                                        whiteSpace: 'nowrap',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '2rem',
                                                                                        fontWeight: 600,
                                                                                        display: 'table',
                                                                                        color: '#000000',
                                                                                    }}
                                                                                >Party Name:</td>
                                                                                <td
                                                                                    style={{
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '2rem',
                                                                                        fontWeight: 500,
                                                                                        color: '#000000',
                                                                                    }}
                                                                                >gvjhbk</td>
                                                                            </tr>
                                                                            <tr className=''>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Address:</td>
                                                                                <td>

                                                                                    <tr>

                                                                                        <td style={{
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '2rem',
                                                                                            fontWeight: 500,
                                                                                            color: '#000000',
                                                                                        }}>
                                                                                hgfhj
                                                                                        </td>
                                                                                    </tr>


                                                                                    <tr>
                                                                                        <td style={{
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '2rem',
                                                                                            fontWeight: 500,
                                                                                            color: '#000000',
                                                                                        }}>
                                                                                           gsdghsd
                                                                                        </td>
                                                                                    </tr>

                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>GSTN:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>PAN:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>{props.data.panno}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>State:</td>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                }}>{props.data.state}</td>
                                                                            </tr>
                                                                        </td>
                                                                        <td style={{
                                                                            width: "50%",
                                                                            border: "1px solid black",
                                                                            padding: '1.5rem'
                                                                        }}>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 800,
                                                                                    display: 'table',
                                                                                    marginBottom: '0.5rem',
                                                                                    color: '#000000',
                                                                                    textDecoration: 'underline',
                                                                                    height: '0.5rem',
                                                                                    marginTop: "6px"
                                                                                }}>Ship To</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Party Name:</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                    width: '100%'
                                                                                }}>{props.partyNameAdd.filter((x: any) => x.id == props.data.ship_id)?.[0]?.party_name}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 600,
                                                                                    display: 'table',
                                                                                    color: '#000000',
                                                                                }}>Address:</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{
                                                                                    fontSize: '20px',
                                                                                    lineHeight: '2rem',
                                                                                    fontWeight: 500,
                                                                                    color: '#000000',
                                                                                    width: '100%'
                                                                                }}>
                                                                                    {props.data.ship_address}
                                                                                </td>
                                                                            </tr>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style={{ width: '100%' }}>
                                                                        <table style={{ width: '100%', marginTop: '1rem' }}>
                                                                            <thead style={{
                                                                                border: '1px solid black',
                                                                                color: "black",
                                                                                fontSize: '20px',
                                                                                fontWeight: '700',
                                                                                verticalAlign: 'middle'
                                                                            }}>
                                                                                {props.companyData?.business_type != "JewelleryRelatedBusiness" ?
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            style={{
                                                                                                border: '1px solid black',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                                paddingLeft: '1.25rem',
                                                                                                paddingRight: '1.25rem',
                                                                                                borderRadius: "0"
                                                                                            }}
                                                                                        >Sr No.</td>
                                                                                        <td style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Description</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>HSN/SAC Code</td>
                                                                                        {props.companyData?.dealer_type != "Composition" &&
                                                                                            <td className="text-center" style={{
                                                                                                border: '1px solid black',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                                paddingLeft: '1.25rem',
                                                                                                paddingRight: '1.25rem'
                                                                                            }}>GST Rate</td>
                                                                                        }
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Quantity</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Rate</td>
                                                                                        <td style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Discount</td>
                                                                                        <td className=" text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem',
                                                                                            borderRadius: "0"
                                                                                        }}>Amount</td>
                                                                                    </tr> : <tr>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem',
                                                                                            borderRadius: "0"
                                                                                        }}>Sr No.</td>
                                                                                        <td style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Description</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>HSN/SAC Code</td>
                                                                                        {props.companyData?.dealer_type != "Composition" &&
                                                                                            <td className="text-center" style={{
                                                                                                border: '1px solid black',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                                paddingLeft: '1.25rem',
                                                                                                paddingRight: '1.25rem'
                                                                                            }}>GST Rate</td>
                                                                                        }
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Gross Quantity</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Net Quantity</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Gold Rate</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Gold Amount</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Labour Rate</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Labour Amount</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem'
                                                                                        }}>Other Charges</td>
                                                                                        <td className="text-center" style={{
                                                                                            border: '1px solid black',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                            paddingLeft: '1.25rem',
                                                                                            paddingRight: '1.25rem',
                                                                                            borderRadius: "0"
                                                                                        }}>Amount</td>
                                                                                    </tr>}
                                                                            </thead>
                                                                            <tbody>

                                                                                {props.companyData?.business_type != "JewelleryRelatedBusiness" ?
                                                                                    <>

                                                                                        {
                                                                                            props.data.saleInvoiceItem?.map((x: any, i: number) => (
                                                                                                <>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontWeight: 500,
                                                                                                                fontSize: '20px',
                                                                                                                lineHeight: '1rem',
                                                                                                                color: '#000000',
                                                                                                                borderLeft: '1px solid black',
                                                                                                                borderRight: '1px solid black',
                                                                                                                textAlign: 'center',
                                                                                                                paddingTop: '0.75rem',
                                                                                                                paddingBottom: '0.75rem',
                                                                                                            }}
                                                                                                        >{(i + 1)}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.item_name}<br />
                                                                                                            {x.description}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.hsn_code}</td>
                                                                                                        {props.companyData?.dealer_type != "Composition" &&
                                                                                                            <td style={{
                                                                                                                fontWeight: 500,
                                                                                                                fontSize: '20px',
                                                                                                                lineHeight: '1rem',
                                                                                                                color: '#000000',
                                                                                                                borderLeft: '1px solid black',
                                                                                                                borderRight: '1px solid black',
                                                                                                                textAlign: 'center',
                                                                                                                paddingTop: '0.5rem',
                                                                                                                paddingBottom: '0.5rem',
                                                                                                            }}>{x.gst_rate}%</td>
                                                                                                        }
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.net_qty_gm}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.rate}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{getFormattedNumber(x.discount_amount)}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{getFormattedNumber(x.amount)}</td>
                                                                                                    </tr>
                                                                                                </>
                                                                                            ))
                                                                                        }
                                                                                    </>
                                                                                    : <>
                                                                                        {
                                                                                            props.data.goldItem?.map((x: any, i: number) => (
                                                                                                <>
                                                                                                    <tr>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '1rem',
                                                                                                            paddingBottom: '1rem',
                                                                                                        }}>{(i + 1)}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.item_name}<br />
                                                                                                            {x.description}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.hsn_code}</td>
                                                                                                        {props.companyData?.dealer_type != "Composition" &&
                                                                                                            <td style={{
                                                                                                                fontWeight: 500,
                                                                                                                fontSize: '20px',
                                                                                                                lineHeight: '1rem',
                                                                                                                color: '#000000',
                                                                                                                borderLeft: '1px solid black',
                                                                                                                borderRight: '1px solid black',
                                                                                                                textAlign: 'center',
                                                                                                                paddingTop: '0.5rem',
                                                                                                                paddingBottom: '0.5rem',
                                                                                                            }}>{x.gst_rate}%</td>
                                                                                                        }
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.gross_qty_gm}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.net_qty_gm}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.gold_rate}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{getFormattedNumber(x.gold_amount)}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{x.lbr_rate}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{getFormattedNumber(x.lbr_amount)}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{getFormattedNumber(x.other_charges)}</td>
                                                                                                        <td style={{
                                                                                                            fontWeight: 500,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            borderLeft: '1px solid black',
                                                                                                            borderRight: '1px solid black',
                                                                                                            textAlign: 'center',
                                                                                                            paddingTop: '0.5rem',
                                                                                                            paddingBottom: '0.5rem',
                                                                                                        }}>{getFormattedNumber(x.amount)}</td>
                                                                                                    </tr>
                                                                                                </>
                                                                                            ))
                                                                                        }
                                                                                    </>}

                                                                                {props.companyData?.business_type != "JewelleryRelatedBusiness" ? <>
                                                                                    {props.data.billDescription?.map((x: any, i: any) => (
                                                                                        <>
                                                                                            <tr>
                                                                                                <td
                                                                                                    style={{
                                                                                                        fontWeight: 500,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: '#000000',
                                                                                                        borderLeft: '1px solid black',
                                                                                                        borderRight: '1px solid black',
                                                                                                        textAlign: 'center',
                                                                                                        paddingTop: '0.5rem',
                                                                                                        paddingBottom: '0.5rem',
                                                                                                    }}
                                                                                                >{(props.data.saleInvoiceItem.length + i + 1)}</td>
                                                                                                <td style={{
                                                                                                    fontWeight: 500,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: '#000000',
                                                                                                    borderLeft: '1px solid black',
                                                                                                    borderRight: '1px solid black',
                                                                                                    textAlign: 'center',
                                                                                                    paddingTop: '0.5rem',
                                                                                                    paddingBottom: '0.5rem',
                                                                                                }}>{x.bill_description_name}</td>
                                                                                                <td style={{
                                                                                                    fontWeight: 500,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: '#000000',
                                                                                                    borderLeft: '1px solid black',
                                                                                                    borderRight: '1px solid black',
                                                                                                    textAlign: 'center',
                                                                                                    paddingTop: '0.5rem',
                                                                                                    paddingBottom: '0.5rem',
                                                                                                }}>{x.hsn_code}</td>
                                                                                                {props.companyData?.dealer_type != "Composition" &&
                                                                                                    <td style={{
                                                                                                        fontWeight: 500,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: '#000000',
                                                                                                        borderLeft: '1px solid black',
                                                                                                        borderRight: '1px solid black',
                                                                                                        textAlign: 'center',
                                                                                                        paddingTop: '0.5rem',
                                                                                                        paddingBottom: '0.5rem',
                                                                                                    }}>{x.gst_rate}%</td>
                                                                                                }
                                                                                                <td style={{
                                                                                                    fontWeight: 500,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: '#000000',
                                                                                                    borderLeft: '1px solid black',
                                                                                                    borderRight: '1px solid black',
                                                                                                    textAlign: 'center',
                                                                                                    paddingTop: '0.5rem',
                                                                                                    paddingBottom: '0.5rem',
                                                                                                }}></td>
                                                                                                <td style={{
                                                                                                    fontWeight: 500,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: '#000000',
                                                                                                    borderLeft: '1px solid black',
                                                                                                    borderRight: '1px solid black',
                                                                                                    textAlign: 'center',
                                                                                                    paddingTop: '0.5rem',
                                                                                                    paddingBottom: '0.5rem',
                                                                                                }}></td>
                                                                                                <td style={{
                                                                                                    fontWeight: 500,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: '#000000',
                                                                                                    borderLeft: '1px solid black',
                                                                                                    borderRight: '1px solid black',
                                                                                                    textAlign: 'center',
                                                                                                    paddingTop: '0.5rem',
                                                                                                    paddingBottom: '0.5rem',
                                                                                                }}></td>
                                                                                                <td style={{
                                                                                                    fontWeight: 500,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: '#000000',
                                                                                                    borderLeft: '1px solid black',
                                                                                                    borderRight: '1px solid black',
                                                                                                    textAlign: 'center',
                                                                                                    paddingTop: '0.5rem',
                                                                                                    paddingBottom: '0.5rem',
                                                                                                }}>{getFormattedNumber(x.amount)}</td>
                                                                                            </tr>
                                                                                        </>

                                                                                    ))}



                                                                                </> : <> {props.data.billDescription?.map((x: any, i: any) => (
                                                                                    <>
                                                                                        <tr>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}>{(props.data.goldItem.length + i + 1)}</td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}>{x.bill_description_name}</td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}>{x.hsn_code}</td>
                                                                                            {props.companyData?.dealer_type != "Composition" &&
                                                                                                <td style={{
                                                                                                    fontWeight: 500,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: '#000000',
                                                                                                    borderLeft: '1px solid black',
                                                                                                    borderRight: '1px solid black',
                                                                                                    textAlign: 'center',
                                                                                                    paddingTop: '0.5rem',
                                                                                                    paddingBottom: '0.5rem',
                                                                                                }}>{x.gst_rate}%</td>
                                                                                            }
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}></td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}></td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}></td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}></td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}></td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}></td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}></td>
                                                                                            <td style={{
                                                                                                fontWeight: 500,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                borderLeft: '1px solid black',
                                                                                                borderRight: '1px solid black',
                                                                                                textAlign: 'center',
                                                                                                paddingTop: '0.5rem',
                                                                                                paddingBottom: '0.5rem',
                                                                                            }}>{getFormattedNumber(x.amount)}</td>
                                                                                        </tr>

                                                                                    </>

                                                                                ))} </>}
                                                                                {renderExtraLines()}
                                                                            </tbody>
                                                                            <tfoot style={{
                                                                                border: '1px solid black',
                                                                            }}>
                                                                                {props.companyData?.business_type != "JewelleryRelatedBusiness" ?
                                                                                    <tr>
                                                                                        <td style={{
                                                                                            fontWeight: 500,
                                                                                            fontSize: '20px',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            padding: '0.75rem'
                                                                                        }} colSpan={props.companyData?.dealer_type != "Composition" ? 4 : 3}>Total </td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{props.data.saleInvoiceItem?.reduce((total: number, current: any) => total + (current.net_qty_gm ? parseInt(current.net_qty_gm) : 0), 0)}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{props.data.saleInvoiceItem?.reduce((total: number, current: any) => total + (current.rate ? parseInt(current.rate) : 0), 0)}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{props.data.saleInvoiceItem?.reduce((total: number, current: any) => total + (current.discount_amount ? parseInt(current.discount_amount) : 0), 0)}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{getFormattedNumber((props.data.saleInvoiceItem?.reduce((total: number, current: any) => total + (current.amount ? parseInt(current.amount) : 0), 0) + props.data.billDescription?.reduce((total: number, current: any) => total + (current.amount ? parseInt(current.amount) : 0), 0)))}</td>
                                                                                    </tr> : <tr >
                                                                                        <td style={{
                                                                                            fontWeight: 500,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>&nbsp;</td>
                                                                                        <td style={{
                                                                                            fontWeight: 500,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            padding: '0.75rem'
                                                                                        }}>Total </td>
                                                                                        <td style={{
                                                                                            fontWeight: 500,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>&nbsp;</td>
                                                                                        <td style={{
                                                                                            fontWeight: 500,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{props.data.goldItem?.reduce((total: number, current: any) => total + (current.gst_rate ? parseInt(current.gst_rate) : 0), 0)}%</td>
                                                                                        <td style={{
                                                                                            fontWeight: 500,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{props.data.goldItem?.reduce((total: number, current: any) => total + (current.gross_qty_gm ? parseInt(current.gross_qty_gm) : 0), 0)}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 500,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{props.data.goldItem?.reduce((total: number, current: any) => total + (current.net_qty_gm ? parseInt(current.net_qty_gm) : 0), 0)}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{props.data.goldItem?.reduce((total: number, current: any) => total + (current.gold_rate ? parseInt(current.gold_rate) : 0), 0)}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{getFormattedNumber(props.data.goldItem?.reduce((total: number, current: any) => total + (current.gold_amount ? parseInt(current.gold_amount) : 0), 0))}</td>

                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{props.data.goldItem?.reduce((total: number, current: any) => total + (current.lbr_rate ? parseInt(current.lbr_rate) : 0), 0)}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{getFormattedNumber(props.data.goldItem?.reduce((total: number, current: any) => total + (current.lbr_amount ? parseInt(current.lbr_amount) : 0), 0))}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{getFormattedNumber(props.data.goldItem?.reduce((total: number, current: any) => total + (current.other_charges ? parseInt(current.other_charges) : 0), 0))}</td>
                                                                                        <td style={{
                                                                                            fontWeight: 600,
                                                                                            fontSize: '20px',
                                                                                            lineHeight: '1rem',
                                                                                            color: '#000000',
                                                                                            border: '1px solid black',
                                                                                            textAlign: 'center',
                                                                                            paddingTop: '0.5rem',
                                                                                            paddingBottom: '0.5rem',
                                                                                        }}>{getFormattedNumber((props.data.goldItem?.reduce((total: number, current: any) => total + (current.amount ? parseInt(current.amount) : 0), 0) + props.data.billDescription?.reduce((total: number, current: any) => total + (current.amount ? parseInt(current.amount) : 0), 0)))}</td>
                                                                                    </tr>}
                                                                            </tfoot>
                                                                        </table>
                                                                    </tr>

                                                                    <tr style={{
                                                                        width: '100%',
                                                                        display: 'flex',
                                                                        marginTop: '0.75rem'
                                                                    }}>
                                                                        <td style={{
                                                                            width: '66.6%'
                                                                        }}>
                                                                            {props.companyData?.dealer_type != "Composition" &&
                                                                                <table style={{
                                                                                    width: '100%',
                                                                                    border: '1px solid black'
                                                                                }}>
                                                                                    <thead style={{
                                                                                        borderBottom: '1px solid black',
                                                                                        color: "black"
                                                                                    }}>
                                                                                        <tr>
                                                                                            <th className="text-center"
                                                                                                style={{
                                                                                                    fontWeight: 700,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: "black",
                                                                                                    borderRight: '1px solid black',
                                                                                                    padding: '0.25rem'
                                                                                                }}
                                                                                            >HSN/SAC Code</th>
                                                                                            <th className="text-center" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: "black",
                                                                                                borderRight: '1px solid black',
                                                                                                padding: '1rem'
                                                                                            }}>Taxable Value</th>
                                                                                            {props.companyData?.state == props.data.state ? (
                                                                                                <>
                                                                                                    <th className="text-center" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: "black",
                                                                                                        borderRight: '1px solid black',
                                                                                                        borderBottom: '1px solid black',
                                                                                                        padding: '1rem'
                                                                                                    }} colSpan={2}>Central Tax</th>
                                                                                                    <th className="text-center" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: "black",
                                                                                                        borderRight: '1px solid black',
                                                                                                        borderBottom: '1px solid black',
                                                                                                        padding: '1rem'
                                                                                                    }} colSpan={2}>State Tax</th>
                                                                                                </>
                                                                                            ) : (<>
                                                                                                <th className=" text-center" style={{
                                                                                                    fontWeight: 700,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: "black",
                                                                                                    borderRight: '1px solid black',
                                                                                                    borderBottom: '1px solid black',
                                                                                                    padding: '1rem'
                                                                                                }} colSpan={2}>Integrated tax</th>
                                                                                            </>)}
                                                                                            <th className=" text-center" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: "black",
                                                                                                borderRight: '1px solid black',
                                                                                                padding: '1rem'
                                                                                            }}>Total Tax Amount</th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th className="border-b" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: "black",
                                                                                                borderRight: '1px solid black',
                                                                                                padding: '1rem'
                                                                                            }}></th>
                                                                                            <th className="border-b" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: 'black',
                                                                                                borderRight: '1px solid black',
                                                                                                padding: '1rem'
                                                                                            }}></th>
                                                                                            {props.companyData?.state == props.data.state ? (
                                                                                                <>
                                                                                                    <th className="border-b text-center" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: "black",
                                                                                                        borderRight: '1px solid black',
                                                                                                        padding: '1rem'
                                                                                                    }} >Rate</th>
                                                                                                    <th className="border-b text-center" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: "black",
                                                                                                        borderRight: '1px solid black',
                                                                                                        padding: '1rem'
                                                                                                    }} >Amount</th>
                                                                                                    <th className="border-b text-center" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: "black",
                                                                                                        borderRight: '1px solid black',
                                                                                                        padding: '1rem'
                                                                                                    }} >Rate</th>
                                                                                                    <th className="border-b text-center" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: "black",
                                                                                                        borderRight: '1px solid black',
                                                                                                        padding: '1rem'
                                                                                                    }} >Amount</th></>
                                                                                            ) : (<><th className="border-b text-center" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: "black",
                                                                                                borderRight: '1px solid black',
                                                                                                padding: '0.25rem'
                                                                                            }} >Rate</th>
                                                                                                <th className="border-b text-center" style={{
                                                                                                    fontWeight: 700,
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    color: "black",
                                                                                                    borderRight: '1px solid black',
                                                                                                    padding: '0.25rem'
                                                                                                }} >Amount</th></>)}
                                                                                            <th className="border-b" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: 'black',
                                                                                                borderRight: '1px solid black',
                                                                                                padding: '0.25rem'
                                                                                            }}></th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {props.companyData?.business_type != "JewelleryRelatedBusiness" ?
                                                                                            <>
                                                                                                {
                                                                                                    props.data.saleInvoiceItem?.map((x: any, i: number) => (
                                                                                                        <>
                                                                                                            <tr>
                                                                                                                <td style={{
                                                                                                                    fontWeight: 500,
                                                                                                                    fontSize: '20px',
                                                                                                                    lineHeight: '1rem',
                                                                                                                    color: '#000000',
                                                                                                                    borderRight: '1px solid black',
                                                                                                                    textAlign: 'center',
                                                                                                                    padding: '0.25rem'
                                                                                                                }}>{x.hsn_code}</td>
                                                                                                                <td style={{
                                                                                                                    fontWeight: 500,
                                                                                                                    fontSize: '20px',
                                                                                                                    lineHeight: '1rem',
                                                                                                                    color: '#000000',
                                                                                                                    borderRight: '1px solid black',
                                                                                                                    textAlign: 'center',
                                                                                                                    padding: '0.25rem'
                                                                                                                }}>{x.amount ? getFormattedNumber(x.amount) : 0}</td>
                                                                                                                {props.companyData?.state == props.data.state ? (
                                                                                                                    <>
                                                                                                                        <td style={{
                                                                                                                            fontWeight: 500,
                                                                                                                            fontSize: '20px',
                                                                                                                            lineHeight: '1rem',
                                                                                                                            color: '#000000',
                                                                                                                            borderRight: '1px solid black',
                                                                                                                            textAlign: 'center',
                                                                                                                            padding: '0.25rem'
                                                                                                                        }}> {x.gst_rate / 2}%</td>
                                                                                                                        <td style={{
                                                                                                                            fontWeight: 500,
                                                                                                                            fontSize: '20px',
                                                                                                                            lineHeight: '1rem',
                                                                                                                            color: '#000000',
                                                                                                                            borderRight: '1px solid black',
                                                                                                                            textAlign: 'center',
                                                                                                                            padding: '0.25rem'
                                                                                                                        }}>{x.amount ? getFormattedNumber(((x.amount) * (x.gst_rate / 2) / 100)) : 0}</td>
                                                                                                                        <td style={{
                                                                                                                            fontWeight: 500,
                                                                                                                            fontSize: '20px',
                                                                                                                            lineHeight: '1rem',
                                                                                                                            color: '#000000',
                                                                                                                            borderRight: '1px solid black',
                                                                                                                            textAlign: 'center',
                                                                                                                            padding: '0.25rem'
                                                                                                                        }}>{x.gst_rate / 2}%</td>
                                                                                                                        <td style={{
                                                                                                                            fontWeight: 500,
                                                                                                                            fontSize: '20px',
                                                                                                                            lineHeight: '1rem',
                                                                                                                            color: '#000000',
                                                                                                                            borderRight: '1px solid black',
                                                                                                                            textAlign: 'center',
                                                                                                                            padding: '0.25rem'
                                                                                                                        }}>{x.amount ? getFormattedNumber(((x.amount) * (x.gst_rate / 2) / 100)) : 0}</td>
                                                                                                                    </>
                                                                                                                ) : (<>
                                                                                                                    <td style={{
                                                                                                                        fontWeight: 500,
                                                                                                                        fontSize: '20px',
                                                                                                                        lineHeight: '1rem',
                                                                                                                        color: '#000000',
                                                                                                                        borderRight: '1px solid black',
                                                                                                                        textAlign: 'center',
                                                                                                                        padding: '0.25rem'
                                                                                                                    }}>{x.gst_rate}%</td>
                                                                                                                    <td style={{
                                                                                                                        fontWeight: 500,
                                                                                                                        fontSize: '20px',
                                                                                                                        lineHeight: '1rem',
                                                                                                                        color: '#000000',
                                                                                                                        borderRight: '1px solid black',
                                                                                                                        textAlign: 'center',
                                                                                                                        padding: '0.25rem'
                                                                                                                    }}>{x.amount ? getFormattedNumber((((x.amount) * (x.gst_rate) / 100))) : 0}</td>
                                                                                                                </>)}
                                                                                                                <td style={{
                                                                                                                    fontWeight: 500,
                                                                                                                    fontSize: '20px',
                                                                                                                    lineHeight: '1rem',
                                                                                                                    color: '#000000',
                                                                                                                    textAlign: 'center',
                                                                                                                    padding: '0.25rem'
                                                                                                                }}>{x.amount ? getFormattedNumber((((x.amount) * (x.gst_rate) / 100))) : 0}</td>
                                                                                                            </tr>
                                                                                                        </>))
                                                                                                }
                                                                                            </>
                                                                                            : <>
                                                                                                {
                                                                                                    props.data.goldItem?.map((x: any, i: number) => (
                                                                                                        <>
                                                                                                            <tr>
                                                                                                                <td style={{
                                                                                                                    fontWeight: 500,
                                                                                                                    fontSize: '20px',
                                                                                                                    lineHeight: '1rem',
                                                                                                                    color: '#000000',
                                                                                                                    borderRight: '1px solid black',
                                                                                                                    textAlign: 'center',
                                                                                                                    padding: '1rem'
                                                                                                                }}>{x.hsn_code}</td>
                                                                                                                <td style={{
                                                                                                                    fontWeight: 500,
                                                                                                                    fontSize: '20px',
                                                                                                                    lineHeight: '1rem',
                                                                                                                    color: '#000000',
                                                                                                                    borderRight: '1px solid black',
                                                                                                                    textAlign: 'center',
                                                                                                                    padding: '1rem'
                                                                                                                }}>{x.amount ? getFormattedNumber(x.amount) : 0}</td>
                                                                                                                {props.companyData.state == props.data.state ? (
                                                                                                                    <>
                                                                                                                        <td style={{
                                                                                                                            fontWeight: 500,
                                                                                                                            fontSize: '20px',
                                                                                                                            lineHeight: '1rem',
                                                                                                                            color: '#000000',
                                                                                                                            borderRight: '1px solid black',
                                                                                                                            textAlign: 'center',
                                                                                                                            padding: '1rem'
                                                                                                                        }}> {x.gst_rate / 2}%</td>
                                                                                                                        <td style={{
                                                                                                                            fontWeight: 500,
                                                                                                                            fontSize: '20px',
                                                                                                                            lineHeight: '1rem',
                                                                                                                            color: '#000000',
                                                                                                                            borderRight: '1px solid black',
                                                                                                                            textAlign: 'center',
                                                                                                                            padding: '1rem'
                                                                                                                        }}>{x.amount ? getFormattedNumber(((x.amount ? parseFloat(x.amount) : 0) * (x.gst_rate / 2) / 100)) : 0}</td>
                                                                                                                        <td style={{
                                                                                                                            fontWeight: 500,
                                                                                                                            fontSize: '20px',
                                                                                                                            lineHeight: '1rem',
                                                                                                                            color: '#000000',
                                                                                                                            borderRight: '1px solid black',
                                                                                                                            textAlign: 'center',
                                                                                                                            padding: '1rem'
                                                                                                                        }}>{x.gst_rate / 2}%</td>
                                                                                                                        <td style={{
                                                                                                                            fontWeight: 500,
                                                                                                                            fontSize: '20px',
                                                                                                                            lineHeight: '1rem',
                                                                                                                            color: '#000000',
                                                                                                                            borderRight: '1px solid black',
                                                                                                                            textAlign: 'center',
                                                                                                                            padding: '1rem'
                                                                                                                        }}>{x.amount ? getFormattedNumber(((x.amount ? parseFloat(x.amount) : 0) * (x.gst_rate / 2) / 100)) : 0}</td>
                                                                                                                    </>
                                                                                                                ) : (<>
                                                                                                                    <td style={{
                                                                                                                        fontWeight: 500,
                                                                                                                        fontSize: '20px',
                                                                                                                        lineHeight: '1rem',
                                                                                                                        color: '#000000',
                                                                                                                        borderRight: '1px solid black',
                                                                                                                        textAlign: 'center',
                                                                                                                        padding: '1rem'
                                                                                                                    }}>{x.gst_rate}%</td>
                                                                                                                    <td style={{
                                                                                                                        fontWeight: 500,
                                                                                                                        fontSize: '20px',
                                                                                                                        lineHeight: '1rem',
                                                                                                                        color: '#000000',
                                                                                                                        borderRight: '1px solid black',
                                                                                                                        textAlign: 'center',
                                                                                                                        padding: '1rem'
                                                                                                                    }}>{x.amount ? getFormattedNumber((((x.amount ? parseFloat(x.amount) : 0) * (x.gst_rate) / 100))) : 0}</td>
                                                                                                                </>)}
                                                                                                                <td style={{
                                                                                                                    fontWeight: 500,
                                                                                                                    fontSize: '20px',
                                                                                                                    lineHeight: '1rem',
                                                                                                                    color: '#000000',
                                                                                                                    textAlign: 'center',
                                                                                                                    padding: '1rem'
                                                                                                                }}>{x.amount ? getFormattedNumber((((x.amount ? parseFloat(x.amount) : 0) * (x.gst_rate) / 100))) : 0}</td>
                                                                                                            </tr>
                                                                                                        </>))
                                                                                                }
                                                                                            </>}

                                                                                        <>
                                                                                            {
                                                                                                props.data.billDescription?.map((x: any, i: number) => (
                                                                                                    <>
                                                                                                        <tr>
                                                                                                            <td style={{
                                                                                                                fontWeight: 500,
                                                                                                                fontSize: '20px',
                                                                                                                lineHeight: '1rem',
                                                                                                                color: '#000000',
                                                                                                                borderRight: '1px solid black',
                                                                                                                textAlign: 'center',
                                                                                                                padding: '1rem'
                                                                                                            }}>{x.hsn_code}</td>
                                                                                                            <td style={{
                                                                                                                fontWeight: 500,
                                                                                                                fontSize: '20px',
                                                                                                                lineHeight: '1rem',
                                                                                                                color: '#000000',
                                                                                                                borderRight: '1px solid black',
                                                                                                                textAlign: 'center',
                                                                                                                padding: '1rem'
                                                                                                            }}>{x.amount ? getFormattedNumber(x.amount) : 0}</td>
                                                                                                            {props.companyData.state == props.data.state ? (
                                                                                                                <>
                                                                                                                    <td style={{
                                                                                                                        fontWeight: 500,
                                                                                                                        fontSize: '20px',
                                                                                                                        lineHeight: '1rem',
                                                                                                                        color: '#000000',
                                                                                                                        borderRight: '1px solid black',
                                                                                                                        textAlign: 'center',
                                                                                                                        padding: '1rem'
                                                                                                                    }}> {x.gst_rate / 2}%</td>
                                                                                                                    <td style={{
                                                                                                                        fontWeight: 500,
                                                                                                                        fontSize: '20px',
                                                                                                                        lineHeight: '1rem',
                                                                                                                        color: '#000000',
                                                                                                                        borderRight: '1px solid black',
                                                                                                                        textAlign: 'center',
                                                                                                                        padding: '1rem'
                                                                                                                    }}>{x.amount ? getFormattedNumber(((x.amount) * (x.gst_rate / 2) / 100)) : 0}</td>
                                                                                                                    <td style={{
                                                                                                                        fontWeight: 500,
                                                                                                                        fontSize: '20px',
                                                                                                                        lineHeight: '1rem',
                                                                                                                        color: '#000000',
                                                                                                                        borderRight: '1px solid black',
                                                                                                                        textAlign: 'center',
                                                                                                                        padding: '1rem'
                                                                                                                    }}>{x.gst_rate / 2}%</td>
                                                                                                                    <td style={{
                                                                                                                        fontWeight: 500,
                                                                                                                        fontSize: '20px',
                                                                                                                        lineHeight: '1rem',
                                                                                                                        color: '#000000',
                                                                                                                        borderRight: '1px solid black',
                                                                                                                        textAlign: 'center',
                                                                                                                        padding: '1rem'
                                                                                                                    }}>{x.amount ? getFormattedNumber(((x.amount) * (x.gst_rate / 2) / 100)) : 0}</td>
                                                                                                                </>
                                                                                                            ) : (<>
                                                                                                                <td style={{
                                                                                                                    fontWeight: 500,
                                                                                                                    fontSize: '20px',
                                                                                                                    lineHeight: '1rem',
                                                                                                                    color: '#000000',
                                                                                                                    borderRight: '1px solid black',
                                                                                                                    textAlign: 'center',
                                                                                                                    padding: '1rem'
                                                                                                                }}>{x.gst_rate}%</td>
                                                                                                                <td style={{
                                                                                                                    fontWeight: 500,
                                                                                                                    fontSize: '20px',
                                                                                                                    lineHeight: '1rem',
                                                                                                                    color: '#000000',
                                                                                                                    borderRight: '1px solid black',
                                                                                                                    textAlign: 'center',
                                                                                                                    padding: '1rem'
                                                                                                                }}>{x.amount ? getFormattedNumber((((x.amount) * (x.gst_rate) / 100))) : 0}</td>
                                                                                                            </>)}
                                                                                                            <td style={{
                                                                                                                fontWeight: 500,
                                                                                                                fontSize: '20px',
                                                                                                                lineHeight: '1rem',
                                                                                                                color: '#000000',
                                                                                                                textAlign: 'center',
                                                                                                                padding: '1rem'
                                                                                                            }}>{x.amount ? getFormattedNumber((((x.amount) * (x.gst_rate) / 100))) : 0}</td>
                                                                                                        </tr>
                                                                                                    </>))
                                                                                            }
                                                                                        </>
                                                                                        {renderDescExtraLines()}
                                                                                        <tr>
                                                                                            <td className="border-r border-t uppercase p-3" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                textAlign: 'center'
                                                                                            }}>Total
                                                                                            </td>
                                                                                            <td className="border-r border-t uppercase" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                textAlign: 'center'
                                                                                            }}>{getFormattedNumber((props.data.total_amount - props.data.total_tax))}
                                                                                            </td>
                                                                                            {props.companyData?.state == props.data.state ? (
                                                                                                <>
                                                                                                    <td className="border-r border-t uppercase" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: '#000000',
                                                                                                        textAlign: 'center',
                                                                                                        padding: '0.25rem'
                                                                                                    }}>&nbsp;
                                                                                                    </td>
                                                                                                    <td className="border-r border-t uppercase" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: '#000000',
                                                                                                        textAlign: 'center',
                                                                                                        padding: '0.25rem'
                                                                                                    }}>{getFormattedNumber(props.data.cgst)}
                                                                                                    </td>
                                                                                                    <td className="border-r border-t uppercase" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: '#000000',
                                                                                                        textAlign: 'center',
                                                                                                        padding: '0.25rem'
                                                                                                    }}>&nbsp;
                                                                                                    </td>
                                                                                                    <td className="border-r border-t uppercase" style={{
                                                                                                        fontWeight: 700,
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        color: '#000000',
                                                                                                        textAlign: 'center',
                                                                                                        padding: '0.25rem'
                                                                                                    }}>{getFormattedNumber(props.data.sgst)}
                                                                                                    </td>
                                                                                                </>)
                                                                                                :
                                                                                                (
                                                                                                    <>
                                                                                                        <td className="border-r border-t uppercase" style={{
                                                                                                            fontWeight: 700,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            textAlign: 'center',
                                                                                                            padding: '0.25rem'
                                                                                                        }}>
                                                                                                        </td>
                                                                                                        <td className="border-r border-t uppercase" style={{
                                                                                                            fontWeight: 700,
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            color: '#000000',
                                                                                                            textAlign: 'center',
                                                                                                            padding: '0.25rem'
                                                                                                        }}>{getFormattedNumber(props.data.total_tax)}
                                                                                                        </td>
                                                                                                    </>)
                                                                                            }
                                                                                            <td className="border-t" style={{
                                                                                                fontWeight: 700,
                                                                                                fontSize: '20px',
                                                                                                lineHeight: '1rem',
                                                                                                color: '#000000',
                                                                                                textAlign: 'center',
                                                                                                padding: '0.25rem'
                                                                                            }}>{getFormattedNumber(props.data?.total_tax)}
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>

                                                                                </table>
                                                                            }

                                                                            <tr style={{
                                                                                width: '100%',
                                                                                display: 'flex',
                                                                                marginTop: '0.75rem'
                                                                            }}>
                                                                                <td style={{
                                                                                    width: '100%',
                                                                                    border: '1px solid black'
                                                                                }} >
                                                                                    <table style={{
                                                                                        width: '100%'
                                                                                    }}>
                                                                                        <tr style={{
                                                                                            width: '100%'
                                                                                        }}>
                                                                                            <td className="p-1"
                                                                                                style={{
                                                                                                    width: '100%',
                                                                                                    fontWeight: 600,
                                                                                                    fontSize: '20px',
                                                                                                    color: "",
                                                                                                    lineHeight: '1rem',
                                                                                                    padding: '0.75rem'
                                                                                                }}>
                                                                                                Bank Details
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                    <table className="p-1" style={{
                                                                                        width: '100%',
                                                                                        fontSize: '20px',
                                                                                    }}>
                                                                                        <tr>
                                                                                            <td className="p-2">Bank Name :</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td className="p-2">Account Name :</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td className="p-2">Account No. :</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td className="p-2">Bank Address :</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                                <td style={{
                                                                                    width: '100%',
                                                                                    border: '1px solid black'
                                                                                }} >
                                                                                    <table style={{
                                                                                        width: '100%'
                                                                                    }}>
                                                                                        <tr style={{
                                                                                            width: '100%'
                                                                                        }}>
                                                                                            <td
                                                                                                style={{
                                                                                                    width: '100%',
                                                                                                    fontWeight: 600,
                                                                                                    fontSize: '20px',
                                                                                                    color: "",
                                                                                                    lineHeight: '1rem',
                                                                                                    padding: '0.75rem'
                                                                                                }}>
                                                                                                Terms and Conditions
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                    <table className="p-1" style={{
                                                                                        width: '100%',
                                                                                        fontSize: '20px',
                                                                                    }}>
                                                                                        {props.data.terms_condition.split(/\r?\n/g)?.map((item: any) => (
                                                                                            <tr>
                                                                                                <td className="p-2">{item}</td>
                                                                                            </tr>
                                                                                        ))}

                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style={{
                                                                                width: '100%',
                                                                                display: 'flex',
                                                                                marginTop: '0.75rem'
                                                                            }}>
                                                                                <td style={{
                                                                                    width: '100%',
                                                                                    border: '1px solid black'
                                                                                }} >
                                                                                    <table style={{
                                                                                        width: '100%'
                                                                                    }}>
                                                                                        <tr style={{
                                                                                            width: '100%'
                                                                                        }}>
                                                                                            <td className="p-1"
                                                                                                style={{
                                                                                                    width: '100%',
                                                                                                    fontWeight: 600,
                                                                                                    fontSize: '20px',
                                                                                                    color: "",
                                                                                                    lineHeight: '1rem',
                                                                                                    padding: '0.75rem'
                                                                                                }}>
                                                                                                Remarks:
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                    <table className="p-1" style={{
                                                                                        width: '100%'
                                                                                    }}>
                                                                                        <tr className="h-11 text-lg">
                                                                                            <td className="p-2">{props?.data?.remarks}</td>
                                                                                        </tr>
                                                                                        <tr className="h-11 text-sm">
                                                                                            <td>{" "}</td>
                                                                                        </tr>
                                                                                        <tr className="h-11 text-sm">
                                                                                            <td>{" "}</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                                <td style={{
                                                                                    width: '100%'
                                                                                }} >
                                                                                    <table style={{
                                                                                        width: '100%'
                                                                                    }}>
                                                                                        <tr style={{
                                                                                            width: '100%'
                                                                                        }}>
                                                                                            <td className="p-1 border-0"
                                                                                                style={{
                                                                                                    width: '100%',
                                                                                                    fontWeight: 600,
                                                                                                    fontSize: '20px',
                                                                                                    color: "",
                                                                                                    lineHeight: '1rem',
                                                                                                    padding: '.25rem'
                                                                                                }}>
                                                                                                &nbsp;
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                    <table className="p-1" style={{
                                                                                        width: '100%'
                                                                                    }}>
                                                                                        <tr className="h-11">
                                                                                            <td className='1/3 text-xl font-bold text-[#000000] mr-4'>Customer's Signature:</td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </td>
                                                                        <td style={{
                                                                            width: '33.3%',
                                                                            paddingLeft: '.5rem'
                                                                        }}>
                                                                            <table className='w-full border-0' style={{
                                                                                width: '100%',
                                                                                border: '1px solid black'
                                                                            }}>
                                                                                {props.companyData?.dealer_type != "Composition" &&
                                                                                    <>
                                                                                        {props.companyData?.state == props.data.state ? (
                                                                                            <>
                                                                                                <tr style={{
                                                                                                    width: '100%',
                                                                                                    borderBottom: '1px solid black'
                                                                                                }}>
                                                                                                    <td
                                                                                                        style={{
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            fontWeight: 600,
                                                                                                            color: '#000000',
                                                                                                            textAlign: 'left',
                                                                                                            padding: '0.75rem'
                                                                                                        }}
                                                                                                    >Add: SGST</td>
                                                                                                    <td style={{
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        fontWeight: 500,
                                                                                                        color: '#000000',
                                                                                                        textAlign: 'right',
                                                                                                        padding: '0.75rem'
                                                                                                    }}> {getFormattedNumber(props.data.sgst)}</td>
                                                                                                </tr>
                                                                                                <tr style={{
                                                                                                    width: '100%',
                                                                                                    borderBottom: '1px solid black'
                                                                                                }}>
                                                                                                    <td style={{
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        fontWeight: 600,
                                                                                                        color: '#000000',
                                                                                                        textAlign: 'left',
                                                                                                        padding: '0.75rem'
                                                                                                    }}>Add: CGST</td>
                                                                                                    <td
                                                                                                        style={{
                                                                                                            fontSize: '20px',
                                                                                                            lineHeight: '1rem',
                                                                                                            fontWeight: 500,
                                                                                                            color: '#000000',
                                                                                                            textAlign: 'right',
                                                                                                            padding: '0.75rem'
                                                                                                        }}> {getFormattedNumber(props.data.cgst)}</td>
                                                                                                </tr>
                                                                                                <tr style={{
                                                                                                    width: '100%',
                                                                                                    borderBottom: '1px solid black'
                                                                                                }}>
                                                                                                    <td className=" text-center" style={{
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        fontWeight: 600,
                                                                                                        color: '#000000',
                                                                                                        textAlign: 'left',
                                                                                                        padding: '0.75rem'
                                                                                                    }}>Total Tax Amount</td>
                                                                                                    <td style={{
                                                                                                        fontSize: '20px',
                                                                                                        lineHeight: '1rem',
                                                                                                        fontWeight: 500,
                                                                                                        color: '#000000',
                                                                                                        textAlign: 'right',
                                                                                                        padding: '0.75rem'
                                                                                                    }}> {getFormattedNumber(props.data.total_tax)}</td>
                                                                                                </tr>
                                                                                            </>
                                                                                        ) : (<>
                                                                                            <tr style={{
                                                                                                width: '100%',
                                                                                            }}>
                                                                                                <td style={{
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    fontWeight: 600,
                                                                                                    color: '#000000',
                                                                                                    textAlign: 'left',
                                                                                                    padding: '0.75rem'
                                                                                                }}>Add: IGST</td>
                                                                                                <td style={{
                                                                                                    fontSize: '20px',
                                                                                                    lineHeight: '1rem',
                                                                                                    fontWeight: 500,
                                                                                                    color: '#000000',
                                                                                                    textAlign: 'right',
                                                                                                    padding: '0.75rem'
                                                                                                }}>{getFormattedNumber(props.data.igst)}</td>
                                                                                            </tr></>)}
                                                                                    </>}


                                                                                <tr style={{
                                                                                    width: '100%',
                                                                                }}>
                                                                                    <td style={{
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '1rem',
                                                                                        fontWeight: 600,
                                                                                        color: '#000000',
                                                                                        textAlign: 'left',
                                                                                        padding: '0.75rem'
                                                                                    }}>Round Off</td>
                                                                                    <td style={{
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '1rem',
                                                                                        fontWeight: 500,
                                                                                        color: '#000000',
                                                                                        textAlign: 'right',
                                                                                        padding: '0.75rem'
                                                                                    }}>{props.data.round_off}</td>
                                                                                </tr>


                                                                            </table>


                                                                            <table style={{
                                                                                width: '100%',
                                                                            }}>
                                                                                <tr

                                                                                    style={{
                                                                                        width: '100%',
                                                                                        borderBottom: '1px solid black',
                                                                                        marginTop: '0.75rem',
                                                                                    }}>
                                                                                    <td style={{
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '1rem',
                                                                                        fontWeight: 600,
                                                                                        color: 'black',
                                                                                        borderLeft: '1px solid black',
                                                                                        borderBottom: '1px solid black',
                                                                                        textAlign: 'left',
                                                                                        padding: '0.75rem'
                                                                                    }}>TOTAL AMOUNT</td>
                                                                                    <td style={{
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '1rem',
                                                                                        fontWeight: 500,
                                                                                        color: '#000000',
                                                                                        textAlign: 'right',
                                                                                        padding: '0.75rem',
                                                                                        borderRight: '1px solid black',
                                                                                        borderBottom: '1px solid black',
                                                                                    }}> {getFormattedNumber(props.data.total_amount)}</td>
                                                                                </tr>
                                                                                <tr className='mt-2 table'>
                                                                                    <td className='text-xl font-bold text-[#000000]'>For {props.companyData?.firm_name}</td>
                                                                                </tr>
                                                                                <tr className='mt-12 w-3/6 table'>
                                                                                    <td>&nbsp;</td>
                                                                                </tr>
                                                                                <tr className='mt-12 w-3/6 table'>
                                                                                    <td>&nbsp;</td>
                                                                                </tr>
                                                                                <tr className='mt-12 w-3/6 table'>
                                                                                    <td>&nbsp;</td>
                                                                                </tr>
                                                                                <tr className='table'>
                                                                                    <td className='text-xl font-bold text-[#000000]'>Authorised Signatory</td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-2 flex justify-between">
                                                <div>
                                                    <button className='rounded-lg text-base capitalize bg-[#34C1EA] text-white font-medium py-2 px-8 mx-2' onClick={() => props.setShowInvoice(false)}>
                                                        Cancel
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className='rounded-lg text-base capitalize bg-[#34C1EA] text-white font-medium py-2 px-8 mx-2' onClick={() => exportRef.current.save()}>
                                                        Save & Print
                                                    </button>
                                                </div>
                                            </div>
                                        </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
