import React from "react";
import backArrow from "../../../public/imges/main/back-arrow.png";
import flag from "../../../public/imges/main/headerIndia.png";
import alerT from "../../../public/imges/main/alert.png";
import Header from "../../Component/header/Header";
import SideBar from "../../Component/sidebar/SideBar";
import { Sidebar } from "lucide-react";

export default function CreateCompany() {
  return (
    <>
      <section className=" flex  w-[100%] h-[100%] overflow-hidden ">
        <div className=" flex w-[100%] flex-col gap-[24px]  h-[96vh] ">
          <Header />
          <div className=" flex gap-[20px] w-[100%] h-[100%]">
            <SideBar />
            <div className=" flex w-[100%] h-[94%]  rounded-[10px] ">
              <div className=" flex flex-col gap-[15px] w-[50%]  ">
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
                    Personal Details
                  </h1>

                  <div className=" w-[100%]  flex gap-[20px] border-[1px] bg-white shadow1-blue py-[29px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] flex-col gap-[20px]">
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full outline-none text-[14px]  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]   text-[14px]  capitalize"
                        >
                          Email ID
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email ID"
                          className="w-full outline-none text-[14px]  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                    </div>
                    <div className=" flex w-[100%] flex-col gap-[20px]">
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Mobile No
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder="Enter Your Mobile Number"
                          className="w-full outline-none text-[14px]  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
                    Personal Details
                  </h1>

                  <div className=" w-[100%]  flex gap-[20px] border-[1px] bg-white shadow1-blue py-[29px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] flex-col gap-[20px]">
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full outline-none text-[14px]  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]   text-[14px]  capitalize"
                        >
                          Email ID
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email ID"
                          className="w-full outline-none text-[14px]  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                    </div>
                    <div className=" flex w-[100%] flex-col gap-[20px]">
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Mobile No
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder="Enter Your Mobile Number"
                          className="w-full outline-none text-[14px]  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex w-[50%]  "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
