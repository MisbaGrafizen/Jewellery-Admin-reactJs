import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import { addNonBarcodeCategoryAction, deleteNonBarcodeCategoryAction, deleteNonBarcodeProductAction, getAllNonBarcodeProductAction, getnonBarcodeCategroyAction, updateNonBarcodeCategoryAction } from "../../redux/action/landingManagement";

export default function NonBerCode() {
  const [deletemodalopen, setDeletemodalOpen] = useState(false);
  const [stockModalopen, setStockModalOpen] = useState(false);
  const [editingTilescategoryId, setEditingTilescategoryId] = useState(null);
  const [tilescategoryName, setTilescategoryName] = useState("");
  const [isTilescategoryInputVisible, setTilescategoryInputVisible] =
    useState(false);
  const [editingTilescategoryIndex, setEditingTilescategoryIndex] =
    useState(null);
  const [editTilescategoryName, setEditTilescategoryName] = useState("");

  const [selectedTilescategoryIndex, setSelectedTilescategoryIndex] =
    useState(null);
  const [ProductNameFocused, setProductNameFocused] = useState(false);
  const [ProductPcsFocused, setProductPcsFocused] = useState(false);
  const [netWeghtFocused, setNetWeightFocused] = useState(false);
  const [totalWeghtFocused, setTotalWeightFocused] = useState(false);
  const [deleteType, setDeleteType] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [designs, setDesigns] = useState([]);
  const [designName, setDesignName] = useState("");
  const [editingDesign, setEditingDesign] = useState(null);
  const [editDesignName, setEditDesignName] = useState("");
  const [editingDesignId, setEditingDesignId] = useState(null);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(0);
  const [isDesignInputVisible, setDesignInputVisible] = useState(null);


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const [dropdownOpenMetal, setDropdownOpenMetal] = useState(false);
  const [selectedTypeMetal, setSelectedTypeMetal] = useState("");
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [selectedTypeCategory, setSelectedTypecategory] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);


  const [productName, setProductName] = useState('');
  const [pcs, setPcs] = useState('');
  const [netWeight, setNetWeight] = useState('');
  const [toWeight, setToWeight] = useState('');

  const [caratFocused, setCaratFocused] = useState(false);
  const [metalFocused, setMetalFocused] = useState(false);
  const [categoryFocused, setCategoryFocused] = useState(false);


  const handleSelect = (type) => {
    setSelectedType(type);
    setDropdownOpen(false);
  };

  const handleDeleteOpen = (type, id) => {
    setDeleteType(type);
    setDeleteId(id);
    setDeletemodalOpen(true);
  };

  const handleDeleteClose = () => {
    setDeletemodalOpen(false);
    setDeleteType(null);
    setDeleteId(null);
  };


  const handleSelectMetal = (type) => {
    setSelectedTypeMetal(type);
    setDropdownOpenMetal(false);
  };

  const handleSelectCategory = (type) => {
    setSelectedTypecategory(type);
    setDropdownOpenCategory(false);
  };

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.landing.getAllCategory);
  const metals = useSelector((state) => state.landing.getMetal);
  const item = useSelector((state) => state?.landing?.getNonBarcodeCategory);
  const products = useSelector((state) => state.landing.getNonBarcodeProduct);


  useEffect(() => {
    dispatch(getnonBarcodeCategroyAction());
    dispatch(getAllNonBarcodeProductAction());
  }, [dispatch]);

  console.log('products', products)

  const handleAddTilescategory = () => {
    if (!tilescategoryName.trim()) {
      alert("Subcategory name cannot be empty.");
      return;
    }

    dispatch(addNonBarcodeCategoryAction(tilescategoryName));
    setTilescategoryName("");
    setTilescategoryInputVisible(false);
    dispatch(getAllNonBarcodeProductAction());
  };

  const handleEditTilescategory = (index, name) => {
    setEditingTilescategoryIndex(index);
    setEditTilescategoryName(name);
  };

  const handleSaveEditTilescategory = (index) => {
    if (!editTilescategoryName.trim()) {
      alert("Category name cannot be empty.");
      return;
    }

    const updatedCategory = { ...categories[index], name: editTilescategoryName };
    dispatch(updateNonBarcodeCategoryAction(updatedCategory._id, updatedCategory))
      .then(() => {
        setEditingTilescategoryIndex(null);
        setEditTilescategoryName("");
        dispatch(getnonBarcodeCategroyAction()); // Refresh categories
      })
      .catch(() => alert("Failed to update category."));
  };

  const handleAddStock = async () => {
    if (!selectedType || !selectedTypeMetal || !selectedTypeCategory) {
      alert("Please select Carat, Metal and Category.");
      return;
    }

    const selectedCarat = categories.find(
      (carat) => carat.name === selectedType
    );
    const selectedMetal = metals.find(
      (metal) => metal.metalName === selectedTypeMetal
    );
    const selectedCategory = item.find(
      (data) => data.itemName === selectedTypeCategory
    );
    const stockData = {
      groupId: selectedCarat._id,
      metalId: selectedMetal._id,
      groupItemId: selectedCategory._id,
      productName,
      pcs: parseInt(pcs, 10),
      netWeight: parseFloat(netWeight),
      toWeight: parseFloat(toWeight),
      date: new Date().toISOString(),
    };

    console.log("stockData", stockData);

    try {
      const token = Cookies.get("token");

      const url = selectedStock
        ? `http://localhost:8000/api/v1/admin/non-barcode/product/${selectedStock._id}` // URL for PUT
        : "http://localhost:8000/api/v1/admin/non-barcode/product"; // URL for POST

      const method = selectedStock ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(stockData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          selectedStock
            ? "Stock updated successfully!"
            : "Stock added successfully!"
        );
        resetForm();
        dispatch(getAllNonBarcodeProductAction());
        handleStockModalClose();
      } else {
        alert(result.message || "Failed to add/update stock. Please try again.");
      }
    } catch (error) {
      console.error("Error adding/updating stock:", error);
      alert("An error occurred. Please try again.");
    }
  };


  const resetForm = () => {
    setSelectedType("");
    setSelectedTypeMetal("");
    setSelectedTypecategory("");
    setProductName("");
    setPcs("");
    setNetWeight("");
    setToWeight("");
  };


  const handleStockModalEdit = (item) => {
    setSelectedStock(item || null);
    setStockModalOpen(true);
  };

  const dropdownRef = useRef(null);
  const dropdownMetalRef = useRef(null);
  const dropdownCategoryRef = useRef(null);
  const deleteRef = useRef(null)
  const tilescategoryInputRef = useRef(null);
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
      if (
        tilescategoryInputRef.current &&
        !tilescategoryInputRef.current.contains(event.target)
      ) {
        setEditingTilescategoryIndex(null);
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

  const handleConfirmDelete = async () => {
    try {
      if (deleteType === "category") {
        // Delete Category
        const success = await dispatch(deleteNonBarcodeCategoryAction(deleteId));
        if (success) {
          alert("Category deleted successfully!");
          dispatch(getnonBarcodeCategroyAction());
        } else {
          alert("Failed to delete category.");
        }
      } else if (deleteType === "stock") {
        // Delete Stock
        const success = await dispatch(deleteNonBarcodeProductAction(deleteId));
        if (success) {
          alert("Stock deleted successfully!");
          dispatch(getAllNonBarcodeProductAction());
        } else {
          alert("Failed to delete stock.");
        }
      }
      handleDeleteClose(); // Close modal after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item.");
    }
  };







  const handleDesignClick = (index) => {
    setSelectedDesignIndex(index);
  };

  const handleDoubleClickDesign = (item, index) => {
    setEditingDesign(index);
    setEditDesignName(item.designName);
    setEditingDesignId(item.id);
  };

  const handleKeyPressDesign = (e, action = "add", id = null) => {
    if (e?.key === "Enter") {
      e.preventDefault();
      let inputValue = action === "edit" ? editDesignName.trim() : designName.trim();
      if (!inputValue) {
        alert("Design name cannot be empty.");
        return;
      }

      if (action === "add") {
        setDesigns([...designs, { id: Date.now(), designName: inputValue }]);
      } else if (action === "edit" && id) {
        setDesigns(
          designs.map((design) =>
            design.id === id ? { ...design, designName: inputValue } : design
          )
        );
      }

      action === "edit" ? setEditDesignName("") : setDesignName("");
      if (action === "edit") setEditingDesign(null);
    }
  };

  const handleOpenDeleteModalDesign = (id) => {
    setDesigns(designs.filter((design) => design.id !== id));
  };



  const inputRefdesign = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRefdesign.current && !inputRefdesign.current.contains(event.target)) {
        setDesignInputVisible(false);
        setEditingDesign(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <>
      <div className="flex font-Poppins flex-col gap-[25px] w-[100%]">
        <div className="flex flex-col gap-[6px] w-[100%]">
          <div className="flex pl-[6px] font-Poppins text-[18px] text-[#122f97]">Categories</div>
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
                    name="itemName"
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

            {Array.isArray(item) && item.length > 0 ? (
              item?.map((data, index) => (
                <div
                  key={index}
                  className={`px-[10px] font-Poppins  over w-[150px] justify-center items-center border-[1.1px] border-[#122f97] rounded-[6px] flex gap-[10px] h-[43px] 
                          bg-white text-[#122f97] "
                      `}
                  onClick={() => setSelectedTilescategoryIndex(index)}
                  onDoubleClick={() => handleEditTilescategory(index, data.itemName)}

                >
                  {editingTilescategoryIndex === index ? (
                    <div className="flex flex-col" ref={tilescategoryInputRef}>
                      <input
                        type="text"
                        name="itemName"
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
                        className="text-red-500 hover:bg-red-100 z-[30] bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px] font-Montserrat cursor-pointer mx-auto"
                        onClick={() => handleDeleteOpen("category", data._id)}
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <p className="text-[#000000] flex w-fit gap-[5px] cursor-pointer items-center">
                      {data?.itemName}
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

          <div className="flex flex-col gap-[6px]  mt-[30px] w-[100%]">
            <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#122f97]">Product Design</h1>
            <div className="w-[100%] flex flex-col gap-[15px]">
              <div className="flex gap-[20px]">
                <div className="flex gap-[15px] items-center flex-wrap">
                  {!isDesignInputVisible ? (
                    <div className="flex">
                      <div
                        onClick={() => setDesignInputVisible(true)}
                        className="border-[1px] border-dashed border-[#122f97] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                      >
                        <i className="text-[20px] font-[800] text-[#122f97] fa-solid fa-plus"></i>
                      </div>
                    </div>
                  ) : (
                    <div className="flex border-[#122f97] border-dashed border-[1px] rounded-[8px] overflow-hidden">
                      <input
                        type="text"
                        name="designName"
                        value={designName}
                        onChange={(e) => setDesignName(e.target.value)}
                        onKeyDown={(e) => handleKeyPressDesign(e)}
                        placeholder="Design Name"
                        className="px-[10px] outline-none font-Poppins py-[5px] md150:w-[120px] md11:w-[120px]"
                        autoFocus
                      />
                    </div>
                  )}
                </div>
                <div ref={inputRefdesign} className="flex-wrap flex relative gap-[10px]">
                  {Array.isArray(designs) ? (
                    designs.map((data, index) => (
                      <div
                        key={data?.id}
                        className="border-[1px] border-[#122f97] font-[500] md150:text-[18px] md11:text-[15px] w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"

                        onClick={() => handleDesignClick(data?.id)}
                        onDoubleClick={() => handleDoubleClickDesign(data, index)}
                      >
                        {editingDesign === index ? (
                          <>
                            <div className="flex flex-col justify-center">
                              <input
                                type="text"
                                name="designName"
                                value={editDesignName}
                                onChange={(e) => setEditDesignName(e.target.value)}
                                onKeyDown={(e) => handleKeyPressDesign(e, "edit", editingDesignId)}
                                className="text-center w-[100px] mt-[39px] bg-transparent border-none outline-none"
                                autoFocus
                              />
                              <p
                                className="text-red-500 hover:bg-red-100 bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px] font-Montserrat cursor-pointer mx-auto z-[10]"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenDeleteModalDesign(data?.id);
                                }}
                              >
                                Delete
                              </p>
                            </div>
                          </>
                        ) : (
                          <p>{data.designName}</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>No Designs Available</p>
                  )}
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
              <div className="relative w-[100%] max-w-[730px] mt-[10px]   bg-white  rounded-2xl z-[100] flex justify-center !py-0 mx-auto  h-[92%]">
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
                          {/* Right Side */}
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
                              className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] "
                            >
                              <label
                                htmlFor="addstock"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${selectedType || caratFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
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
                              className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] "
                            >
                              <label
                                htmlFor="addstockMetal"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${selectedTypeMetal || metalFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
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
                              className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] "
                            >
                              <label
                                htmlFor="addstockCategory"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${selectedTypeCategory || categoryFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
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
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] ">
                              <label
                                htmlFor="addstockGross"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200
                                  ${ProductNameFocused
                                    ? "text-[#000] -translate-y-[21px] hidden "
                                    : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Product Name
                              </label>
                              <input
                                type="text"
                                name="productName"
                                id="addstockGross"
                                onFocus={() => setProductNameFocused(true)}
                                onBlur={() => setProductNameFocused(false)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                autocomplete="naqsme"
                              />
                            </div>
                          </div>
                          <div className=" flex w-[100%]  gap-[30px]">
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] ">
                              <label
                                htmlFor="addstockLoss"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${ProductPcsFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Product Pcs
                              </label>
                              <input
                                type="text"
                                id="addstockLoss"
                                name="pcs"
                                value={pcs}
                                onFocus={() => setProductPcsFocused(true)}
                                onBlur={() => setProductPcsFocused(false)}
                                onChange={(e) => setPcs(e.target.value)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>

                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] ">
                              <label
                                htmlFor="addstockWastage"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${netWeghtFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Net Weight
                              </label>
                              <input
                                type="text"
                                name="netWeight"
                                id="addstockWastage"
                                value={netWeight}
                                onFocus={() => setNetWeightFocused(true)}
                                onBlur={() => setNetWeightFocused(false)}
                                onChange={(e) => setNetWeight(e.target.value)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] ">
                              <label
                                htmlFor="addstockWastage"
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${totalWeghtFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Total Weight
                              </label>
                              <input
                                type="text"
                                name="netWeight"
                                id="addstockWastage"
                                value={toWeight}
                                onFocus={() => setTotalWeightFocused(true)}
                                onBlur={() => setTotalWeightFocused(false)}
                                onChange={(e) => setToWeight(e.target.value)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <button
                      className=" flex justify-center mt-[33px] items-center text-[#fff] py-[5px] text-[23px]  rounded-md font-Poppins w-[93%] mx-auto bs-spj"
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
      <NextUIModal isOpen={deletemodalopen} onOpenChange={handleDeleteClose}>
        <ModalContent className="md:max-w-[350px] max-w-[333px] relative  rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[300px] shadow-delete ">
          {(handleDeleteClose) => (
            <>
              <div className="relative w-[100%] h-[100%] ">
                <div className="relative  w-[100%] h-[100%]">
                  <div className="w-[100%] flex gap-7 flex-col">
                    <div className="w-[100%] mt-[30px] p-[10px] mx-auto flex justify-center s">
                      <i className=" text-[80px] text-[red] shadow-delete-icon rounded-full fa-solid fa-circle-xmark"></i>
                    </div>
                    <div className=" mx-auto justify-center flex text-[28px] font-[500]  font-Montserrat ">
                      <p>Are you sure ?</p>
                    </div>
                    <div className="absolute bottom-0 flex w-[100%]">
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[red] rounded-bl-[10px] text-[#fff] font-[600]  font-Montserrat  text-[20px]"
                        onClick={handleConfirmDelete}
                      >
                        <p>Delete</p>
                      </div>
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[#26b955] rounded-br-[10px] text-[#fff] font-[600]  font-Montserrat  text-[20px]"
                        onClick={handleDeleteClose}
                      >
                        <p>Cancel</p>
                      </div>
                    </div>
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
