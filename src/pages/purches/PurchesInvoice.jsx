import React from "react";
import SideBar from "../../Component/sidebar/SideBar";
import Header from "../../Component/header/Header";

export default function PurchesInvoice() {
  return (
    <>
      <section className=" flex  w-[100%] h-[100%] overflow-hidden ">
        <div className=" flex w-[100%] flex-col gap-[14px]  h-[96vh] ">
          <Header pageName=" PURCHASE INVOICES" />
          <div className=" flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className=" flex w-[100%] max-h-[100%] pb-[20px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px] ">
                <div className=" flex  w-[100%]">
<div className=" flex  w-[120px] h-[50px] justify-center items-center ">
<p>
    CREATE NEW 
</p>
</div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
