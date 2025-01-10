import React from "react";
import backArrow from "../../../public/imges/main/back-arrow.png";
import flag from "../../../public/imges/main/headerIndia.png";
import avter from "../../../public/imges/main/avter.jpeg";

export default function Header() {
  return (
    <>
      <section className=" flex  w-[100%] ">
        <div className=" w-[100%]  gap-[10px] flex items-center px-[0px] justify-between bg- rounded-[7px]  h-[42px]">
          <div className=" flex  w-fit  items-center gap-[10px]  ">
            <img className=" flex w-[35px] h-[35px]" src={backArrow} />
            <div className=" flex w-[6px] bg-[#ff8000] h-[40px]"></div>
            <h1 className=" pl-[6px] text-[#3d3d3d] flex  font-Poppins text-[25px] font-[600]">
              Create New Company
            </h1>
          </div>
          <div className=" items-center   w-fit pr-[10px] flex gap-[30px]">
            <div className=" flex gap-[13px] items-center w-fit">
              <div className=" flex w-[31px]  rounded-[10px]">
                <img
                  className="w-[30px] h-[30px]  object-cover rounded-full"
                  src={flag}
                />
              </div>
              <div>
                <i className="fa-regular text-[#3d3d3d] text-[20px] fa-bell"></i>
              </div>
              <div>
                <i className="fa-regular  text-[#3d3d3d] text-[20px] fa-gear"></i>
              </div>
            </div>
            <div className="  flex  items-center gap-[10px]"> 
              <div className=" flex w-[43px] ">
                <img
                  className=" flex w-[40px]   h-[40px] rounded-[100%] border-[1px] border-[#000]"
                  src={avter}
                />
              </div>
              <p className=" flex font-Poppins">Priyanshu</p>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
