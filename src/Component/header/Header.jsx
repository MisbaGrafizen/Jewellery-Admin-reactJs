import React, { useEffect, useRef, useState } from "react";
import backArrow from "../../../public/imges/main/back-arrow.png";
import flag from "../../../public/imges/main/headerIndia.png";
import avter from "../../../public/imges/main/avter.jpeg";
import { useNavigate } from "react-router-dom";
import {
  Modal as NextUIModal,
  ModalContent,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { getCategroyAction } from "../../redux/action/landingManagement";
import { ApiPost } from "../../helper/axios";
import { getMarketRateAction } from "../../redux/action/generalManagement";

export default function Header({ pageName = "" }) {
  const dropdownRef = useRef(null);
  const [nameFocused, setNameFocused] = useState(false);
  const [CaratModalopen, setCaratModalOpen] = useState(false);
  const [categoryRates, setCategoryRates] = useState({});
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.landing.getAllCategory);
  const rates = useSelector((state) => state.general.getMarketRate);

  useEffect(() => {
    dispatch(getCategroyAction());
    dispatch(getMarketRateAction());
  }, [dispatch]);


  const handleCaratModalOpen = () => {
    setCaratModalOpen(true);
  };
  const handleCaratModalClose = () => {
    setCaratModalOpen(false);
  };

  const handleRateChange = (categoryId, value) => {
    setCategoryRates((prev) => ({
      ...prev,
      [categoryId]: value,
    }));
  };

  // const handleSaveRates = async () => {
  //   const ratesToSave = Object.entries(categoryRates).map(([categoryId, price]) => ({
  //     categoryId,
  //     price,
  //   }));


  //   try {
  //     const response = await ApiPost("/admin/market-rate", { rates: ratesToSave });
  //     console.log('response', response)
  //     if (response?.data) {
  //       alert("Rates saved successfully!");
  //       setCaratModalOpen(false);
  //     }
  //   } catch (error) {
  //     console.error("Error saving rates:", error);
  //     alert("Failed to save rates.");
  //   }
  // };

  const handleSaveRates = async () => {
    const ratesToSave = Object.keys(categoryRates).map((categoryId) => ({
      categoryId,
      price: categoryRates[categoryId],
    }));
  
    if (ratesToSave.length === 0) {
      alert("Please enter at least one rate before saving.");
      return;
    }
  
    console.log("Sending to API:", ratesToSave);
  
    try {
      // Directly send the array, NOT wrapped inside "rates"
      const response = await ApiPost("/admin/market-rate", ratesToSave);
  
      if (response?.data) {
        alert("Rates saved successfully!");
        setCaratModalOpen(false);
        dispatch(getMarketRateAction()); // Refresh rates
      }
    } catch (error) {
      console.error("Error saving rates:", error);
      alert("Failed to save rates. Please check your inputs and try again.");
    }
  };
  
  

  return (
    <>
      <section className=" flex  w-[100%] ">
        <div className=" w-[100%]  gap-[10px] flex items-center  justify-between px-[0px] border-b-[1.5px] pb-[25px] pt-[20px] bg h-[42px]">
          <div className=" flex  w-fit  cursor-pointer items-center gap-[5px]  ">
            <img
              className=" flex w-[27px] h-[27px]"
              src={backArrow}
              onClick={handleBack}
            />
            <div className=" flex w-[4px] bg-[#ff8000] h-[30px]"></div>
            <h1
              className=" pl-[6px] text-[#3d3d3d] flex  font-Poppins text-[20px] font-[600]"
              onClick={handleBack}
            >
              {pageName}
            </h1>

            <div className="flex pl-[40px] gap-[20px]">
              {categories && categories.length > 0 ? (
                categories.map((category, index) => {
                  const matchedRate = rates.find(
                    (rate) => rate.categoryId?._id === category?._id
                  );

                  return (
                    <div key={index} className="flex gap-[20px] font-Poppins">
                      <p>
                        <span>{category.name} </span>
                        {matchedRate ? `= ${matchedRate.price}` : "= 0"}
                      </p>
                      {index !== categories.length - 1 && (
                        <span className="text-[#ff8000]">||</span>
                      )}
                    </div>
                  );
                })
              ) : (
                <p className="text-[#9f9e9e] font-Poppins">No categories available</p>
              )}
            </div>

          </div>

          <div className=" items-center   w-fit pr-[10px] flex gap-[20px]">
            <div className=" flex gap-[13px] items-center w-fit">
              <div ref={dropdownRef}>
                <i
                  className="fa-regular  text-[#3d3d3d] cursor-pointer text-[20px] fa-gear"
                  onClick={handleCaratModalOpen}
                ></i>
              </div>
            </div>
            <div className="  flex  items-center gap-[10px]">
              <div className=" flex w-[43px] ">
                <img
                  className=" flex w-[35px]   h-[35px] rounded-[100%] border-[1px] border-[#000]"
                  src={avter}
                />
              </div>

              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </section>

      <NextUIModal isOpen={CaratModalopen}>
        <ModalContent className=" md:max-w-[500px] shadow-none !bg-transparent h-[680px] ">
          {() => (
            <>

              <div className="relative w-[100%] md:max-w-[450px] mt-[10px]   bg-white max-w-[300px] rounded-2xl z-[100] flex justify-center !py-0 mx-auto  h-[460px]">
                <div
                  className=" absolute right-[-13px]  top-[-14px]  flex gap-[5px]  z-[300] items-center cursor-pointer py-[5px]  border-red rounded-bl-[8px] px-[5px]"
                  onClick={handleCaratModalClose}
                >
                  <i className=" text-[30px] text-[red] shadow-delete-icon bg-white   rounded-full fa-solid fa-circle-xmark"></i>

                </div>
                <div className="relative  w-[100%] h-[100%]">
                  <div className="w-[100%] flex  flex-col">
                    <div className=" flex flex-col mt-[10px]">
                      <div className=" mx-auto  text-[#081a21] justify-center flex text-[23px] font-[500]  font-Poppins ">
                        <p>Add Carat Rate</p>
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
                  </div>
                  <div className=" flex flex-col gap-[20px]">
                    <div className="  px-[30px]  mt-[30px]  items-center gap-[20px]  flex-col  font-Poppins flex  w-[100%] ">
                      {categories?.map((item, index) => (
                        <>
                          <div className=" flex items-center  justify-between  gap-[px] w-[100%]">
                            <p key={index} className=" text-[#122f97] text-[20px] flex  ">
                              {item?.name}
                            </p>

                            <i className="fa-solid fa-equals"></i>
                            <div className="relative w-[50%]   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">

                              <label
                                htmlFor=""
                                className={`bg-white px-1 absolute left-[15px] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-sm sm:text-base capitalize transition-all duration-200 ${nameFocused
                                  ? "-translate-y-[50%] text-black text-xs"
                                  : "  -translate-y-[-30%] cursor-text  text-[#9f9e9e] text-xs"
                                  }`}
                              >
                                Rate
                              </label>

                              <input
                                type="number"
                                name="price"
                                id=""
                                placeholder={nameFocused ? "" : ""}
                                value={categoryRates[item._id] || ""}
                                onChange={(e) =>
                                  handleRateChange(item._id, e.target.value)
                                }
                                className="w-full outline-none text-[15px] text-[#000] font-Poppins font-[400] bg-transparent"
                                onFocus={() => setNameFocused(true)}
                                onBlur={(e) => setNameFocused(e.target.value !== "")}
                              />
                            </div>
                          </div>
                        </>
                      ))}
                    </div>

                  </div>
                  <button className=" flex justify-center font-Poppins items-center text-[19px] bs-spj w-[90%] mx-auto py-[6px]  rounded-lg font-[500] text-[#fff] absolute right-0 left-0 bottom-5"
                    onClick={handleSaveRates}>
                    Save
                  </button>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </NextUIModal>
    </>
  );
}