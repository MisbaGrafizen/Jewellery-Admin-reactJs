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
  getAllStockAction,
  getCategroyAction,
  getGroupItemAction,
  getMetalAction,
  updateCategoryAction,
  updateGroupItemAction,
  updateMetalAction,
  updateStockAction,
} from "../../redux/action/landingManagement";
import Header from "../../Component/header/Header";
import SideBar from "../../Component/sidebar/SideBar";
export default function CreateBarCodeStock() {

  const [fieldSets, setFieldSets] = useState([{}]);
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
  // const [itemName, setItemName] = useState("");
  // const [editingItem, setEditingItem] = useState(null);
  // const [editItemName, setEditItemName] = useState("");
  // const [editingItemId, setEditingItemId] = useState(null);
  // const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  // const [isItemInputVisible, setItemInputVisible] = useState(null);
  // const [inputItemValue, setInputItemValue] = useState("");
  // const [apiTrigger, setApiTrigger] = useState(null);

  const [grossWeight, setGrossWeight] = useState("");
  const [lessWeight, setLessWeight] = useState("");
  const [westage, setWestage] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockModalopen, setStockModalOpen] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.landing.getAllCategory);
  const metals = useSelector((state) => state.landing.getMetal);
  const item = useSelector((state) => state.landing.getGroupItem);
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
    dispatch(getAllStockAction());
  }, [dispatch]);

  useEffect(() => {
    if (selectedStock) {
      setSelectedType(selectedStock.caratName || "");
      setSelectedTypeMetal(selectedStock.metalName || "");
      setSelectedTypecategory(selectedStock.categoryName || "");
      setGrossWeight(selectedStock.toWeight || "");
      setLessWeight(selectedStock.lessWeight || "");
      setWestage(selectedStock.wastage || "");
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
  const handleAddStock = async () => {
    if (!selectedType || !selectedTypeMetal || !selectedTypeCategory) {
      alert("Please select Carat, Metal, and Category.");
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

    if (!selectedCarat || !selectedMetal || !selectedCategory) {
      alert(
        "Invalid selection. Please select valid Carat, Metal, and Category."
      );
      return;
    }

    const stockData = {};

    if (selectedCarat) stockData.groupId = selectedCarat._id;
    if (selectedMetal) stockData.metalId = selectedMetal._id;
    if (selectedCategory) stockData.groupItemId = selectedCategory._id;
    if (grossWeight) stockData.toWeight = parseFloat(grossWeight);
    if (lessWeight) stockData.lessWeight = parseFloat(lessWeight);
    if (westage) stockData.wastage = parseFloat(westage);

    try {
      if (selectedStock) {
        const response = await dispatch(
          updateStockAction(selectedStock?._id, stockData)
        );
        if (response) {
          alert("Stock updated successfully!");
          dispatch(getAllStockAction());
        } else {
          alert("Failed to update stock.");
        }
      } else {
        const response = await dispatch(addStockAction(stockData));
        if (response) {
          setIsOpen(true)
          setTimeout(() => {
            setIsOpen(false);
          }, 2000);
          dispatch(getAllStockAction());
        } else {
          alert("Failed to add stock.");
        }
      }

      setStockModalOpen(false); // Close modal
    } catch (error) {
      console.error("Error saving stock:", error);
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
          <Header pageName="Barcode Stock Create" />
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
                    </div>
                    {fieldSets.map((_, index) => (

                      <div key={index} className=" flex flex-col gap-[15px] w-[100%]">


                        <div className=" flex w-[100%]  gap-[20px]">






                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`hsn-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${ hsnFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Hsn Code
                            </label>
                            <input
                              type="text"
                         
                              id={`hsn-${index}`}
                              onFocus={() => setHsnFocused(true)}
                              onBlur={() => setHsnFocused(false)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"

                   
                              autocomplete="naqsme"
                            />
                          </div>
                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] ">
                            <label
                              htmlFor="addstockGross"
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${grossWeight || grossFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              G .Weight
                            </label>
                            <input
                              type="text"
                              name="toWeight"
                              id="addstockGross"
                              onFocus={() => setGrossFocused(true)}
                              onBlur={() => setGrossFocused(false)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              value={grossWeight}
                              onChange={(e) => setGrossWeight(e.target.value)}
                              autocomplete="naqsme"
                            />
                          </div>
                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] ">
                            <label
                              htmlFor="addstockLoss"
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${lessWeight || lossFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              L .Weight
                            </label>
                            <input
                              type="number"
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

                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
   bg-[#fff] ">
                            <label
                              htmlFor="addstockWastage"
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${westage || wastageFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Wastage
                            </label>
                            <input
                              type="number"
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
                        <div className=" flex w-[100%]  gap-[20px]">


                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`group-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${lessWeight || groupFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Group
                            </label>
                            <input
                              type="number"
                              id={`group-${index}`}
                              name="lessWeight"
           
                              onFocus={() => setGroupFocused(true)}
                              onBlur={() => setLossFocused(false)}
                              onChange={(e) => setLessWeight(e.target.value)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div>

                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`account-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${westage || accountFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Account
                            </label>
                            <input
                              type="number"
                              name="westage"
                              id={`account-${index}`}
                          
                              onFocus={() => setAccountFocused(true)}
                              onBlur={() => setAccountFocused(false)}
         
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div>
                          <div
                            ref={dropdownMetalRef}
                            className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] "
                          >
                            <label
                              htmlFor={`labour-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${  labourFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Labour
                            </label>
                            <div
                              className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                              onClick={() =>
                                setDropdownOpenLabour((prev) => !prev)
                              } // Toggle dropdown on click
                            >
                              <input
                                type="text"
                             
                                id={`labour-${index}`}
       
                                onFocus={() => setLabourFocused(true)}
                                onBlur={() => setLabourFocused(false)}
                                className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                readOnly
                              />
                              <i
                                className={
                                  dropdownOpenLabour
                                    ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                    : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                }
                              ></i>
                            </div>
                            <AnimatePresence>
                              {dropdownOpenLabour && (
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
                                        // handleSelectLabour(type?.metalName);
                                        setDropdownOpenLabour(false);
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
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${ extraFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Extra Rate
                            </label>
                            <input
                              type="text"
                           
                              id={`extra-${index}`}
                              onFocus={() => setExtraFocused(true)}
                              onBlur={() => setExtraFocused(false)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                        

                              autocomplete="naqsme"
                            />
                          </div>
                        </div>
                        <div className=" flex w-[100%]  gap-[20px]">
                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`location-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${ locationFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Location
                            </label>
                            <input
                              type="number"
                              id={`location-${index}`}
               
                              onFocus={() => setLocationFocused(true)}
                              onBlur={() => setLocationFocused(false)}

                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div>

                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`pcs-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${pcsFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Pcs
                            </label>
                            <input
                              type="number"
                              id={`pcs-${index}`}
      
                              onFocus={() => setPcsFocused(true)}
                              onBlur={() => setPcsFocused(false)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div>
                          <div
                            ref={dropdownMetalRef}
                            className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] "
                          >
                            <label
                              htmlFor={`deisgn-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${ designFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Design
                            </label>
                            <div
                              className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                              onClick={() =>
                                setDropdownOpenDesign((prev) => !prev)
                              } // Toggle dropdown on click
                            >
                              <input
                                type="text"
                         
                                id={`deisgn-${index}`}

                                onFocus={() => setDesignFocused(true)}
                                onBlur={() => setDesignFocused(false)}
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
                              {dropdownOpenDesign && (
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
                                        handleSelect(type?.metalName);
                                        setDropdownOpenDesign(false);
                                      }}
                                    >
                                      {type?.metalName}
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
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${sizeFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Size
                            </label>
                            <div
                              className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                              onClick={() =>
                                setDropdownOpenSize((prev) => !prev)
                              } // Toggle dropdown on click
                            >
                              <input
                                type="text"
                                name="metalId"
                                id={`size-${index}`}
                                onFocus={() => (true)}
                                onBlur={() => setMetalFocused(false)}
                                className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                readOnly
                              />
                              <i
                                className={
                                  dropdownOpenSize
                                    ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                                    : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                                }
                              ></i>
                            </div>
                            <AnimatePresence>
                              {dropdownOpenSize && (
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
                                        setDropdownOpenSize(false);
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
                        <div className=" flex w-[100%]  gap-[20px]">
                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`moti-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${motiFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Moti
                            </label>
                            <input
                              type="number"
                              id={`moti-${index}`}
                  

                              onFocus={() => setMotiFocused(true)}
                              onBlur={() => setMotiFocused(false)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div>

                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`stone-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${stoneFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Stone
                            </label>
                            <input
                              type="number"
                   
                              id={`stone-${index}`}
                              value={westage}
                              onFocus={() => setStoneFocused(true)}
                              onBlur={() => setStoneFocused(false)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div>

                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`jatadr-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${jadatrFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Jadatr
                            </label>
                            <input
                              type="text"
                              name="toWeight"
                              id={`jatadr-${index}`}
                              onFocus={() => setJadatrFocused(true)}
                              onBlur={() => setJadatrFocused(false)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"

                              autocomplete="naqsme"
                            />
                          </div>
                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`huid-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${huidFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Huid
                            </label>
                            <input
                              type="text"
                              id={`huid-${index}`}
                              onFocus={() => setHuidFocused(true)}
                              onBlur={() => setHuidFocused(false)}
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                           
                              autocomplete="naqsme"
                            />
                          </div>



                          <div
                            ref={dropdownMetalRef}
                            className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] "
                          >
                            <label
                              htmlFor={`huidrule-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${huidRuleFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              HuidRule
                            </label>
                            <div
                              className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                              onClick={() =>
                                setDropdownOpenHuid((prev) => !prev)
                              } // Toggle dropdown on click
                            >
                              <input
                                type="text"
                                name="metalId"
                                id={`huidrule-${index}`}
                             
                                onFocus={() => setHuidRuleFocused(true)}
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
                              {dropdownOpenHuid && (
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
                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
bg-[#fff] ">
                            <label
                              htmlFor={`huidCharge-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${huidChargeFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Huid Charge
                            </label>
                            <input
                              type="number"
                              id={`huidCharge-${index}`}
                              onFocus={() => setHuidChargeFocused(true)}
                              onBlur={() => setHuidChargeFocused(false)}
                            
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
