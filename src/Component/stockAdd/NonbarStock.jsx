import React from "react";
import Header from "../header/Header";

export default function NonbarStock() {
  return (
    <>
      <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Stock Add" />
          <div className="flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className="flex flex-col pt-[10px] w-[100%] max-h-[90%] pb-[20px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
