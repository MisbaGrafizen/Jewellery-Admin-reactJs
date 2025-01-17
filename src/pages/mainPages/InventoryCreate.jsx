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
  deleteCategoryAction,
  deleteGroupItemAction,
  deleteMetalAction,
  getCategroyAction,
  getGroupItemAction,
  getMetalAction,
  updateCategoryAction,
  updateGroupItemAction,
  updateMetalAction,
} from "../../redux/action/landingManagement";

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

  const [selectedCaratIndex, setSelectedCaratIndex] = useState(null);
  const [selectedmodalopen, setModalOpen] = useState(false);
  const [deleteContext, setDeleteContext] = useState(null);
  const [inputValue, setInputValue] = useState("");
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

  useEffect(() => {
    setCarat(categories || []);
    setMetal(metals || []);
    setItems(item || []);
  }, [categories, metals, item]);

  useEffect(() => {
    dispatch(getCategroyAction());
    dispatch(getMetalAction());
    dispatch(getGroupItemAction());
  }, [dispatch]);

  console.log("categories", categories);

  const dropdownRef = useRef(null);
  const dropdownMetalRef = useRef(null);
  const dropdownCategoryRef = useRef(null);

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

  const handleStockModal = () => {
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

  // useEffect(() => {
  //   const callApiForContext = async () => {
  //     if (!apiTrigger) return; // Exit if no trigger

  //     const { context, data } = apiTrigger; // Destructure context and data
  //     try {
  //       console.log(`Calling API for context: ${context}`, data);

  //       switch (context) {
  //         case "category":
  //           await dispatch(addCategoryAction(data));
  //           dispatch(getCategroyAction()); // Refresh categories
  //           break;

  //         case "metal":
  //           await dispatch(addMetalAction(data));
  //           dispatch(getMetalAction()); // Refresh metals
  //           break;

  //         case "item":
  //           await dispatch(addGroupItemAction(data));
  //           dispatch(getGroupItemAction()); // Refresh items
  //           break;

  //         default:
  //           console.warn("Invalid context:", context);
  //       }

  //       console.log(`${context} added successfully!`);
  //     } catch (error) {
  //       console.error(`Error adding ${context}:`, error);
  //       alert(`Failed to add ${context}.`);
  //     } finally {
  //       setApiTrigger(null); // Reset trigger
  //     }
  //   };

  //   callApiForContext();
  // }, [apiTrigger, dispatch]); // Run only when apiTrigger changes

  // const handleKeyPress = (e, context) => {
  //   if (e?.key === "Enter") {

  //     e.preventDefault();

  //     console.log(`Key pressed: ${e.key}, Context: ${context}`);

  //     if (context === "category") {
  //       console.log("Calling handleAddCategory");
  //       editingCaratId ? handleSaveEditCategory() : handleAddCategory();
  //     } else if (context === "metal") {
  //       editingMetalId
  //         ? handleSaveEditMetal()
  //         : handleAddMetal();
  //     } else if (context === "item") {
  //       editingItemId
  //         ? handleSaveEditItem()
  //         : handleAddItem();
  //     }
  //   }
  // };

  const handleKeyPress = (e, context) => {
    if (e?.key === "Enter") {
      e.preventDefault();
      console.log(`Key pressed: ${e.key}, Context: ${context}`);

      const inputValue =
        context === "category"
          ? name.trim()
          : context === "metal"
          ? metalName.trim()
          : context === "item"
          ? itemName.trim()
          : "";

      if (!inputValue) {
        alert(`${context} name cannot be empty.`);
        return;
      }

      triggerAPICall(context, inputValue);
    }
  };

  const triggerAPICall = async (context, inputValue) => {
    try {
      console.log(
        `Triggering API for context: ${context} with value: ${inputValue}`
      );

      let successMessage = "";
      switch (context) {
        case "category":
          await dispatch(addCategoryAction(inputValue));
          await dispatch(getCategroyAction());
          successMessage = "Category added successfully!";
          setName("");
          break;

        case "metal":
          await dispatch(addMetalAction({ metalName: inputValue }));
          await dispatch(getMetalAction());
          successMessage = "Metal added successfully!";
          setMetalName("");
          break;

        case "item":
          await dispatch(addGroupItemAction({ itemName: inputValue }));
          await dispatch(getGroupItemAction());
          successMessage = "Item added successfully!";
          setItemName("");
          break;

        default:
          console.warn("Unknown context:", context);
          return;
      }

      alert(successMessage);
    } catch (error) {
      console.error(`Failed to add ${context}:`, error);
      alert(`Failed to add ${context}. Please try again.`);
    }
  };

  // const handleKeyPress = (e, context) => {
  //   if (e?.key === "Enter") {
  //     e.preventDefault();
  //     console.log(`Key pressed: ${e.key}, Context: ${context}`);

  //     if (context === "category") {
  //       console.log("Calling handleAddCategory");
  //       handleAddCategory(); // Ensure this is being called
  //     } else if (context === "metal") {
  //       console.log("Calling handleAddMetal");
  //       handleAddMetal();
  //     } else if (context === "item") {
  //       console.log("Calling handleAddItem");
  //       handleAddItem();
  //     } else {
  //       console.warn("Unknown context:", context);
  //     }
  //   }
  // };

  const handleSaveEditCategory = async (index, id) => {
    if (!id) {
      console.error("Error: No ID provided for editing.");
      return;
    }

    if (!editCaratName.trim()) {
      alert("Carat name cannot be empty.");
      return;
    }
    console.log("Payload being sent:", { name: editCaratName.trim() });

    try {
      const success = await dispatch(
        updateCategoryAction(id, { name: editCaratName.trim() })
      );

      if (success) {
        setCarat((preCarat) =>
          preCarat.map((category, idx) =>
            idx === index
              ? { ...category, name: editCaratName.trim() }
              : category
          )
        );
        alert("Carat updated successfully!");
        setEditingCarat(null);
        setEditCaratName("");
      } else {
        alert("Failed to update carat.");
      }
    } catch (error) {
      console.error("Error updating carat:", error);
      alert("An error occurred while updating the carat.");
    }
  };

  const handleSaveEditMetal = async (index, id) => {
    if (!id) {
      console.error("Error: No ID provided for editing.");
      return;
    }

    if (!editMetalName.trim()) {
      alert("Metal name cannot be empty.");
      return;
    }
    console.log("Payload being sent:", { metalName: editMetalName.trim() });

    try {
      const success = await dispatch(
        updateMetalAction(id, { metalName: editMetalName.trim() })
      );

      if (success) {
        setMetal((preMetal) =>
          preMetal.map((metal, idx) =>
            idx === index
              ? { ...metal, metalName: editMetalName.trim() }
              : metal
          )
        );
        alert("Metal updated successfully!");
        setEditingMetal(null); // Exit editing mode
        setEditMetalName(""); // Clear input
      } else {
        alert("Failed to update metal.");
      }
    } catch (error) {
      console.error("Error updating metal:", error);
      alert("An error occurred while updating the metal.");
    }
  };

  const handleSaveEditItem = async (index, id) => {
    if (!id) {
      console.error("Error: No ID provided for editing.");
      return;
    }

    if (!editItemName.trim()) {
      alert("Group Item name cannot be empty.");
      return;
    }
    console.log("Payload being sent:", { itemName: editItemName.trim() });

    try {
      const success = await dispatch(
        updateGroupItemAction(id, { itemName: editItemName.trim() })
      );

      if (success) {
        setItems((preItems) =>
          preItems.map((item, idx) =>
            idx === index ? { ...item, itemName: editItemName.trim() } : item
          )
        );
        alert("Group Item updated successfully!");
        setEditingItem(null);
        setEditItemName("");
      } else {
        alert("Failed to update group item.");
      }
    } catch (error) {
      console.error("Error updating group item:", error);
      alert("An error occurred while updating the group item.");
    }
  };

  const handleAddCategory = async (event) => {
    if (event?.key !== "Enter") return;

    if (!name.trim()) {
      alert("Category name cannot be empty.");
      return;
    }

    try {
      console.log("Dispatching addCategoryAction with:", name);
      const success = await dispatch(addCategoryAction(name.trim()));
      console.log("success", success);
      if (success) {
        setName("");
        dispatch(getCategroyAction());
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("An error occurred while adding the category.");
    }
  };

  const handleAddMetal = async (event) => {
    if (event?.key !== "Enter") return;

    if (!metalName.trim()) {
      alert("Metal name cannot be empty.");
      return;
    }

    try {
      const success = await dispatch(addMetalAction(metalName.trim()));
      console.log("success", success);
      if (success) {
        setMetalName("");
        dispatch(getMetalAction());
      }
    } catch (error) {
      console.error("Error adding metal:", error);
      alert("An error occurred while adding the metal.");
    }
  };

  const handleAddItem = async (event) => {
    if (event?.key !== "Enter") return;

    if (!itemName.trim()) {
      alert("Goup Item name cannot be empty.");
      return;
    }

    try {
      const success = await dispatch(addGroupItemAction(itemName.trim()));
      console.log("success", success);
      if (success) {
        setItemName("");
        dispatch(getGroupItemAction());
      }
    } catch (error) {
      console.error("Error adding group item:", error);
      alert("An error occurred while adding the group item.");
    }
  };

  // Handle double-click for editing a category
  const handleCategoryClick = (index) => {
    setSelectedCaratIndex(index);
  };

  const handleCategoryDoubleClick = (category, index) => {
    setEditingCarat(index);
    setInputValue(category.name);
  };

  const handleMetalClick = (index) => {
    setSelectedMetalIndex(index);
  };

  const handleMetalDoubleClick = (metal, index) => {
    setEditingMetal(index);
    setInputMetalValue(metal.name);
  };

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const handleItemDoubleClick = (item, index) => {
    setEditingItem(index);
    setInputItemValue(item.name);
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

  const handleModalopen = () => {
    setModalOpen(true);
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
            <div className="flex w-[100%] max-h-[93%] pb-[20px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
              <div className="flex flex-col gap-[25px] w-[100%]">
                <div className="flex flex-col gap-[6px] w-[100%]">
                  <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#0099dd]">
                    Carats
                  </h1>
                  <div className="w-[100%] flex flex-col gap-[15px]">
                    <div className="flex gap-[20px]">
                      <div className="flex gap-[15px]  flex-wrap">
                        {!isInputVisible ? (
                          <div className="flex">
                            <div
                              onClick={handlePlusClick}
                              className="border-[1px] border-dashed border-[#0099dd] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                            >
                              <i className="text-[20px] font-[800] text-[#0099dd] fa-solid fa-plus"></i>
                            </div>
                          </div>
                        ) : (
                          <div className="flex border-[#0099dd] border-dashed border-[1px] rounded-[8px] overflow-hidden">
                            <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              onKeyDown={(e) => handleKeyPress(e, "category")}
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
                                  className="border-[1px] border-[#0099dd] font-[500] md150:text-[18px] md11:text-[15px]  w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                                  onClick={() => handleCategoryClick(item?.id)}
                                  onDoubleClick={() =>
                                    handleCategoryDoubleClick(item, index)
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
                                            e.key === "Enter" &&
                                            handleSaveEditCategory(
                                              index,
                                              item?._id
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
                                <div className=" items-center gap-[4px] justify-center  flex">
                                  <div className="border-[1px] mt-[10px] border-[#0099dd] font-[500] md150:text-[18px] md11:text-[15px] w-fit    px-[5px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer">
                                    <input
                                      className=" flex w-[100%] outline-none h-[100%] text-[12px] "
                                      placeholder="Enter Fine Weight"
                                      type="number"
                                    />
                                  </div>
                                  <button className=" mt-[8px] text-[#fff] bs-spj flex justify-center items-center h-[35px] rounded-[5px] w-[40px]">
                                    <i className="fa-duotone fa-solid fa-check"></i>
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
                  <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#0099dd]">
                    Metal
                  </h1>
                  <div className="w-[100%] flex flex-col gap-[15px]">
                    <div className="flex gap-[20px]">
                      <div className="flex gap-[15px] items-center flex-wrap">
                        {!isMetalInputVisible ? (
                          <div className="flex">
                            <div
                              onClick={() => setMetalInputVisible(true)}
                              className="border-[1px] border-dashed border-[#0099dd] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                            >
                              <i className="text-[20px] font-[800] text-[#0099dd] fa-solid fa-plus"></i>
                            </div>
                          </div>
                        ) : (
                          <div className="flex border-[#0099dd] border-dashed border-[1px] rounded-[8px] overflow-hidden">
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
                      <div className="flex-wrap flex relative gap-[10px]">
                        {Array.isArray(metal) ? (
                          metal.map((item, index) => (
                            <div
                              key={item?.id}
                              className="border-[1px] border-[#0099dd] font-[500] md150:text-[18px] md11:text-[15px]  w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                              onClick={() => handleMetalClick(item?.id)}
                              onDoubleClick={() =>
                                handleMetalDoubleClick(item, index)
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
                                        setMetalName(e.target.value)
                                      }
                                      onKeyDown={(e) =>
                                        e.key === "Enter" &&
                                        handleSaveEditMetal(index, item?._id)
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
                  <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#0099dd]">
                    Product Category
                  </h1>
                  <div className="w-[100%] flex flex-col gap-[15px]">
                    <div className="flex gap-[20px]">
                      <div className="flex gap-[15px] items-center flex-wrap">
                        {!isItemInputVisible ? (
                          <div className="flex">
                            <div
                              onClick={() => setItemInputVisible(true)}
                              className="border-[1px] border-dashed border-[#0099dd] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                            >
                              <i className="text-[20px] font-[800] text-[#0099dd] fa-solid fa-plus"></i>
                            </div>
                          </div>
                        ) : (
                          <div className="flex border-[#0099dd] border-dashed border-[1px] rounded-[8px] overflow-hidden">
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
                              className="border-[1px] border-[#0099dd] font-[500] md150:text-[18px] md11:text-[15px]  w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                              onClick={() => handleItemClick(data?.id)}
                              onDoubleClick={() =>
                                handleItemDoubleClick(data, index)
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
                                        e.key === "Enter" &&
                                        handleSaveEditItem(index, data?._id)
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
                    <i class="fa-solid fa-plus"></i>
                    Add Stock
                  </button>
                </div>
                <div className=" flex">
                  <div className="w-full h-full  mx-auto rounded-[10px] border border-[#0099dd]   relative">
                    <div className="box-border border-[#0099dd] relative overflow-hidden  w-full">
                      <div className="sticky top-0 flex  bs-mix-green border-[#0099dd] w-full overflow-hidden">
                        <div className="flex justify-center text-center gap-[7px] py-[10px] border-r border-b border-[#0099dd]  items-center px-3 min-w-[4%] max-w-[4%]">
                          <input
                            type="checkbox"
                            id="check-all"
                            style={{ width: "15px", height: "15px" }}
                          />
                          <p className="w-fit  md11:text-[14px] md150:text-[18px] font-[600] text-[#000]  font-Poppins">
                            Sr.
                          </p>
                        </div>

                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#0099dd]  px-3 min-w-[15%] max-w-[88%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Carat
                          </p>
                        </div>
                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#0099dd]  px-3 min-w-[15%] max-w-[88%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Metal
                          </p>
                        </div>
                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#0099dd] px-3 min-w-[14%] max-w-[88%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Category
                          </p>
                        </div>
                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#0099dd] px-3 min-w-[11%] max-w-[15%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000] ">
                            G.Weight
                          </p>
                        </div>

                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#0099dd]  px-3 min-w-[11%] max-w-[14%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            L.Weight
                          </p>
                        </div>
                        <div className="flex justify-center text-center py-2 border-b border-[#0099dd]  px-3 min-w-[10%] max-w-[10%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            N.Weight
                          </p>
                        </div>
                        <div className="flex justify-center text-center py-2 border-l border-b border-[#0099dd]  px-3 min-w-[10%] max-w-[10%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Fine Weight
                          </p>
                        </div>
                        <div className="flex justify-center text-center py-2 border-l border-b border-[#0099dd]  px-3 min-w-[10%] max-w-[10%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Wastage
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between overflow-hidden">
                        <div className="flex justify-center items-center text-center py-[10px] border-r border-b border-[#0099dd]  gap-[7px] px-3 min-w-[4%] max-w-[4%]">
                          <input
                            type="checkbox"
                            style={{ width: "15px", height: "15px" }}
                            className="ml-[-25%]"
                          />
                          <p className="font-[600] md11:text-[15px] md150:text-[17px] md11:mt-[5%] md150:mt-[2%]">
                            1
                          </p>
                        </div>

                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#0099dd]  px-3 min-w-[15%] max-w-[88%]"></div>
                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#0099dd]  px-3 min-w-[15%] max-w-[88%]"></div>
                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#0099dd] px-3 min-w-[14%] max-w-[88%]">
                          <p className="md11:text-[14px] md150:text-[18px] font-[300]  font-Poppins"></p>
                        </div>
                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#0099dd] px-3 min-w-[11%] max-w-[15%]">
                          <p className="md11:text-[14px] md150:text-[18px] font-[300]  font-Poppins "></p>
                        </div>

                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#0099dd] px-3 min-w-[11%] max-w-[14%]">
                          <p className="md11:text-[14px] md150:text-[18px] font-[300]  font-Poppins "></p>
                        </div>
                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#0099dd] px-3 min-w-[10.1%] max-w-[14%]">
                          <p className="md11:text-[14px] md150:text-[18px] font-[300]  font-Poppins "></p>
                        </div>
                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#0099dd] px-3 min-w-[10%] max-w-[14%]">
                          <p className="md11:text-[14px] md150:text-[18px] font-[300]  font-Poppins "></p>
                        </div>
                        <div className="flex justify-start md11:items-center text-center py-[10px]  border-b border-[#0099dd] px-3 min-w-[10%] max-w-[14%]">
                          <p className="md11:text-[14px] md150:text-[18px] font-[300]  font-Poppins "></p>
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
        <ModalContent className="md:max-w-[760px] max-w-[760px] relative  rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[460px]  ">
          {(handleModalclose) => (
            <>
              <div className="relative w-[100%] h-[100%] ">
                <div className="relative  w-[100%] h-[100%]">
                  <div className="w-[100%] flex  flex-col">
                    <div
                      className=" absolute  flex gap-[5px] items-center cursor-pointer py-[5px] border-b-[1px] border-l-[1px] border-red rounded-bl-[8px] px-[5px] right-0"
                      onClick={handleStockModalClose}
                    >
                      <i className=" text-[20px] text-[red] shadow-delete-icon rounded-full fa-solid fa-circle-xmark"></i>
                      <p className=" font-Poppins">Close</p>
                    </div>
                    <div className=" flex flex-col mt-[10px]">
                      <div className=" mx-auto  text-[#081a21] justify-center flex text-[28px] font-[500]  font-Poppins ">
                        <p>Add Stock</p>
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

                    <div className=" flex justify-between  px-[25px] mt-[30px] w-[100%]">
                      <div className="flex w-[100%] flex-col gap-[25px]">
                        <div className=" flex w-[100%]  gap-[30px]">
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
                                  className="absolute top-[90%]  mt-1 bg-white w-[290px] border border-[#dedede] rounded-lg shadow-md z-10"
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
                        </div>
                        <div className=" flex w-[100%]  gap-[30px]">
                          <div
                            ref={dropdownCategoryRef}
                            className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]"
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
                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                            <label
                              htmlFor="email"
                              className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                            >
                              G .Weight
                            </label>
                            <input
                              type="Number"
                              placeholder="Enter Gross Weight"
                              className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                              autocomplete="naqsme"
                            />
                          </div>
                        </div>
                        <div className=" flex w-[100%]  gap-[30px]">
                          <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                            <label
                              htmlFor="email"
                              className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                            >
                              L .Weight
                            </label>
                            <input
                              type="Number"
                              placeholder="Enter Less Weight"
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
                  <button className=" flex justify-center mt-[40px] items-center text-[#fff] py-[5px] text-[23px]  rounded-md font-Poppins w-[93%] mx-auto bs-spj">
                    Add Stock
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
