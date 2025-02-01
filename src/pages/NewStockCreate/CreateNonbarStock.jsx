import React from 'react'
import Header from '../../Component/header/Header';
import SideBar from '../../Component/sidebar/SideBar';
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";

import { X, CheckCircle } from "lucide-react"
import {
  addCategoryAction,
  addGroupItemAction,
  addMetalAction,
  addStockAction,
  deleteCategoryAction,
  deleteGroupItemAction,
  deleteMetalAction,
  deleteStockAction,
  getAllSizeAction,
  getAllStockAction,
  getCategroyAction,
  getDesignAction,
  getGroupItemAction,
  getMetalAction,
  updateCategoryAction,
  updateGroupItemAction,
  updateMetalAction,
  updateStockAction,
} from "../../redux/action/landingManagement";


export default function CreateNonbarStock() {
    const [fieldSets, setFieldSets] = useState([
      { selectedTypeLabour: "", dropdownOpenLabour: false }
  
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const [carat, setCarat] = useState([]);
    const [name, setName] = useState("");
    const [isMounted, setIsMounted] = useState(false)
    const [editingCarat, setEditingCarat] = useState(null);
    const [editCaratName, setEditCaratName] = useState("");
    const [editingCaratId, setEditingCaratId] = useState(null);
    const [caratIdToDelete, setCaratIdToDelete] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [percentages, setPercentages] = useState({});
    const [isEditing, setIsEditing] = useState(null);
  
    const [caratFocused, setCaratFocused] = useState(false);
    const [metalFocused, setMetalFocused] = useState(false);
    const [categoryFocused, setCategoryFocused] = useState(false);
    const [grossFocused, setGrossFocused] = useState(false);
    const [lossFocused, setLossFocused] = useState(false);
    const [wastageFocused, setWastegeFocused] = useState(false);
  
    const [hsnFocused, setHsnFocused] = useState(false);
    const [groupFocused, setGroupFocused] = useState(false);
    const [accountFocused, setAccountFocused] = useState(false);
    const [labourFocused, setLabourFocused] = useState(false);
    const [extraFocused, setExtraFocused] = useState(false);
    const [locationFocused, setLocationFocused] = useState(false);
    const [pcsFocused, setPcsFocused] = useState(false);
    const [designFocused, setDesignFocused] = useState(false);
    const [sizeFocused, setSizeFocused] = useState(false);
    const [motiFocused, setMotiFocused] = useState(false);
    const [stoneFocused, setStoneFocused] = useState(false);
    const [jadatrFocused, setJadatrFocused] = useState(false);
    const [huidFocused, setHuidFocused] = useState(false);
    const [huidRuleFocused, setHuidRuleFocused] = useState(false);
    const [huidChargeFocused, setHuidChargeFocused] = useState(false);
  
    const [selectedCaratIndex, setSelectedCaratIndex] = useState(null);
    const [selectedmodalopen, setModalOpen] = useState(false);
    const [deleteContext, setDeleteContext] = useState(null);
    const [dropdownOpenMetal, setDropdownOpenMetal] = useState(false);
    const [selectedTypeMetal, setSelectedTypeMetal] = useState("");
    const [dropdownOpenDesign, setDropdownOpenDesign] = useState(false);
    const [selectedTypeDesign, setSelectedTypeDesign] = useState("");
    const [dropdownOpenLabour, setDropdownOpenLabour] = useState(false);
    const [selectedTypeLabour, setSelectedTypeLabour] = useState("");
    const [dropdownOpenSize, setDropdownOpenSize] = useState(false);
    const [selectedTypeSize, setSelectedTypeSize] = useState("");
    const [dropdownOpenHuid, setDropdownOpenHuid] = useState(false);
    const [selectedTypeHuid, setSelectedTypeHuid] = useState("");
    const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
    const [selectedTypeCategory, setSelectedTypecategory] = useState("");
    const [items, setItems] = useState([]);
  
    const [grossWeight, setGrossWeight] = useState("");
    const [lessWeight, setLessWeight] = useState("");
    const [westage, setWestage] = useState("");
    const [hsn, setHsn] = useState("");
    const [group, setGroup] = useState("");
    const [account, setAccount] = useState("");
    const [labour, setLabour] = useState("");
    const [extra, setExtra] = useState("");
    const [location, setLocation] = useState("");
    const [design, setDesign] = useState("");
    const [pcs, setPcs] = useState("");
    const [size, setSize] = useState("");
    const [moti, setMoti] = useState("");
    const [stone, setStone] = useState("");
    const [jadatr, setJadatr] = useState("");
    const [huid, setHuid] = useState("");
    const [huidRule, setHuidRule] = useState("");
    const [huidCharge, setHuidCharge] = useState("");
    const [selectedStock, setSelectedStock] = useState(null);
    const [stockModalopen, setStockModalOpen] = useState(false);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.landing.getAllCategory);
    const metals = useSelector((state) => state.landing.getMetal);
    const item = useSelector((state) => state.landing.getGroupItem);
    const designs = useSelector((state) => state.landing.getDesign);
    const sizes = useSelector((state) => state.landing.getSize);
    const stocks = useSelector((state) => state.landing.getProduct);
    // useEffect(() => {
    //   setCarat(categories || []);
    //   setMetal(metals || []);
    //   setItems(item || []);
    // }, [categories, metals, item]);
  
    useEffect(() => {
      dispatch(getCategroyAction());
      dispatch(getMetalAction());
      dispatch(getGroupItemAction());
      dispatch(getDesignAction());
      dispatch(getAllSizeAction());
      dispatch(getAllStockAction());
    }, [dispatch]);
  
    useEffect(() => {
      if (selectedStock) {
        setSelectedType(selectedStock.caratName || "");
        // setSelectedTypeMetal(selectedStock.metalName || "");
        setSelectedTypecategory(selectedStock.categoryName || "");
        setGrossWeight(selectedStock.toWeight || "");
        setLessWeight(selectedStock.lessWeight || "");
        setWestage(selectedStock.wastage || "");
        setHsn(selectedStock.hsnCode || "");
        setGroup(selectedStock.group || "");
        setAccount(selectedStock.account || "");
        setLabour(selectedStock.extraRate || "");
        setLocation(selectedStock.location || "");
        setSelectedTypeDesign(selectedStock.design || "");
        setPcs(selectedStock.pcs || "");
        setSize(selectedStock.size || "");
        setMoti(selectedStock.moti || "");
        setStone(selectedStock.stone || "");
        setJadatr(selectedStock.jadatr || "");
        setHuid(selectedStock.huid || "");
        setHuidRule(selectedStock.huidRule || "");
        setHuidCharge(selectedStock, huidCharge || "");
      }
    }, [selectedStock]);
    const dropdownRef = useRef(null);
    const dropdownMetalRef = useRef(null);
    const dropdownCategoryRef = useRef(null);
  
    const handleSelect = (type) => {
      setSelectedType(type);
      setDropdownOpen(false);
    };
  
    const handleSelectMetal = (type) => {
      setSelectedTypeMetal(type);
      setDropdownOpenMetal(false);
    };
  
    const handleSelectDesign = (type) => {
      setSelectedTypeDesign(type);
      setDropdownOpenDesign(false);
    };
  
    const handleSelectCategory = (type) => {
      setSelectedTypecategory(type);
      setDropdownOpenCategory(false);
    };
  
    const handleStockModal = () => {
      setStockModalOpen(true);
    };
  
    const handleStockModalEdit = (item) => {
      setSelectedStock(item || null);
      setStockModalOpen(true);
    };
    const handleStockModalClose = () => {
      setStockModalOpen(false);
    };
  
    const handlePlusClick = () => {
      setInputVisible(true);
    };
  
    const handleDelete = async () => {
      try {
        let success = false;
  
        if (deleteContext === "category") {
          success = await dispatch(deleteCategoryAction(caratIdToDelete));
          if (success) {
            setCarat((prev) =>
              prev.filter((category) => category._id !== caratIdToDelete)
            );
          }
        } else if (deleteContext === "metal") {
          success = await dispatch(deleteMetalAction(caratIdToDelete));
          if (success) {
            setMetal((prev) =>
              prev.filter((metal) => metal._id !== caratIdToDelete)
            );
          }
        } else if (deleteContext === "item") {
          success = await dispatch(deleteGroupItemAction(caratIdToDelete));
          if (success) {
            setItems((prev) =>
              prev.filter((item) => item._id !== caratIdToDelete)
            );
          }
          window.location.reload();
        } else if (deleteContext === "stock") {
          success = await dispatch(deleteStockAction(caratIdToDelete));
          if (success) {
            dispatch(getAllStockAction());
          }
        }
  
        if (success) {
          setModalOpen(false);
          setCaratIdToDelete(null);
        } else {
          alert(`Failed to delete ${deleteContext}.`);
        }
      } catch (error) {
        console.error(`Error deleting ${deleteContext}:`, error);
        alert(`Failed to delete ${deleteContext}.`);
      }
    };
  
    const handleCategoryClick = (index) => {
      setSelectedCaratIndex(index);
    };
  
    const handleMetalClick = (index) => {
      setSelectedMetalIndex(index);
    };
  
    const handleItemClick = (index) => {
      setSelectedItemIndex(index);
    };
  
    useEffect(() => {
      if (grossWeight && lessWeight && selectedType) {
        const selectedCarat = categories.find(
          (carat) => carat.name === selectedType
        );
        if (selectedCarat && selectedCarat.percentage) {
          const netWeight = parseFloat(grossWeight) - parseFloat(lessWeight || 0);
          const fineWeight = (
            netWeight *
            (selectedCarat.percentage / 100)
          ).toFixed(3);
          console.log("Calculated Fine Weight:", fineWeight);
        }
      }
    }, [grossWeight, lessWeight, selectedType, categories]);
  
    // const handleAddStock = async () => {
    //   if (!selectedType || !selectedTypeCategory) {
    //     alert("Please select Carat and Category.");
    //     return;
    //   }
  
    //   const selectedCarat = categories.find(
    //     (carat) => carat.name === selectedType
    //   );
    //   const selectedMetal = metals.find(
    //     (metal) => metal.metalName === selectedTypeMetal
    //   );
    //   const selectedCategory = item.find(
    //     (data) => data.itemName === selectedTypeCategory
    //   );
    //   const selectedDesign = item.find(
    //     (data) => data.designName === selectedTypeDesign
    //   );
  
    //   if (!selectedCarat  || !selectedCategory) {
    //     alert(
    //       "Invalid selection. Please select valid Carat, Metal, and Category."
    //     );
    //     return;
    //   }
  
    //   const stockData = {};
  
    //   if (selectedCarat) stockData.groupId = selectedCarat._id;
    //   if (selectedCategory) stockData.groupItemId = selectedCategory._id;
    //   if (grossWeight) stockData.toWeight = parseFloat(grossWeight);
    //   if (lessWeight) stockData.lessWeight = parseFloat(lessWeight);
    //   if (westage) stockData.wastage = parseFloat(westage);
    //   if (hsn) stockData.hsnCode = parseFloat(hsn);
    //   if (group) stockData.group = group.toString();
    //   if (account) stockData.account = account.toString();
    //   if (labour) stockData.labour = parseFloat(labour);
    //   if (location) stockData.location =  location.toString();
    //   if (selectedDesign) stockData.design = selectedDesign._id;
    //   if (pcs) stockData.pcs = parseFloat(pcs);
    //   if (size) stockData.size = parseFloat(size);
    //   if (moti) stockData.moti = parseFloat(moti);
    //   if (stone) stockData.stone = parseFloat(stone);
    //   if (jadatr) stockData.jadatr = parseFloat(jadatr);
    //   if (huid) stockData.huid = huid.toString();
    //   if (huidRule) stockData.huidRule = huidRule.toString();
    //   if (huidCharge) stockData.huidCharge = parseFloat(huidCharge);
  
  
    //   try {
    //     if (selectedStock) {
    //       const response = await dispatch(
    //         updateStockAction(selectedStock?._id, stockData)
    //       );
    //       if (response) {
    //         alert("Stock updated successfully!");
    //         dispatch(getAllStockAction());
    //       } else {
    //         alert("Failed to update stock.");
    //       }
    //     } else {
    //       const response = await dispatch(addStockAction(stockData));
    //       if (response) {
    //         setIsOpen(true)
    //         setTimeout(() => {
    //           setIsOpen(false);
    //         }, 2000);
    //         dispatch(getAllStockAction());
    //       } else {
    //         alert("Failed to add stock.");
    //       }
    //     }
  
    //     setStockModalOpen(false); // Close modal
    //   } catch (error) {
    //     console.error("Error saving stock:", error);
    //     alert("An error occurred while saving stock.");
    //   }
    // };
  
  
  
  
  
  
  
  
  
  
  
    const handleAddStock = async () => {
      if (!selectedType || !selectedTypeCategory) {
        alert("Please select Carat and Category.");
        return;
      }
  
      const selectedCarat = categories.find((carat) => carat.name === selectedType);
      const selectedCategory = item.find((data) => data.itemName === selectedTypeCategory);
      const selectedDesign = item.find((data) => data.designName === selectedTypeDesign);
  
      if (!selectedCarat || !selectedCategory) {
        alert("Invalid selection. Please select valid Carat and Category.");
        return;
      }
  
      // **Creating Multiple Product Objects**
      const productsArray = [
        {
          groupId: selectedCarat._id,
          groupItemId: selectedCategory._id,
          toWeight: parseFloat(grossWeight) || 0,
          lessWeight: parseFloat(lessWeight) || 0,
          wastage: parseFloat(westage) || 0,
          hsnCode: hsn ? hsn.toString() : "",
          group: group ? group.toString() : "",
          account: account ? account.toString() : "",
          labour: parseFloat(labour) || 0,
          location: location ? location.toString() : "",
          design: selectedDesign?._id || null,
          pcs: parseInt(pcs) || 1,
          size: parseFloat(size) || null,
          moti: parseFloat(moti) || 0,
          stone: parseFloat(stone) || 0,
          jadatr: parseFloat(jadatr) || 0,
          huid: huid ? huid.toString() : "",
          huidRule: huidRule ? huidRule.toString() : "",
          huidCharge: parseFloat(huidCharge) || 0,
        },
        {
          groupId: selectedCarat._id, // Duplicating for testing
          groupItemId: selectedCategory._id,
          toWeight: 30, // Different weight
          lessWeight: 2,
          wastage: 1,
          hsnCode: "67890",
          group: "Test Group 2",
          account: "Test Account 2",
          labour: 100,
          location: "Warehouse B",
          design: selectedDesign?._id || null,
          pcs: 2,
          size: 14,
          moti: 1,
          stone: 2,
          jadatr: 3,
          huid: "HUID2",
          huidRule: "",
          huidCharge: 50,
        }
      ];
  
      console.log("🟢 Sending multiple products:", {
        groupId: selectedCarat._id,
        groupItemId: selectedCategory._id,
        products: productsArray,
      });
  
      try {
        const response = await dispatch(addStockAction({
          groupId: selectedCarat._id,
          groupItemId: selectedCategory._id,
          products: productsArray, // ✅ Sending multiple products at once
        }));
  
        console.log("🟢 API Response:", response);
  
        if (response) {
          alert("Stock added successfully!");
          dispatch(getAllStockAction());
        } else {
          alert("Failed to add stock.");
          console.error("❌ Backend Response Error:", response);
        }
      } catch (error) {
        console.error("❌ API Request Error:", error);
        alert("An error occurred while saving stock.");
      }
    };
  
  
    const handleOpenDeleteModal = (context, id) => {
      setDeleteContext(context);
      setCaratIdToDelete(id);
      setModalOpen(true);
    };
  
    const handleModalclose = () => {
      setModalOpen(false);
      setCaratIdToDelete(null);
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
  
  
  
  
  
    const onClose = () => {
      setIsOpen(false); // Close the modal
    };
  
  
    const onAdd = () => {
      setIsOpen(true); // Close the modal
    };
    useEffect(() => {
      setIsMounted(true)
    }, [])
  
  
  
    const handleAddFieldSet = () => {
      setFieldSets([...fieldSets, {}]);
    };
  
    return (
      <>
  
        <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
          <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
            <Header pageName="Non-Barcode Stock Create" />
            <div className="flex gap-[10px] w-[100%] h-[100%]">
              <SideBar />
              <div className="flex w-[100%] max-h-[90%] pb-[50px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
                <div className=" flex w-[100%]  ">
  
  
                  <div className=" flex justify-between  mt-[30px] w-[100%]">
                    <div className="flex w-[100%] flex-col gap-[19px]">
                      <div className=" flex w-[49%]  gap-[20px]">
                        <div
                          ref={dropdownRef}
                          className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]   bg-[#fff] "
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
                                className="absolute top-[90%]  mt-2  left-[-16px] bg-white w-[300px] border border-[#dedede] rounded-lg shadow-md z-10"
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
                                className="absolute top-[90%]  mt-2 bg-white left-[-16px] w-[300px] border border-[#dedede] rounded-lg shadow-md z-10"
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
                      {fieldSets.map((_, index) => (
  
                        <div key={index} className=" flex flex-col gap-[15px] w-[100%]">
                          <div className=" flex w-[100%]  gap-[20px]">
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`hsn-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200  ${fieldSets[index].hsn || fieldSets[index].hsnFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Hsn Code
                              </label>
                              <input
                                type="text"
                                name="hsnCode"
                                id={`hsn-${index}`}
                                // onFocus={() => setHsnFocused(true)}
                                // onBlur={() => setHsnFocused(false)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                value={fieldSets.hsn}
                                // onChange={(e) => setHsn(e.target.value)}
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].hsnFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].hsnFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].hsn = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                autocomplete="naqsme"
                              />
                            </div>
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
     bg-[#fff] ">
                              <label
                                htmlFor={`gross-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index].grossWeight || fieldSets[index].grossFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                G .Weight
                              </label>
                              <input
                                type="text"
                                name="toWeight"
                                id={`gross-${index}`}
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].grossFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].grossFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                // onFocus={() => setGrossFocused(true)}
                                // onBlur={() => setGrossFocused(false)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                value={fieldSets.grossWeight}
                                // onChange={(e) => setGrossWeight(e.target.value)}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].grossWeight = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
  
                                autocomplete="naqsme"
                              />
                            </div>
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
     bg-[#fff] ">
                              <label
                                htmlFor={`less-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index].lessWeight || fieldSets[index].lossFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                L .Weight
                              </label>
                              <input
                                type="number"
                                id={`less-${index}`}
                                name="lessWeight"
                                value={fieldSets.lessWeight}
                                // onFocus={() => setLossFocused(true)}
                                // onBlur={() => setLossFocused(false)}
                                // onChange={(e) => setLessWeight(e.target.value)}
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].lossFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].lossFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].lessWeight = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
  
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
     bg-[#fff] ">
                              <label
                                htmlFor={`westage-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index].westage || fieldSets[index].wastageFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Wastage
                              </label>
                              <input
                                type="number"
                                name="westage"
                                id={`westage-${index}`}
                                value={fieldSets.westage}
                                // onFocus={() => setWastegeFocused(true)}
                                // onBlur={() => setWastegeFocused(false)}
                                // onChange={(e) => setWestage(e.target.value)}
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].wastageFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].wastageFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].westage = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
  
  
                          </div>
                          <div className=" flex w-[100%]  gap-[20px]">
  
  
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`group-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index].group || fieldSets[index].groupFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Group
                              </label>
                              <input
                                type="number"
                                id={`group-${index}`}
                                name="group"
                                value={fieldSets.group}
                                // onChange={(e) => setGroup(e.target.value)}
                                // onFocus={() => setGroupFocused(true)}
                                // onBlur={() => setLossFocused(false)}
  
  
  
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].groupFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].groupFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].group = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
  
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`account-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index].account || fieldSets[index].accountFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Account
                              </label>
                              <input
                                type="number"
                                name="account"
                                id={`account-${index}`}
                                value={fieldSets.account}
                                // onChange={(e) => setAccount(e.target.value)}
                                // onFocus={() => setAccountFocused(true)}
                                // onBlur={() => setAccountFocused(false)}
  
  
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].accountFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].accountFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].account = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
                            <div
                              className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] bg-[#fff]"
                            >
                              <label
                                htmlFor={`labour-${index}`}
                                className={`absolute left-[13px] font-Poppins px-[5px] bg-[#fff] text-[14px] transition-all duration-200 
        ${fieldSets[index]?.selectedTypeLabour || fieldSets[index]?.labourFocused ? "text-[#000] -translate-y-[21px] hidden scale-90" : "text-[#8f8f8f] cursor-text flex"}`}
                              >
                                Labour
                              </label>
                              <div
                                className="relative w-full rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                onClick={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].dropdownOpenLabour = !updatedFieldSets[index].dropdownOpenLabour;
                                  setFieldSets(updatedFieldSets);
                                }}
                              >
                                <input
                                  type="text"
                                  id={`labour-${index}`}
                                  value={fieldSets[index]?.selectedTypeLabour || ""}
                                  readOnly
                                  onFocus={() => {
                                    let updatedFieldSets = [...fieldSets];
                                    updatedFieldSets[index].labourFocused = true;
                                    setFieldSets(updatedFieldSets);
                                  }}
                                  onBlur={() => {
                                    let updatedFieldSets = [...fieldSets];
                                    updatedFieldSets[index].labourFocused = false;
                                    setFieldSets(updatedFieldSets);
                                  }}
                                  className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                />
                                <i
                                  className={
                                    fieldSets[index]?.dropdownOpenLabour
                                      ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                      : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                  }
                                ></i>
                              </div>
  
                              <AnimatePresence>
                                {fieldSets[index]?.dropdownOpenLabour && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-[90%] mt-2 bg-white left-[-16px] w-[300px] border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {metals.map((type, idx) => (
                                      <div
                                        key={idx}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => {
                                          let updatedFieldSets = [...fieldSets];
                                          updatedFieldSets[index].selectedTypeLabour = type?.metalName;
                                          updatedFieldSets[index].dropdownOpenLabour = false;
                                          setFieldSets(updatedFieldSets);
                                        }}
                                      >
                                        {type?.metalName}
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
  
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`extra-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200  ${fieldSets[index]?.extra || fieldSets[index]?.extraFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Extra Rate
                              </label>
                              <input
                                type="text"
                                name="extraRate"
                                id={`extra-${index}`}
                                // onFocus={() => setExtraFocused(true)}
                                // onBlur={() => setExtraFocused(false)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                value={fieldSets.extra}
                                // onChange={(e) => setExtra(e.target.value)}
  
  
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].extraFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].extraFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].extra = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                autocomplete="naqsme"
                              />
                            </div>
                          </div>
                          <div className=" flex w-[100%]  gap-[20px]">
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`location-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index]?.location || fieldSets[index]?.locationFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Location
                              </label>
                              <input
                                type="number"
                                id={`location-${index}`}
                                name="location"
                                value={fieldSets.location}
                                // onChange={(e) => setLocation(e.target.value)}
                                // onFocus={() => setLocationFocused(true)}
                                // onBlur={() => setLocationFocused(false)}
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].locationFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].locationFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].location = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
  
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`pcs-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index]?.pcs || fieldSets[index]?.pcsFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Pcs
                              </label>
                              <input
                                type="number"
                                id={`pcs-${index}`}
                                name="pcs"
                                value={fieldSets.pcs}
                                // onChange={(e) => setPcs(e.target.value)}
                                // onFocus={() => setPcsFocused(true)}
                                // onBlur={() => setPcsFocused(false)}
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].pcsFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].pcsFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].pcs = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
                            <div className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] bg-[#fff]">
                              <label
                                htmlFor={`design-${index}`}
                                className={`absolute left-[13px] font-Poppins px-[5px] bg-[#fff] text-[14px] transition-all duration-200 
        ${fieldSets[index]?.selectedTypeDesign ? "text-[#000] hidden -translate-y-[21px] scale-90" : "text-[#8f8f8f] cursor-text flex"}`}
                              >
                                Design
                              </label>
                              <div
                                className="relative w-full rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                onClick={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].dropdownOpenDesign = !updatedFieldSets[index].dropdownOpenDesign;
                                  setFieldSets(updatedFieldSets);
                                }}
                              >
                                <input
                                  type="text"
                                  id={`design-${index}`}
                                  value={fieldSets[index]?.selectedTypeDesign || ""}
                                  readOnly
                                  className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                />
                                <i
                                  className={
                                    fieldSets[index]?.dropdownOpenDesign
                                      ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                      : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                  }
                                ></i>
                              </div>
  
                              <AnimatePresence>
                                {fieldSets[index]?.dropdownOpenDesign && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-[90%] mt-2 bg-white left-[-16px] w-[300px] border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {designs.map((type, idx) => (
                                      <div
                                        key={idx}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => {
                                          let updatedFieldSets = [...fieldSets];
                                          updatedFieldSets[index].selectedTypeDesign = type?.designName;
                                          updatedFieldSets[index].dropdownOpenDesign = false;
                                          setFieldSets(updatedFieldSets);
                                        }}
                                      >
                                        {type?.designName}
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
  
                            <div className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] bg-[#fff]">
                              <label
                                htmlFor={`size-${index}`}
                                className={`absolute left-[13px] font-Poppins px-[5px] bg-[#fff] text-[14px] transition-all duration-200 
        ${fieldSets[index]?.selectedTypeSize || fieldSets[index]?.dropdownOpenSize ? "text-[#000] -translate-y-[21px] scale-90" : "text-[#8f8f8f] cursor-text flex"}`}
                              >
                                Size
                              </label>
                              <div
                                className="relative w-full rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                onClick={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index] = {
                                    ...updatedFieldSets[index],
                                    dropdownOpenSize: !updatedFieldSets[index].dropdownOpenSize
                                  };
                                  setFieldSets(updatedFieldSets);
                                }}
                              >
                                <input
                                  type="text"
                                  id={`size-${index}`}
                                  value={fieldSets[index]?.selectedTypeSize || ""}
                                  readOnly
                                  className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                />
                                <i
                                  className={
                                    fieldSets[index]?.dropdownOpenSize
                                      ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                      : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                  }
                                ></i>
                              </div>
  
                              <AnimatePresence>
                                {fieldSets[index]?.dropdownOpenSize && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-[-16px] w-[300px] bg-white border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {sizes.length > 0 ? (
                                      sizes.map((type, idx) => (
                                        <div
                                          key={idx}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            let updatedFieldSets = [...fieldSets];
                                            updatedFieldSets[index] = {
                                              ...updatedFieldSets[index],
                                              selectedTypeSize: type?.sizeName,
                                              dropdownOpenSize: false
                                            };
                                            setFieldSets(updatedFieldSets);
                                          }}
                                        >
                                          {type?.sizeName}
                                        </div>
                                      ))
                                    ) : (
                                      <div className="px-4 py-2 text-center text-[#8f8f8f]"></div>
                                    )}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
  
  
                          </div>
                          <div className=" flex w-[100%]  gap-[20px]">
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`moti-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index]?.moti || fieldSets[index]?.motiFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Moti
                              </label>
                              <input
                                type="number"
                                id={`moti-${index}`}
                                name="moti"
                                value={fieldSets.moti}
                                // onChange={(e) => setMoti(e.target.value)}
                                // onFocus={() => setMotiFocused(true)}
                                // onBlur={() => setMotiFocused(false)}
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].motiFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].motiFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].moti = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
  
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`stone-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index]?.stone || fieldSets[index]?.stoneFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Stone
                              </label>
                              <input
                                type="number"
                                name="stone"
                                id={`stone-${index}`}
                                value={fieldSets.stone}
                                // onChange={(e) => setStone(e.target.value)} onFocus={() => setStoneFocused(true)}
                                // onBlur={() => setStoneFocused(false)}
  
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].stoneFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].stoneFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].stone = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
  
  
  
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
  
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`jatadr-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index]?.stone || fieldSets[index]?.jadatrFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Jadatr
                              </label>
                              <input
                                type="text"
                                name="jadatr"
                                id={`jatadr-${index}`}
                                // onFocus={() => setJadatrFocused(true)}
                                // onBlur={() => setJadatrFocused(false)}
  
  
  
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].jadatrFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].jadatrFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].jadatr = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
  
  
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                value={fieldSets.jadatr}
  
                                autocomplete="naqsme"
                              />
                            </div>
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`huid-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index]?.huid || fieldSets[index]?.huidFocused
  
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Huid
                              </label>
                              <input
                                type="text"
                                name="huid"
                                id={`huid-${index}`}
                                // onFocus={() => setHuidFocused(true)}
                                // onBlur={() => setHuidFocused(false)}
  
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].huidFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].huidFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].huid = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
  
  
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                value={huid}
  
                                autocomplete="naqsme"
                              />
                            </div>
                            <div className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] bg-[#fff]">
                              <label
                                htmlFor={`huidrule-${index}`}
                                className={`absolute left-[13px] font-Poppins px-[5px] bg-[#fff] text-[14px] transition-all duration-200 
        ${fieldSets[index]?.selectedTypeHuidRule || fieldSets[index]?.dropdownOpenHuid ? "text-[#000] -translate-y-[21px] hidden scale-90" : "text-[#8f8f8f] cursor-text flex"}`}
                              >
                                HuidRule
                              </label>
                              <div
                                className="relative w-full rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                onClick={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index] = {
                                    ...updatedFieldSets[index],
                                    dropdownOpenHuid: !updatedFieldSets[index].dropdownOpenHuid
                                  };
                                  setFieldSets(updatedFieldSets);
                                }}
                              >
                                <input
                                  type="text"
                                  id={`huidrule-${index}`}
                                  value={fieldSets[index]?.selectedTypeHuidRule || ""}
                                  readOnly
                                  className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                />
                                <i
                                  className={
                                    fieldSets[index]?.dropdownOpenHuid
                                      ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                      : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                  }
                                ></i>
                              </div>
  
                              <AnimatePresence>
                                {fieldSets[index]?.dropdownOpenHuid && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-[-16px] w-full bg-white border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {metals.length > 0 ? (
                                      metals.map((type, idx) => (
                                        <div
                                          key={idx}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            let updatedFieldSets = [...fieldSets];
                                            updatedFieldSets[index] = {
                                              ...updatedFieldSets[index],
                                              selectedTypeHuidRule: type?.metalName,
                                              dropdownOpenHuid: false
                                            };
                                            setFieldSets(updatedFieldSets);
                                          }}
                                        >
                                          {type?.metalName}
                                        </div>
                                      ))
                                    ) : (
                                      <div className="px-4 py-2 text-center text-[#8f8f8f]">No options available</div>
                                    )}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
  
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
  bg-[#fff] ">
                              <label
                                htmlFor={`huidCharge-${index}`}
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index]?.huid || fieldSets[index]?.huidChargeFocused
                                  ? "text-[#000] -translate-y-[21px] hidden "
                                  : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Huid Charge
                              </label>
                              <input
                                type="number"
                                name="huidCharge"
                                id={`huidCharge-${index}`}
                                // onFocus={() => setHuidChargeFocused(true)}
                                // onBlur={() => setHuidChargeFocused(false)}
                                onFocus={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].huidChargeFocused = true;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onBlur={() => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].huidChargeFocused = false;
                                  setFieldSets(updatedFieldSets);
                                }}
                                onChange={(e) => {
                                  let updatedFieldSets = [...fieldSets];
                                  updatedFieldSets[index].huidCharge = e.target.value;
                                  setFieldSets(updatedFieldSets);
                                }}
  
                                value={fieldSets.huidCharge}
                                // onChange={(e) => setHuidCharge(e.target.value)}
                                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                autocomplete="naqsme"
                              />
                            </div>
                          </div>
  
                          <div className=" flex mt-[10px] mx-auto j">
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
                      ))}
                      <div className=" flex w-[100%] justify-end ">
                        <button
                          className=" flex  w-[150px] font-Poppins items-center justify-center gap-[6px] py-[8px] rounded-[8px] text-[#fff] bs-spj "
                          onClick={handleAddFieldSet}
                        >
                          <i className="fa-solid fa-plus"></i>
                          Add more Stock
                        </button>
                      </div>
                      <div className=" flex w-[100%] justify-center ">
                        <button
                          className=" flex  w-[150px] font-Poppins items-center justify-center gap-[6px] py-[8px] text-[20px] rounded-[8px] text-[#fff] bs-spj "
                          onClick={handleAddStock}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
  
      </>
  
  
  
    )
  }
  