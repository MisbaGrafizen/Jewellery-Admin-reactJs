import React, { useState } from 'react'
import Header from '../../Component/header/Header'
import SideBar from '../../Component/sidebar/SideBar'
useState
export default function DayBook() {

    const [isDayVisible, setIsDayVisible] = useState(true);
    const handleDayClick = () => {
        setIsDayVisible(true);
    };

    const handleTodaySaleClick = () => {
        setIsDayVisible(false);
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
                                    className={`flex w-[130px] py-[10px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[500] text-${isDayVisible ? "[#fff]" : "[#000]"
                                        }`}
                                >
                                    Day book

                                </button>
                                <button
                                    onClick={handleTodaySaleClick}
                                    className={`flex w-[125px] pl-[] py-[10px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[500] text-${isDayVisible ? "[#000]" : "[#fff]"
                                        }`}
                                >
                                    Today Sale
                                </button>
                            </div>
                            {isDayVisible ? (
                                <>
                                    <div
                                        className="    bg-white w-[100%] rounded-[10px] overflow-hidden shadow1-blue flex-shrink-0">
                                        <table className=" w-full border-collapse  border-gray-300  font-Poppins">
                                            <thead>
                                                <tr className="bg-gray-100 text-gray-700 font-medium text-sm ">
                                                    <th className="py-2 px-2 text-left  flex items-center border-gray-300">
                                                        <input
                                                            type="checkbox"
                                                            id="check-all"
                                                            className="w-4 ml-2  h-4"
                                                        />
                                                        <span className="ml-2  font-[500]">Sr.</span>
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Voucher
                                                    </th>

                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        No
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Group
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Name
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        G. wait
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        L. Wait
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Cradit Rs
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Dr Rs
                                                    </th>


                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Cash
                                                    </th>


                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className="">

                                                    <td className="py-2 px-2 flex items-center  border-gray-300">
                                                        <input type="checkbox" className="w-4 h-4 ml-2 mb-[-1px]  mr-2" />
                                                        <span>1</span>
                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>



                                                </tr>

                                            </tbody>
                                        </table>




                                    </div>


                                </>
                            ) : (
                                <>

                                    <div
                                        className="    bg-white w-[100%] rounded-[10px] overflow-hidden shadow1-blue flex-shrink-0">
                                        <table className=" w-full border-collapse  border-gray-300  font-Poppins">
                                            <thead>
                                                <tr className="bg-gray-100 text-gray-700 font-medium text-sm ">
                                                    <th className="py-2 px-2 text-left  flex items-center border-gray-300">
                                                        <input
                                                            type="checkbox"
                                                            id="check-all"
                                                            className="w-4 ml-2  h-4"
                                                        />
                                                        <span className="ml-2  font-[500]">Sr.</span>
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Voucher
                                                    </th>

                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        No
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Group
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Name
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Items
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        G. wait
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        L. Wait
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Cradit Rs
                                                    </th>
                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Dr Rs
                                                    </th>


                                                    <th className="py-2 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                                                        Cash
                                                    </th>


                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className="">

                                                    <td className="py-2 px-2 flex items-center  border-gray-300">
                                                        <input type="checkbox" className="w-4 h-4 ml-2 mb-[-1px]  mr-2" />
                                                        <span>1</span>
                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>
                                                    <td className="py-2 px-4 text-center border-l  border-gray-300 text-[14px]  font-Poppins">

                                                    </td>



                                                </tr>

                                            </tbody>
                                        </table>




                                    </div>


                                </>
                            )}

                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
