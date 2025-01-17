import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../Component/sidebar/SideBar";
import Header from "../../../Component/header/Header";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getCategroyAction, getGroupItemAction, getMetalAction } from "../../../redux/action/landingManagement";

export default function LabourSetting() {
  const [labourModalopen, setlabourModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [dropdownOpenMetal, setDropdownOpenMetal] = useState(false);
  const [selectedTypeMetal, setSelectedTypeMetal] = useState("");
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [selectedTypeCategory, setSelectedTypecategory] = useState("");
  const dropdownRef = useRef(null);
  const dropdownMetalRef = useRef(null);
  const dropdownCategoryRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false); 
  const [formData, setFormData] = useState({
    carat: "Default Carat",
    metal: "Default Metal",
    category: "Default Category",
    minWeight: 0,
    maxWeight: 100,
    rate: 50,
  });

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.landing.getAllCategory);
  const metals = useSelector((state) => state.landing.getMetal);
  const item = useSelector((state) => state.landing.getGroupItem);

  useEffect(() => {
    dispatch(getCategroyAction());
    dispatch(getMetalAction());
    dispatch(getGroupItemAction());
  }, [dispatch]);

  const handleSelect = (type) => {
    setSelectedType(type);
    setDropdownOpen(false);
  };

  const handleSelectMetal = (type) => {
    setSelectedTypeMetal(type);
    setDropdownOpenMetal(false);
  };

  const handleSelectCategory = (type) => {
    setSelectedTypecategory(type);
    setDropdownOpenCategory(false);
  };

  const handleModalclose = () => {
    setlabourModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        dropdownMetalRef.current &&
        !dropdownMetalRef.current.contains(event.target)
      ) {
        setDropdownOpenMetal(false);
      }
      if (
        dropdownCategoryRef.current &&
        !dropdownCategoryRef.current.contains(event.target)
      ) {
        setDropdownOpenCategory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false); 
    console.log("Saved Data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Labour Setting" />
          <div className="flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className="flex w-[100%] max-h-[93%] pb-[20px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
              <div className="flex flex-col gap-[15px] w-[100%]">
                <div className="  flex  flex-col gap-[20px]  w-[100%] ">
                  <div className=" flex  gap-[15px]  relative px-[15px] j rounded-[10px] py-[0px]  w-[100%]">
                    <div className=" flex  gap-[20px] ">
                      <div className=" flex flex-col gap-[10px] overflow-hidden w-[400px]">
                        <h2 className=" text-[#0099dd] flex justify-center rounded-tr-[2px] rounded-br-[30px] rounded-tl-[2px] rounded-bl-[30px] bs-spj text-[#fff] py-[6px] font-[500] text-[20px] font-Poppins pl-[6px]">
                          Uchak
                        </h2>
                        <div className=" flex gap-[25px] h-] overflow-y-auto overflow-x-hidden flex-col   relative  px-[19px] w-[100%] ">
                          <div className=" flex border-[1px] flex-col gap-[14px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpen((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type"
                                    id="type"
                                    value={selectedType}
                                    placeholder="Select Carat"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpen
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypes.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => handleSelect(type)}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenMetal((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type1"
                                    id="type1"
                                    value={selectedTypeMetal}
                                    placeholder="Select Metal"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenMetal
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenMetal && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesMetal.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectMetal(type);
                                            setDropdownOpenMetal(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenCategory((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type1"
                                    id="type1"
                                    value={selectedTypeCategory}
                                    placeholder="Select Category"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenCategory
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenCategory && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesCategory.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectCategory(type);
                                            setDropdownOpenCategory(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                          
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Min-Weight"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Max-Weight"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <div className=" flex-col flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Rate
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Rate"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins">
                              Save
                            </button>
                          </div>
                          {isEditing ? (
                            // Editable Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                              <div className=" flex w-[100%] fle  gap-[5px]">
                                <div
                                  ref={dropdownRef}
                                  className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Carat
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpen((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type"
                                      id="type"
                                      value={selectedType}
                                      placeholder="Select Carat"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpen
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpen && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypes.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => handleSelect(type)}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                <div
                                  ref={dropdownMetalRef}
                                  className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Metal
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpenMetal((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeMetal}
                                      placeholder="Select Metal"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenMetal
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenMetal && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypesMetal.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => {
                                              handleSelectMetal(type);
                                              setDropdownOpenMetal(false);
                                            }}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                                </div>
                                <div
                                  ref={dropdownCategoryRef}
                                  className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Category
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpenCategory((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeCategory}
                                      placeholder="Select Category"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenCategory
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenCategory && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypesCategory.map(
                                          (type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() => {
                                                handleSelectCategory(type);
                                                setDropdownOpenCategory(false);
                                              }}
                                            >
                                              {type}
                                            </div>
                                          )
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                           
                              <div className=" flex gap-[20px] w-[100%]">
                                <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Min-Weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Min-Weight"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                                <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Max-weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Max-Weight"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                              </div>
                              <div className=" flex-col flex gap-[20px] ">
                                <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Rate
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Rate"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                              </div>
                              <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"     onClick={handleSave}>
                                Save
                              </button>
                              </div>
                            </>
                          ) : (
                            // Static Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">

                          <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#009dd1]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                          <i className="fa-solid cursor-pointer fa-pen-to-square" onClick={handleEdit}></i>
                          <i className="fa-solid cursor-pointer text-[#f00] fa-trash"></i>
                          </div>
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                        
                                >
                                          <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.carat}</p>
                                </div>
                           
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                            
                                >
                                               <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.metal}</p>
                                  
                                </div>
             
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  h-[40px] flex items-center space-x-4 text-[#00000099] cursor-pointer"
                             
                                >
                                                <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.carat}</p>
                                </div>
                          
                              </div>
                 
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{formData.minWeight}    </p>
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{formData.maxWeight}</p>
                              </div>
                            </div>
                            <div className=" flex-c ol flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Rate
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins"> {formData.rate}</p>
                              </div>
                            </div>
                          </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className=" flex flex-col gap-[10px] overflow-hidden w-[400px]">
                        <h2 className=" text-[#0099dd] flex justify-center rounded-tr-[2px] rounded-br-[30px] rounded-tl-[2px] rounded-bl-[30px] bs-spj text-[#fff] py-[6px] font-[500] text-[20px] font-Poppins pl-[6px]">
                          PerGram
                        </h2> 
                        <div className=" flex gap-[25px] h-] overflow-y-auto overflow-x-hidden flex-col   relative  px-[19px] w-[100%] ">
                          <div className=" flex border-[1px] flex-col gap-[14px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpen((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type"
                                    id="type"
                                    value={selectedType}
                                    placeholder="Select Carat"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpen
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypes.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => handleSelect(type)}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenMetal((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type1"
                                    id="type1"
                                    value={selectedTypeMetal}
                                    placeholder="Select Metal"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenMetal
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenMetal && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesMetal.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectMetal(type);
                                            setDropdownOpenMetal(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenCategory((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type1"
                                    id="type1"
                                    value={selectedTypeCategory}
                                    placeholder="Select Category"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenCategory
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenCategory && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesCategory.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectCategory(type);
                                            setDropdownOpenCategory(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                          
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Min-Weight"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Max-Weight"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <div className=" flex-col flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Rate"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins">
                              Save
                            </button>
                          </div>
                          {/* <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">

                          <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#009dd1]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                          <i class="fa-solid cursor-pointer fa-pen-to-square"></i>
                          <i class="fa-solid cursor-pointer text-[#f00] fa-trash"></i>
                          </div>
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpen((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                      
                                </div>
                           
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenMetal((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                
                                  
                                </div>
             
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  h-[40px] flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenCategory((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                 
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenCategory && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesCategory.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectCategory(type);
                                            setDropdownOpenCategory(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                              </div>
                            </div>
                            <div className=" flex-c ol flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Rate
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                              </div>
                            </div>
                          </div> */}

                          {isEditing ? (
                            // Editable Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                              <div className=" flex w-[100%] fle  gap-[5px]">
                                <div
                                  ref={dropdownRef}
                                  className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Carat
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpen((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type"
                                      id="type"
                                      value={selectedType}
                                      placeholder="Select Carat"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpen
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpen && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypes.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => handleSelect(type)}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                <div
                                  ref={dropdownMetalRef}
                                  className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Metal
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpenMetal((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeMetal}
                                      placeholder="Select Metal"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenMetal
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenMetal && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypesMetal.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => {
                                              handleSelectMetal(type);
                                              setDropdownOpenMetal(false);
                                            }}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                                </div>
                                <div
                                  ref={dropdownCategoryRef}
                                  className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Category
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpenCategory((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeCategory}
                                      placeholder="Select Category"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenCategory
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenCategory && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypesCategory.map(
                                          (type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() => {
                                                handleSelectCategory(type);
                                                setDropdownOpenCategory(false);
                                              }}
                                            >
                                              {type}
                                            </div>
                                          )
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                           
                              <div className=" flex gap-[20px] w-[100%]">
                                <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Min-Weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Min-Weight"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                                <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Max-weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Max-Weight"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                              </div>
                              <div className=" flex-col flex gap-[20px] ">
                                <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Rate"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                              </div>
                              <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"     onClick={handleSave}>
                                Save
                              </button>
                              </div>
                            </>
                          ) : (
                            // Static Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">

                          <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#009dd1]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                          <i class="fa-solid cursor-pointer fa-pen-to-square" onClick={handleEdit}></i>
                          <i class="fa-solid cursor-pointer text-[#f00] fa-trash"></i>
                          </div>
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                        
                                >
                                          <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.carat}</p>
                                </div>
                           
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                            
                                >
                                               <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.metal}</p>
                                  
                                </div>
             
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  h-[40px] flex items-center space-x-4 text-[#00000099] cursor-pointer"
                             
                                >
                                                <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.carat}</p>
                                </div>
                          
                              </div>
                 
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{formData.minWeight}    </p>
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{formData.maxWeight}</p>
                              </div>
                            </div>
                            <div className=" flex-c ol flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                 <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins"> {formData.rate}</p>
                              </div>
                            </div>
                          </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className=" flex flex-col gap-[10px] overflow-hidden w-[400px]">
                        <h2 className=" text-[#0099dd] flex justify-center rounded-tr-[2px] rounded-br-[30px] rounded-tl-[2px] rounded-bl-[30px] bs-spj text-[#fff] py-[6px] font-[500] text-[20px] font-Poppins pl-[6px]">
                          Percentege
                        </h2>
                        <div className=" flex gap-[25px] h-] overflow-y-auto overflow-x-hidden flex-col   relative  px-[19px] w-[100%] ">
                          <div className=" flex border-[1px] flex-col gap-[14px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpen((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type"
                                    id="type"
                                    value={selectedType}
                                    placeholder="Select Carat"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpen
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypes.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => handleSelect(type)}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenMetal((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type1"
                                    id="type1"
                                    value={selectedTypeMetal}
                                    placeholder="Select Metal"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenMetal
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenMetal && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesMetal.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectMetal(type);
                                            setDropdownOpenMetal(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenCategory((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type1"
                                    id="type1"
                                    value={selectedTypeCategory}
                                    placeholder="Select Category"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenCategory
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenCategory && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesCategory.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectCategory(type);
                                            setDropdownOpenCategory(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                          
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Min-Weight"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Max-Weight"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <div className=" flex-col flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Percentege
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Rate"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins">
                              Save
                            </button>
                          </div>
            

                          {isEditing ? (
                            // Editable Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                              <div className=" flex w-[100%] fle  gap-[5px]">
                                <div
                                  ref={dropdownRef}
                                  className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Carat
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpen((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type"
                                      id="type"
                                      value={selectedType}
                                      placeholder="Select Carat"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpen
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpen && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypes.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => handleSelect(type)}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                <div
                                  ref={dropdownMetalRef}
                                  className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Metal
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpenMetal((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeMetal}
                                      placeholder="Select Metal"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenMetal
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenMetal && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypesMetal.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => {
                                              handleSelectMetal(type);
                                              setDropdownOpenMetal(false);
                                            }}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                                </div>
                                <div
                                  ref={dropdownCategoryRef}
                                  className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Category
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpenCategory((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeCategory}
                                      placeholder="Select Category"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenCategory
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenCategory && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypesCategory.map(
                                          (type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() => {
                                                handleSelectCategory(type);
                                                setDropdownOpenCategory(false);
                                              }}
                                            >
                                              {type}
                                            </div>
                                          )
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                           
                              <div className=" flex gap-[20px] w-[100%]">
                                <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Min-Weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Min-Weight"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                                <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Max-weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Max-Weight"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                              </div>
                              <div className=" flex-col flex gap-[20px] ">
                                <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Percentege
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Rate"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                              </div>
                              <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"     onClick={handleSave}>
                                Save
                              </button>
                              </div>
                            </>
                          ) : (
                            // Static Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">

                          <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#009dd1]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                          <i class="fa-solid cursor-pointer fa-pen-to-square" onClick={handleEdit}></i>
                          <i class="fa-solid cursor-pointer text-[#f00] fa-trash"></i>
                          </div>
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                        
                                >
                                          <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.carat}</p>
                                </div>
                           
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                            
                                >
                                               <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.metal}</p>
                                  
                                </div>
             
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  h-[40px] flex items-center space-x-4 text-[#00000099] cursor-pointer"
                             
                                >
                                                <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.carat}</p>
                                </div>
                          
                              </div>
                 
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{formData.minWeight}    </p>
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{formData.maxWeight}</p>
                              </div>
                            </div>
                            <div className=" flex-c ol flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Percentege
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins"> {formData.rate}</p>
                              </div>
                            </div>
                          </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* <div className=" flex flex-col gap-[10px] overflow-hidden w-[400px]">
                        <h2 className=" text-[#0099dd] flex justify-center rounded-tr-[2px] rounded-br-[30px] rounded-tl-[2px] rounded-bl-[30px] bs-spj text-[#fff] py-[6px] font-[500] text-[20px] font-Poppins pl-[6px]">
                Weight
                        </h2>
                        <div className=" flex gap-[15px] h-[74vh] overflow-y-auto overflow-x-hidden flex-col   relative  px-[19px] w-[100%] ">
                          <div className=" flex border-[1px] flex-col gap-[14px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpen((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type"
                                    id="type"
                                    value={selectedType}
                                    placeholder="Select Carat"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpen
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypes.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => handleSelect(type)}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenMetal((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type1"
                                    id="type1"
                                    value={selectedTypeMetal}
                                    placeholder="Select Metal"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenMetal
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenMetal && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesMetal.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectMetal(type);
                                            setDropdownOpenMetal(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenCategory((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="type1"
                                    id="type1"
                                    value={selectedTypeCategory}
                                    placeholder="Select Category"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenCategory
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenCategory && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {firmTypesCategory.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectCategory(type);
                                            setDropdownOpenCategory(false);
                                          }}
                                        >
                                          {type}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                          
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Min-Weight"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Max-Weight"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <div className=" flex-col flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Rate
                                </label>
                                <input
                                  type="Number"
                                  placeholder="Enter Rate"
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins">
                              Save
                            </button>
                          </div>
                        

                          {isEditing ? (
                            // Editable Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                              <div className=" flex w-[100%] fle  gap-[5px]">
                                <div
                                  ref={dropdownRef}
                                  className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Carat
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpen((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type"
                                      id="type"
                                      value={selectedType}
                                      placeholder="Select Carat"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpen
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpen && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypes.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => handleSelect(type)}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                <div
                                  ref={dropdownMetalRef}
                                  className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Metal
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpenMetal((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeMetal}
                                      placeholder="Select Metal"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenMetal
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenMetal && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypesMetal.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => {
                                              handleSelectMetal(type);
                                              setDropdownOpenMetal(false);
                                            }}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                                </div>
                                <div
                                  ref={dropdownCategoryRef}
                                  className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="name"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Category
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setDropdownOpenCategory((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeCategory}
                                      placeholder="Select Category"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenCategory
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenCategory && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {firmTypesCategory.map(
                                          (type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() => {
                                                handleSelectCategory(type);
                                                setDropdownOpenCategory(false);
                                              }}
                                            >
                                              {type}
                                            </div>
                                          )
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                           
                              <div className=" flex gap-[20px] w-[100%]">
                                <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Min-Weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Min-Weight"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                                <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Max-weight
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Max-Weight"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                              </div>
                              <div className=" flex-col flex gap-[20px] ">
                                <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                  <label
                                    htmlFor="email"
                                    className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                  >
                                    Rate
                                  </label>
                                  <input
                                    type="Number"
                                    placeholder="Enter Rate"
                                    className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                    autocomplete="naqsme"
                                  />
                                </div>
                              </div>
                              <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"     onClick={handleSave}>
                                Save
                              </button>
                              </div>
                            </>
                          ) : (
                            // Static Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">

                          <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#009dd1]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                          <i class="fa-solid cursor-pointer fa-pen-to-square" onClick={handleEdit}></i>
                          <i class="fa-solid cursor-pointer text-[#f00] fa-trash"></i>
                          </div>
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Carat
                                </label>
                                <div
                                  className="relative w-full  rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                        
                                >
                                          <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.carat}</p>
                                </div>
                           
                              </div>

                              <div
                                ref={dropdownMetalRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                            
                                >
                                               <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.metal}</p>
                                  
                                </div>
             
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryRef}
                                className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="name"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Category
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  h-[40px] flex items-center space-x-4 text-[#00000099] cursor-pointer"
                             
                                >
                                                <p className=" text-[15px]    py-[9px] font-Poppins"> {formData.carat}</p>
                                </div>
                          
                              </div>
                 
                            <div className=" flex gap-[20px] w-[100%]">
                              <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Min-Weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{formData.minWeight}    </p>
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{formData.maxWeight}</p>
                              </div>
                            </div>
                            <div className=" flex-c ol flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Rate
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins"> {formData.rate}</p>
                              </div>
                            </div>
                          </div>
                            </>
                          )}
                        </div>
                      </div> */}












                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextUIModal isOpen={labourModalopen}>
        <ModalContent className="md:max-w-[1400px] max-w-[1300px] relative overflow-y-auto   rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[650px]  ">
          {() => (
            <>
              <div className="relative w-[100%] h-[100%] ">
                <div className="relative  w-[100%] h-[100%]">
                  <div className="w-[100%] flex  flex-col">
                    <div
                      className=" absolute  flex gap-[5px] items-center cursor-pointer py-[5px] border-b-[1px] border-l-[1px] border-red rounded-bl-[8px] px-[5px] right-0"
                      onClick={handleModalclose}
                    >
                      <i className=" text-[20px] text-[red] shadow-delete-icon rounded-full fa-solid fa-circle-xmark"></i>
                      <p className=" font-Poppins">Close</p>
                    </div>
                    <div className=" flex flex-col mt-[10px]">
                      <div className=" mx-auto  text-[#081a21] justify-center flex text-[28px] font-[500]  font-Poppins ">
                        <p>Add Labour Rate</p>
                      </div>
                      <div className=" flex mt-[0px] mx-auto j">
                        <div className="flex items-center gap-3">
                          <div className="h-[2px] w-24 md:w-32 bg-[#0099dd]" />
                          <div className="w-2 h-2 rounded-full bg-[#0099dd]" />
                        </div>

                        <i class="fa-solid fa-xmark text-[#0099dd] mx-[10px]"></i>
                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#0099dd]" />
                          <div className="h-[2px] w-24 md:w-32 bg-[#0099dd]" />
                        </div>
                      </div>
                    </div>

                    <div className=" flex justify-between  px-[25px] mt-[20px] w-[100%]">
                      <div className="flex w-[100%] flex-col  mb-[20px] gap-[14px]">
                        <div className=" flex w-[100%]  gap-[30px]">
                          <div
                            ref={dropdownRef}
                            className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                          >
                            <label
                              htmlFor="name"
                              className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                            >
                              Carat
                            </label>
                            <div
                              className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                              onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown on click
                            >
                              <input
                                type="text"
                                name="type"
                                id="type"
                                value={selectedType}
                                placeholder="Select Carat"
                                className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                readOnly
                              />
                              <i
                                className={
                                  dropdownOpen
                                    ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                    : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                }
                              ></i>
                            </div>
                            <AnimatePresence>
                              {dropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute top-[90%]  mt-1 bg-white w-[140px] border border-[#dedede] rounded-lg shadow-md z-10"
                                >
                                  {firmTypes.map((type, index) => (
                                    <div
                                      key={index}
                                      className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                      onClick={() => handleSelect(type)}
                                    >
                                      {type}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div
                            ref={dropdownMetalRef}
                            className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                          >
                            <label
                              htmlFor="name"
                              className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                            >
                              Metal
                            </label>
                            <div
                              className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                              onClick={() =>
                                setDropdownOpenMetal((prev) => !prev)
                              } // Toggle dropdown on click
                            >
                              <input
                                type="text"
                                name="type1"
                                id="type1"
                                value={selectedTypeMetal}
                                placeholder="Select Metal"
                                className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                readOnly
                              />
                              <i
                                className={
                                  dropdownOpenMetal
                                    ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                    : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                }
                              ></i>
                            </div>
                            <AnimatePresence>
                              {dropdownOpenMetal && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                >
                                  {firmTypesMetal.map((type, index) => (
                                    <div
                                      key={index}
                                      className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                      onClick={() => {
                                        handleSelectMetal(type);
                                        setDropdownOpenMetal(false);
                                      }}
                                    >
                                      {type}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <div
                            ref={dropdownCategoryRef}
                            className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                          >
                            <label
                              htmlFor="name"
                              className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                            >
                              Category
                            </label>
                            <div
                              className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                              onClick={() =>
                                setDropdownOpenCategory((prev) => !prev)
                              } // Toggle dropdown on click
                            >
                              <input
                                type="text"
                                name="type1"
                                id="type1"
                                value={selectedTypeCategory}
                                placeholder="Select Category"
                                className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                readOnly
                              />
                              <i
                                className={
                                  dropdownOpenCategory
                                    ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                    : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                }
                              ></i>
                            </div>
                            <AnimatePresence>
                              {dropdownOpenCategory && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                >
                                  {firmTypesCategory.map((type, index) => (
                                    <div
                                      key={index}
                                      className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                      onClick={() => {
                                        handleSelectCategory(type);
                                        setDropdownOpenCategory(false);
                                      }}
                                    >
                                      {type}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        <div className=" flex  justify-center mx-auto">
                          <div className=" w-[100%] flex flex-col">
                            <h2 className=" text-[#0099dd] font-[500] text-[20px] font-Poppins pl-[6px]">
                              Uchak
                            </h2>
                            <div className=" flex flex-wrap gap-[25px]">
                              <div className=" flex border-[1px] flex-col gap-[13px] w-[400px] py-[15px] px-[15px] rounded-[8px] border-[#0099dd]">
                                <div className=" flex gap-[20px] w-[100%]">
                                  <div className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Min-weight
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Min-weight"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                  <div className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Max-weight
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Max-weight"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <div className=" flex-col flex gap-[20px] ">
                                  <div className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Rate
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Rate"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <button className=" flex justify-center font-[500]   items-center text-[#fff] py-[5px] text-[18px]  rounded-md font-Poppins w-[100%] mx-auto bs-spj">
                                  Save
                                </button>
                              </div>
                              <div className=" flex border-[1px] flex-col gap-[15px] w-[400px] py-[15px] px-[15px] rounded-[8px] border-[#0099dd]">
                                <div className=" flex gap-[20px] w-[100%]">
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Min-weight
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                  <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Max-weight
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                </div>
                                <div className=" flex-col flex gap-[20px] ">
                                  <div className="relative w-full  h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1  absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Rate
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                </div>
                                <div className="  gap-[10px] flex">
                                  <button className=" flex justify-center  font-[500] items-center text-[#fff] py-[5px] text-[18px]  rounded-md font-Poppins w-[100%] mx-auto bs-spj">
                                    Edit
                                  </button>
                                  <div className=" cursor-pointer  flex justify-center   rounded-[5px]  bg-[#ff2222] items-center w-[50px] h-0px]">
                                    <i className="fa-solid text-[19px] text-[#fff] fa-trash"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" w-[100%] flex flex-col">
                            <h2 className=" text-[#0099dd] font-[500] text-[20px] font-Poppins pl-[6px]">
                              Weight
                            </h2>
                            <div className=" flex flex-wrap gap-[25px]">
                              <div className=" flex border-[1px] flex-col gap-[13px] w-[400px] py-[15px] px-[15px] rounded-[8px] border-[#0099dd]">
                                <div className=" flex gap-[20px] w-[100%]">
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Min-weight
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Min-weight"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Max-weight
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Max-weight"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <div className=" flex-col flex gap-[20px] ">
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Weight
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Weight"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <button className=" flex justify-center font-[500]   items-center text-[#fff] py-[5px] text-[18px]  rounded-md font-Poppins w-[100%] mx-auto bs-spj">
                                  Save
                                </button>
                              </div>
                              <div className=" flex border-[1px] flex-col gap-[15px] w-[400px] py-[15px] px-[15px] rounded-[8px] border-[#0099dd]">
                                <div className=" flex gap-[20px] w-[100%]">
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Min-weight
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                  <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Max-weight
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                </div>
                                <div className=" flex-col flex gap-[20px] ">
                                  <div className="relative w-full  h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1  absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Weight
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                </div>
                                <div className="  gap-[10px] flex">
                                  <button className=" flex justify-center  font-[500] items-center text-[#fff] py-[5px] text-[18px]  rounded-md font-Poppins w-[100%] mx-auto bs-spj">
                                    Edit
                                  </button>
                                  <div className=" cursor-pointer  flex justify-center   rounded-[5px]  bg-[#ff2222] items-center w-[50px] h-0px]">
                                    <i className="fa-solid text-[19px] text-[#fff] fa-trash"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" w-[100%] flex flex-col">
                            <h2 className=" text-[#0099dd] font-[500] text-[20px] font-Poppins pl-[6px]">
                              Percentege
                            </h2>
                            <div className=" flex flex-wrap gap-[25px]">
                              <div className=" flex border-[1px] flex-col gap-[13px] w-[400px] py-[15px] px-[15px] rounded-[8px] border-[#0099dd]">
                                <div className=" flex gap-[20px] w-[100%]">
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Min-weight
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Min-weight"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Max-weight
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Max-weight"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <div className=" flex-col flex gap-[20px] ">
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Percentege
                                    </label>
                                    <input
                                      type="Number"
                                      placeholder="Enter Rate"
                                      className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <button className=" flex justify-center font-[500]   items-center text-[#fff] py-[5px] text-[18px]  rounded-md font-Poppins w-[100%] mx-auto bs-spj">
                                  Save
                                </button>
                              </div>
                              <div className=" flex border-[1px] flex-col gap-[15px] w-[400px] py-[15px] px-[15px] rounded-[8px] border-[#0099dd]">
                                <div className=" flex gap-[20px] w-[100%]">
                                  <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Min-weight
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                  <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Max-weight
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                </div>
                                <div className=" flex-col flex gap-[20px] ">
                                  <div className="relative w-full  h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="email"
                                      className="bg-white px-1  absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                    >
                                      Percentege
                                    </label>
                                    <p className=" text-[15px]   py-[9px] font-Poppins"></p>
                                  </div>
                                </div>
                                <div className="  gap-[10px] flex">
                                  <button className=" flex justify-center  font-[500] items-center text-[#fff] py-[5px] text-[18px]  rounded-md font-Poppins w-[100%] mx-auto bs-spj">
                                    Edit
                                  </button>
                                  <div className=" cursor-pointer  flex justify-center   rounded-[5px]  bg-[#ff2222] items-center w-[50px] h-0px]">
                                    <i className="fa-solid text-[19px] text-[#fff] fa-trash"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button className=" flex justify-center mt-[40px] items-center text-[#fff] py-[5px] text-[23px]  rounded-md font-Poppins w-[93%] mx-auto bs-spj">
                    Add Stock
                  </button> */}
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </NextUIModal>
    </>
  );
}
