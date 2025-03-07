import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import mongoose from 'mongoose';

import {
  getAllSizeAction,
  getAllStockAction,
  getCategroyAction,
  getDesignAction,
  getGroupItemAction,
  getMetalAction,
  updateStockAction,
} from "../../redux/action/landingManagement";
import Header from "../../Component/header/Header";
import SideBar from "../../Component/sidebar/SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllUchakAction, getPercentageAction, getPerGramAction } from "../../redux/action/generalManagement";
import { ApiGet } from "../../helper/axios";
export default function UpdatedBarcode() {
    const [recentlySavedStock, setRecentlySavedStock] = useState([]);
    const [fieldSets, setFieldSets] = useState([
      {
        hsn: "", grossWeight: "", lessWeight: "", westage: "", group: "",
        account: "", labour: "", location: "", pcs: "", size: "",
        moti: "", stone: "", jadatr: "", huid: "", huidRule: "",
        huidCharge: "", selectedTypeDesign: "", selectedTypeHuidRule: "",
        dropdownOpenDesign: false, dropdownOpenHuid: false,
        dropdownOpenSize: false, selectedTypeSize: "",
        selectedTypeLabour: "", dropdownOpenLabour: false,
      }
    ]);
    const [isSaved, setIsSaved] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [selectedTypeCategory, setSelectedTypeCategory] = useState("");
    const [isEditing, setIsEditing] = useState(null);
    const location = useLocation();
    const stock = location.state?.stockData || "";

    console.log("stock", stock);
  
    const [caratFocused, setCaratFocused] = useState(false);
    const [categoryFocused, setCategoryFocused] = useState(false);

    const [extraDropFocused, setExtraDropFocused] = useState(false);
  
    const handleSelectExtra = (selectedValue, index) => {
      let updatedFieldSets = [...fieldSets];
      updatedFieldSets[index].selectedExtraType = selectedValue;
      updatedFieldSets[index].dropdownExtraOpen = false; // Close dropdown after selection
      setFieldSets(updatedFieldSets);
    };
  
    const [dropdownOpenMetal, setDropdownOpenMetal] = useState(false);
    const [dropdownOpenSize, setDropdownOpenSize] = useState(false);

    const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
    // const [selectedTypeCategory, setSelectedTypecategory] = useState("");
    const [appliedMarketPrice, setAppliedMarketPrice] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();
  
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.landing.getAllCategory);
    const metals = useSelector((state) => state.landing.getMetal);
    const item = useSelector((state) => state.landing.getGroupItem);
    const designs = useSelector((state) => state.landing.getDesign);
    const sizes = useSelector((state) => state.landing.getSize);
 

    useEffect(() => {
      dispatch(getCategroyAction());
      dispatch(getMetalAction());
      dispatch(getGroupItemAction());
      dispatch(getDesignAction());
      dispatch(getAllSizeAction());
      dispatch(getAllStockAction());
    }, [dispatch]);
  
    const dropdownRef = useRef(null);
    const dropdownMetalRef = useRef(null);
    const dropdownCategoryRef = useRef(null);
    const dropdownSizeRef = useRef(null);
  
    const handleSelect = (type) => {
      setSelectedType(type?.name);
      setSelectedCategory(type);
      setDropdownOpen(false);
    };
    console.log("categoryId", selectedCategory);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function fetchMarketRate() {
      try {
        if (!selectedCategory?._id) {
          console.error("Error: selectedCategory._id is undefined");
          return 0;
        }
  
        const response = await ApiGet(`/admin/market-rates?categoryId=${selectedCategory?._id}`);
  
        console.log("Market Rate Response:", response); // Log full response
  
        const marketRate = response?.[0]?.price || 0;
  
        console.log("Extracted Price:", marketRate);
  
        return parseFloat(marketRate);
      } catch (error) {
        console.error("Error fetching market rate:", error);
        return 0;
      }
    }
  
    useEffect(() => {
      if (selectedCategory && selectedCategory._id) {
        fetchMarketRate().then((rate) => {
          setAppliedMarketPrice(rate);
          console.log("Applied Market Price:", rate);
        });
      } else {
        setAppliedMarketPrice(0);
        console.log("Applied Market Price Reset to 0");
      }
    }, [fetchMarketRate, selectedCategory]);
  
    console.log("appliedMarketPrice", appliedMarketPrice);
  
    const handleSelectLabourType = async (labourType, index) => {
      console.log("Selected Labour Type:", labourType);
  
      let labourRate = 0;
      let labourData = [];
  
      try {
        if (labourType === "Uchak") {
          labourData = await dispatch(getAllUchakAction());
        } else if (labourType === "PerGram") {
          labourData = await dispatch(getPerGramAction());
        } else if (labourType === "Percentage") {
          labourData = await dispatch(getPercentageAction());
        }
  
        console.log(`Labour Data for ${labourType}:`, labourData);
  
        if (labourData && labourData.length > 0) {
          labourRate = parseFloat(labourData[0].rate) || 0;
        }
  
        console.log(`Calculated Labour Rate for ${labourType}:`, labourRate);
  
        setFieldSets((prevFieldSets) => {
          const updatedFieldSets = [...prevFieldSets];
          updatedFieldSets[index].selectedTypeLabour = labourType;
          updatedFieldSets[index].dropdownOpenLabour = false;
          updatedFieldSets[index].labourRate = labourRate;
          return updatedFieldSets;
        });
  
      } catch (error) {
        console.error("Error fetching labour rate:", error);
      }
    };
  
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.key === "+" || event.key === "Add") {
          event.preventDefault(); // Prevent browser zooming or unwanted effects
          setFieldSets((prevFieldSets) => [
            ...prevFieldSets,
            {
              hsn: "", grossWeight: "", lessWeight: "", westage: "", group: "",
              account: "", labour: "", location: "", pcs: "", size: "",
              moti: "", stone: "", jadatr: "", huid: "", huidRule: "",
              huidCharge: "", selectedTypeDesign: "", selectedTypeHuidRule: "",
              dropdownOpenDesign: false, dropdownOpenHuid: false,
              selectedTypeLabour: "", dropdownOpenLabour: false,
            }
          ]);
        }
      };
  
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, []);

    useEffect(() => {
      if (stock) {
        console.log("Stock Data:", stock); // Debugging to check API response
  
        setSelectedType(stock.groupId?.name || "N/A"); // Set Carat
        setSelectedTypeCategory(stock.groupItemId?.itemName || "N/A"); // Set Category
  
        setFieldSets([
          {
            id: stock._id || "N/A",
            hsn: stock.hsnCode || "N/A",
            grossWeight: stock.toWeight ? stock.toWeight.toString() : "0",
            lessWeight: stock.lessWeight ? stock.lessWeight.toString() : "0",
            wastage: stock.wastage ? stock.wastage.toString() : "0",
            labour: stock.labour || "N/A",
            location: stock.location || "N/A",
            pcs: stock.pcs ? stock.pcs.toString() : "0",
            huid: stock.huid || "N/A",
            huidCharge: stock.huidCharge ? stock.huidCharge.toString() : "0",
            selectedTypeDesign: stock.design?.designName || "N/A", // ✅ Handle missing design
            selectedTypeSize: stock.size?.sizeName || "N/A", // ✅ Handle missing size
          },
        ]);
      }
    }, [stock]);


    const handleFieldChange = (index, field, value) => {
      setFieldSets(prevFieldSets => {
        const updatedFieldSets = [...prevFieldSets];
        updatedFieldSets[index][field] = value;
        return updatedFieldSets;
      });
    };
  
    const handleAddFieldSet = () => {
      setFieldSets([...fieldSets, {
        hsn: "", grossWeight: "", lessWeight: "", westage: "", group: "",
        account: "", labour: "", location: "", pcs: "", size: "",
        moti: "", stone: "", jadatr: "", huid: "", huidRule: "",
        huidCharge: "", selectedTypeDesign: "", selectedTypeHuidRule: "",
        dropdownOpenDesign: false, dropdownOpenHuid: false
      }]);
    };
  
    const handleSelectCategory = (type) => {
      setSelectedTypeCategory(type);
      setDropdownOpenCategory(false);
    };
  
  
    useEffect(() => {
      if (fieldSets?.grossWeight && fieldSets?.lessWeight && selectedType) {
        const selectedCarat = categories.find(
          (carat) => carat.name === selectedType
        );
        if (selectedCarat && selectedCarat.percentage) {
          const netWeight = parseFloat(fieldSets.grossWeight) - parseFloat(fieldSets.lessWeight || 0);
          const fineWeight = (
            netWeight *
            (selectedCarat.percentage / 100)
          ).toFixed(3);
          console.log("Calculated Fine Weight:", fineWeight);
        }
      }
    }, [fieldSets?.grossWeight, fieldSets?.lessWeight, selectedType, categories]);
  
    // const handleAddStock = async () => {
    //   console.log("Fetching labour data...");
  
    //   // ✅ Fetch Labour Data
    //   const labourData = {
    //     uchak: await dispatch(getAllUchakAction()),
    //     perGram: await dispatch(getPerGramAction()),
    //     percentage: await dispatch(getPercentageAction()),
    //   };
  
    //   console.log("Labour Data Received:", labourData);
  
    //   // ✅ Find Selected Category (From Dropdown)
    //   const selectedCarat = categories.find((carat) => carat.name === selectedType);
    //   const selectedCategory = item.find((data) => data.itemName === selectedTypeCategory);
  
    //   if (!selectedCarat || !selectedCategory) {
    //     alert("Please select a valid Carat and Category.");
    //     return;
    //   }
  
    //   let matchedRate = 0;
    //   const productsArray = fieldSets.map(field => {
    //     let labourAmount = 0;
    //     const grossWeight = parseFloat(field.grossWeight) || 0;
    //     const netWeight = grossWeight - (parseFloat(field.lessWeight) || 0);
  
    //     const matchLabour = (labourArray) => {
    //       const matchingLabour = labourArray.filter(labour =>
    //         String(labour.group?._id).trim() === String(selectedCarat?._id).trim() &&
    //         String(labour.item?._id).trim() === String(selectedCategory?._id).trim() &&
    //         (labour.minWeight && labour.maxWeight
    //           ? grossWeight >= parseFloat(labour.minWeight) && grossWeight <= parseFloat(labour.maxWeight)
    //           : true
    //         )
    //       );
  
    //       console.log("Matching Labour:", matchingLabour);
  
    //       // ✅ Pick the last (latest) matching labour entry
    //       return matchingLabour.length ? matchingLabour[matchingLabour.length - 1] : null;
    //     };
  
    //     let matchedLabour = null;
    //     if (field.selectedTypeLabour === "Uchak") {
    //       matchedLabour = matchLabour(labourData.uchak);
    //     } else if (field.selectedTypeLabour === "PerGram") {
    //       matchedLabour = matchLabour(labourData.perGram);
    //     } else if (field.selectedTypeLabour === "Percentage") {
    //       matchedLabour = matchLabour(labourData.percentage);
    //     }
  
    //     if (matchedLabour) {
    //       // Parse the default rate from matched labour data
    //       matchedRate = parseFloat(matchedLabour.rate) || 0;
    //       if (field.selectedTypeLabour === "PerGram") {
    //         labourAmount = matchedRate * netWeight;
    //       } else if (field.selectedTypeLabour === "Percentage") {
    //         labourAmount = (netWeight * appliedMarketPrice * matchedRate) / 100;
    //       } else {
    //         labourAmount = matchedRate;
    //       }
    //     }
  
    //     console.log('labourAmount', labourAmount)
  
    //     return {
    //       groupId: selectedCarat._id,
    //       groupItemId: selectedCategory._id,
    //       toWeight: parseFloat(field.grossWeight) || 0,
    //       lessWeight: parseFloat(field.lessWeight) || 0,
    //       wastage: parseFloat(field.westage) || 0,
    //       labour: labourAmount.toFixed(2),
    //       hsnCode: field.hsn ? field.hsn.toString() : "",
    //       extraRate: field.extra ? field.extra.toString() : "",
    //       group: field.group ? field.group.toString() : "",
    //       account: field.account ? field.account.toString() : "",
    //       location: field.location ? field.location.toString() : "",
    //       design: mongoose.Types.ObjectId.isValid(field.design) ? field.design : null,
    //       pcs: parseInt(field.pcs) || 1,
    //       size: mongoose.Types.ObjectId.isValid(field.size) ? field.size : null,
    //       moti: parseFloat(field.moti) || 0,
    //       stone: parseFloat(field.stone) || 0,
    //       jadatr: parseFloat(field.jadatr) || 0,
    //       huid: field.huid ? field.huid.toString() : "",
    //       huidRule: field.huidRule ? field.huidRule.toString() : "",
    //       huidCharge: parseFloat(field.huidCharge) || 0,
  
    //     };
    //   });
  
    //   console.log('productsArray', productsArray)
  
    //   try {  
    //     const updatedStock = {
    //       groupId: selectedCarat._id,
    //       groupItemId: selectedCategory._id,
    //       products: productsArray,
    //     };
    
    //     console.log("Sending Update Request:", updatedStock);
    
    //     const response = await dispatch(updateStockAction(stock._id, updatedStock));

    //     console.log('response', response)
  
    //     if (response) {
    //       alert("Stock updated successfully!");
    //       setIsSaved(true);
    //       setRecentlySavedStock(response);  
    //       dispatch(getAllStockAction());
    //       navigate("/add-stock");
    //     } else {
    //       alert("Failed to update stock.");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     alert("An error occurred while saving stock.");
    //   }
    // };
    const handleAddStock = async () => {
      console.log("Fetching labour data...");
  
      const labourData = {
        uchak: await dispatch(getAllUchakAction()),
        perGram: await dispatch(getPerGramAction()),
        percentage: await dispatch(getPercentageAction()),
      };
  
      console.log("Labour Data Received:", labourData);
  
      let matchedRate = 0;
      const productsArray = fieldSets.map((field) => {
        let labourAmount = 0;
        const grossWeight = parseFloat(field.grossWeight) || 0;
        const netWeight = grossWeight - (parseFloat(field.lessWeight) || 0);
  
        const matchLabour = (labourArray) => {
          const matchingLabour = labourArray.filter(labour =>
            String(labour.group?._id).trim() === String(stock.groupId).trim() &&
            String(labour.item?._id).trim() === String(stock.groupItemId).trim() &&
            (labour.minWeight && labour.maxWeight
              ? grossWeight >= parseFloat(labour.minWeight) && grossWeight <= parseFloat(labour.maxWeight)
              : true
            )
          );
  
          return matchingLabour.length ? matchingLabour[matchingLabour.length - 1] : null;
        };
  
        let matchedLabour = null;
        if (field.selectedTypeLabour === "Uchak") {
          matchedLabour = matchLabour(labourData.uchak);
        } else if (field.selectedTypeLabour === "PerGram") {
          matchedLabour = matchLabour(labourData.perGram);
        } else if (field.selectedTypeLabour === "Percentage") {
          matchedLabour = matchLabour(labourData.percentage);
        }
  
        if (matchedLabour) {
          matchedRate = parseFloat(matchedLabour.rate) || 0;
          if (field.selectedTypeLabour === "PerGram") {
            labourAmount = matchedRate * netWeight;
          } else if (field.selectedTypeLabour === "Percentage") {
            labourAmount = (netWeight * matchedRate) / 100;
          } else {
            labourAmount = matchedRate;
          }
        }
  
        return {
          groupId: stock.groupId, // ✅ Ensuring it remains unchanged
          groupItemId: stock.groupItemId, // ✅ Ensuring it remains unchanged
          toWeight: parseFloat(field.grossWeight) || 0,
          lessWeight: parseFloat(field.lessWeight) || 0,
          wastage: parseFloat(field.wastage) || 0,
          labour: labourAmount.toFixed(2),
          hsnCode: field.hsn ? field.hsn.toString() : "",
          extraRate: field.extra ? field.extra.toString() : "",
          location: field.location ? field.location.toString() : "",
          pcs: parseInt(field.pcs) || 1,
          huid: field.huid ? field.huid.toString() : "",
          huidRule: field.huidRule ? field.huidRule.toString() : "",
          huidCharge: parseFloat(field.huidCharge) || 0,
        };
      });
  
      try {
        const updatedStock = {
          groupId: stock.groupId, // ✅ Prevent Editing
          groupItemId: stock.groupItemId, // ✅ Prevent Editing
          products: productsArray,
        };
  
        console.log("Sending Update Request:", updatedStock);
        const response = await dispatch(updateStockAction(stock._id, updatedStock));
  
        console.log("Response from Update:", response);
  
        if (response?.product) {
          alert("Stock updated successfully!");
          navigate("/add-stock");
        } else {
          alert("Failed to update stock.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while saving stock.");
      }
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
        if (
          dropdownSizeRef.current &&
          !dropdownSizeRef.current.contains(event.target)
        ) {
          setDropdownOpenSize(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
  
  return (
  <>

<section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Barcode Stock Edit" />
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
                              className="absolute top-[90%]  mt-2   max-h-[160px] overflow-y-auto  left-[-16px] bg-white w-[300px] border border-[#dedede] rounded-lg shadow-md z-10"
                            >
                              {Array.isArray(categories) && categories.length > 0 ? (
                                categories.map((type, index) => (
                                  <div
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                    onClick={() => handleSelect(type)}
                                  >
                                    {type?.name}
                                  </div>
                                ))
                              ) : (
                                <p>No categories available</p> // ✅ Fallback message
                              )}
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
                              className="absolute top-[90%]  mt-2 bg-white max-h-[160px] overflow-y-auto left-[-16px] w-[390px] border border-[#dedede] rounded-lg shadow-md z-10"
                            >
                              {Array.isArray(item) && item.length > 0 ? (
                                item.map((type, index) => (<div
                                  key={index}
                                  className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                  onClick={() => {
                                    handleSelectCategory(type?.itemName);
                                    setDropdownOpenCategory(false);
                                  }}
                                >
                                  {type?.itemName}
                                </div>
                                ))
                              ) : (
                                <p>No items available</p> // ✅ Fallback message
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    {Array.isArray(fieldSets) && fieldSets.map((_, index) => (

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
                              autoComplete="naqsme"
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

                              autoComplete="naqsme"
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
                              autoComplete="naqsme"
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
                              autoComplete="naqsme"
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
                              type="text"
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
                              autoComplete="naqsme"
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
                              autoComplete="naqsme"
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
                              Labour Type
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
                                className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                              />
                              <i
                                className={fieldSets[index]?.dropdownOpenLabour ? "fa-solid fa-chevron-up text-[14px] pr-[10px]" : "fa-solid fa-chevron-down text-[14px] pr-[10px]"}
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
                                  {["Uchak", "PerGram", "Percentage"].map((labourType, idx) => (
                                    <div
                                      key={idx}
                                      className="px-4 py-2 hover:bg-gray-100 font-Poppins text-left cursor-pointer text-sm text-[#00000099]"
                                      onClick={() => handleSelectLabourType(labourType, index)}
                                    >
                                      {labourType}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="relative w-full   border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] 
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
                              type="number"
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
                              autoComplete="naqsme"
                            />
                            <div
                              className="relative cursor-pointer w-fit rounded-lg px-[10px] border m-[5px] flex items-center space-x-4 text-[#00000099] "
                              onClick={() => {
                                let updatedFieldSets = [...fieldSets];
                                updatedFieldSets[index].dropdownExtraOpen = !updatedFieldSets[index].dropdownOpenLabour;
                                setFieldSets(updatedFieldSets);
                              }}
                            >
                              <label
                                htmlFor={`addstock-${index}`}
                                className={`absolute left-[13px] font-Poppins px-[5px] bg-[#fff] text-[13px] transition-all duration-200 ${fieldSets[index]?.selectedExtraType  || extraDropFocused
                                    ? "text-[#000] -translate-y-[21px] hidden"
                                    : "text-[#8f8f8f] cursor-text flex"
                                  }`}
                              >
                                Select Option
                              </label>
                              <input
                                type="text"
                                id={`addstock-${index}`}
                                value={fieldSets[index]?.selectedExtraType || ""}
                                readOnly
                                className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                              />
                              <i
                                className={`fa-solid text-[14px] pr-[10px] ${fieldSets[index]?.dropdownExtraOpen ? "fa-chevron-up" : "fa-chevron-down"
                                  }`}
                              ></i>
                            </div>

                            <AnimatePresence>
                            {fieldSets[index]?.dropdownExtraOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="absolute top-[90%] mt-2 right-[-3px] bg-white w-[150px] border border-[#dedede] rounded-lg shadow-md z-10"
                                >
                                 {["Uchak", "PerGram", "Percentage"].map((extra, idx) => (
                                    <div
                                      key={idx}
                                      className="px-4 py-2 hover:bg-gray-100 font-Poppins text-left cursor-pointer text-sm text-[#00000099]"
                                      onClick={() => handleSelectExtra(extra, index)}
                                    >
                                      {extra}
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
                              htmlFor={`location-${index}`}
                              className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${fieldSets[index]?.location || fieldSets[index]?.locationFocused
                                ? "text-[#000] -translate-y-[21px] hidden "
                                : "text-[#8f8f8f] cursor-text flex"
                                }`}
                            >
                              Location
                            </label>
                            <input
                              type="text"
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
                              autoComplete="naqsme"
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
                              autoComplete="naqsme"
                            />
                          </div>
                          <div className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] bg-[#fff]">
                            <label
                              htmlFor={`design-${index}`}
                              className={`absolute left-[13px] font-Poppins px-[5px] bg-[#fff] text-[14px] transition-all duration-200 
      ${fieldSets[index]?.selectedTypeDesign || fieldSets[index]?.dropdownOpenDesign ? "text-[#000] hidden   -translate-y-[21px] scale-90" : "text-[#8f8f8f] cursor-text flex"}`}
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
                                  {designs.length > 0 ? (
                                    designs.map((type, idx) => (
                                      <div
                                        key={idx}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => {
                                          let updatedFieldSets = [...fieldSets];
                                          updatedFieldSets[index].selectedTypeDesign = type?.designName;
                                          updatedFieldSets[index].design = type?._id || null;
                                          updatedFieldSets[index].dropdownOpenDesign = false;
                                          setFieldSets(updatedFieldSets);
                                        }}

                                      >
                                        {type?.designName}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="px-4 py-2 text-center text-[#8f8f8f]"></div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] bg-[#fff]">
                            <label
                              htmlFor={`size-${index}`}
                              className={`absolute left-[13px] font-Poppins px-[5px] bg-[#fff] text-[14px] transition-all duration-200 
                               ${fieldSets[index]?.selectedTypeSize || fieldSets[index]?.dropdownOpenSize ? "text-[#000] -translate-y-[21px] hidden scale-90" : "text-[#8f8f8f] cursor-text flex"}`}
                            >
                              Size
                            </label>
                            <div
                              className="relative w-full rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer"
                              onClick={() => {
                                let updatedFieldSets = [...fieldSets];
                                updatedFieldSets[index].dropdownOpenSize = !updatedFieldSets[index].dropdownOpenSize;
                                setFieldSets(updatedFieldSets);
                              }}
                            >
                              <input
                                type="text"
                                id={`size-${index}`}
                                name="size"
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
                                  className="absolute top-full left-[-16px] mt-1 w-[300px] bg-white border border-[#dedede] rounded-lg shadow-md z-10"
                                >
                                  {sizes.length > 0 ? (
                                    sizes.map((type, idx) => (
                                      <div
                                        key={idx}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => {
                                          let updatedFieldSets = [...fieldSets];
                                          updatedFieldSets[index].selectedTypeSize = type?.sizeName; // ✅ Store sizeName
                                          updatedFieldSets[index].size = type?._id || null; // ✅ Store ObjectId
                                          updatedFieldSets[index].dropdownOpenSize = false;
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
                              autoComplete="naqsme"
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
                              autoComplete="naqsme"
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

                              autoComplete="naqsme"
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
                              value={fieldSets.huid}

                              autoComplete="naqsme"
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
                              autoComplete="naqsme"
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
                    <div className=" flex w-[100%] justify-between ">
                      <div className=" flex  gap-[40px] justify-center ">
                        <button
                          className=" flex  w-[150px] font-Poppins items-center justify-center gap-[6px] py-[8px] text-[20px] rounded-[8px] text-[#fff] bs-spj "
                          onClick={handleAddStock}
                        >
                          Save
                        </button>


                        {/* <button
                        className=" gap-[10px] flex items-center  font-Poppins bs-spj text-white px-[15px] py-[8px]   text-[17px] rounded-[7px] w-fit hover:bg-[#004875] justify-end transition duration-200"
                      // onClick={handleNavigateToPrint}

                      >
                        <i class="fa-regular fa-print"></i>
                        Print  Barcode
                      </button> */}


                        {/* <div ref={printRef} className="labels-container">
                          {barcodes.length > 0 ? (
                            barcodes.map((barcode, index) => (
                              <div key={index} className="label bg-white border w-[200px] mb-[10px] rounded-[5px] flex-wrap  justify-center flex py-[10px] border-gray-200">
                                <div className="label-content">

                                  <div className="barcode-container">
                                    <img
                                      className="barcode w-[100px]"
                                      src={barcode.barcodeImage || "/placeholder.svg"}
                                      alt={`Barcode ${barcode.barCode}`}
                                    />

                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p></p>
                          )}
                        </div> */}


                      </div>
       
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
