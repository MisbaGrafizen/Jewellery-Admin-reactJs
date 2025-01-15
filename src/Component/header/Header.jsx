import React from "react";
import backArrow from "../../../public/imges/main/back-arrow.png";
import flag from "../../../public/imges/main/headerIndia.png";
import avter from "../../../public/imges/main/avter.jpeg";
import { useNavigate } from "react-router-dom";
 
export default function Header({pageName=""}) {
 const navigate =useNavigate();
 const handleBack =()=>{
  navigate(-1)
 }
  return (
    <>
      <section className=" flex  w-[100%] ">
        <div className=" w-[100%]  gap-[10px] flex items-center px-[0px] border-b-[1.5px] pb-[25px] pt-[20px] justify-between bg h-[42px]">
          <div className=" flex  w-fit  cursor-pointer items-center gap-[5px]  " >
            <img className=" flex w-[27px] h-[27px]" src={backArrow} onClick={handleBack} />
            <div className=" flex w-[4px] bg-[#ff8000] h-[30px]"></div>
            <h1 className=" pl-[6px] text-[#3d3d3d] flex  font-Poppins text-[20px] font-[600]" onClick={handleBack}>
            {pageName}
            </h1>
          </div>
          <div className=" flex gap-[20px]">
          <div className=" flex font-Poppins ">
          <p>
        <span>    22 Carat </span>= 50,000
          </p>

          </div>

          </div>
          <div className=" items-center   w-fit pr-[10px] flex gap-[20px]">
            <div className=" flex gap-[13px] items-center w-fit">
         
              
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
           
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
