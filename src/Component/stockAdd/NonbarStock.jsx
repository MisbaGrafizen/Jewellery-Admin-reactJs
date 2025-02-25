import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle } from "lucide-react"

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import {
  deleteCategoryAction,
  deleteGroupItemAction,
  deleteMetalAction,
  deleteNonBarcodeCategoryAction,
  deleteNonBarcodeProductAction,
  getAllNonBarcodeProductAction,
  getnonBarcodeCategroyAction,
} from "../../redux/action/landingManagement";
import { useNavigate } from "react-router-dom";
import { getMarketRateAction } from "../../redux/action/generalManagement";
export default function NonbarStock() {
  const [isOpen, setIsOpen] = useState(false);
  const [deletemodalopen, setDeletemodalOpen] = useState(false);
  const [stockModalopen, setStockModalOpen] = useState(false);
  const [ProductNameFocused, setProductNameFocused] = useState(false);
  const [ProductPcsFocused, setProductPcsFocused] = useState(false);
  const [netWeghtFocused, setNetWeightFocused] = useState(false);
  const [totalWeghtFocused, setTotalWeightFocused] = useState(false);
  const [deleteType, setDeleteType] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [isMounted, setIsMounted] = useState(false)
  const [dropdownOpenMetal, setDropdownOpenMetal] = useState(false);
  const [selectedTypeMetal, setSelectedTypeMetal] = useState("");
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [selectedTypeCategory, setSelectedTypecategory] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [productName, setProductName] = useState("");
  const [pcs, setPcs] = useState("");
  const [netWeight, setNetWeight] = useState("");
  const [toWeight, setToWeight] = useState("");
  const [caratFocused, setCaratFocused] = useState(false);
  const [metalFocused, setMetalFocused] = useState(false);
  const [categoryFocused, setCategoryFocused] = useState(false);
  const [deleteContext, setDeleteContext] = useState(null);
  const [caratIdToDelete, setCaratIdToDelete] = useState(null);
  const [selectedmodalopen, setModalOpen] = useState(false);
  const [carat, setCarat] = useState([]);
  const [items, setItems] = useState([]);


  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.landing.getAllCategory);
  const metals = useSelector((state) => state.landing.getMetal);
  const item = useSelector((state) => state?.landing?.getNonBarcodeCategory);
  const products = useSelector((state) => state.landing?.getNonBarcodeProduct);

  console.log('productssdf', products)

  useEffect(() => {
    dispatch(getAllNonBarcodeProductAction());
  }, [dispatch]);

  const navigate = useNavigate()


  const addnonbarstock = () => {
    navigate("/nonbarcode-stock")
  }

  const handleSelect = (type) => {
    setSelectedType(type);
    setDropdownOpen(false);
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
      } else if (deleteContext === "item") {
        success = await dispatch(deleteGroupItemAction(caratIdToDelete));
        if (success) {
          setItems((prev) =>
            prev.filter((item) => item._id !== caratIdToDelete)
          );
        }
        window.location.reload();
      } else if (deleteContext === "stock") {
        success = await dispatch(deleteNonBarcodeProductAction(caratIdToDelete));
        if (success) {
          dispatch(getAllNonBarcodeProductAction());
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

  const handleModalclose = () => {
    setModalOpen(false);
    setCaratIdToDelete(null);
  };


  const handleDeleteOpen = (type, id) => {
    setDeleteType(type);
    setDeleteId(id);
    setDeletemodalOpen(true);
  };

  const handleOpenDeleteModal = (context, id) => {
    setDeleteContext(context);
    setCaratIdToDelete(id);
    setModalOpen(true);
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
        ? `https://server.grafizen.in/api/v2/spj/admin/non-barcode/product/${selectedStock._id}` // URL for PUT
        : "https://server.grafizen.in/api/v2/spj/admin/non-barcode/product"; // URL for POST

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
        // alert(
        //   selectedStock
        //     ? "Stock updated successfully!"
        //     : "Stock added successfully!"
        // );
        setIsOpen(true)
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
        resetForm();
        dispatch(getAllNonBarcodeProductAction());
        handleStockModalClose();
      } else {
        alert(
          result.message || "Failed to add/update stock. Please try again."
        );
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
  const deleteRef = useRef(null);
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
        const success = await dispatch(
          deleteNonBarcodeCategoryAction(deleteId)
        );
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





  //add data modal


  const onClose = () => {
    setIsOpen(false); // Close the modal
  };


  const onAdd = () => {
    setIsOpen(true); // Close the modal
  };
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        toggleModal("stockModalOpen", false);
        toggleModal("deleteModalOpen", false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isMounted) return null









  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the multiplier for speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
















  return (
    <>
      <div className="flex flex-col gap-[25px] w-[100%]">
        <div className="flex flex-col gap-[6px] w-[100%]">
          <div className=" flex  justify-end w-[100%]">
            <button
              className=" flex  w-[130px] font-Poppins items-center justify-center gap-[6px] py-[8px] rounded-[8px] text-[#fff] bs-spj "
              onClick={addnonbarstock}

            >
              <i className="fa-solid fa-plus"></i>
              Add Stock
            </button>
          </div>
          <div className=" flex">
            {/* <div className="w-full h-full  mx-auto rounded-[10px] border border-[#122f97]   relative">
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
                {products?.map((item, index) => (
                  <div key={index} className="flex justify-between overflow-hidden">
                    <div className="flex justify-center items-center text-center py-[10px] border-r border-b border-[#122f97] gap-[7px] px-3 min-w-[4%] max-w-[4%]">
                      <input
                        type="checkbox"
                        style={{ width: "15px", height: "15px" }}
                        className="ml-[-25%]"
                      />
                      <p className="font-[600] md11:text-[15px] md150:text-[17px] md11:mt-[5%] md150:mt-[2%]">{index + 1}</p>
                    </div>
                    <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]">{item?.groupId?.name}</div>
                    <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]">{item?.metalId?.metalName}</div>
                    <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[88%]">{item?.groupItemId?.itemName}</div>
                    <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[14%] max-w-[15%]">{item?.productName}</div>
                    <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[10%] max-w-[14%]">{item?.pcs}</div>
                    <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[10.1%] max-w-[14%]">{item?.netWeight}</div>

                    <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#122f97] px-3 min-w-[15%] max-w-[14%]">{item?.toWeight}</div>
                    <div className="flex justify-center gap-[10px] md11:items-center text-center py-[10px] border-b border-[#122f97] px-3 min-w-[5%] max-w-[14%]">
                      <i className="fa-solid text-[16px] cursor-pointer text-[#122f97] fa-pen-to-square"  onClick={() => handleStockModalEdit(item)}></i>
                      <i className="fa-solid text-[16px] cursor-pointer text-[#ff0c0c] fa-trash"   onClick={() => handleDeleteOpen("stock", item._id)}></i>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div

              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}



              className="bg-white max-w-[2000px]  w-[2000px] overflow-x-auto  mt-[10px] rounded-[10px]  shadow1-blue ">
              {/* Table Header */}
              <div className="  bg-white  w-[2600px]">
                <table className="w-full border-collapse  border-gray-300  font-Poppins">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 font-medium text-sm ">
                      <th className="py-3 px-2 flex text-left  border-gray-300">
                        <input
                          type="checkbox"
                          id="check-all"
                          className="w-4 ml-2 mb-[-4px] h-4"
                        />
                        <span className="ml-2 font-[500]">Sr.</span>
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Carat
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Category
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Product Name
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        To Weight
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Net Weight
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Fine Weight
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        G Rate
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        M Rate
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        M Rs
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        G Rs
                      </th>

                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Extra Rate
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        GME Amt
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        GST
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Amount
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Group
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Account
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Location
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Pcs
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        design
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        size
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Moti
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Stone
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Jadatr
                      </th>


                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        Action
                      </th>
                    </tr>
                    <tr className=" border-b text-gray-700 font-medium text-sm ">
                      <th className="py-3  px-2 text-left  border-gray-300">
                      
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[140px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[100px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>

                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />                      </th>
                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                      <input  className=" flex w-[80px] font-[500]" placeholder="Search..." type="text" />
                      </th>


                      <th className="py-3 px-4 text-center border-l  border-gray-300  font-[500] font-Poppins">
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((item, index) => {
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
                        <tr key={index} className="">
                          <td className="py-2 px-2 flex items-center  border-gray-300">
                            <input type="checkbox" className="w-4 h-4 mr-3  ml-[10px]" />
                            <span>{index + 1}</span>
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.groupId?.name}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.groupItemId?.itemName || "-"}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.productName || "-"}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.toWeight}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {netWeight}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {updatedFineWeight}
                          </td>
                          <td className="py-23px-4 text-center border-l  border-gray-300 text-[15px]  font-Poppins">
                            {item?.marketRateUsed || 0}
                          </td>
                          <td className="py-23px-4 text-center border-l  border-gray-300 text-[15px]  font-Poppins">
                            {item?.labour || 0}
                          </td>
                          <td className="py-23px-4 text-center border-l  border-gray-300 text-[15px]  font-Poppins">
                            {item?.labour || 0}
                          </td>   
                          <td className="py-23px-4 text-center border-l  border-gray-300 text-[15px]  font-Poppins">
                            {item?.calculatedMarketRate?.toFixed(2) || 0}
                          </td>
                          <td className="py-23px-4 text-center border-l  border-gray-300 text-[15px]  font-Poppins">
                            {item.extraRate || 0}
                          </td>
                          <td className="py-23px-4 text-center border-l  border-gray-300 text-[15px]  font-Poppins">
                            {item?.GMEPrice?.toFixed(2) || 0}
                          </td>
                          <td className="py-23px-4 text-center border-l  border-gray-300 text-[15px]  font-Poppins">
                            {item?.gst || 0}
                          </td>
                          <td className="py-23px-4 text-center border-l  border-gray-300 text-[15px]  font-Poppins">
                            {item?.finalPrice?.toFixed(2) || 0}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.group || "-"}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.account || 0}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.location || "-"}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.pcs || 1}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.design || "-"}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.size || 0}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.moti || 0}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.stone || 0}
                          </td>
                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            {item?.jadatr || 0}
                          </td>


                          <td className="py-3 px-4 text-center border-l border-gray-300 text-[15px]  font-Poppins">
                            <i
                              className="fa-solid fa-pen-to-square text-blue-500 cursor-pointer"

                            ></i>
                            <i
                              className="fa-solid fa-trash text-red-500 cursor-pointer ml-4"
                              onClick={() =>
                                handleOpenDeleteModal("stock", item?._id)
                              }
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


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
                    <div className=" mx-auto justify-center flex text-[60px] font-[500]   font-Poppins">
                      <p>Are you sure ?</p>
                    </div>
                    <div className="absolute bottom-0 flex w-[100%]">
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[red] rounded-bl-[10px] text-[#fff] font-[600]   font-Poppins text-[20px]"
                        onClick={handleDelete}
                      >
                        <p>Delete</p>
                      </div>
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[#26b955] rounded-br-[10px] text-[#fff] font-[600]   font-Poppins text-[20px]"
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
                                  ${productName || ProductNameFocused
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
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${pcs || ProductPcsFocused
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
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${netWeight || netWeghtFocused
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
                                className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${toWeight || totalWeghtFocused
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


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#9b9b9b] bg-opacity-50 backdrop-blur-sm"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center relative justify-center min-h-screen px-4 text-center">
              <motion.div
                initial={{ scale: 0.5, rotateX: 90 }}
                animate={{ scale: 1, rotateX: 0 }}
                exit={{ scale: 0.5, rotateX: -90 }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
                className="inline-block w-full relative max-w-md p-6 my-8 overflow-hidden text-left align-middle bg-gradient-to-br bg-white shadow-xl rounded-2xl transform"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#122f97] to-[#02124e]"></div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-4"
                >
                  <CheckCircle className="w-16 h-16 text-[#122f97]" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-[500]  font-Poppins  leading-6 text-center text-[#122f97] mb-2"
                  id="modal-title"
                >
                  Stock {selectedStock ? "Update" : " Added"} successfully!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center font-[400] font-Poppins  text-[#122f97] mb-4"
                >
                  Your information has been successfully saved to our database.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 flex justify-center"
                >
                  <button
                    onClick={onClose}
                    className="inline-flex font-Poppins justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#122f97] to-[#0c288c] border border-transparent rounded-mdfocus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                  >
                    Close
                  </button>
                </motion.div>
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-[#122f97] hover:text-[#343fa0] transition-colors duration-200"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
