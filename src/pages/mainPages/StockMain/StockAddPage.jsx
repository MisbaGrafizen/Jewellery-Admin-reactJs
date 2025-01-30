import React, { useState } from 'react'
import SideBar from '../../../Component/sidebar/SideBar'
import Header from '../../../Component/header/Header'
import NonbarStock from '../../../Component/stockAdd/NonbarStock';
import BarcodeStock from '../../../Component/stockAdd/BarcodeStock';

export default function StockAddPage() {
  const [isBercodeVisible, setIsBercodeVisible] = useState(true);
  const handleBercodeClick = () => {
    setIsBercodeVisible(true);
  };

  const handleNoneBercodeClick = () => {
    setIsBercodeVisible(false);
  };




  return (
<>


        <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
            <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
              <Header pageName="Stock Add" />
              <div className="flex gap-[10px] w-[100%] h-[100%]">
                <SideBar />
                <div className="flex flex-col pt-[10px] w-[100%] max-h-[90%] pb-[20px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">

                <div className="relative flex shadow1-blue rounded-[10px] border-[#122f97] w-fit p-1 bg-gray-200">
                <div
                  className={`absolute top-0 left-0 h-full w-[130px] bs-spj rounded-[8px] transition-transform duration-300 ${isBercodeVisible ? "translate-x-0" : "translate-x-[130px]"
                    }`}
                ></div>
                <button
                  onClick={handleBercodeClick}
                  className={`flex w-[130px] py-[10px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[500] text-${isBercodeVisible ? "[#fff]" : "[#000]"
                    }`}
                >
                  Barcode
                </button>
                <button
                  onClick={handleNoneBercodeClick}
                  className={`flex w-[125px] pl-[] py-[10px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[500] text-${isBercodeVisible ? "[#000]" : "[#fff]"
                    }`}
                >
                  None Barcode
                </button>
              </div>

              {isBercodeVisible ? (
                <>
<BarcodeStock />

               
                </>
              ) :(
                <>

<NonbarStock />


                </>
              )}


                </div>
              </div>
            </div>
          </section>
</>
  )
}
