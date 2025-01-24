import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";

export default function NonBerCode() {
    const [stockModalopen, setStockModalOpen] = useState(false);
  const [tilescategories, setTilescategories] = useState([]);
  const [tilescategoryName, setTilescategoryName] = useState("");
  const [isTilescategoryInputVisible, setTilescategoryInputVisible] =
    useState(false);
  const [editingTilescategoryIndex, setEditingTilescategoryIndex] =
    useState(null);
  const [editTilescategoryName, setEditTilescategoryName] = useState("");

  const [selectedTilescategoryIndex, setSelectedTilescategoryIndex] =
    useState(null);


  const tilescategoryInputRef = useRef(null);
  const [selectedType, setSelectedType] = useState("");

  const [caratFocused, setCaratFocused] = useState(false);
  const [metalFocused, setMetalFocused] = useState(false);
  const [categoryFocused, setCategoryFocused] = useState(false);
  const [grossFocused, setGrossFocused] = useState(false);
  const [lossFocused, setLossFocused] = useState(false);
  const [wastageFocused, setWastegeFocused] = useState(false);

  const handleAddTilescategory = () => {
    if (!tilescategoryName.trim()) {
      alert("Subcategory name cannot be empty.");
      return;
    }

    setTilescategories((prevSubcategories) => [
      ...prevSubcategories,
      { id: new Date().getTime(), tilescategoryName },
    ]);
    setTilescategoryName("");
    setTilescategoryInputVisible(false);
  };

  const handleSaveEditTilescategory = (index) => {
    if (!editTilescategoryName.trim()) {
      alert("Subcategory name cannot be empty.");
      return;
    }

    setTilescategories((prevSubcategories) =>
      prevSubcategories.map((item, idx) =>
        idx === index ? { ...item, subcategoryName: setTilescategories } : item
      )
    );
    setEditingTilescategoryIndex(null);
    setEditTilescategoryName("");
  };

  const handleDeleteTilescategory = (id) => {
    setTilescategories((prevTilescategories) =>
      prevTilescategories.filter((item) => item.id !== id)
    );
  };
  const dropdownRef = useRef(null);
  const dropdownMetalRef = useRef(null);
  const dropdownCategoryRef = useRef(null);
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


  const handleStockModal = () => {
    setStockModalOpen(true);
  };


  const handleStockModalClose = () => {
    setStockModalOpen(false);
  };



  return (
    <>
      <div className="flex flex-col gap-[25px] w-[100%]">
        <div className="flex flex-col gap-[6px] w-[100%]">
          <div>Categories</div>
          <div className="flex flex-wrap   gap-[20px]">
            <div className="flex gap-[15px]">
              {!isTilescategoryInputVisible ? (
                <div className="flex">
                  <div
                    onClick={() => setTilescategoryInputVisible(true)}
                    className="border-[1px] border-dashed border-[#122f97] cursor-pointer md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] h-[43px] flex justify-center items-center rounded-[8px] cursor-point"
                  >
                    <i className="text-[20px] font-[800] text-[#122f97] fa-solid fa-plus"></i>
                  </div>
                </div>
              ) : (
                <div
                  ref={tilescategoryInputRef}
                  className="border-[1px] overflow-hidden border-dashed border-[#122f97] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] h-[43px] flex justify-center items-center rounded-[8px] cursor-point"
                >
                  <input
                    type="text"
                    name="subcategoryName"
                    value={tilescategoryName}
                    onChange={(e) => setTilescategoryName(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleAddTilescategory()
                    }
                    placeholder="Enter Subcategory Name"
                    className="px-[10px] outline-none font-Poppins  h-[100%] py-[5px] md150:w-[120px] w-[120px]"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {Array.isArray(tilescategories) && tilescategories.length > 0 ? (
              tilescategories.map((item, index) => (
                <div
                  key={item.id}
                  className={`px-[10px] font-Poppins  over w-[150px] justify-center items-center border-[1.1px] border-[#122f97] rounded-[6px] flex gap-[10px] h-[43px] 
                        
                        
                          bg-white text-[#122f97] "
                      `}
                  onClick={() => setSelectedTilescategoryIndex(index)}
                  onDoubleClick={() => {
                    setEditingTilescategoryIndex(index);
                    setEditTilescategoryName(item.subcategoryName);
                  }}
                >
                  {editingTilescategoryIndex === index ? (
                    <div className="flex flex-col" ref={tilescategoryInputRef}>
                      <input
                        type="text"
                        value={editTilescategoryName}
                        onChange={(e) =>
                          setEditTilescategoryName(e.target.value)
                        }
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          handleSaveEditTilescategory(index)
                        }
                        className="w-[140px] h-[100%] mt-[35px] border-none outline-none"
                        autoFocus
                      />
                      <button
                        className="text-red-500 hover:bg-red-100 bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px] font-Montserrat cursor-pointer mx-auto"
                        onClick={() => handleDeleteTilescategory(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <p className="text-[#000000] flex w-fit gap-[5px] cursor-pointer items-center">
                      {item.tilescategoryName}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-[#fff] font-Poppins">
                No Tiles categories Available
              </p>
            )}
          </div>

          <div className=" flex  justify-end w-[100%]">
            <button className=" flex  w-[130px] font-Poppins items-center justify-center gap-[6px] py-[8px] rounded-[8px] text-[#fff] bs-spj " onClick={handleStockModal}>
              <i className="fa-solid fa-plus"></i>
              Add Stock
            </button>
          </div>
          <div className=" flex">
            <div className="w-full h-full  mx-auto rounded-[10px] border border-[#122f97]   relative">
              <div className="box-border border-[#122f97] relative overflow-hidden  w-full">
                <div className="sticky top-0 flex  bs-mix-green border-[#122f97] w-full overflow-hidden">
                  <div className="flex justify-center text-center gap-[7px] py-[10px] border-r border-b border-[#122f97]  items-center px-3 min-w-[4%] max-w-[4%]">
                    <input
                      type="checkbox"
                      id="check-all"
                      style={{ width: "15px", height: "15px" }}
                    />
                    <p className="w-fit  md11:text-[14px] md150:text-[18px] font-[600] text-[#000]  font-Poppins">
                      Sr.
                    </p>
                  </div>

                  <div className="flex justify-start text-center py-[10px] border-r border-b border-[#122f97]  px-3 min-w-[14%] max-w-[88%]">
                    <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                      Carat
                    </p>
                  </div>
                  <div className="flex justify-start text-center py-[10px] border-r border-b border-[#122f97]  px-3 min-w-[14%] max-w-[88%]">
                    <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                      Metal
                    </p>
                  </div>
                  <div className="flex justify-start text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]">
                    <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                      Category
                    </p>
                  </div>
                  <div className="flex justify-start text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[15%]">
                    <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000] ">
                      Product
                    </p>
                  </div>

                  <div className="flex justify-start text-center py-[10px] border-r border-b border-[#122f97]  px-3 min-w-[10%] max-w-[14%]">
                    <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                      Pcs
                    </p>
                  </div>
                  <div className="flex justify-center text-center py-2 border-b border-[#122f97]  px-3 min-w-[10%] max-w-[15%]">
                    <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                      N.Weight
                    </p>
                  </div>
                  <div className="flex justify-center text-center py-2 border-l border-b border-[#122f97]  px-3 min-w-[15%] max-w-[10%]">
                    <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                      Total Weight
                    </p>
                  </div>
                  <div className="flex justify-center text-center py-2 border-l border-b border-[#122f97]  px-3 min-w-[15%] max-w-[10%]">
                    <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                      Action
                    </p>
                  </div>
                </div>

                <div className="flex justify-between overflow-hidden">
                  <div className="flex justify-center items-center text-center py-[10px] border-r border-b border-[#122f97] gap-[7px] px-3 min-w-[4%] max-w-[4%]">
                    <input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                      className="ml-[-25%]"
                    />
                    <p className="font-[600] md11:text-[15px] md150:text-[17px] md11:mt-[5%] md150:mt-[2%]"></p>
                  </div>
                  <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]"></div>
                  <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]"></div>
                  <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]"></div>
                  <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[15%]"></div>
                  <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[10%] max-w-[14%]"></div>
                  <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[10.2%] max-w-[14%]"></div>

                  <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[15%] max-w-[14%]"></div>
                  <div className="flex justify-center gap-[10px] md11:items-center text-center py-[10px] border-b border-[#122f97] px-3 min-w-[5%] max-w-[14%]">
                    <i className="fa-solid text-[16px] cursor-pointer text-[#122f97] fa-pen-to-square"></i>
                    <i className="fa-solid text-[16px] cursor-pointer text-[#ff0c0c] fa-trash"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextUIModal isOpen={stockModalopen}>
        <ModalContent className="md:max-w-[760px] max-w-[760px] relative  bg-transparent shadow-none rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[410px]  ">
          {(handleModalclose) => (
            <>
              <div className="relative w-[100%] max-w-[730px] mt-[10px]   bg-white  rounded-2xl z-[100] flex justify-center !py-0 mx-auto  h-[92  %]">
                <div
                  className=" absolute right-[-13px]  top-[-13px]  flex gap-[5px]  z-[300] items-center cursor-pointer py-[5px]  border-red rounded-bl-[8px] px-[5px]"
                  onClick={handleStockModalClose}
                >
                  <i className=" text-[30px] text-[red] shadow-delete-icon bg-white   rounded-full fa-solid fa-circle-xmark"></i>
                </div>
                <div className="relative w-[100%] h-[100%] ">
                  <div className="relative  w-[100%] h-[100%]">
                    <div className="w-[100%] flex  flex-col">
                      <div className=" flex flex-col mt-[10px]">
                        <div className=" mx-auto  text-[#081a21] justify-center flex text-[28px] font-[500]  font-Poppins ">
                          <p>Add Stock</p>
                        </div>
                        <div className=" flex mt-[0px] mx-auto j">
                          <div className="flex items-center gap-3">
                            <div className="h-[2px] w-24 md:w-32 bg-[#122f97]" />
                            <div className="w-2 h-2 rounded-full bg-[#122f97]" />
                          </div>

                          <i className="fa-solid fa-xmark text-[#122f97] mx-[10px]"></i>
                      
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#122f97]" />
                            <div className="h-[2px] w-24 md:w-32 bg-[#122f97]" />
                          </div>
                        </div>
                      </div>

                      <div className=" flex justify-between  px-[25px] mt-[30px] w-[100%]">
                        <div className="flex w-[100%] flex-col gap-[25px]">
                          <div className=" flex w-[100%]  gap-[30px]">
                            <div
                              ref={dropdownRef}
                              className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                            >
                              <label
                                htmlFor="addstock"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                  selectedType || caratFocused
                                    ? "text-[#000] -translate-y-[21px] "
                                    : "text-[#8f8f8f] cursor-text"
                                }`}
                              >
                                Carat
                              </label>
                              <div
                                className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                onClick={() => setDropdownOpen((prev) => !prev)}
                              >
                                <input
                                  type="text"
                                  name="groupId"
                                  id="addstock"
                                  value={selectedType}
                                  onFocus={() => setCaratFocused(true)}
                                  onBlur={() => setCaratFocused(false)}
                                  className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                  readOnly
                                />
                                <i
                                  className={
                                    dropdownOpen
                                      ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                      : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                  }
                                ></i>
                              </div>
                              <AnimatePresence>
                                {dropdownOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-[90%]  mt-2  left-[-16px] bg-white w-[340px] border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {categories.map((type, index) => (
                                      <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => handleSelect(type?.name)}
                                      >
                                        {type?.name}
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
                                htmlFor="addstockMetal"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                  selectedTypeMetal || metalFocused
                                    ? "text-[#000] -translate-y-[21px] "
                                    : "text-[#8f8f8f] cursor-text"
                                }`}
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
                                  name="metalId"
                                  id="addstockMetal"
                                  value={selectedTypeMetal}
                                  onFocus={() => setMetalFocused(true)}
                                  onBlur={() => setMetalFocused(false)}
                                  className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                  readOnly
                                />
                                <i
                                  className={
                                    dropdownOpenMetal
                                      ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                      : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                  }
                                ></i>
                              </div>
                              <AnimatePresence>
                                {dropdownOpenMetal && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-[90%]  mt-2 bg-white left-[-16px] w-[340px] border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {metals.map((type, index) => (
                                      <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => {
                                          handleSelectMetal(type?.metalName);
                                          setDropdownOpenMetal(false);
                                        }}
                                      >
                                        {type?.metalName}
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <div className=" flex w-[100%]  gap-[30px]">
                            <div
                              ref={dropdownCategoryRef}
                              className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                            >
                              <label
                                htmlFor="addstockCategory"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                  selectedTypeCategory || categoryFocused
                                    ? "text-[#000] -translate-y-[21px] "
                                    : "text-[#8f8f8f] cursor-text"
                                }`}
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
                                  name="groupItemId"
                                  id="addstockCategory"
                                  value={selectedTypeCategory}
                                  onFocus={() => setCategoryFocused(true)}
                                  onBlur={() => setCategoryFocused(false)}
                                  className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                  readOnly
                                />
                                <i
                                  className={
                                    dropdownOpenCategory
                                      ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                      : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                  }
                                ></i>
                              </div>
                              <AnimatePresence>
                                {dropdownOpenCategory && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-[90%]  mt-2 bg-white left-[-16px] w-[340px] border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {item.map((type, index) => (
                                      <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => {
                                          handleSelectCategory(type?.itemName);
                                          setDropdownOpenCategory(false);
                                        }}
                                      >
                                        {type?.itemName}
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                       
                          </div>
                          <div className=" flex w-[100%]  gap-[30px]">
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                              <label
                                htmlFor="addstockLoss"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                  lessWeight || lossFocused
                                    ? "text-[#000] -translate-y-[21px] "
                                    : "text-[#8f8f8f] cursor-text"
                                }`}
                              >
                                L .Weight
                              </label>
                              <input
                                type="text"
                                id="addstockLoss"
                                name="lessWeight"
                                value={lessWeight}
                                onFocus={() => setLossFocused(true)}
                                onBlur={() => setLossFocused(false)}
                                onChange={(e) => setLessWeight(e.target.value)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>

                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                              <label
                                htmlFor="addstockWastage"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                  westage || wastageFocused
                                    ? "text-[#000] -translate-y-[21px] "
                                    : "text-[#8f8f8f] cursor-text"
                                }`}
                              >
                                Wastage
                              </label>
                              <input
                                type="text"
                                name="westage"
                                id="addstockWastage"
                                value={westage}
                                onFocus={() => setWastegeFocused(true)}
                                onBlur={() => setWastegeFocused(false)}
                                onChange={(e) => setWestage(e.target.value)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
                          </div>
                          <div className=" flex w-[48%]  gap-[30px]">
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                            <label
                              htmlFor="email"
                              className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                            >
                              Fine Weight
                            </label>
                            <input
                              type="Number"
                              placeholder="Enter Fine Weight"
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div>

                         <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                            <label
                              htmlFor="email"
                              className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                            >
                              Wastage
                            </label>
                            <input
                              type="Number"
                              placeholder="Enter Wastage"
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className=" flex justify-center mt-[10px] items-center text-[#fff] py-[5px] text-[23px]  rounded-md font-Poppins w-[93%] mx-auto bs-spj"
                      onClick={handleAddStock}
                    >
                      {selectedStock ? "Update Stock" : "Add Stock"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </NextUIModal>
    </>
  );
}
