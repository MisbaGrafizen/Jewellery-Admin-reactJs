import { useEffect, useRef, useState } from "react";
import Header from "../../Component/header/Header";
import SideBar from "../../Component/sidebar/SideBar";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
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
import NonBerCode from "../../Component/nonBercode/NonBerCode";

export default function InventoryCreate() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [carat, setCarat] = useState([]);
  const [name, setName] = useState("");
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

  const [selectedCaratIndex, setSelectedCaratIndex] = useState(null);
  const [selectedmodalopen, setModalOpen] = useState(false);
  const [deleteContext, setDeleteContext] = useState(null);
  const [dropdownOpenMetal, setDropdownOpenMetal] = useState(false);
  const [selectedTypeMetal, setSelectedTypeMetal] = useState("");
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [selectedTypeCategory, setSelectedTypecategory] = useState("");

  const [metal, setMetal] = useState([]);
  const [metalName, setMetalName] = useState("");
  const [editingMetal, setEditingMetal] = useState(null);
  const [editMetalName, setEditMetalName] = useState("");
  const [editingMetalId, setEditingMetalId] = useState(null);
  const [selectedMetalIndex, setSelectedMetalIndex] = useState(0);
  const [isMetalInputVisible, setMetalInputVisible] = useState(null);
  const [inputMetalValue, setInputMetalValue] = useState("");

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [editItemName, setEditItemName] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [isItemInputVisible, setItemInputVisible] = useState(null);
  const [inputItemValue, setInputItemValue] = useState("");
  const [apiTrigger, setApiTrigger] = useState(null);

  const [grossWeight, setGrossWeight] = useState("");
  const [lessWeight, setLessWeight] = useState("");
  const [westage, setWestage] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);

  const [popupVisible, setPopupVisible] = useState(null);
  const [popupMetalVisible, setPopupMetalVisible] = useState(null);
  const [popupItemVisible, setPopupItemVisible] = useState(null);

  const [stockModalopen, setStockModalOpen] = useState(false);
  const inputRef = useRef(null);
  const popupRef = useRef(null);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.landing.getAllCategory);
  const metals = useSelector((state) => state.landing.getMetal);
  const item = useSelector((state) => state.landing.getGroupItem);
  const stocks = useSelector((state) => state.landing.getProduct);
  const [isBercodeVisible, setIsBercodeVisible] = useState(true);

  const handleBercodeClick = () => {
    setIsBercodeVisible(true);
  };

  const handleNoneBercodeClick = () => {
    setIsBercodeVisible(false);
  };

  const handleSaveClick = (id) => {
    if (percentages[id] && !isNaN(parseFloat(percentages[id]))) {
      console.log("Found percentage:", percentages[id]);
      handleSavePercentage(id);
    } else {
      alert("Please enter a valid percentage.");
    }
    setIsEditing(false);
  };


  useEffect(() => {
    setCarat(categories || []);
    setMetal(metals || []);
    setItems(item || []);
  }, [categories, metals, item]);

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

  const handleKeyPress = async (e, context, action = "add", id = null) => {
    if (e?.key === "Enter") {
      e.preventDefault();

      let inputValue = "";
      if (context === "category") {
        inputValue = action === "edit" ? editCaratName.trim() : name.trim();
      } else if (context === "metal") {
        inputValue =
          action === "edit" ? editMetalName.trim() : metalName.trim();
      } else if (context === "item") {
        inputValue = action === "edit" ? editItemName.trim() : itemName.trim();
      }

      if (!inputValue) {
        alert(`${context} name cannot be empty.`);
        return;
      }

      try {
        if (action === "add") {
          await triggerAPICall(context, inputValue, action);
        } else if (action === "edit") {
          await triggerAPICall(context, inputValue, action, id);
        }

        if (context === "category") {
          action === "edit" ? setEditCaratName("") : setName("");
        } else if (context === "metal") {
          action === "edit" ? setEditMetalName("") : setMetalName("");
        } else if (context === "item") {
          action === "edit" ? setEditItemName("") : setItemName("");
        }

        if (action === "edit") {
          if (context === "category") setEditingCarat(null);
          if (context === "metal") setEditingMetal(null);
          if (context === "item") setEditingItem(null);
        }
      } catch (error) {
        console.error(`Failed to ${action} ${context}:`, error);
        alert(`Failed to ${action} ${context}. Please try again.`);
      }
    }
  };

  const triggerAPICall = async (context, inputValue, action, id = null) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (action === "add") {
        if (context === "category") {
          await dispatch(addCategoryAction(inputValue));
          await dispatch(getCategroyAction());
        } else if (context === "metal") {
          await dispatch(addMetalAction({ metalName: inputValue }));
          await dispatch(getMetalAction());
        } else if (context === "item") {
          await dispatch(addGroupItemAction({ itemName: inputValue }));
          await dispatch(getGroupItemAction());
        }
      } else if (action === "edit" && id) {
        if (context === "category") {
          await dispatch(updateCategoryAction(id, { name: inputValue }));
          await dispatch(getCategroyAction());
        } else if (context === "metal") {
          await dispatch(updateMetalAction(id, { metalName: inputValue }));
          await dispatch(getMetalAction());
        } else if (context === "item") {
          await dispatch(updateGroupItemAction(id, { itemName: inputValue }));
          await dispatch(getGroupItemAction());
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const handleDoubleClick = (context, item, index) => {
    if (context === "category") {
      setEditingCarat(index);
      setEditCaratName(item.name);
      setEditingCaratId(item._id);
    } else if (context === "metal") {
      setEditingMetal(index);
      setEditMetalName(item.metalName);
      setEditingMetalId(item._id);
    } else if (context === "item") {
      setEditingItem(index);
      setEditItemName(item.itemName);
      setEditingItemId(item._id);
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

  const handlePercentageChange = (id, value) => {
    setPercentages((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // const handleSavePercentage = async (id) => {
  //   const percentage = percentages[id];

  //   if (!percentage || isNaN(percentage)) {
  //     alert("Please enter a valid percentage.");
  //     return;
  //   }

  //   try {
  //     const success = await dispatch(
  //       updateCategoryAction(id, { percentage: parseFloat(percentage) })
  //     );

  //     if (success) {
  //       alert("Percentage updated successfully!");
  //       setPercentages((prev) => ({
  //         ...prev,
  //         [id]: "",
  //       }));

  //       dispatch(getCategroyAction());
  //     } else {
  //       alert("Failed to update percentage.");
  //     }
  //   } catch (error) {
  //     console.error("Error updating percentage:", error);
  //     alert("An error occurred while updating the percentage.");
  //   }
  // };


  const handleSavePercentage = async (id) => {
    const percentage = parseFloat(percentages[id]); // Parse percentage value

    if (!percentage || isNaN(percentage)) {
      alert("Please enter a valid percentage.");
      return;
    }

    try {
      // const success = await dispatch(
      //   updateCategoryAction(id, { percentage }) // API call to update percentage
      // );
      const success = await dispatch(updateCategoryAction(id, { percentage }));
      if (success) {
        setPercentages((prev) => ({
          ...prev,
          [id]: "",
        }));

        dispatch(getCategroyAction());
      } else {
        alert("Failed to update percentage.");
      }
    } catch (error) {
      console.error("Error updating percentage:", error);
      alert("An error occurred while updating the percentage.");
    }
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
    const selectedCategory = items.find(
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
          alert("Stock added successfully!");
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

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      popupVisible !== null
    ) {
      setPopupVisible(null);
    }
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setInputVisible("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popupVisible]);

  const handleClickMetalOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      popupMetalVisible !== null
    ) {
      setPopupMetalVisible(null);
    }
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setMetalInputVisible("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickMetalOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickMetalOutside);
  }, [popupMetalVisible]);

  const handleClickItemOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      popupItemVisible !== null
    ) {
      setPopupItemVisible(null);
    }
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setItemInputVisible("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickItemOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickItemOutside);
  }, [popupItemVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setInputVisible(false);
        setItemInputVisible(false);
        setMetalInputVisible(false);
        setEditingCarat(false);
        setEditingItem(false);
        setEditingMetal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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

  return (
    <>
      <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Inventory" />
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
                  Bercode
                </button>
                <button
                  onClick={handleNoneBercodeClick}
                  className={`flex w-[125px] pl-[] py-[10px] justify-center items-center rounded-[8px] z-10 font-Poppins font-[500] text-${isBercodeVisible ? "[#000]" : "[#fff]"
                    }`}
                >
                  None Bercode
                </button>
              </div>

              {isBercodeVisible ? (
                <>
                  <div className="flex flex-col gap-[25px] w-[100%]">
                    <div className="flex flex-col gap-[6px] w-[100%]">
                      <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#122f97]">
                        Carats
                      </h1>
                      <div className="w-[100%] flex flex-col gap-[15px]">
                        <div className="flex gap-[20px]">
                          <div
                            ref={inputRef}
                            className="flex gap-[15px]  flex-wrap"
                          >
                            {!isInputVisible ? (
                              <div className="flex">
                                <div
                                  onClick={handlePlusClick}
                                  className="border-[1px] border-dashed border-[#122f97] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                                >
                                  <i className="text-[20px] font-[800] text-[#122f97] fa-solid fa-plus"></i>
                                </div>
                              </div>
                            ) : (
                              <div className="flex border-[#122f97] border-dashed border-[1px] rounded-[8px] overflow-hidden">
                                <input
                                  type="text"
                                  name="name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  onKeyDown={(e) =>
                                    handleKeyPress(e, "category")
                                  }
                                  placeholder="Carats"
                                  className="px-[10px] outline-none  font-Poppins py-[5px] md150:w-[120px] md11:w-[120px]"
                                  autoFocus
                                />
                              </div>
                            )}
                          </div>
                          <div className="flex-wrap flex relative gap-[10px]">
                            {Array.isArray(carat) ? (
                              carat.map((item, index) => (
                                <>
                                  <div className=" flex  justify-center flex-col">
                                    <div
                                      key={item?.id}
                                      className="border-[1px] border-[#122f97] font-[500] md150:text-[18px] md11:text-[15px]  w-[180px] px-[15px] font-Poppins  md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                                      onClick={() =>
                                        handleCategoryClick(item?.id)
                                      }
                                      onDoubleClick={() =>
                                        handleDoubleClick(
                                          "category",
                                          item,
                                          index
                                        )
                                      }
                                    >
                                      {editingCarat === index ? (
                                        <>
                                          <div className="flex flex-col justify-center">
                                            <input
                                              type="text"
                                              name="name"
                                              value={editCaratName}
                                              onChange={(e) =>
                                                setEditCaratName(e.target.value)
                                              }
                                              onKeyDown={(e) =>
                                                handleKeyPress(
                                                  e,
                                                  "category",
                                                  "edit",
                                                  editingCaratId
                                                )
                                              }
                                              className="text-center w-[100px] mt-[39px] bg-transparent border-none outline-none"
                                              autoFocus
                                            />
                                            <p
                                              ref={popupRef}
                                              className="text-red-500 hover:bg-red-100 bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px]  z-10 font-Montserrat cursor-pointer mx-auto"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpenDeleteModal(
                                                  "category",
                                                  item?._id
                                                );
                                              }}
                                            >
                                              Delete
                                            </p>
                                          </div>
                                        </>
                                      ) : (
                                        <p>{item.name}</p>
                                      )}
                                    </div>
                                    <div className="items-center gap-[4px] justify-center flex">
                                      <div className="border-[1px] mt-[10px] border-[#122f97] font-[500] md150:text-[18px] md11:text-[15px] px-[5px] font-Poppins w-[140px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[5px] cursor-pointer">
                                        {editingCaratId === item._id ? (
                                          <input
                                            className="flex w-[100%] outline-none h-[100%] text-[12px]"
                                            placeholder="Enter Fine Weight"
                                            type="text"
                                            name="percentage"
                                            value={percentages[item._id] || ""}
                                            onChange={(e) =>
                                              handlePercentageChange(item._id, e.target.value)
                                            }
                                          />
                                        ) : (
                                          <span>{item.percentage || "No Data"}</span>
                                        )}
                                      </div>

                                      <button
                                        className="mt-[8px] text-[#fff] bs-spj flex justify-center items-center h-[35px] rounded-[5px] w-[40px]"
                                        onClick={() => {
                                          if (editingCaratId === item._id) {
                                            handleSaveClick(item._id); // Save changes
                                            setIsEditing(false);
                                            window.location.reload()
                                          } else {
                                            setEditingCaratId(item._id);
                                      
                                          }
                                        }}
                                      >
                                        <i
                                          className={`fa-duotone fa-solid ${editingCaratId === item._id ? "fa-check" : "fa-edit"
                                            }`}
                                        ></i>
                                      </button>
                                    </div>

                                  </div>
                                </>
                              ))
                            ) : (
                              <p> No Categories Available</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] w-[100%]">
                      <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#122f97]">
                        Metal
                      </h1>
                      <div className="w-[100%] flex flex-col gap-[15px]">
                        <div className="flex gap-[20px]">
                          <div className="flex gap-[15px] items-center flex-wrap">
                            {!isMetalInputVisible ? (
                              <div className="flex">
                                <div
                                  onClick={() => setMetalInputVisible(true)}
                                  className="border-[1px] border-dashed border-[#122f97] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                                >
                                  <i className="text-[20px] font-[800] text-[#122f97] fa-solid fa-plus"></i>
                                </div>
                              </div>
                            ) : (
                              <div className="flex border-[#122f97] border-dashed border-[1px] rounded-[8px] overflow-hidden">
                                <input
                                  type="text"
                                  name="metalName"
                                  value={metalName}
                                  onChange={(e) => setMetalName(e.target.value)}
                                  onKeyDown={(e) => handleKeyPress(e, "metal")}
                                  placeholder="Metals"
                                  className="px-[10px] outline-none  font-Poppins py-[5px] md150:w-[120px] md11:w-[120px]"
                                  autoFocus
                                />
                              </div>
                            )}
                          </div>
                          <div
                            ref={inputRef}
                            className="flex-wrap flex relative gap-[10px] "
                          >
                            {Array.isArray(metal) ? (
                              metal.map((item, index) => (
                                <div
                                  key={item?.id}
                                  className="border-[1px] border-[#122f97] font-[500] md150:text-[18px] md11:text-[15px]  w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                                  onClick={() => handleMetalClick(item?.id)}
                                  onDoubleClick={() =>
                                    handleDoubleClick("metal", item, index)
                                  }
                                >
                                  {editingMetal === index ? (
                                    <>
                                      <div className="flex flex-col justify-center">
                                        <input
                                          type="text"
                                          name="metalName"
                                          value={editMetalName}
                                          onChange={(e) =>
                                            setEditMetalName(e.target.value)
                                          }
                                          onKeyDown={(e) =>
                                            handleKeyPress(
                                              e,
                                              "metal",
                                              "edit",
                                              editingMetalId
                                            )
                                          }
                                          className="text-center w-[100px] mt-[39px] bg-transparent border-none outline-none"
                                          autoFocus
                                        />
                                        <p
                                          className="text-red-500 hover:bg-red-100 bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px] font-Montserrat cursor-pointer mx-auto"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleOpenDeleteModal(
                                              "metal",
                                              item?._id
                                            );
                                          }}
                                        >
                                          Delete
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <p>{item.metalName}</p>
                                  )}
                                </div>
                              ))
                            ) : (
                              <p> No Categories Available</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] w-[100%]">
                      <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#122f97]">
                        Product Category
                      </h1>
                      <div className="w-[100%] flex flex-col gap-[15px]">
                        <div className="flex gap-[20px]">
                          <div className="flex gap-[15px] items-center flex-wrap">
                            {!isItemInputVisible ? (
                              <div className="flex">
                                <div
                                  onClick={() => setItemInputVisible(true)}
                                  className="border-[1px] border-dashed border-[#122f97] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                                >
                                  <i className="text-[20px] font-[800] text-[#122f97] fa-solid fa-plus"></i>
                                </div>
                              </div>
                            ) : (
                              <div className="flex border-[#122f97] border-dashed border-[1px] rounded-[8px] overflow-hidden">
                                <input
                                  type="text"
                                  name="itemName"
                                  value={itemName}
                                  onChange={(e) => setItemName(e.target.value)}
                                  onKeyDown={(e) => handleKeyPress(e, "item")}
                                  placeholder="Products"
                                  className="px-[10px] outline-none  font-Poppins py-[5px] md150:w-[120px] md11:w-[120px]"
                                  autoFocus
                                />
                              </div>
                            )}
                          </div>
                          <div className="flex-wrap flex relative gap-[10px]">
                            {Array.isArray(items) ? (
                              items.map((data, index) => (
                                <div
                                  key={data?.id}
                                  className="border-[1px] border-[#122f97] font-[500] md150:text-[18px] md11:text-[15px]  w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                                  onClick={() => handleItemClick(data?.id)}
                                  onDoubleClick={() =>
                                    handleDoubleClick("item", data, index)
                                  }
                                >
                                  {editingItem === index ? (
                                    <>
                                      <div className="flex flex-col justify-center">
                                        <input
                                          type="text"
                                          name="itemName"
                                          value={editItemName}
                                          onChange={(e) =>
                                            setEditItemName(e.target.value)
                                          }
                                          onKeyDown={(e) =>
                                            handleKeyPress(
                                              e,
                                              "item",
                                              "edit",
                                              editingItemId
                                            )
                                          }
                                          className="text-center w-[100px] mt-[39px] bg-transparent border-none outline-none"
                                          autoFocus
                                        />
                                        <p
                                          className="text-red-500 hover:bg-red-100 !bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px] font-Montserrat cursor-pointer mx-auto z-[10]"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleOpenDeleteModal(
                                              "item",
                                              data?._id
                                            );
                                          }}
                                        >
                                          Delete
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <p>{data.itemName}</p>
                                  )}
                                </div>
                              ))
                            ) : (
                              <p> No Categories Available</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex  justify-end w-[100%]">
                      <button
                        className=" flex  w-[130px] font-Poppins items-center justify-center gap-[6px] py-[8px] rounded-[8px] text-[#fff] bs-spj "
                        onClick={handleStockModal}
                      >
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
                            <div className="flex justify-start text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[11%] max-w-[15%]">
                              <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000] ">
                                G.Weight
                              </p>
                            </div>

                            <div className="flex justify-start text-center py-[10px] border-r border-b border-[#122f97]  px-3 min-w-[10%] max-w-[14%]">
                              <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                                L.Weight
                              </p>
                            </div>
                            <div className="flex justify-center text-center py-2 border-b border-[#122f97]  px-3 min-w-[9%] max-w-[10%]">
                              <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                                N.Weight
                              </p>
                            </div>
                            <div className="flex justify-center text-center py-2 border-l border-b border-[#122f97]  px-3 min-w-[9%] max-w-[10%]">
                              <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                                Fine Weight
                              </p>
                            </div>
                            <div className="flex justify-center text-center py-2 border-l border-b border-[#122f97]  px-3 min-w-[10%] max-w-[10%]">
                              <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                                Wastage
                              </p>
                            </div>
                            <div className="flex justify-center text-center py-2 border-l border-b border-[#122f97]  px-3 min-w-[5%] max-w-[10%]">
                              <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                                Action
                              </p>
                            </div>
                          </div>
                          {stocks?.map((item, index) => {
                            const netWeight = (
                              Number(item?.toWeight || 0) -
                              Number(item?.lessWeight || 0)
                            ).toFixed(3);
                            const percentage = item?.groupId?.percentage || 0;
                            const updatedFineWeight = (
                              netWeight *
                              (percentage / 100)
                            ).toFixed(3);

                            return (
                              <div
                                key={index}
                                className="flex justify-between overflow-hidden"
                              >
                                <div className="flex justify-center items-center text-center py-[10px] border-r border-b border-[#122f97] gap-[7px] px-3 min-w-[4%] max-w-[4%]">
                                  <input
                                    type="checkbox"
                                    style={{ width: "15px", height: "15px" }}
                                    className="ml-[-25%]"
                                  />
                                  <p className="font-[600] md11:text-[15px] md150:text-[17px] md11:mt-[5%] md150:mt-[2%]">
                                    {index + 1}
                                  </p>
                                </div>
                                <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]">
                                  {item?.groupId?.name || "-"}
                                </div>
                                <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]">
                                  {item?.metalId?.metalName || "-"}
                                </div>
                                <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]">
                                  {item?.groupItemId?.itemName || "-"}
                                </div>
                                <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[11%] max-w-[15%]">
                                  {item?.toWeight || 0}
                                </div>
                                <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[10%] max-w-[14%]">
                                  {item?.lessWeight || 0}
                                </div>
                                <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[9%] max-w-[14%]">
                                  {netWeight}
                                </div>
                                <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[9.1%] max-w-[14%]">
                                  {updatedFineWeight}
                                </div>
                                <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[10%] max-w-[14%]">
                                  {item?.westage || 0}
                                </div>
                                <div className="flex justify-center gap-[10px] md11:items-center text-center py-[10px] border-b border-[#122f97] px-3 min-w-[5%] max-w-[14%]">
                                  <i
                                    className="fa-solid text-[16px] cursor-pointer text-[#122f97] fa-pen-to-square"
                                    onClick={() => handleStockModalEdit(item)}
                                  ></i>
                                  <i
                                    className="fa-solid text-[16px] cursor-pointer text-[#ff0c0c] fa-trash"
                                    onClick={() =>
                                      handleOpenDeleteModal("stock", item?._id)
                                    }
                                  ></i>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NonBerCode />
              )}
            </div>
          </div>
        </div>
      </section>

      <NextUIModal isOpen={selectedmodalopen} onOpenChange={handleModalclose}>
        <ModalContent className="md:max-w-[350px] max-w-[333px] relative  rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[300px]  ">
          {(handleModalclose) => (
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
                        onClick={handleModalclose}
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
                              className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
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
                              className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
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
                              className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
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
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
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
                          </div>
                          <div className=" flex w-[100%]  gap-[30px]">
                            <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
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
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${westage || wastageFocused
                                    ? "text-[#000] -translate-y-[21px] hidden "
                                    : "text-[#8f8f8f] cursor-text flex"
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
                            {/* <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
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
                          </div> */}

                            {/* <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
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
                          </div> */}
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
