import React, { useEffect, useState } from 'react'
import Header from '../../Component/header/Header'
import SideBar from '../../Component/sidebar/SideBar'
import { ApiGet } from '../../helper/axios';
import { DatePicker } from "antd";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import 'react-datepicker/dist/react-datepicker.css';

export default function DayBook() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datemodalopen, setDateModalOpen] = useState(true)
    const [isDayVisible, setIsDayVisible] = useState(true);
    const [isPurchese, setIsPurchese] = useState(true);
    const [data, setData] = useState([]);

    // const getTodayDate = () => {
    //     const today = new Date();
    //     return today.toISOString().split("T")[0];
    // };

    const formatDate = (date) => {
        return date.toISOString().split("T")[0];
    };

    // ✅ Function to get **previous day's date**
    const getPreviousDate = (date) => {
        const prevDate = new Date(date);
        prevDate.setDate(prevDate.getDate() + 1); // Subtracts 1 day
        return formatDate(prevDate);
    };
    // ✅ Function to close date modal
    const handleDateModalClose = () => {
        setDateModalOpen(false);
    };


    const handledatemodalclose = () => {
        setDateModalOpen(false)
    }


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {

    //             const today = getTodayDate();
    //             console.log('today', today)

    //             const response = await ApiGet(`/admin/day-book?startDate=${today}&endDate=${today}`);
    //             console.log('response', response)

    //             const mergedData = [
    //                 ...(response.data.sales || []).map((item) => ({
    //                     ...item,
    //                     type: "sale",
    //                 })),
    //                 ...(response.data.purchases || []).map((item) => ({
    //                     ...item,
    //                     type: "purchase",
    //                 })),
    //             ];

    //             setData(mergedData);
    //         } catch (error) {
    //             console.error("Error fetching visa packages:", error);
    //         }
    //     };

    //     fetchData();
    // }, []); 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const previousDate = getPreviousDate(selectedDate); // Get previous day's data
                console.log(`Selected Date: ${formatDate(selectedDate)} (Showing)`);
                console.log(`Fetching Data for Previous Date: ${previousDate} (Backend Query)`);


                // ✅ API request with selected date as startDate & endDate
                const response = await ApiGet(`/admin/day-book?startDate=${previousDate}&endDate=${previousDate}`);
                console.log('API Response:', response);

                // ✅ Merge sales & purchases data
                const mergedData = [
                    ...(response.data.sales || []).map((item) => ({ ...item, type: "sale" })),
                    ...(response.data.purchases || []).map((item) => ({ ...item, type: "purchase" })),
                ];

                setData(mergedData);
            } catch (error) {
                console.error("Error fetching day book data:", error);
            }
        };

        fetchData();
    }, [selectedDate]);


    const handleDayClick = () => {
        setIsDayVisible(true);
    };

    const handleTodaySaleClick = () => {
        setIsDayVisible(false);
    };
    const handlePurcheseClick = () => {
        setIsPurchese(true);
    };

    const handleSellClick = () => {
        setIsPurchese(false);
    };

    return (
        <>

            <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
                <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
                    <Header pageName="Day Book" />
                    <div className="flex gap-[10px] w-[100%] h-[100%]">
                        <SideBar />
                        <div className="flex flex-col w-[100%] max-h-[90%] pb-[50px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
                            <div className="relative flex shadow1-blue rounded-[10px] border-[#122f97] w-fit p-1 bg-gray-200">
                                <div
                                    className={`absolute top-0 left-0 h-full w-[130px] bs-spj rounded-[8px] transition-transform duration-300 ${isDayVisible ? "translate-x-0" : "translate-x-[130px]"
                                        }`}
                                ></div>
                                <button
                                    onClick={handleDayClick}
                                    className={`flex w-[130px] py-[10px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[600] text-${isDayVisible ? "[#fff]" : "[#000]"
                                        }`}
                                >
                                    Day book

                                </button>
                                <button
                                    onClick={handleTodaySaleClick}
                                    className={`flex w-[125px] pl-[] py-[10px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[600] text-${isDayVisible ? "[#000]" : "[#fff]"
                                        }`}
                                >
                                    Today Sale
                                </button>
                            </div>
                            {isDayVisible ? (
                                <>



                                    <div className="relative flex shadow1-blue rounded-[10px] border-[#122f97] w-fit p-1 bg-gray-200">
                                        <div
                                            className={`absolute top-0 left-0 h-full w-[110px]  rounded-[8px] transition-transform duration-300 ${isPurchese ? "translate-x-0 bg-[#28c723]  " : "  bg-[#ff8000] translate-x-[117px]"
                                                }`}
                                        ></div>
                                        <button
                                            onClick={handlePurcheseClick}
                                            className={`flex w-[110px] py-[8px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[600] text-${isPurchese ? "[#fff]" : "[#000]"
                                                }`}
                                        >
                                            Purchese

                                        </button>
                                        <button
                                            onClick={handleSellClick}
                                            className={`flex w-[110px] pl-[] py-[8px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[600] text-${isPurchese ? "[#000]" : "[#fff]"
                                                }`}
                                        >
                                            Sell
                                        </button>
                                    </div>
                                    {isPurchese ? (
                                        <>

                                            <div
                                                className="    bg-white w-[100%] rounded-[10px] overflow-hidden shadow1-blue flex-shrink-0">
                                                <table className=" w-full border-collapse  border-gray-300  font-Poppins">
                                                    <thead>
                                                        <tr className="bg-gray-100 text-gray-600 font-medium text-sm ">
                                                            <th className="py-2 px-2 text-left  flex items-center border-gray-300">
                                                                <input
                                                                    type="checkbox"
                                                                    id="check-all"
                                                                    className="w-4 ml-2  h-4"
                                                                />
                                                                <span className="ml-2  font-[600]">Sr.</span>
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                No
                                                            </th>

                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Group
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Name
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                G. weight
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                L. weight
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                N. weight
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Cr. Rs
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Dr. Rs
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Bank
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Cash
                                                            </th>


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data?.map((item, index) => (
                                                            <tr key={index} className="">
                                                                <td className="py-2 px-2 flex items-center  border-gray-300">
                                                                    <input type="checkbox" className="w-4 h-4 ml-2 mb-[-1px]  mr-2" />
                                                                    <span className={item.type === "sale" ? "text-green-600" : "text-red-600"}>
                                                                        {index + 1}
                                                                    </span>
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.billNo}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.customerId?.city || "N/A"}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.customerId?.name || "N/A"}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.products?.reduce((sum, p) => sum + (p.grossWeight || 0), 0)}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.products?.reduce((sum, p) => sum + (p.lessWeight || 0), 0)}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.products?.reduce((sum, p) => sum + (p.netWeight || 0), 0)}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins  ${item.type === "sale" ? "text-green-600" : "text-transparent"
                                                                    }`}>
                                                                    {item.type === "sale" ? `${item?.products?.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)}` : ""}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "purchase" ? "text-red-600" : "text-transparent"
                                                                    }`}>
                                                                    {item.type === "purchase" ? `-${item?.products?.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)}` : ""}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "purchase" ? "text-red-600" : "text-transparent"
                                                                    }`}>
                                                                    {item.type === "purchase" ? `-${item?.products?.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)}` : ""}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.products?.reduce((sum, p) => sum + (p.amount || 0), 0)}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr className="bg-gray-100 text-gray-600 font-medium text-sm ">
                                                            <th className="py-2 px-3 text-left  flex items-center border-gray-300">
                                                                Total :
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>

                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>


                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </>

                                    ) : (
                                        <>
                                            <div
                                                className="    bg-white w-[100%] rounded-[10px] overflow-hidden shadow1-blue flex-shrink-0">
                                                <table className=" w-full border-collapse  border-gray-300  font-Poppins">
                                                    <thead>
                                                        <tr className="bg-gray-100 text-gray-600 font-medium text-sm ">
                                                            <th className="py-2 px-2 text-left  flex items-center border-gray-300">
                                                                <input
                                                                    type="checkbox"
                                                                    id="check-all"
                                                                    className="w-4 ml-2  h-4"
                                                                />
                                                                <span className="ml-2  font-[600]">Sr.</span>
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                No
                                                            </th>

                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Group
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Name
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                G. weight
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                L. weight
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                N. weight
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Cr. Rs
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Dr. Rs
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Bank
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                                Cash
                                                            </th>


                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data?.map((item, index) => (
                                                            <tr key={index} className="">
                                                                <td className="py-2 px-2 flex items-center  border-gray-300">
                                                                    <input type="checkbox" className="w-4 h-4 ml-2 mb-[-1px]  mr-2" />
                                                                    <span className={item.type === "sale" ? "text-green-600" : "text-red-600"}>
                                                                        {index + 1}
                                                                    </span>
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.billNo}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.customerId?.city || "N/A"}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.customerId?.name || "N/A"}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.products?.reduce((sum, p) => sum + (p.grossWeight || 0), 0)}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.products?.reduce((sum, p) => sum + (p.lessWeight || 0), 0)}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.products?.reduce((sum, p) => sum + (p.netWeight || 0), 0)}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins  ${item.type === "sale" ? "text-green-600" : "text-transparent"
                                                                    }`}>
                                                                    {item.type === "sale" ? `${item?.products?.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)}` : ""}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "purchase" ? "text-red-600" : "text-transparent"
                                                                    }`}>
                                                                    {item.type === "purchase" ? `-${item?.products?.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)}` : ""}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "purchase" ? "text-red-600" : "text-transparent"
                                                                    }`}>
                                                                    {item.type === "purchase" ? `-${item?.products?.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)}` : ""}
                                                                </td>
                                                                <td className={`py-2 px-4 text-center border-l border-gray-300 text-[14px] font-Poppins ${item.type === "sale" ? "text-green-600" : "text-red-600"
                                                                    }`}
                                                                >
                                                                    {item?.products?.reduce((sum, p) => sum + (p.amount || 0), 0)}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr className="bg-gray-100 text-gray-600 font-medium text-sm ">
                                                            <th className="py-2 px-3 text-left  flex items-center border-gray-300">
                                                                Total :
                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>

                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>
                                                            <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                            </th>


                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>

                                        </>
                                    )}

                                </>
                            ) : (
                                <>
                                    <div
                                        className=" bg-white w-[100%] rounded-[10px] overflow-hidden shadow1-blue flex-shrink-0">
                                        <table className=" w-full border-collapse  border-gray-300  font-Poppins">
                                            <thead>
                                                <tr className="bg-gray-100 text-gray-600 font-medium text-sm ">
                                                    <th className="py-2 px-2 text-left  flex items-center border-gray-300">
                                                        <input
                                                            type="checkbox"
                                                            id="check-all"
                                                            className="w-4 ml-2  h-4"
                                                        />
                                                        <span className="ml-2  font-[600]">Sr.</span>
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        Voucher
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        No
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        Group
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        Name
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        Items
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        G. wait
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        L. Wait
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        Cradit Rs
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        Dr Rs
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                      Bank
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">
                                                        Cash
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map((item, index) => (
                                                    <tr key={index} className="">
                                                        <td className="py-2 px-2 flex items-center  border-gray-300">
                                                            <input type="checkbox" className="w-4 h-4 ml-2 mb-[-1px]  mr-2" />
                                                            <span>{index + 1}</span>
                                                        </td>
                                                        <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                            {item?.billNo}
                                                        </td>
                                                        <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                            {item?.customerId?.city || 'N/A'}
                                                        </td>
                                                        <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                            {item?.customerId?.name || 'N/A'}
                                                        </td>
                                                        {item?.products?.map((data, index) => (
                                                            <td key={index} className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                                {data?.grossWeight}
                                                            </td>
                                                        ))}
                                                        {item?.products?.map((data, index) => (
                                                            <td key={index} className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                                {data?.lessWeight || 0}
                                                            </td>
                                                        ))}
                                                        {item?.products?.map((data, index) => (
                                                            <td key={index} className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                                {data?.netWeight || 0}
                                                            </td>
                                                        ))}
                                                        <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                            -
                                                        </td>
                                                        <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                            -
                                                        </td>

                                                        {item?.products?.map((data, index) => (
                                                            <td key={index} className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                                {data?.amount}
                                                            </td>
                                                        ))}
                                                        <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">
                                                            {data?.amount}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr className="bg-gray-100 text-gray-600 font-medium text-sm ">
                                                    <th className="py-2 px-3 text-left  flex items-center border-gray-300">
                                                        Total :
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>

                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

</th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[600] font-Poppins">

                                                    </th>


                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </>
                            )}

                        </div>

                    </div>
                </div>
            </section>

            {/* <NextUIModal isOpen={datemodalopen} >
        <ModalContent className="md:max-w-[350px] max-w-[333px] relative  rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[300px]  ">
          {() => (
            <>

              <div className="relative w-[100%] h-[100%] ">
              <div
                  className=" absolute right-[0px]  top-[0px]  flex gap-[5px]  z-[300] items-center cursor-pointer py-[5px]  border-red rounded-bl-[8px] px-[5px]"
     onClick={handledatemodalclose}
                >
                  <i className=" text-[30px] text-[red] shadow-delete-icon bg-white   rounded-full fa-solid fa-circle-xmark"></i>
                </div>
                <div className="relative  w-[100%] h-[100%]">
                 
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </NextUIModal> */}



            <NextUIModal isOpen={datemodalopen} >
                <ModalContent className="md:max-w-[700px] shadow-none justify-center !bg-transparent h-[800px]">
                    <div className="relative w-[100%] md:max-w-[600px]  mt-[10px] bg-white rounded-2xl z-[100] flex justify-center !py-0 mx-auto h-[400px]">
                        <div
                            className="absolute right-[-13px] top-[-14px] flex gap-[5px] z-[300] items-center cursor-pointer py-[5px] px-[5px]"
                            onClick={handledatemodalclose}
                        >
                            <i className="text-[25px] text-[red] bg-white rounded-full fa-solid fa-circle-xmark"></i>
                        </div>
                        <div className=" w-[80%] flex flex-col gap-[20px] ">
                            <div className=" flex flex-col mt-[10px]">
                                <div className=" mx-auto  text-[#081a21] justify-center flex text-[28px] font-[500]  font-Poppins ">
                                    <p className=" text-[20px]">Please Select Date</p>
                                </div>
                                <div className=" flex mt-[0px] mx-auto j">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[2px] w-24 md:w-32 bg-[#122f97]" />
                                        <div className="w-2 h-2 rounded-full bg-[#122f97]" />
                                    </div>

                                    <i className="fa-solid fa-xmark text-[#122f97] mx-[10px]"></i>
                                    {/* Right Side */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#122f97]" />
                                        <div className="h-[2px] w-24 md:w-32 bg-[#122f97]" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=" flex  w-[300px]  items-center  justify-center mx-auto border-[1.4px] border-[#122f97] rounded-[8px] mt-[20px] p-[8px] gap-[10px]">
                                    <p className=" flex font-Poppins text-[20px]  w-[80px]">Date :</p>
                                    <div className=" flex  items-center">
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            className=" flex  w-[100px]  text-[20px] border"
                                        />
                                        <i className="fa-regular text-[#9c9c9c] fa-calendar-days"></i>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-[70px]">
                                    <button
                                        onClick={() => setDateModalOpen(false)} // Closes the modal
                                        className="  w-[130px] text-[20px]   py-[10px] bs-spj font-Poppins text-white font-[500] rounded-lg shadow-md hover:bg-blue-600 transition"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalContent>
            </NextUIModal>


        </>
    )
}
