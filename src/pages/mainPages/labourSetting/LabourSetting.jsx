import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../Component/sidebar/SideBar";
import Header from "../../../Component/header/Header";
// import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import {
  getCategroyAction,
  getGroupItemAction,
  getMetalAction,
} from "../../../redux/action/landingManagement";
import {
  addPercentageAction,
  addPerGramAction,
  addUchakAction,
  deletePercentageAction,
  deletePerGramAction,
  deleteUchakAction,
  getAllUchakAction,
  getPercentageAction,
  getPerGramAction,
  updatePercentageAction,
  updatePerGramAction,
  updateUchakAction,
} from "../../../redux/action/generalManagement";

export default function LabourSetting() {
  // const [labourModalopen, setlabourModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [dropdownOpenMetal, setDropdownOpenMetal] = useState(false);
  const [selectedTypeMetal, setSelectedTypeMetal] = useState("");
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [selectedTypeCategory, setSelectedTypecategory] = useState("");
  const [deletemodalopen, setDeleteModalOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownMetalRef = useRef(null);
  const dropdownCategoryRef = useRef(null);

  const dropdownWeightRef = useRef(null);
  const dropdownMetalWeightRef = useRef(null);
  const dropdownCategoryWeightRef = useRef(null);

  const dropdownPercentageRef = useRef(null);
  const dropdownMetalPercentageRef = useRef(null);
  const dropdownCategoryPercentageRef = useRef(null);

  const dropdownEditRef = useRef(null);
  const dropdownEditMetalRef = useRef(null);
  const dropdownEditCategoryRef = useRef(null);

  const dropdownEditWeightRef = useRef(null);
  const dropdownEditMetalWeightRef = useRef(null);
  const dropdownEditCategoryWeightRef = useRef(null);

  const dropdownEditPercentageRef = useRef(null);
  const dropdownEditMetalPercentageRef = useRef(null);
  const dropdownEditCategoryPercentageRef = useRef(null);

  //place holder text
  const [caratFocused, setCaratFocused] = useState(false);
  const [metalFocused, setMetalFocused] = useState(false);
  const [categoryFocused, setCategoryFocused] = useState(false);
  const [maxFocused, setMaxFocused] = useState(false);
  const [minFocused, setMinFocused] = useState(false);
  const [rateFocused, setRateFocused] = useState(false);
  const [editcaratFocused, setEditCaratFocused] = useState(false);
  const [editmetalFocused, setEditMetalFocused] = useState(false);
  const [editcategoryFocused, setEditCategoryFocused] = useState(false);
  const [editmaxFocused, setEditMaxFocused] = useState(false);
  const [editminFocused, setEditMinFocused] = useState(false);
  const [editrateFocused, setEditRateFocused] = useState(false);

  //weight palceholder
  const [weightcaratFocused, setWeightCaratFocused] = useState(false);
  const [weightmetalFocused, setWeightMetalFocused] = useState(false);
  const [weightcategoryFocused, setWeightCategoryFocused] = useState(false);
  const [weightmaxFocused, setWeightMaxFocused] = useState(false);
  const [weightminFocused, setWeightMinFocused] = useState(false);
  const [weightrateFocused, setWeightRateFocused] = useState(false);
  const [editweightcaratFocused, setEditWeightCaratFocused] = useState(false);
  const [editweightmetalFocused, setEditWeightMetalFocused] = useState(false);
  const [editweightcategoryFocused, setEditWeightCategoryFocused] =
    useState(false);
  const [editweightmaxFocused, setEditWeightMaxFocused] = useState(false);
  const [editweightminFocused, setEditWeightMinFocused] = useState(false);
  const [editweightrateFocused, setEditWeightRateFocused] = useState(false);

  //Per palceholder
  const [percaratFocused, setPerCaratFocused] = useState(false);
  const [permetalFocused, setPerMetalFocused] = useState(false);
  const [percategoryFocused, setPerCategoryFocused] = useState(false);
  const [permaxFocused, setPerMaxFocused] = useState(false);
  const [perminFocused, setPerMinFocused] = useState(false);
  const [perrateFocused, setPerRateFocused] = useState(false);
  const [editpercaratFocused, setEditPerCaratFocused] = useState(false);
  const [editpermetalFocused, setEditPerMetalFocused] = useState(false);
  const [editpercategoryFocused, setEditPerCategoryFocused] = useState(false);
  const [editpermaxFocused, setEditPerMaxFocused] = useState(false);
  const [editperminFocused, setEditPerMinFocused] = useState(false);
  const [editperrateFocused, setEditPerRateFocused] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    carat: "Default Carat",
    metal: "Default Metal",
    category: "Default Category",
    minWeight: "",
    maxWeight: "",
    rate: "",
  });
  const [selectedUchak, setSelectedUchak] = useState("");

  const [isEditingWeight, setIsEditingWeight] = useState(false);
  const [formDataWeight, setFormDataWeight] = useState({
    carat: "Default Carat",
    metal: "Default Metal",
    category: "Default Category",
    minWeight: "",
    maxWeight: "",
    rate: "",
  });
  const [selectedWeight, setSelectedWeight] = useState("");

  const [isEditingPercentage, setIsEditingPercentage] = useState(false);
  const [formDataPercentage, setFormDataPercentage] = useState({
    carat: "Default Carat",
    metal: "Default Metal",
    category: "Default Category",
    minWeight: "",
    maxWeight: "",
    rate: "",
  });
  const [selectedPercentage, setSelectedPercentage] = useState("");
  const [deleteType, setDeleteType] = useState(null); 
  const [itemId, setItemId] = useState(null); 

  //edit uchak
  const [editdropdownOpen, setEditDropdownOpen] = useState(false);
  const [editselectedType, setEditSelectedType] = useState("");
  const [editdropdownOpenMetal, setEditDropdownOpenMetal] = useState(false);
  const [editselectedTypeMetal, setEditSelectedTypeMetal] = useState("");
  const [editdropdownOpenCategory, setEditDropdownOpenCategory] =
    useState(false);
  const [editselectedTypeCategory, setEditSelectedTypecategory] = useState("");

  // Weight dropDown
  const [dropdownOpenWeight, setDropdownOpenWeight] = useState(false);
  const [selectedTypeWeight, setSelectedTypeWeight] = useState("");
  const [dropdownOpenMetalWeight, setDropdownOpenMetalWeight] = useState(false);
  const [selectedTypeMetalWeight, setSelectedTypeMetalWeight] = useState("");
  const [dropdownOpenCategoryWeight, setDropdownOpenCategoryWeight] =
    useState(false);
  const [selectedTypeCategoryWeight, setSelectedTypecategoryWeight] =
    useState("");

  // edit weight
  const [editdropdownOpenWeight, setEditDropdownOpenWeight] = useState(false);
  const [editselectedTypeWeight, setEditSelectedTypeWeight] = useState("");
  const [editdropdownOpenMetalWeight, setEditDropdownOpenMetalWeight] =
    useState(false);
  const [editselectedTypeMetalWeight, setEditSelectedTypeMetalWeight] =
    useState("");
  const [editdropdownOpenCategoryWeight, setEditDropdownOpenCategoryWeight] =
    useState(false);
  const [editselectedTypeCategoryWeight, setEditSelectedTypecategoryWeight] =
    useState("");

  // Percentage dropDown
  const [dropdownOpenPercentage, setDropdownOpenPercentage] = useState(false);
  const [selectedTypePercentage, setSelectedTypePercentage] = useState("");
  const [dropdownOpenMetalPercentage, setDropdownOpenMetalPercentage] =
    useState(false);
  const [selectedTypeMetalPercentage, setSelectedTypeMetalPercentage] =
    useState("");
  const [dropdownOpenCategoryPercentage, setDropdownOpenCategoryPercentage] =
    useState(false);
  const [selectedTypeCategoryPercentage, setSelectedTypecategoryPercentage] =
    useState("");

  const [editdropdownOpenPercentage, setEditDropdownOpenPercentage] =
    useState(false);
  const [editselectedTypePercentage, setEditSelectedTypePercentage] =
    useState("");
  const [editdropdownOpenMetalPercentage, setEditDropdownOpenMetalPercentage] =
    useState(false);
  const [editselectedTypeMetalPercentage, setEditSelectedTypeMetalPercentage] =
    useState("");
  const [
    editdropdownOpenCategoryPercentage,
    setEditDropdownOpenCategoryPercentage,
  ] = useState(false);
  const [
    editselectedTypeCategoryPercentage,
    setEditSelectedTypecategoryPercentage,
  ] = useState("");

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

  const handleSelect = (type) => {
    setSelectedType(type);
    setDropdownOpen(false);
  };
  const handleEditSelect = (type) => {
    setEditSelectedType(type);
    setEditDropdownOpen(false);
  };

  const handleSelectMetal = (type) => {
    setSelectedTypeMetal(type);
    setDropdownOpenMetal(false);
  };

  const handleEditSelectMetal = (type) => {
    setEditSelectedTypeMetal(type);
    setEditDropdownOpenMetal(false);
  };

  const handleSelectCategory = (type) => {
    setSelectedTypecategory(type);
    setDropdownOpenCategory(false);
  };

  const handleEditSelectCategory = (type) => {
    setEditSelectedTypecategory(type);
    setEditDropdownOpenCategory(false);
  };

  const handleSelectWeight = (type) => {
    setSelectedTypeWeight(type);
    setDropdownOpenWeight(false);
  };

  const handleSelectEditWeight = (type) => {
    setEditSelectedTypeWeight(type);
    setEditDropdownOpenWeight(false);
  };

  const handleSelectMetalWeight = (type) => {
    setSelectedTypeMetalWeight(type);
    setDropdownOpenMetalWeight(false);
  };

  const handleSelectEditMetalWeight = (type) => {
    setEditSelectedTypeMetalWeight(type);
    setEditDropdownOpenMetalWeight(false);
  };

  const handleSelectCategoryWeight = (type) => {
    setSelectedTypecategoryWeight(type);
    setDropdownOpenCategoryWeight(false);
  };

  const handleSelectEditCategoryWeight = (type) => {
    setEditSelectedTypecategoryWeight(type);
    setEditDropdownOpenCategoryWeight(false);
  };

  const handleSelectPercentage = (type) => {
    setSelectedTypePercentage(type);
    setDropdownOpenPercentage(false);
  }

  const handleEditSelectPercentage = (type) => {
    setEditSelectedTypePercentage(type);
    setEditDropdownOpenPercentage(false);
  };

  const handleSelectMetalPercentage = (type) => {
    setSelectedTypeMetalPercentage(type);
    setDropdownOpenMetalPercentage(false);
  };

  const handleEditSelectMetalPercentage = (type) => {
    setEditSelectedTypeMetalPercentage(type);
    setEditDropdownOpenMetalPercentage(false);
  };
  const handleSelectCategoryPercentage = (type) => {
    setSelectedTypecategoryPercentage(type);
    setDropdownOpenCategoryPercentage(false);
  };

  const handleSelectEditCategoryPercentage = (type) => {
    setEditSelectedTypecategoryPercentage(type);
    setEditDropdownOpenCategoryPercentage(false);
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

      if (
        dropdownWeightRef.current &&
        !dropdownWeightRef.current.contains(event.target)
      ) {
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

      if (
        dropdownPercentageRef.current &&
        !dropdownPercentageRef.current.contains(event.target)
      ) {
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

      if (
        dropdownEditRef.current &&
        !dropdownEditRef.current.contains(event.target)
      ) {
        setEditDropdownOpen(false);
      }
      if (
        dropdownEditMetalRef.current &&
        !dropdownEditMetalRef.current.contains(event.target)
      ) {
        setDropdownOpenMetal(false);
      }
      if (
        dropdownEditCategoryRef.current &&
        !dropdownEditCategoryRef.current.contains(event.target)
      ) {
        setDropdownOpenCategory(false);
      }

      if (
        dropdownEditWeightRef.current &&
        !dropdownEditWeightRef.current.contains(event.target)
      ) {
        setEditDropdownOpenWeight(false);
      }
      if (
        dropdownEditMetalWeightRef.current &&
        !dropdownEditMetalWeightRef.current.contains(event.target)
      ) {
        setEditDropdownOpenMetalWeight(false);
      }
      if (
        dropdownEditCategoryWeightRef.current &&
        !dropdownEditCategoryWeightRef.current.contains(event.target)
      ) {
        setEditDropdownOpenCategoryWeight(false);
      }

      if (
        dropdownEditPercentageRef.current &&
        !dropdownEditPercentageRef.current.contains(event.target)
      ) {
        setEditDropdownOpenPercentage(false);
      }
      if (
        dropdownEditMetalPercentageRef.current &&
        !dropdownEditMetalPercentageRef.current.contains(event.target)
      ) {
        setDropdownOpenMetalPercentage(false);
      }
      if (
        dropdownEditCategoryPercentageRef.current &&
        !dropdownEditCategoryPercentageRef.current.contains(event.target)
      ) {
        setEditDropdownOpenCategory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEdit = (id) => {
    setSelectedUchak(id);
    setIsEditing(true); // Enable editing mode
  };

  const handleEditWeight = (id) => {
    setSelectedWeight(id);
    setIsEditingWeight(true); // Enable editing mode
  };

  const handleEditPercentage = (id) => {
    setSelectedPercentage(id);
    setIsEditingPercentage(true); // Enable editing mode
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

    const selectedCarat = isEditing
    ? categories.find((carat) => carat.name === editselectedType)
    : categories.find((carat) => carat.name === selectedType);

  const selectedMetal = isEditing
    ? metals.find((metal) => metal.metalName === editselectedTypeMetal)
    : metals.find((metal) => metal.metalName === selectedTypeMetal);

  const selectedCategory = isEditing
    ? item.find((data) => data.itemName === editselectedTypeCategory)
    : item.find((data) => data.itemName === selectedTypeCategory);


    if (!selectedCarat || !selectedMetal || !selectedCategory) {
      alert(
        "Invalid selection. Please select valid Carat, Metal, and Category."
      );
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
        const response = await dispatch(
          updateUchakAction(selectedUchak?._id, uchakData)
        );
        if (response) {
          alert("Uchak updated successfully!");
          dispatch(getAllUchakAction());
        } else {
          alert("Failed to update Uchak.");
        }
      } else {
        const response = await dispatch(addUchakAction(uchakData));
        console.log("response", response);
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
    const selectedCarat = isEditingWeight
    ? categories.find((carat) => carat.name === editselectedTypeWeight)
    : categories.find((carat) => carat.name === selectedTypeWeight);

  const selectedMetal = isEditingWeight
    ? metals.find((metal) => metal.metalName === editselectedTypeMetalWeight)
    : metals.find((metal) => metal.metalName === selectedTypeMetalWeight);

  const selectedCategory = isEditingWeight
    ? item.find((data) => data.itemName === editselectedTypeCategoryWeight)
    : item.find((data) => data.itemName === selectedTypeCategoryWeight);


    if (!selectedCarat || !selectedMetal || !selectedCategory) {
      alert(
        "Invalid selection. Please select valid Carat, Metal, and Category."
      );
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
        const response = await dispatch(
          updatePerGramAction(selectedWeight?._id, weightData)
        );
        if (response) {
          alert("Weight updated successfully!");
          dispatch(getPerGramAction());
        } else {
          alert("Failed to update Weight.");
        }
      } else {
        const response = await dispatch(addPerGramAction(weightData));
        console.log("response", response);
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


    const selectedCarat = isEditingPercentage
    ? categories.find((carat) => carat.name === editselectedTypePercentage)
    : categories.find((carat) => carat.name === selectedTypePercentage);

  const selectedMetal = isEditingPercentage
    ? metals.find((metal) => metal.metalName === editselectedTypeMetalPercentage)
    : metals.find((metal) => metal.metalName === selectedTypeMetalPercentage);

  const selectedCategory = isEditingPercentage
    ? item.find((data) => data.itemName === editselectedTypeCategoryPercentage)
    : item.find((data) => data.itemName === selectedTypeCategoryPercentage);


    if (!selectedCarat || !selectedMetal || !selectedCategory) {
      alert(
        "Invalid selection. Please select valid Carat, Metal, and Category."
      );
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
        const response = await dispatch(
          updatePercentageAction(selectedPercentage?._id, percentageData)
        );
        if (response) {
          alert("Percentage updated successfully!");
          dispatch(getPercentageAction());
        } else {
          alert("Failed to update Percentage.");
        }
      } else {
        const response = await dispatch(addPercentageAction(percentageData));
        console.log("response", response);
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



  const handleDelete = async () => {
    try {
      let success = false;

      switch (deleteType) {
        case 'uchak':
          success = await dispatch(deleteUchakAction(itemId));
          if (success) {
            dispatch(getAllUchakAction()); 
          }
          break;
        case 'weight':
          success = await dispatch(deletePerGramAction(itemId));
          if (success) {
            dispatch(getPerGramAction()); 
          }
          break;
        case 'percentage':
          success = await dispatch(deletePercentageAction(itemId));
          if (success) {
            dispatch(getPercentageAction()); 
          }
          break;
        default:
          throw new Error('Invalid delete type.');
      }

      if (success) {
        alert(`${deleteType} deleted successfully!`);
        handleDeleteModalClose();
      } else {
        alert(`Failed to delete ${deleteType}.`);
      }

    } catch (error) {
      console.error(`Error deleting ${deleteType}:`, error);
      alert(`An error occurred while deleting ${deleteType}.`);
    }
  };

  const handleDeleteUchak = (id) => {
    setDeleteType('uchak');
    setItemId(id);
    handleDeleteModalOpen();
  };

  const handleDeleteWeight = (id) => {
    setDeleteType('weight');
    setItemId(id);
    handleDeleteModalOpen();
  };

  const handleDeletePercentage = (id) => {
    setDeleteType('percentage');
    setItemId(id);
    handleDeleteModalOpen();
  };

  

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true)
    
  };
  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false)
    
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
                        <h2 className="  flex justify-center rounded-tr-[2px] rounded-br-[30px] rounded-tl-[2px] rounded-bl-[30px] bs-spj text-[#fff] py-[6px] font-[500] text-[20px] font-Poppins pl-[6px]">
                          Uchak
                        </h2>
                        <div className=" flex gap-[25px] h-] overflow-y-auto overflow-x-hidden flex-col   relative  px-[19px] w-[100%] ">
                          <div className=" flex border-[1px] flex-col gap-[14px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]">
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <span
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    selectedType || caratFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f]"
                                  }`}
                                >
                                  Carat
                                </span>
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
                                    onFocus={() => setCaratFocused(true)}
                                    onBlur={(e) =>
                                      setCaratFocused(e.target.value !== "")
                                    }
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
                                      className="absolute top-[90%] left-[-17px] mt-2 bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {categories.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() =>
                                            handleSelect(type?.name)
                                          }
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
                                <span
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    selectedTypeMetal || metalFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f]"
                                  }`}
                                >
                                  Metal
                                </span>
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
                                    onFocus={() => setMetalFocused(true)}
                                    onBlur={(e) =>
                                      setMetalFocused(e.target.value !== "")
                                    }
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
                                      className="absolute top-[90%] left-[-17px]  mt-2 bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
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
                              <span
                                className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                  selectedTypeCategory || categoryFocused
                                    ? "text-[#000] -translate-y-[21px]"
                                    : "text-[#8f8f8f]"
                                }`}
                              >
                                Category
                              </span>
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
                                  onFocus={() => setCategoryFocused(true)}
                                  onBlur={(e) =>
                                    setCategoryFocused(e.target.value !== "")
                                  }
                                  value={selectedTypeCategory}
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
                                    className="absolute top-[90%]  mt-2 bg-white left-[-15px] w-[325px] border border-[#dedede] rounded-lg shadow-md z-10"
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
                                  htmlFor="name"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formData?.minWeight || minFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f]"
                                  }`}
                                >
                                  Min-Weight
                                </label>
                                <input
                                  type="Number"
                                  name="minWeight"
                                  id="name"
                                  onFocus={() => setMinFocused(true)}
                                  onBlur={(e) =>
                                    setMinFocused(e.target.value !== "")
                                  }
                                  value={formData?.minWeight}
                                  onChange={handleChange}
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="max"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formData?.maxWeight || maxFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-pointer"
                                  }`}
                                >
                                  Max-Weight
                                </label>
                                <input
                                  type="Number"
                                  name="maxWeight"
                                  id="max"
                                  onFocus={() => setMaxFocused(true)}
                                  onBlur={(e) =>
                                    setMaxFocused(e.target.value !== "")
                                  }
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
                                  htmlFor="rate1"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formData?.rate || rateFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
                                >
                                  Rate
                                </label>
                                <input
                                  type="Number"
                                  name="rate"
                                  id="rate1"
                                  value={formData?.rate}
                                  onChange={handleChange}
                                  onFocus={() => setRateFocused(true)}
                                  onBlur={(e) =>
                                    setMaxFocused(e.target.value !== "")
                                  }
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button
                              className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                              onClick={handleAddUchak}
                            >
                              Save
                            </button>
                          </div>
                          {isEditing ? (
                            // Editable Fields
                            <>
                              <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]">
                                <div className=" flex w-[100%] fle  gap-[5px]">
                                  <div
                                    ref={dropdownEditRef}
                                    className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                  >
                                    <label
                                      htmlFor="type"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editselectedType || editcaratFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text "
                                      }`}
                                    >
                                      Carat
                                    </label>
                                    <div
                                      className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                      onClick={() =>
                                        setEditDropdownOpen((prev) => !prev)
                                      } // Toggle dropdown on click
                                    >
                                      <input
                                        type="text"
                                        name="group"
                                        id="type"
                                        value={editselectedType}
                                        onFocus={() =>
                                          setEditCaratFocused(true)
                                        }
                                        onBlur={(e) =>
                                          setEditCaratFocused(
                                            e.target.value !== ""
                                          )
                                        }
                                        className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                        readOnly
                                      />
                                      <i
                                        className={
                                          editdropdownOpen
                                            ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                            : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                        }
                                      ></i>
                                    </div>
                                    <AnimatePresence>
                                      {editdropdownOpen && (
                                        <motion.div
                                          initial={{ opacity: 0, y: -10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -10 }}
                                          className="absolute top-[90%] left-[-16px] mt-2 bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                        >
                                          {categories.map((type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() =>
                                                handleEditSelect(type?.name)
                                              }
                                            >
                                              {type?.name}
                                            </div>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>

                                  <div
                                    ref={dropdownEditMetalRef}
                                    className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                  >
                                    <span
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editselectedTypeMetal ||
                                        editmetalFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f]"
                                      }`}
                                    >
                                      Metal
                                    </span>
                                    <div
                                      className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                      onClick={() =>
                                        setEditDropdownOpenMetal(
                                          (prev) => !prev
                                        )
                                      } // Toggle dropdown on click
                                    >
                                      <input
                                        type="text"
                                        name="metal"
                                        id="type1"
                                        value={editselectedTypeMetal}
                                        onFocus={() =>
                                          setEditMetalFocused(true)
                                        }
                                        onBlur={(e) =>
                                          setEditMetalFocused(
                                            e.target.value !== ""
                                          )
                                        }
                                        className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                        readOnly
                                      />
                                      <i
                                        className={
                                          editdropdownOpenMetal
                                            ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                            : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                        }
                                      ></i>
                                    </div>
                                    <AnimatePresence>
                                      {editdropdownOpenMetal && (
                                        <motion.div
                                          initial={{ opacity: 0, y: -10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -10 }}
                                          className="absolute top-[90%]  mt-2 left-[-16px] bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                        >
                                          {metals.map((type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() => {
                                                handleEditSelectMetal(
                                                  type?.metalName
                                                );
                                                setEditDropdownOpenMetal(false);
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
                                  <span
                                    className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                      editselectedTypeCategory ||
                                      editcategoryFocused
                                        ? "text-[#000] -translate-y-[21px]"
                                        : "text-[#8f8f8f]"
                                    }`}
                                  >
                                    Category
                                  </span>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setEditDropdownOpenCategory(
                                        (prev) => !prev
                                      )
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="item"
                                      id="type1"
                                      value={editselectedTypeCategory}
                                      onFocus={() =>
                                        setEditCategoryFocused(true)
                                      }
                                      onBlur={(e) =>
                                        setEditCategoryFocused(
                                          e.target.value !== ""
                                        )
                                      }
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        editdropdownOpenCategory
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {editdropdownOpenCategory && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%] left-[-16px] mt-2 bg-white w-[330px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {item.map((type, index) => (
                                          <div
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                            onClick={() => {
                                              handleEditSelectCategory(
                                                type?.itemName
                                              );
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
                                      htmlFor="editmin"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        formData?.minWeight || editminFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Min-Weight
                                    </label>
                                    <input
                                      type="Number"
                                      name="minWeight"
                                      id="editmin"
                                      value={formData?.minWeight}
                                      onChange={handleChange}
                                      onFocus={() => setEditMinFocused(true)}
                                      onBlur={(e) =>
                                        setEditMinFocused(e.target.value !== "")
                                      }
                                      className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                  <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="editmax"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        formData?.maxWeight || editmaxFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Max-Weight
                                    </label>
                                    <input
                                      type="Number"
                                      name="maxWeight"
                                      id="editmax"
                                      value={formData?.maxWeight}
                                      onChange={handleChange}
                                      onFocus={() => setEditMaxFocused(true)}
                                      onBlur={(e) =>
                                        setEditMaxFocused(e.target.value !== "")
                                      }
                                      className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <div className=" flex-col flex gap-[20px] ">
                                  <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="editrate"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        formData?.rate || editrateFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Rate
                                    </label>
                                    <input
                                      type="Number"
                                      name="rate"
                                      id="editrate"
                                      onFocus={() => setEditRateFocused(true)}
                                      onBlur={(e) =>
                                        setEditRateFocused(
                                          e.target.value !== ""
                                        )
                                      }
                                      value={formData?.rate}
                                      onChange={handleChange}
                                      className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <button
                                  className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                                  onClick={handleAddUchak}
                                >
                                  {isEditing? "Edit" : "Save"}
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              {uchak?.map((item, index) => (
                                <div
                                  key={index}
                                  className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]"
                                >
                                  <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#122f97]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                                    <i
                                      className="fa-solid cursor-pointer fa-pen-to-square"
                                      onClick={() => handleEdit(item)}
                                    ></i>
                                    <i className="fa-solid cursor-pointer text-[#f00] fa-trash" onClick={() => handleDeleteUchak(item._id)} ></i>
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
                                      <div className="relative w-full  rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                        <p className=" text-[15px]    py-[9px] font-Poppins">
                                          {" "}
                                          {item?.group?.name}
                                        </p>
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
                                      <div className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                        <p className=" text-[15px]    py-[9px] font-Poppins">
                                          {" "}
                                          {item?.metal?.metalName}
                                        </p>
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
                                    <div className="relative w-full  rounded-lg  h-[40px] flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                      <p className=" text-[15px]    py-[9px] font-Poppins">
                                        {" "}
                                        {item?.item?.itemName}
                                      </p>
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
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {item?.minWeight}
                                      </p>
                                    </div>
                                    <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                      <label
                                        htmlFor="email"
                                        className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                      >
                                        Max-weight
                                      </label>
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {item?.maxWeight}
                                      </p>
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
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {" "}
                                        {item?.rate}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>

                      <div className=" flex flex-col gap-[10px] overflow-hidden w-[400px]">
                        <h2 className=" text-[#122f97] flex justify-center rounded-tr-[2px] rounded-br-[30px] rounded-tl-[2px] rounded-bl-[30px] bs-spj text-[#fff] py-[6px] font-[500] text-[20px] font-Poppins pl-[6px]">
                          Weight
                        </h2>
                        <div className=" flex gap-[25px] h-] overflow-y-auto overflow-x-hidden flex-col   relative  px-[19px] w-[100%] ">
                          <div className=" flex border-[1px] flex-col gap-[14px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]">
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownWeightRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="weightcarat"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    selectedTypeWeight || weightcaratFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
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
                                    id="weightcarat"
                                    value={selectedTypeWeight}
                                    onFocus={() => setWeightCaratFocused(true)}
                                    onBlur={(e) =>
                                      setWeightCaratFocused(
                                        e.target.value !== ""
                                      )
                                    }
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
                                      className="absolute top-[90%] left-[-17px] mt-2 bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {categories.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() =>
                                            handleSelectWeight(type?.name)
                                          }
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
                                  htmlFor="weightcarat"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    selectedTypeMetalWeight ||
                                    weightmetalFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
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
                                    onFocus={() => setWeightMetalFocused(true)}
                                    onBlur={(e) =>
                                      setWeightMetalFocused(
                                        e.target.value !== ""
                                      )
                                    }
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
                                      className="absolute top-[90%] left-[-15px]  mt-2 bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {metals.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectMetalWeight(
                                              type?.metalName
                                            );
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
                                htmlFor="weightcategory"
                                className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                  selectedTypeCategoryWeight ||
                                  weightcategoryFocused
                                    ? "text-[#000] -translate-y-[21px]"
                                    : "text-[#8f8f8f] cursor-text"
                                }`}
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
                                  id="weightcategory"
                                  value={selectedTypeCategoryWeight}
                                  onFocus={() => setWeightCategoryFocused(true)}
                                  onBlur={(e) =>
                                    setWeightCategoryFocused(
                                      e.target.value !== ""
                                    )
                                  }
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
                                    className="absolute top-[90%]  mt-2 left-[-14px] bg-white w-[324px] border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {item.map((type, index) => (
                                      <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => {
                                          handleSelectCategoryWeight(
                                            type?.itemName
                                          );
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
                                  htmlFor="weightmin"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formDataWeight?.minWeight ||
                                    weightminFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
                                >
                                  Min-Weight
                                </label>
                                <input
                                  type="Number"
                                  name="minWeight"
                                  id="weightmin"
                                  value={formDataWeight?.minWeight}
                                  onChange={handleChangeWeight}
                                  onFocus={() => setWeightMinFocused(true)}
                                  onBlur={(e) =>
                                    setWeightMinFocused(e.target.value !== "")
                                  }
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="weightmax"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formDataWeight?.maxWeight ||
                                    weightmaxFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
                                >
                                  Max-Weight
                                </label>
                                <input
                                  type="Number"
                                  name="maxWeight"
                                  id="weightmax"
                                  onFocus={() => setWeightMaxFocused(true)}
                                  onBlur={(e) =>
                                    setWeightMaxFocused(e.target.value !== "")
                                  }
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
                                  htmlFor="weight1"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formDataWeight?.rate || weightrateFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
                                >
                                  Weight
                                </label>
                                <input
                                  type="Number"
                                  name="rate"
                                  id="weight1"
                                  value={formDataWeight?.rate}
                                  onChange={handleChangeWeight}
                                  onFocus={() => setWeightRateFocused(true)}
                                  onBlur={(e) =>
                                    setWeightRateFocused(e.target.value !== "")
                                  }
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button
                              className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                              onClick={handleAddWeight}
                            >
                              {isEditingWeight ? "Edit" : "Save"}
                            </button>
                          </div>
                          {isEditingWeight ? (
                            // Editable Fields
                            <>
                              <div className=" bg-white flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]">
                                <div className=" flex w-[100%] fle  gap-[5px]">
                                  <div
                                    ref={dropdownEditWeightRef}
                                    className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                  >
                                    <label
                                      htmlFor="editcarat"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editselectedTypeWeight ||
                                        editweightcaratFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Carat
                                    </label>
                                    <div
                                      className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                      onClick={() =>
                                        setEditDropdownOpenWeight(
                                          (prev) => !prev
                                        )
                                      } // Toggle dropdown on click
                                    >
                                      <input
                                        type="text"
                                        name="group"
                                        id="editcarat"
                                        value={editselectedTypeWeight}
                                        onFocus={() =>
                                          setEditWeightCaratFocused(true)
                                        }
                                        onBlur={(e) =>
                                          setEditWeightCaratFocused(
                                            e.target.value !== ""
                                          )
                                        }
                                        className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                        readOnly
                                      />
                                      <i
                                        className={
                                          editdropdownOpenWeight
                                            ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                            : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                        }
                                      ></i>
                                    </div>
                                    <AnimatePresence>
                                      {editdropdownOpenWeight && (
                                        <motion.div
                                          initial={{ opacity: 0, y: -10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -10 }}
                                          className="absolute top-[90%]  mt-2 bg-white left-[-17px] w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                        >
                                          {categories.map((type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() =>
                                                handleSelectEditWeight(type?.name)
                                              }
                                            >
                                              {type?.name}
                                            </div>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>

                                  <div
                                    ref={dropdownEditMetalWeightRef}
                                    className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                  >
                                    <label
                                      htmlFor="metall"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editselectedTypeMetalWeight ||
                                        editweightmetalFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Metal
                                    </label>
                                    <div
                                      className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                      onClick={() =>
                                        setEditDropdownOpenMetalWeight(
                                          (prev) => !prev
                                        )
                                      } // Toggle dropdown on click
                                    >
                                      <input
                                        type="text"
                                        name="metal"
                                        id="metall"
                                        value={editselectedTypeMetalWeight}
                                        onFocus={() =>
                                          setEditWeightMetalFocused(true)
                                        }
                                        onBlur={(e) =>
                                          setEditWeightMetalFocused(
                                            e.target.value !== ""
                                          )
                                        }
                                        className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                        readOnly
                                      />
                                      <i
                                        className={
                                          editdropdownOpenMetalWeight
                                            ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                            : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                        }
                                      ></i>
                                    </div>
                                    <AnimatePresence>
                                      {editdropdownOpenMetalWeight && (
                                        <motion.div
                                          initial={{ opacity: 0, y: -10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -10 }}
                                          className="absolute top-[90%] left-[-16px]  mt-2 bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                        >
                                          {metals.map((type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() => {
                                                handleSelectEditMetalWeight(
                                                  type?.metalName
                                                );
                                                setDropdownOpenMetalWeight(
                                                  false
                                                );
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
                                  ref={dropdownEditCategoryWeightRef}
                                  className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="edicategory"
                                    className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                      editselectedTypeCategoryWeight ||
                                      editweightcategoryFocused
                                        ? "text-[#000] -translate-y-[21px]"
                                        : "text-[#8f8f8f] cursor-text"
                                    }`}
                                  >
                                    Category
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setEditDropdownOpenCategoryWeight(
                                        (prev) => !prev
                                      )
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="item"
                                      id="edicategory"
                                      value={editselectedTypeCategoryWeight}
                                      onFocus={() =>
                                        setEditWeightCategoryFocused(true)
                                      }
                                      onBlur={(e) =>
                                        setEditWeightCategoryFocused(
                                          e.target.value !== ""
                                        )
                                      }
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        editdropdownOpenCategoryWeight
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {editdropdownOpenCategoryWeight && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-2 left-[-16px] bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {item.map(
                                          (type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() => {
                                                handleSelectEditCategoryWeight(
                                                  type?.itemName
                                                );
                                                setEditDropdownOpenCategoryWeight(
                                                  false
                                                );
                                              }}
                                            >
                                              {type?.itemName}
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
                                      htmlFor="editmax"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editweightminFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Min-Weight
                                    </label>
                                    <input
                                      type="Number"
                                      id="editmax"
                                      name="minWeight"
                                      value={formDataWeight?.minWeight}
                                      onChange={handleChangeWeight}
                                      onFocus={() =>
                                        setEditWeightMinFocused(true)
                                      }
                                      onBlur={(e) =>
                                        setEditWeightMinFocused(
                                          e.target.value !== ""
                                        )
                                      }
                                      className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                  <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="editmin"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editweightmaxFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Max-Weight
                                    </label>
                                    <input
                                      id="editmin"
                                      type="Number"
                                      name="maxWeight"
                                      value={formDataWeight?.maxWeight}
                                      onChange={handleChangeWeight}
                                      onFocus={() =>
                                        setEditWeightMaxFocused(true)
                                      }
                                      onBlur={(e) =>
                                        setEditWeightMaxFocused(
                                          e.target.value !== ""
                                        )
                                      }
                                      className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <div className=" flex-col flex gap-[20px] ">
                                  <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                      htmlFor="editrateweigth"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editweightrateFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Weight
                                    </label>
                                    <input
                                      type="Number"
                                      name="rate"
                                      id="editrateweigth"
                                      value={formDataWeight?.rate}
                                      onChange={handleChangeWeight}
                                      onFocus={() =>
                                        setEditWeightRateFocused(true)
                                      }
                                      onBlur={(e) =>
                                        setEditWeightRateFocused(
                                          e.target.value !== ""
                                        )
                                      }
                                      className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <button
                                  className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                                  onClick={handleAddWeight}
                                >
                                  {isEditingWeight ? "Edit" : "Save"}
                                </button>
                              </div>
                            </>
                          ) : (
                            // Static Fields
                            <>
                              {weight?.map((item, index) => (
                                <div
                                  key={index}
                                  className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]"
                                >
                                  <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#122f97]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                                    <i
                                      className="fa-solid cursor-pointer fa-pen-to-square"
                                      onClick={() => handleEditWeight(item)}
                                    ></i>
                                    <i className="fa-solid cursor-pointer text-[#f00] fa-trash" onClick={() => handleDeleteWeight(item._id)} 
                                    ></i>
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
                                      <div className="relative w-full  rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                        <p className=" text-[15px]    py-[9px] font-Poppins">
                                          {" "}
                                          {item?.group?.name}
                                        </p>
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
                                      <div className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                        <p className=" text-[15px]    py-[9px] font-Poppins">
                                          {" "}
                                          {item?.metal?.metalName}
                                        </p>
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
                                    <div className="relative w-full  rounded-lg  h-[40px] flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                      <p className=" text-[15px]    py-[9px] font-Poppins">
                                        {" "}
                                        {item?.item?.itemName}
                                      </p>
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
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {item?.minWeight}{" "}
                                      </p>
                                    </div>
                                    <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                      <label
                                        htmlFor="email"
                                        className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                      >
                                        Max-weight
                                      </label>
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {item?.maxWeight}
                                      </p>
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
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {" "}
                                        {item?.rate}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                      <div className=" flex flex-col gap-[10px] overflow-hidden w-[400px]">
                        <h2 className=" text-[#122f97] flex justify-center rounded-tr-[2px] rounded-br-[30px] rounded-tl-[2px] rounded-bl-[30px] bs-spj text-[#fff] py-[6px] font-[500] text-[20px] font-Poppins pl-[6px]">
                          Percentege
                        </h2>
                        <div className=" flex gap-[25px] h-] overflow-y-auto overflow-x-hidden flex-col   relative  px-[19px] w-[100%] ">
                          <div className=" flex border-[1px] flex-col gap-[14px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]">
                            <div className=" flex w-[100%] fle  gap-[5px]">
                              <div
                                ref={dropdownPercentageRef}
                                className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                              >
                                <label
                                  htmlFor="weightmin"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    selectedTypePercentage || percaratFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
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
                                    onFocus={() => setPerCaratFocused(true)}
                                    onBlur={(e) =>
                                      setPerCaratFocused(e.target.value !== "")
                                    }
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
                                      className="absolute top-[90%] left-[-17px] mt-2 bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {categories.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() =>
                                            handleSelectPercentage(type?.name)
                                          }
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
                                  htmlFor="weightmin"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    selectedTypeMetalPercentage ||
                                    permetalFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
                                >
                                  Metal
                                </label>
                                <div
                                  className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                  onClick={() =>
                                    setDropdownOpenMetalPercentage(
                                      (prev) => !prev
                                    )
                                  } // Toggle dropdown on click
                                >
                                  <input
                                    type="text"
                                    name="metal"
                                    id="type1"
                                    value={selectedTypeMetalPercentage}
                                    onFocus={() => setPerMetalFocused(true)}
                                    onBlur={(e) =>
                                      setPerMetalFocused(e.target.value !== "")
                                    }
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
                                      className="absolute top-[90%] left-[-16px]  mt-2 bg-white w-[160px] border border-[#dedede] rounded-lg shadow-md z-10"
                                    >
                                      {metals.map((type, index) => (
                                        <div
                                          key={index}
                                          className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                          onClick={() => {
                                            handleSelectMetalPercentage(
                                              type?.metalName
                                            );
                                            setDropdownOpenMetalPercentage(
                                              false
                                            );
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
                              <span
                                className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                  selectedTypeCategoryPercentage ||
                                  percategoryFocused
                                    ? "text-[#000] -translate-y-[21px]"
                                    : "text-[#8f8f8f]"
                                }`}
                              >
                                Category
                              </span>
                              <div
                                className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                onClick={() =>
                                  setDropdownOpenCategoryPercentage(
                                    (prev) => !prev
                                  )
                                } // Toggle dropdown on click
                              >
                                <input
                                  type="text"
                                  name="item"
                                  id="type1"
                                  value={selectedTypeCategoryPercentage}
                                  onFocus={() => setPerCategoryFocused(true)}
                                  onBlur={(e) =>
                                    setPerCategoryFocused(e.target.value !== "")
                                  }
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
                                    className="absolute top-[90%] left-[-16px]  mt-2 bg-white w-[325px] border border-[#dedede] rounded-lg shadow-md z-10"
                                  >
                                    {item.map((type, index) => (
                                      <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                        onClick={() => {
                                          handleSelectCategoryPercentage(
                                            type?.itemName
                                          );
                                          setDropdownOpenCategoryPercentage(
                                            false
                                          );
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
                                  htmlFor="permin"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formDataPercentage?.minWeight ||
                                    perminFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
                                >
                                  Min-Weight
                                </label>
                                <input
                                  type="Number"
                                  id="permin"
                                  name="minWeight"
                                  value={formDataPercentage?.minWeight}
                                  onChange={handleChangePercentage}
                                  onFocus={() => setPerMinFocused(true)}
                                  onBlur={(e) =>
                                    setPerMinFocused(e.target.value !== "")
                                  }
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                              <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="permax"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formDataPercentage?.maxWeight ||
                                    permaxFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
                                >
                                  Max-Weight
                                </label>
                                <input
                                  type="Number"
                                  name="maxWeight"
                                  id="permax"
                                  value={formDataPercentage?.maxWeight}
                                  onChange={handleChangePercentage}
                                  onFocus={() => setPerMaxFocused(true)}
                                  onBlur={(e) =>
                                    setPerMaxFocused(e.target.value !== "")
                                  }
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <div className=" flex-col flex gap-[20px] ">
                              <div className="relative w-full h-[40px]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="perrate"
                                  className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                    formDataPercentage?.rate || perrateFocused
                                      ? "text-[#000] -translate-y-[21px]"
                                      : "text-[#8f8f8f] cursor-text"
                                  }`}
                                >
                                  Percentege
                                </label>
                                <input
                                  type="Number"
                                  name="rate"
                                  id="perrate"
                                  onFocus={() => setPerRateFocused(true)}
                                  onBlur={(e) =>
                                    setPerRateFocused(e.target.value !== "")
                                  }
                                  value={formDataPercentage?.rate}
                                  onChange={handleChangePercentage}
                                  className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                  autocomplete="naqsme"
                                />
                              </div>
                            </div>
                            <button
                              className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                              onClick={handleAddPercentage}
                            >
                              {isEditingPercentage ? "Edit" : "Save"}
                            </button>
                          </div>

                          {isEditingPercentage ? (
                            // Editable Fields
                            <>
                              <div className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]">
                                <div className=" flex w-[100%] fle  gap-[5px]">
                                  <div
                                    ref={dropdownEditPercentageRef}
                                    className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                  >
                                    <label
                                      htmlFor="editpercarat"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editselectedTypePercentage ||
                                        editpercaratFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Carat
                                    </label>
                                    <div
                                      className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                      onClick={() =>
                                        setEditDropdownOpenPercentage(
                                          (prev) => !prev
                                        )
                                      } // Toggle dropdown on click
                                    >
                                      <input
                                        type="text"
                                        name="group"
                                        id="editpercarat"
                                        onFocus={() =>
                                          setEditPerCaratFocused(true)
                                        }
                                        onBlur={(e) =>
                                          setEditPerCaratFocused(
                                            e.target.value !== ""
                                          )
                                        }
                                        value={editselectedTypePercentage}
                                        className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                        readOnly
                                      />
                                      <i
                                        className={
                                          editdropdownOpenPercentage
                                            ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                            : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                        }
                                      ></i>
                                    </div>
                                    <AnimatePresence>
                                      {editdropdownOpenPercentage && (
                                        <motion.div
                                          initial={{ opacity: 0, y: -10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -10 }}
                                          className="absolute top-[90%] left-[16px] mt-2 bg-white w-[170px] border border-[#dedede] rounded-lg shadow-md z-10"
                                        >
                                          {categories.map((type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() =>
                                                handleEditSelectPercentage(type?.name)
                                              }
                                            >
                                              {type?.name}
                                            </div>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>

                                  <div
                                    ref={dropdownEditMetalPercentageRef}
                                    className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                  >
                                    <label
                                      htmlFor="editpermetal"
                                      className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                        editselectedTypePercentage ||
                                        editpermetalFocused
                                          ? "text-[#000] -translate-y-[21px]"
                                          : "text-[#8f8f8f] cursor-text"
                                      }`}
                                    >
                                      Metal
                                    </label>
                                    <div
                                      className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                      onClick={() =>
                                        setEditDropdownOpenMetalPercentage(
                                          (prev) => !prev
                                        )
                                      }  // Toggle dropdown on click
                                    >
                                      <input
                                        type="text"
                                        name="metal"
                                        id="editpermetal"
                                        value={editselectedTypeMetalPercentage}
                                        onFocus={() =>
                                          setEditPerMetalFocused(true)
                                        }
                                        onBlur={(e) =>
                                          setEditPerMetalFocused(
                                            e.target.value !== ""
                                          )
                                        }
                                        className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                        readOnly
                                      />
                                      <i
                                        className={
                                          editdropdownOpenMetalPercentage
                                            ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                            : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                        }
                                      ></i>
                                    </div>
                                    <AnimatePresence>
                                      {editdropdownOpenMetalPercentage && (
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
                                                handleEditSelectMetalPercentage(
                                                  type?.metalName
                                                );
                                                setDropdownOpenMetalPercentage(
                                                  false
                                                );
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
                                  ref={dropdownEditCategoryPercentageRef}
                                  className="relative w-[100%]  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
                                >
                                  <label
                                    htmlFor="edicategory"
                                    className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                                      editselectedTypeCategoryPercentage ||
                                      editpercategoryFocused
                                        ? "text-[#000] -translate-y-[21px]"
                                        : "text-[#8f8f8f] cursor-text"
                                    }`}
                                  >
                                    Category
                                  </label>
                                  <div
                                    className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                                    onClick={() =>
                                      setEditDropdownOpenCategoryPercentage(
                                        (prev) => !prev
                                      )
                                    } // Toggle dropdown on click
                                  >
                                    <input
                                      type="text"
                                      name="item"
                                      id="edicategory"
                                      value={editselectedTypeCategoryPercentage}
                                      onFocus={() =>
                                        setEditPerCategoryFocused(true)
                                      }
                                      onBlur={(e) =>
                                        setPerCategoryFocused(
                                          e.target.value !== ""
                                        )
                                      }
                                      className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                                      readOnly
                                    />
                                    <i
                                      className={
                                        editdropdownOpenCategoryPercentage
                                          ? "fa-solid fa-chevron-up text-[14px] pr-[5px]"
                                          : "fa-solid fa-chevron-down text-[14px] pr-[5px]"
                                      }
                                    ></i>
                                  </div>
                                  <AnimatePresence>
                                    {editdropdownOpenCategoryPercentage && (
                                      <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-[90%]  mt-2 left-[-16px] bg-white w-[240px] border border-[#dedede] rounded-lg shadow-md z-10"
                                      >
                                        {item.map(
                                          (type, index) => (
                                            <div
                                              key={index}
                                              className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                              onClick={() => {
                                                handleSelectEditCategoryPercentage(
                                                  type?.itemName
                                                );
                                                setEditDropdownOpenCategoryPercentage(
                                                  false
                                                );
                                              }}
                                            >
                                              {type?.itemName}
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
                                      name="minWeight"
                                      value={formDataPercentage?.minWeight}
                                      onChange={handleChangePercentage}
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
                                      name="maxWeight"
                                      value={formDataPercentage?.maxWeight}
                                      onChange={handleChangePercentage}
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
                                      name="rate"
                                      value={formDataPercentage?.rate}
                                      onChange={handleChangePercentage}
                                      placeholder="Enter Rate"
                                      className="w-full outline-none text-[13px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                      autocomplete="naqsme"
                                    />
                                  </div>
                                </div>
                                <button
                                  className=" flex justify-center items-center py-[5px] font-[500] rounded-md  bs-spj  text-[#fff] font-Poppins"
                                  onClick={handleAddPercentage}
                                >
                                  {isEditingPercentage ? "Edit" : "Save"}
                                </button>
                              </div>
                            </>
                          ) : (
                            // Static Fields
                            <>
                              {percentage?.map((item, index) => (
                                <div
                                  key={index}
                                  className=" flex relative overflow-hidden border-[1px] flex-col gap-[18px] w-[100%] py-[19px] px-[15px] rounded-[8px] border-[#122f97]"
                                >
                                  <div className=" flex  text-[19px] absolute border-l-[1.5px] border-b-[1.5px] border-[#122f97]  rounded-bl-[5px] py-[6px] px-[10px] gap-[6px] top-[0px] z-[5] right-0 bg-[#fff]">
                                    <i
                                      className="fa-solid cursor-pointer fa-pen-to-square"
                                      onClick={() => handleEditPercentage(item)}
                                    ></i>
                                    <i className="fa-solid cursor-pointer text-[#f00] fa-trash"  onClick={() => handleDeletePercentage(item._id)} 
                                    ></i>
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
                                      <div className="relative w-full  rounded-lg flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                        <p className=" text-[15px]    py-[9px] font-Poppins">
                                          {" "}
                                          {item?.group?.name}
                                        </p>
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
                                      <div className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                        <p className=" text-[15px]    py-[9px] font-Poppins">
                                          {" "}
                                          {item?.metal?.metalName}
                                        </p>
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
                                    <div className="relative w-full  rounded-lg  h-[40px] flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                      <p className=" text-[15px]    py-[9px] font-Poppins">
                                        {" "}
                                        {item?.item?.itemName}
                                      </p>
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
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {item?.minWeight}{" "}
                                      </p>
                                    </div>
                                    <div className="relative w-full   h-[40px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                      <label
                                        htmlFor="email"
                                        className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                                      >
                                        Max-weight
                                      </label>
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {item?.maxWeight}
                                      </p>
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
                                      <p className=" text-[15px]   py-[9px] font-Poppins">
                                        {" "}
                                        {item?.rate}
                                      </p>
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

 
      <NextUIModal isOpen={deletemodalopen} onOpenChange={handleDeleteModalClose}>
        <ModalContent className="md:max-w-[350px] max-w-[333px] relative  rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[300px]  ">
          {(handleDeleteModalClose) => (
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
                        onClick={handleDelete}
                 
                      >
                        <p>Delete</p>
                      </div>
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[#26b955] rounded-br-[10px] text-[#fff] font-[600]  font-Montserrat  text-[20px]"
                        onClick={handleDeleteModalClose}
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
