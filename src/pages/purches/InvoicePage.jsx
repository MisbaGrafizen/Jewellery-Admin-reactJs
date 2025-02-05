import React, { useEffect, useRef } from "react";
import SideBar from "../../Component/sidebar/SideBar";
import Header from "../../Component/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceByIdAction } from "../../redux/action/generalManagement";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function InvoicePage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const invoiceRef = useRef(null);


    const invoice = useSelector((state) => state.general.getBillById);

    useEffect(() => {
        if (id) {
            dispatch(getInvoiceByIdAction(id));
        }
    }, [dispatch]);

    const formatDate = (date) => {
        if (!date) return '';

        const d = new Date(date);

        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const numberToWords = (num) => {
        if (!num) return "Zero";
        const a = [
            "",
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Eleven",
            "Twelve",
            "Thirteen",
            "Fourteen",
            "Fifteen",
            "Sixteen",
            "Seventeen",
            "Eighteen",
            "Nineteen",
        ];
        const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

        const convert = (n) => {
            if (n < 20) return a[n];
            if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
            if (n < 1000)
                return (
                    a[Math.floor(n / 100)] +
                    " Hundred" +
                    (n % 100 !== 0 ? " and " + convert(n % 100) : "")
                );
            if (n < 100000)
                return (
                    convert(Math.floor(n / 1000)) +
                    " Thousand" +
                    (n % 1000 !== 0 ? " " + convert(n % 1000) : "")
                );
            if (n < 10000000)
                return (
                    convert(Math.floor(n / 100000)) +
                    " Lakh" +
                    (n % 100000 !== 0 ? " " + convert(n % 100000) : "")
                );
            return (
                convert(Math.floor(n / 10000000)) +
                " Crore" +
                (n % 10000000 !== 0 ? " " + convert(n % 10000000) : "")
            );
        };

        return convert(Math.floor(num)) + " Rupees Only";
    };

    const downloadInvoice = async () => {
        const element = invoiceRef.current;
        if (!element) return;

        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Invoice_${id}.pdf`);
    };


    console.log('invoice', invoice)

    return (
        <>
            <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
                <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
                    <Header pageName="Invoice-Bill" />
                    <div className="flex gap-[10px] w-[100%] h-[100%]">
                        <SideBar />
                        <div className="flex w-[100%] max-h-[100%] pb-[50px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">

                            <div className="max-w-[1200px] h-[110vh] mx-auto p-6 bg-gradient-to-br pb-[80px] from-gray-50 to-white">
                                  <button
                                onClick={downloadInvoice}
                                className="absolute top-4 right-4 p-2 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center"
                            >
                                <i className="fa fa-download text-lg" />
                            </button>
                                <div ref={invoiceRef}  className="border h-fit !mb-[140px] border-gray-200 rounded-xl shadow-lg  bg-white overflow-hidden">

                                    <div className="bg-gradient-to-r from-[#8B4513]/10 to-[#8B4513]/5 p-6 border-b border-gray-200">
                                        <h1 className="text-[#8B4513] text-2xl font-semibold text-center font-Poppins mb-2">{invoice?.companyId?.firmName}</h1>
                                        <p className="text-gray-600 text-center font-Poppins">{invoice?.companyId?.address}</p>
                                        <div className="flex flex-wrap justify-between text-sm mt-3 text-gray-600">
                                            <span className="flex items-center font-Poppins gap-2">
                                                <span className="font-medium font-Poppins">Mo:</span> {invoice?.companyId?.userId?.mobileNumber}
                                                {/* <span className="font-medium ml-2">Ph:</span> 7046931708 */}
                                            </span>
                                            <span className="flex items-center font-Poppins gap-2">
                                                <span className="font-medium">GST:</span> {invoice?.companyId?.gstNumber}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-6 ">

                                        <div className="flex flex-wrap justify-between gap-4">
                                            <div className="bg-gray-50 rounded-lg px-4 py-2">
                                                <div className="flex gap-2  font-Poppins text-gray-600">
                                                    <span className="font-medium">State & Code:</span>
                                                    <span>24-{invoice?.customerId?.state}</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="bg-[#8B4513]/10 font-Poppins text-[#8B4513] font-medium rounded-lg px-4 py-2">
                                                    Original / Duplicate
                                                </div>
                                                <div className="flex gap-4  font-Poppins  text-sm text-gray-600">
                                                    <span>Invoice Date: {formatDate(invoice?.createdAt)}</span>
                                                    <span>Invoice No: {invoice?.billNo}</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="bg-gray-50  font-Poppins  rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <div className="flex gap-2  font-Poppins ">
                                                    <span className="text-gray-600 font-medium ">Name:</span>
                                                    <span>{invoice?.customerId?.name}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-gray-600 font-medium">Address:</span>
                                                    <span>{invoice?.customerId?.address}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-gray-600 font-medium">City:</span>
                                                    <span>{invoice?.customerId?.city}</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2  font-Poppins ">
                                                <div className="flex gap-2  font-Poppins ">
                                                    <span className="text-gray-600 font-medium">Mo:</span>
                                                    <span>{invoice?.customerId?.phone}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-gray-600 font-medium">PAN:</span>
                                                    <span>{invoice?.customerId?.panNo}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-gray-600 font-medium">GST No:</span>
                                                    <span>{invoice?.customerId?.GST}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-gray-600 font-medium">State & Code:</span>
                                                    <span>24-{invoice?.customerId?.state}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="overflow-x-auto rounded-lg border border-gray-200">
                                            {invoice?.products?.map((item, index) => (
                                                <table key={index} className="w-full  font-Poppins   text-sm">
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
                                                            <th className="border-r border-gray-200 p-2 font-medium text-gray-600">Extra Rs.</th>
                                                            <th className="p-2 font-medium text-gray-600">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b border-gray-200">
                                                            <td className="border-r border-gray-200 p-2">{index + 1}</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.productId?.itemName}</td>
                                                            <td className="border-r border-gray-200 p-2">916</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.hsnCode || 0}</td>
                                                            <td className="border-r border-gray-200 p-2">1</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.grossQty}</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.netQty}</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.labour || 0}</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.labourPrice || 0}</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.extraRate || 0}</td>
                                                            <td className="p-2">{item?.totalPrice}</td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td colSpan="5" className="border-r border-gray-200 p-2 text-gray-600">
                                                                Total :
                                                            </td>
                                                            <td className="border-r border-gray-200 p-2">{item?.grossQty}</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.netQty}</td>
                                                            <td className="border-r border-gray-200 p-2"></td>
                                                            <td className="border-r border-gray-200 p-2">{item?.labourPrice || 0}</td>
                                                            <td className="border-r border-gray-200 p-2">{item?.extraRate || 0}</td>
                                                            <td className="p-2 font-medium">{item?.totalPrice}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ))}
                                        </div>

                                        <div className="bg-gray-50  font-Poppins  rounded-lg p-4 space-y-2 text-sm text-gray-600">
                                            <div className="flex gap-2">
                                                <span className="font-medium">Rs. Word:</span>
                                                <span>{numberToWords(invoice?.finalAmount)}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="font-medium">TAX Word:</span>
                                                <span>{numberToWords(invoice?.gstAmount)}</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1  font-Poppins  md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="font-medium text-gray-600 mb-2">Payment Details</h3>
                                                <div className="bg-gray-50 rounded-lg p-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium text-gray-600">CASH</span>
                                                        <span className="text-[#8B4513] font-medium">₹{invoice?.finalAmount?.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg  p-4">
                                                <table className="w-full text-sm">
                                                    <tbody className="space-y-2">
                                                        <tr className="flex justify-between py-1">
                                                            <td className="text-gray-600">Less Discount ({invoice?.discount}%)</td>
                                                            <td className="font-medium">₹{invoice?.discountAmount?.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="flex justify-between py-1">
                                                            <td className="text-gray-600">Total Amount Before Tax</td>
                                                            <td className="font-medium">₹{invoice?.discountPrice?.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="flex justify-between py-1">
                                                            <td className="text-gray-600">Add SGST @ 1.5%</td>
                                                            <td className="font-medium">₹{invoice?.cgstAmount?.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="flex justify-between py-1">
                                                            <td className="text-gray-600">Add CGST @ 1.5%</td>
                                                            <td className="font-medium">₹{invoice?.sgstAmount?.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="flex justify-between py-1">
                                                            <td className="text-gray-600">Tax Amount GST</td>
                                                            <td className="font-medium">₹{invoice?.gstAmount?.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="flex justify-between py-1">
                                                            <td className="text-gray-600">Round Off</td>
                                                            <td className="font-medium">₹{invoice?.roundOff || 0}</td>
                                                        </tr>
                                                        <tr className="flex justify-between py-1 text-[#8B4513] font-medium">
                                                            <td>Total Amount After Tax</td>
                                                            <td>₹{invoice?.finalAmount?.toFixed(2)}</td>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
