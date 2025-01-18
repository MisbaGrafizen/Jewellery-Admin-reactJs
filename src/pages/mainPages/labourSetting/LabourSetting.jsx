import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../Component/sidebar/SideBar";
import Header from "../../../Component/header/Header";
// import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getCategroyAction, getGroupItemAction, getMetalAction } from "../../../redux/action/landingManagement";
import { addPercentageAction, addPerGramAction, addUchakAction, getAllUchakAction, getPercentageAction, getPerGramAction, updatePercentageAction, updatePerGramAction, updateUchakAction } from "../../../redux/action/generalManagement";


export default function LabourSetting() {
  // const [labourModalopen, setlabourModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [dropdownOpenMetal, setDropdownOpenMetal] = useState(false);
  const [selectedTypeMetal, setSelectedTypeMetal] = useState("");
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [selectedTypeCategory, setSelectedTypecategory] = useState("");
  const dropdownRef = useRef(null);
  const dropdownMetalRef = useRef(null);
  const dropdownCategoryRef = useRef(null);
  
  const dropdownWeightRef = useRef(null);
  const dropdownMetalWeightRef = useRef(null);
  const dropdownCategoryWeightRef = useRef(null);


  const dropdownPercentageRef = useRef(null);
  const dropdownMetalPercentageRef = useRef(null);
  const dropdownCategoryPercentageRef = useRef(null);




  const [isEditing, setIsEditing] = useState(false); 
  const [formData, setFormData] = useState({
    carat: "Default Carat",
    metal: "Default Metal",
    category: "Default Category",
    minWeight: '',
    maxWeight: '',
    rate: '',
  });
  const [selectedUchak, setSelectedUchak] = useState("");

  const [isEditingWeight, setIsEditingWeight] = useState(false); 
  const [formDataWeight, setFormDataWeight] = useState({
    carat: "Default Carat",
    metal: "Default Metal",
    category: "Default Category",
    minWeight: '',
    maxWeight: '',
    rate: '',
  });
  const [selectedWeight, setSelectedWeight] = useState("");

  const [isEditingPercentage, setIsEditingPercentage] = useState(false);
  const [formDataPercentage, setFormDataPercentage] = useState({
    carat: "Default Carat",
    metal: "Default Metal",
    category: "Default Category",
    minWeight: '',
    maxWeight: '',
    rate: '',
  });
  const [selectedPercentage, setSelectedPercentage] = useState("");



// Weight dropDown
const [dropdownOpenWeight, setDropdownOpenWeight] = useState(false);
const [selectedTypeWeight, setSelectedTypeWeight] = useState("");
const [dropdownOpenMetalWeight, setDropdownOpenMetalWeight] = useState(false);
const [selectedTypeMetalWeight, setSelectedTypeMetalWeight] = useState("");
const [dropdownOpenCategoryWeight, setDropdownOpenCategoryWeight] = useState(false);
const [selectedTypeCategoryWeight, setSelectedTypecategoryWeight] = useState("");


// Percentage dropDown
const [dropdownOpenPercentage, setDropdownOpenPercentage] = useState(false);
const [selectedTypePercentage, setSelectedTypePercentage] = useState("");
const [dropdownOpenMetalPercentage, setDropdownOpenMetalPercentage] = useState(false);
const [selectedTypeMetalPercentage, setSelectedTypeMetalPercentage] = useState("");
const [dropdownOpenCategoryPercentage, setDropdownOpenCategoryPercentage] = useState(false);
const [selectedTypeCategoryPercentage, setSelectedTypecategoryPercentage] = useState("");

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.landing.getAllCategory);
  const metals = useSelector((state) => state.landing.getMetal);
  const item = useSelector((state) => state.landing.getGroupItem);
  const uchak = useSelector((state) => state.general.getUchak);
  const weight = useSelector((state) => state.general.getPergram);
  const percentage = useSelector((state) => state.general.getPercentage);

    useEffect(() => {
      dispatch(getCategroyAction());
      dispatch(getMetalAction());
      dispatch(getGroupItemAction());
      dispatch(getAllUchakAction());
      dispatch(getPerGramAction());
      dispatch(getPercentageAction());
    }, [dispatch]);

  

  const firmTypes = [
    "Sole Proprietorship",
    "Partnership",
    "LLC",
    "Corporation",
  ];
  const firmTypesMetal = ["Gold", "Silver", "Platinum", "Other"];
  const firmTypesCategory = ["Gold", "Silver", "Platinum", "Other"];
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


  const handleSelectWeight = (type) => {
    setSelectedTypeWeight(type);
    setDropdownOpenWeight(false);
  };

  const handleSelectMetalWeight = (type) => {
    setSelectedTypeMetalWeight(type);
    setDropdownOpenMetalWeight(false);
  };

  const handleSelectCategoryWeight = (type) => {
    setSelectedTypecategoryWeight(type);
    setDropdownOpenCategoryWeight(false);
  };



  const handleSelectPercentage = (type) => {
    setSelectedTypePercentage(type);
    setDropdownOpenPercentage(false);
  };

  const handleSelectMetalPercentage = (type) => {
    setSelectedTypeMetalPercentage(type);
    setDropdownOpenMetalPercentage(false);
  };

  const handleSelectCategoryPercentage = (type) => {
    setSelectedTypecategoryPercentage(type);
    setDropdownOpenCategoryPercentage(false);
  };

  // const addLabour = () => {
  //   setlabourModalOpen(true);
  // };

  // const handleModalclose = () => {
  //   setlabourModalOpen(false);
  // };

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

      if (dropdownWeightRef.current && !dropdownWeightRef.current.contains(event.target)) {
        setDropdownOpenWeight(false);
      }
      if (
        dropdownMetalWeightRef.current &&
        !dropdownMetalWeightRef.current.contains(event.target)
      ) {
        setDropdownOpenMetalWeight(false);
      }
      if (
        dropdownCategoryWeightRef.current &&
        !dropdownCategoryWeightRef.current.contains(event.target)
      ) {
        setDropdownOpenCategoryWeight(false);
      }


      if (dropdownPercentageRef.current && !dropdownPercentageRef.current.contains(event.target)) {
        setDropdownOpenPercentage(false);
      }
      if (
        dropdownMetalPercentageRef.current &&
        !dropdownMetalPercentageRef.current.contains(event.target)
      ) {
        setDropdownOpenMetalPercentage(false);
      }
      if (
        dropdownCategoryPercentageRef.current &&
        !dropdownCategoryPercentageRef.current.contains(event.target)
      ) {
        setDropdownOpenCategoryPercentage(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEdit = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleSave = () => {
    setIsEditing(false); // Disable editing mode
    console.log("Saved Data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeWeight = (e) => {
    const { name, value } = e.target;
    setFormDataWeight((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangePercentage = (e) => {
    const { name, value } = e.target;
    setFormDataPercentage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUchak = async () => {
    if (!selectedType || !selectedTypeMetal || !selectedTypeCategory) {
      alert("Please select Carat, Metal, and Category.");
      return;
    }
  
    const selectedCarat = categories.find((carat) => carat.name === selectedType);
    const selectedMetal = metals.find((metal) => metal.metalName === selectedTypeMetal);
    const selectedCategory = item.find((data) => data.itemName === selectedTypeCategory);
  
    if (!selectedCarat || !selectedMetal || !selectedCategory) {
      alert("Invalid selection. Please select valid Carat, Metal, and Category.");
      return;
    }
  
    const uchakData = {
      group: selectedCarat?._id,
      metal: selectedMetal?._id,
      item: selectedCategory?._id,
      minWeight: parseFloat(formData.minWeight) || 0,
      maxWeight: parseFloat(formData.maxWeight) || 0,
      rate: parseFloat(formData.rate) || 0,
    };
  
    try {
      if (isEditing) {
        const response = await dispatch(updateUchakAction(selectedUchak?._id, uchakData));
        if (response) {
          alert("Uchak updated successfully!");
          dispatch(getAllUchakAction()); 
        } else {
          alert("Failed to update Uchak.");
        }
      } else {
        const response = await dispatch(addUchakAction(uchakData));
        console.log('response', response)
        if (response) {
          alert("Uchak added successfully!");
          dispatch(getAllUchakAction());
        } else {
          alert("Failed to add Uchak.");
        }
      }
  
      setIsEditing(false); 
      setFormData({
        carat: "",
        metal: "",
        category: "",
        minWeight: 0,
        maxWeight: 100,
        rate: 50,
      });
    } catch (error) {
      console.error("Error saving Uchak:", error);
      alert("An error occurred while saving Uchak.");
    }
  };

  const handleAddWeight = async () => {
    if (!selectedTypeWeight || !selectedTypeMetalWeight || !selectedTypeCategoryWeight) {
      alert("Please select Carat, Metal, and Category.");
      return;
    }
  
    const selectedCarat = categories.find((carat) => carat.name === selectedTypeWeight);
    const selectedMetal = metals.find((metal) => metal.metalName === selectedTypeMetalWeight);
    const selectedCategory = item.find((data) => data.itemName === selectedTypeCategoryWeight);
  
    if (!selectedCarat || !selectedMetal || !selectedCategory) {
      alert("Invalid selection. Please select valid Carat, Metal, and Category.");
      return;
    }
  
    const weightData = {
      group: selectedCarat?._id,
      metal: selectedMetal?._id,
      item: selectedCategory?._id,
      minWeight: parseFloat(formDataWeight.minWeight) || 0,
      maxWeight: parseFloat(formDataWeight.maxWeight) || 0,
      rate: parseFloat(formDataWeight.rate) || 0,
    };
  
    try {
      if (isEditingWeight) {
        const response = await dispatch(updatePerGramAction(selectedWeight?._id, weightData));
        if (response) {
          alert("Weight updated successfully!");
          dispatch(getPerGramAction()); 
        } else {
          alert("Failed to update Weight.");
        }
      } else {
        const response = await dispatch(addPerGramAction(weightData));
        console.log('response', response)
        if (response) {
          alert("Weight added successfully!");
          dispatch(getPerGramAction());
        } else {
          alert("Failed to add Weight.");
        }
      }
  
      setIsEditingWeight(false); 
      setFormDataWeight({
        carat: "",
        metal: "",
        category: "",
        minWeight: 0,
        maxWeight: 100,
        rate: 50,
      });
    } catch (error) {
      console.error("Error saving Uchak:", error);
      alert("An error occurred while saving Uchak.");
    }
  };

  const handleAddPercentage = async () => {
    if (!selectedTypePercentage || !selectedTypeMetalPercentage || !selectedTypeCategoryPercentage) {
      alert("Please select Carat, Metal, and Category.");
      return;
    }
  
    const selectedCarat = categories.find((carat) => carat.name === selectedTypePercentage);
    const selectedMetal = metals.find((metal) => metal.metalName === selectedTypeMetalPercentage);
    const selectedCategory = item.find((data) => data.itemName === selectedTypeCategoryPercentage);
  
    if (!selectedCarat || !selectedMetal || !selectedCategory) {
      alert("Invalid selection. Please select valid Carat, Metal, and Category.");
      return;
    }
  
    const percentageData = {
      group: selectedCarat?._id,
      metal: selectedMetal?._id,
      item: selectedCategory?._id,
      minWeight: parseFloat(formDataPercentage.minWeight) || 0,
      maxWeight: parseFloat(formDataPercentage.maxWeight) || 0,
      rate: parseFloat(formDataPercentage.rate) || 0,
    };
  
    try {
      if (isEditingPercentage) {
        const response = await dispatch(updatePercentageAction(selectedPercentage?._id, percentageData));
        if (response) {
          alert("Percentage updated successfully!");
          dispatch(getPercentageAction()); 
        } else {
          alert("Failed to update Percentage.");
        }
      } else {
        const response = await dispatch(addPercentageAction(percentageData));
        console.log('response', response)
        if (response) {
          alert("Percentage added successfully!");
          dispatch(getPercentageAction());
        } else {
          alert("Failed to add Percentage.");
        }
      }
  
      setIsEditingPercentage(false); 
      setFormDataPercentage({
        carat: "",
        metal: "",
        category: "",
        minWeight: 0,
        maxWeight: 100,
        rate: 50,
      });
    } catch (error) {
      console.error("Error saving Uchak:", error);
      alert("An error occurred while saving Uchak.");
    }
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
                {/* <div className=" flex justify-end " onClick={addLabour}>
                  <button className="text-[#fff] bs-spj gap-[8px] font-Poppins flex justify-center items-center h-[35px] rounded-[5px] px-[10px]">
                    <i class="fa-solid fa-plus"></i>
                    Add New Labour Rate
                  </button>
                </div> */}

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
                                    name="group"
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
                                    name="metal"
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
                                    name="item"
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
                                  name="minWeight"
                                  placeholder="Enter Min-Weight"
                                  value={formData?.minWeight}
                                  onChange={handleChange}
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
                                  name="maxWeight"
                                  placeholder="Enter Max-Weight"
                                  value={formData?.maxWeight}
                                  onChange={handleChange}
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
                                  name="rate"
                                  placeholder="Enter Rate"
                                  value={formData?.rate}
                                  onChange={handleChange}
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                            onClick={handleAddUchak}>
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
                            {uchak?.map((item, index) => (
                            <div key={index} className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">

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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.group?.name}</p>
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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.metal?.metalName}</p>
                                  
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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.item?.itemName}</p>
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
                                <p className=" text-[15px]   py-[9px] font-Poppins">{item?.minWeight}</p>
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{item?.maxWeight}</p>
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
                                <p className=" text-[15px]   py-[9px] font-Poppins"> {item?.rate}</p>
                              </div>
                            </div>
                          </div>
                            ))}
                            </>
                          )}
                        </div>
                      </div>

                      <div className=" flex flex-col gap-[10px] overflow-hidden w-[400px]">
                        <h2 className=" text-[#0099dd] flex justify-center rounded-tr-[2px] rounded-br-[30px] rounded-tl-[2px] rounded-bl-[30px] bs-spj text-[#fff] py-[6px] font-[500] text-[20px] font-Poppins pl-[6px]">
                          Weight
                        </h2>
                        <div className=" flex gap-[25px] h-] overflow-y-auto overflow-x-hidden flex-col   relative  px-[19px] w-[100%] ">
                          <div className=" flex border-[1px] flex-col gap-[14px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownWeightRef}
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
                                    setDropdownOpenWeight((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="group"
                                    id="type"
                                    value={selectedTypeWeight}
                                    placeholder="Select Carat"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenWeight
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenWeight && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {categories.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => handleSelectWeight(type?.name)}
                                        >
                                          {type?.name}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              <div
                                ref={dropdownMetalWeightRef}
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
                                    setDropdownOpenMetalWeight((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="metal"
                                    id="type1"
                                    value={selectedTypeMetalWeight}
                                    placeholder="Select Metal"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenMetalWeight
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenMetalWeight && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {metals.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectMetalWeight(type?.metalName);
                                            setDropdownOpenMetalWeight(false);
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
                              <div
                                ref={dropdownCategoryWeightRef}
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
                                    setDropdownOpenCategoryWeight((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="item"
                                    id="type1"
                                    value={selectedTypeCategoryWeight}
                                    placeholder="Select Category"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenCategoryWeight
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenCategoryWeight&& (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {item.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectCategoryWeight(type?.itemName);
                                            setDropdownOpenCategoryWeight(false);
                                          }}
                                        >
                                          {type?.itemName}
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
                                  name="minWeight"
                                  placeholder="Enter Min-Weight"
                                  value={formDataWeight?.minWeight}
                                  onChange={handleChangeWeight}
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
                                  name="maxWeight"
                                  placeholder="Enter Max-Weight"
                                  value={formDataWeight?.maxWeight}
                                  onChange={handleChangeWeight}
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
                                  name="rate"
                                  placeholder="Enter Rate"
                                  value={formDataWeight?.rate}
                                  onChange={handleChangeWeight}
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                            onClick={handleAddWeight}>
                              Save
                            </button>
                          </div>
                          {isEditingWeight ? (
                            // Editable Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                              <div className=" flex w-[100%] fle  gap-[5px]">
                                <div
                                  ref={dropdownWeightRef}
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
                                      setDropdownOpenWeight((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type"
                                      id="type"
                                      value={selectedTypeWeight}
                                      placeholder="Select Carat"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenWeight
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenWeight && (
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
                                            onClick={() => handleSelectWeight(type)}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                <div
                                  ref={dropdownMetalWeightRef}
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
                                      setDropdownOpenMetalWeight((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeMetalWeight}
                                      placeholder="Select Metal"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenMetalWeight
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenMetalWeight && (
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
                                              handleSelectMetalWeight(type);
                                              setDropdownOpenMetalWeight(false);
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
                                  ref={dropdownCategoryWeightRef}
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
                                      setDropdownOpenCategoryWeight((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeCategoryWeight}
                                      placeholder="Select Category"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenCategoryWeight
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenCategoryWeight && (
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
                                                handleSelectCategoryWeight(type);
                                                setDropdownOpenCategoryWeight(false);
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
                            {weight?.map((item, index) => (
                            <div key={index} className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">

                          <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#009dd1]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                          <i className="fa-solid cursor-pointer fa-pen-to-square" onClick={handleEdit}></i>
                          <i className="fa-solid cursor-pointer text-[#f00] fa-trash"></i>
                          </div>
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownWeightRef}
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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.group?.name}</p>
                                </div>
                           
                              </div>

                              <div
                                ref={dropdownMetalWeightRef}
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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.metal?.metalName}</p>
                                  
                                </div>
             
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryWeightRef}
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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.item?.itemName}</p>
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
                                <p className=" text-[15px]   py-[9px] font-Poppins">{item?.minWeight}    </p>
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{item?.maxWeight}</p>
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
                                <p className=" text-[15px]   py-[9px] font-Poppins"> {item?.rate}</p>
                              </div>
                            </div>
                          </div>
                          ))}
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
                                ref={dropdownPercentageRef}
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
                                    setDropdownOpenPercentage((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="group"
                                    id="type"
                                    value={selectedTypePercentage}
                                    placeholder="Select Carat"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenPercentage
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenPercentage && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%] left-0 mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {categories.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => handleSelectPercentage(type?.name)}
                                        >
                                          {type?.name}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              <div
                                ref={dropdownMetalPercentageRef}
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
                                    setDropdownOpenMetalPercentage((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="metal"
                                    id="type1"
                                    value={selectedTypeMetalPercentage}
                                    placeholder="Select Metal"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenMetalPercentage
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenMetalPercentage && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {metals.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectMetalPercentage(type?.metalName);
                                            setDropdownOpenMetalPercentage(false);
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
                              <div
                                ref={dropdownCategoryPercentageRef}
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
                                    setDropdownOpenCategoryPercentage((prev) => !prev)
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="item"
                                    id="type1"
                                    value={selectedTypeCategoryPercentage}
                                    placeholder="Select Category"
                                    className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                    readOnly
                                  />
                                  <i
                                    className={
                                      dropdownOpenCategoryPercentage
                                        ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                        : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                    }
                                  ></i>
                                </div>
                                <AnimatePresence>
                                  {dropdownOpenCategoryPercentage && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      className="absolute top-[90%]  mt-1 bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {item.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectCategoryPercentage(type?.itemName);
                                            setDropdownOpenCategoryPercentage(false);
                                          }}
                                        >
                                          {type?.itemName}
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
                                  name="minWeight"
                                  placeholder="Enter Min-Weight"
                                  value={formDataPercentage?.minWeight}
                                  onChange={handleChangePercentage}
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
                                  name="maxWeight"
                                  placeholder="Enter Max-Weight"
                                  value={formDataPercentage?.maxWeight}
                                  onChange={handleChangePercentage}
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
                                  name="rate"
                                  placeholder="Enter Rate"
                                  value={formDataPercentage?.rate}
                                  onChange={handleChangePercentage}
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                            onClick={handleAddPercentage}>
                              Save
                            </button>
                          </div>
            

                          {isEditingPercentage ? (
                            // Editable Fields
                            <>
                            <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">
                              <div className=" flex w-[100%] fle  gap-[5px]">
                                <div
                                  ref={dropdownPercentageRef}
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
                                      setDropdownOpenPercentage((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type"
                                      id="type"
                                      value={selectedTypePercentage}
                                      placeholder="Select Carat"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenPercentage
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenPercentage && (
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
                                            onClick={() => handleSelectPercentage(type)}
                                          >
                                            {type}
                                          </div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>

                                <div
                                  ref={dropdownMetalPercentageRef}
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
                                      setDropdownOpenMetalPercentage((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeMetalPercentage}
                                      placeholder="Select Metal"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenMetalPercentage
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenMetalPercentage && (
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
                                              handleSelectMetalPercentage(type);
                                              setDropdownOpenMetalPercentage(false);
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
                                  ref={dropdownCategoryPercentageRef}
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
                                      setDropdownOpenCategoryPercentage((prev) => !prev)
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="type1"
                                      id="type1"
                                      value={selectedTypeCategoryPercentage}
                                      placeholder="Select Category"
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        dropdownOpenCategoryPercentage
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {dropdownOpenCategoryPercentage && (
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
                                                handleSelectCategoryPercentage(type);
                                                setDropdownOpenCategoryPercentage(false);
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
                            {percentage?.map((item, index) => (
                            <div key={index} className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#0099dd]">

                          <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#009dd1]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                          <i className="fa-solid cursor-pointer fa-pen-to-square" onClick={handleEdit}></i>
                          <i className="fa-solid cursor-pointer text-[#f00] fa-trash"></i>
                          </div>
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownPercentageRef}
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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.group?.name}</p>
                                </div>
                           
                              </div>

                              <div
                                ref={dropdownMetalPercentageRef}
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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.metal?.metalName}</p>
                                  
                                </div>
             
                              </div>
                              </div>
                              <div
                                ref={dropdownCategoryPercentageRef}
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
                                <p className=" text-[15px]    py-[9px] font-Poppins"> {item?.item?.itemName}</p>
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
                                <p className=" text-[15px]   py-[9px] font-Poppins">{item?.minWeight}    </p>
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="email"
                                  className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                >
                                  Max-weight
                                </label>
                                <p className=" text-[15px]   py-[9px] font-Poppins">{item?.maxWeight}</p>
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
                                <p className=" text-[15px]   py-[9px] font-Poppins"> {item?.rate}</p>
                              </div>
                            </div>
                          </div>
                          ))}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <NextUIModal isOpen={labourModalopen}>
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
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </NextUIModal> */}
    </>
  );
}
