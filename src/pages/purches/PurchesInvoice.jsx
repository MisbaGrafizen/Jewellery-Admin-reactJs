import { useEffect, useRef, useState } from "react";
import SideBar from "../../Component/sidebar/SideBar";
import Header from "../../Component/header/Header";
import { motion, AnimatePresence } from "framer-motion";
import { DatePicker } from "antd";
import { Check } from "lucide-react";
import { Plus, Scan, Pencil } from "lucide-react";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomerAction } from "../../redux/action/userManagement";
import { ApiGet, ApiPost } from "../../helper/axios";
import { getCompanyInfoAction } from "../../redux/action/generalManagement";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

import { X, CheckCircle } from "lucide-react"

export default function PurchesInvoice() {
  const [products, setProducts] = useState([]);
  const [nameFocused, setNameFocused] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedType, setSelectedType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const createdropdownRef = useRef(null);
  const [createselectedType, setCreateSelectedType] = useState("");
  const [createdropdownOpen, setCreateDropdownOpen] = useState(false);
  const firmdropdownRef = useRef(null);
  const [firmselectedType, setFirmSelectedType] = useState("");
  const [firmdropdownOpen, setFirmDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [gstFocused, setGstFocused] = useState(false);
  const [panFocused, setPanFocused] = useState(false);
  const [stateFocused, setStateFocused] = useState(false);
  const [addressFocused, setAddressFocused] = useState(false);
  const [partyModalopen, setPartyModalOpen] = useState(false);
  const [discountInFocused, setDiscountInFocused] = useState(false);
  const [outFocused, setOutocused] = useState(false);
  const [groupFocused, setGroupFocused] = useState(false);
  const [firmFocused, setFirmFocused] = useState(false);
  const [partyNameFocused, setPartyNameFocused] = useState(false);
  const [partyStateFocused, setPartyStateNameFocused] = useState(false);
  const [partyCityFocused, setPartyCityFocused] = useState(false);
  const [partyAddressFocused, setPartyAddressFocused] = useState(false);
  const [partyPinFocused, setPartyPinFocused] = useState(false);
  const [partyGstFocused, setPartyGstFocused] = useState(false);
  const [partyPanFocused, setPartyPanFocused] = useState(false);
  const [partyEmailFocused, setPartyEmailFocused] = useState(false);
  const [partyNumberFocused, setPartyNumberFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [createdInvoiceId, setCreatedInvoiceId] = useState(null);

  const [address, setAddress] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [userState, setUserState] = useState("");

  const [totals, setTotals] = useState({
    grossQty: 0,
    netQty: 0,
    amount: 0,
  });

  const navigate = useNavigate();

  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [totalTaxAmount, setTotalTaxAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [customerId, setCustomerId] = useState(null);

  const [formData, setFormData] = useState({
    partyGroup: "",
    name: "",
    address: "",
    GST: "",
    panNo: "",
    firmType: "",
    state: "",
    city: "",
    pinCode: "",
    mobileNumber: "",
    email: "",
  });

  const dispatch = useDispatch();

  const customers = useSelector((state) => state?.users?.getCustomer);
  const companyInfo = useSelector((state) => state?.general?.getCompanyInfo);
  const productNameInputRefs = useRef([]);

  useEffect(() => {
    dispatch(getAllCustomerAction());
    dispatch(getCompanyInfoAction());
  }, [dispatch]);

  console.log("companyInfo", companyInfo);
  const handlePartyModal = () => {
    setPartyModalOpen(true);
  };

  const closePartyModal = () => {
    setPartyModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        createdropdownRef.current &&
        !createdropdownRef.current.contains(event.target)
      ) {
        setCreateDropdownOpen(false);
      }
      if (
        firmdropdownRef.current &&
        !firmdropdownRef.current.contains(event.target)
      ) {
        setFirmDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [checkedItems, setCheckedItems] = useState({
    grossQty: false,
    netQty: false,
    discount: false,
    rate: false,
    tcs: false,
  });

  const handleChange = (name) => {
    setCheckedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      fetchProductByBarcode(e.target.value.trim(), index);
    }
  };
  const fetchUserDetails = async (userName) => {
    try {
      const response = await ApiGet(`/admin/customer-by-name/${userName}`);
      console.log("response", response);
      const userData = response.data?.data || response.data;

      setAddress(userData.address || "");
      setGstNumber(userData.GST || "");
      setPanNumber(userData.panNo || "");
      setUserState(userData.state || "");

      setAddressFocused(Boolean(userData.address));
      setGstFocused(Boolean(userData.GST));
      setPanFocused(Boolean(userData.panNo));
      setStateFocused(Boolean(userData.state));
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedType(user.name);
    setCustomerId(user._id);
    setDropdownOpen(false);
    fetchUserDetails(user.name);
  };

  const fetchProductByBarcode = async (barcodeValue, productIndex) => {
    try {
      const response = await ApiGet(`/admin/product/${barcodeValue}`);
      const productData = response.product || {};
      console.log("Fetched Product Data:", productData);

      setProducts((prevProducts) =>
        prevProducts.map((product, index) =>
          index === productIndex
            ? {
                ...product,
                ...productData,
                barcodeVisible: false,
                groupItemId: productData.groupItemId || { itemName: "N/A" },
                toWeight: productData.toWeight || "0",
                netWeight: productData.netWeight || "0",
                totalPrice: productData.totalPrice || "0",
              }
            : product
        )
      );

      // Update totals
      setTotals((prevTotals) => ({
        grossQty: prevTotals.grossQty + parseFloat(productData.toWeight || 0),
        netQty: prevTotals.netQty + parseFloat(productData.netWeight || 0),
        amount: prevTotals.amount + parseFloat(productData.totalPrice || 0),
      }));
    } catch (error) {
      console.error("Error fetching product by barcode:", error);
    }
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      barcodeVisible: true, // Show input for barcode
      groupItemId: { itemName: "" }, // Placeholder for product name
      toWeight: "",
      netWeight: "",
      totalPrice: "",
    };
    setProducts([...products, newProduct]);

    setTimeout(() => {
      const inputRef = productNameInputRefs.current[products.length];
      if (inputRef) {
        inputRef.focus();
      }
    }, 0);
  };

  const handleDiscountKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
      console.log("Current totals:", totals);
      console.log("Discount Percentage:", discountPercentage);

      const totalPrice = totals.amount || 0;
      calculateTax(totalPrice, discountPercentage);
    }
  };

  const calculateTax = (totalPrice = 0, discountPercentage = 0) => {
    console.log("totalPrice:", totalPrice);
    console.log("discountPercentage:", discountPercentage);

    const discountAmount = (totalPrice * discountPercentage) / 100;
    const discountPrice = totalPrice - discountAmount;
    const calculatedCgst = (discountPrice * 1.5) / 100;
    const calculatedSgst = (discountPrice * 1.5) / 100;
    const totalTax = calculatedCgst + calculatedSgst;

    const finalPrice = discountPrice + totalTax;

    setCgst(calculatedCgst);
    setSgst(calculatedSgst);
    setTotalTaxAmount(calculatedCgst + calculatedSgst);
    setDiscountAmount(discountAmount);
    setDiscountPrice(discountPrice);
    setFinalTotal(finalPrice);

    console.log("discountPrice", discountPrice);
    console.log("Discount Amount:", discountAmount);
    console.log("Final Price:", finalPrice);

    const invoiceData = {
      totalPrice,
      discountPercentage,
      discountAmount,
      discountPrice,
      cgst: calculatedCgst,
      sgst: calculatedSgst,
      totalTax,
      finalPrice,
    };

    console.log("Calculated Invoice Data:", invoiceData);
    return invoiceData;
  };

  const handleSaveInvoice = async () => {
    try {
      const {
        discountAmount,
        discountPrice,
        calculatedCgst,
        calculatedSgst,
        totalTax,
        finalPrice,
      } = calculateTax(totals.amount || 0, discountPercentage || 0);

      const payload = {
        customerId,
        products: products.map((product) => ({
          productId: product?.groupItemId?._id,
          hsnCode: product?.hsn || 0,
          gstRate: product?.gstRate || 0,
          grossQty: product?.toWeight || 0,
          netQty: product?.netWeight || 0,
          rate: product?.extraRate || 0,
          totalPrice: product?.totalPrice || 0,
        })),
        billType: "estimate",
        billNo: Date.now(),
        date: selectedDate,
        discount: discountPercentage || 0,
        discountAmount: discountAmount,
        discountPrice: discountPrice,
        cgstAmount: calculatedCgst,
        sgstAmount: calculatedSgst,
        gstAmount: totalTax,
        totalPrice: finalPrice,
        companyId: companyInfo?.[0]?._id,
        paymentType: "cash",
      };

      const response = await ApiPost("/admin/bill", payload);
      console.log("response", response);
      if (response.data.bill) {
        const createdInvoiceId = response.data.bill._id;
        setCreatedInvoiceId(createdInvoiceId);
        alert("Invoice created successfully!");
        navigate(`/invoice-bill/${createdInvoiceId}`);
      } else {
        alert("Failed to create invoice!");
      }
    } catch (error) {
      console.error("Error creating invoice:", error);
      alert("An error occurred while creating the invoice.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await ApiPost("/admin/customer", formData);
      console.log("response", response);
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false);
    }, 2000);
    

      // Reset form and close modal
      setFormData({
        partyGroup: "",
        name: "",
        address: "",
        GST: "",
        panNo: "",
        firmType: "",
        state: "",
        city: "",
        pinCode: "",
        mobileNumber: "",
        email: "",
      });
      closePartyModal(); // Close the modal
    } catch (error) {
      console.error("Error creating party:", error);
      alert("Failed to create party. Please try again.");
    }
  };


  const onClose = () => {
    setIsOpen(false); // Close the modal
  };


  return (
    <>
      <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Invoice" />
          <div className="flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className="flex w-[100%] max-h-[90%] pb-[50px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
              <div className="flex flex-col gap-[15px] w-[100%]">
                <div className=" w-[100%] ] flex-col gap-[15px] flex ">
                  <div className=" flex justify-between w-[100%] ">
                    <div className=" flex  font-Poppins text-[15px]">
                      <p>Quotation No:</p>
                      <p className="  font-[500] text-[#ff8000] ">
                        Q/20024-25/1
                      </p>
                    </div>
                    <div className=" flex  w-[200px]  items-center gap-[10px]">
                      <p className=" flex font-Poppins w-[50px]">Date :</p>
                      <div className=" flex  items-center">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          className=" flex  w-[100px] border"
                        />
                        <i className="fa-regular text-[#9c9c9c] fa-calendar-days"></i>
                      </div>
                    </div>
                  </div>

                  <div className=" w-[38%] flex   gap-[15px] border-[1px] relative bg-white shadow1-blue py-[15px]  px-[15px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] flex-col gap-[16px]">
                      <div
                        ref={dropdownRef}
                        className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                      >
                        <label
                          htmlFor="inname"
                          className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                            selectedType || nameFocused
                              ? "text-[#000] -translate-y-[21px] hidden "
                              : "text-[#8f8f8f] cursor-text flex"
                          }`}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="firmType"
                          id="inname"
                          value={selectedType}
                          className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                          readOnly
                          onFocus={() => setNameFocused(true)}
                          onBlur={() => setNameFocused(false)}
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
                            className="absolute  mt-[50px] bg-white w-[230px] border border-[#dedede] rounded-lg shadow-md z-10"
                          >
                            {customers.map((type, index) => (
                              <>
                                <div
                                  key={index}
                                  className="px-4 py-2 hover:bg-gray-100 font-Poppins cursor-pointer text-sm text-[#00000099]"
                                  onClick={() => handleSelectUser(type)}
                                >
                                  {type?.name}
                                </div>
                              </>
                            ))}
                            <div className=" flex w-[100%] p-[10px]">
                              <button
                                className=" flex w-[100%] items-center gap-[5px]  text-[13px] border-[#122f97] ts-spj rounded-[5px] font-Poppins border-[1px] font-[400]  justify-center py-[5px] border-dashed "
                                onClick={handlePartyModal}
                              >
                                <i className="fa-solid fa-plus"></i>Add Party
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="relative w-full  border-[1px] border-[#dedede]  h-[90px]  shadow rounded-lg flex items-center space-x-4 text-[#43414199]">
                        <label
                          htmlFor="address"
                          className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                            addressFocused
                              ? "text-[#000] -translate-y-[45px] hidden font-[]"
                              : "  -translate-y-[27px] flex cursor-text "
                          }`}
                        >
                          Address
                        </label>
                        <textarea
                          type="text"
                          name="address"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          onFocus={() => setAddressFocused(true)}
                          onBlur={(e) =>
                            setAddressFocused(e.target.value !== "")
                          }
                          autocomplete="nasme"
                          className="w-full outline-none text-[14px] pt-[10px]  h-[100%] font-Poppins font-[400] bg-transparent"
                        ></textarea>
                      </div>
                    </div>

                    <div className=" flex w-[90%] gap-[15px] flex-col ">
                      <div className="relative w-full border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="gst"
                          className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                            gstFocused
                              ? "text-[#000] -translate-y-[21px] hidden "
                              : "text-[#8f8f8f] cursor-text flex"
                          }`}
                        >
                          GST Number
                        </label>
                        <input
                          type="number"
                          name="GST"
                          id="gst"
                          value={gstNumber}
                          onChange={(e) => setGstNumber(e.target.value)}
                          onFocus={() => setGstFocused(true)}
                          onBlur={() => setGstFocused(false)}
                          autocomplete="nasme"
                          className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="pan"
                          className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                            panFocused
                              ? "text-[#000] -translate-y-[21px] hidden "
                              : "text-[#8f8f8f] cursor-text flex"
                          }`}
                          onClick={() =>
                            document.getElementById("number").setPanFocused()
                          }
                        >
                          PAN Number
                        </label>
                        <input
                          type="number"
                          name="panNo"
                          id="pan"
                          value={panNumber}
                          onChange={(e) => setPanNumber(e.target.value)}
                          onFocus={() => setPanFocused(true)}
                          onBlur={() => setPanFocused(false)}
                          autocomplete="nasme"
                          className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="state"
                          className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                            stateFocused
                              ? "text-[#000] -translate-y-[21px] hidden "
                              : "text-[#8f8f8f] cursor-text flex"
                          }`}
                          onClick={() =>
                            document.getElementById("number").setPanFocused()
                          }
                        >
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          value={userState}
                          onChange={(e) => setUserState(e.target.value)}
                          onFocus={() => setStateFocused(true)}
                          onBlur={() => setStateFocused(false)}
                          autocomplete="nasme"
                          className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" p-1">
                    <div className="flex flex-wrap items-center gap-6">
                      {/* Gross Qty Checkbox */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={checkedItems.grossQty}
                            onChange={() => handleChange("grossQty")}
                            className="sr-only peer"
                          />
                          <div className="w-[18px] h-[18px] border-[1px] border-gray-300 peer-checked:border-[#e77848] rounded transition-colors">
                            {checkedItems.grossQty && (
                              <Check
                                className="w-[15px] h-[15px] text-[#e77848]"
                                strokeWidth={2}
                              />
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-Poppins text-gray-600">
                          Gross Qty in gm
                        </span>
                      </label>

                      {/* Net Qty Checkbox */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={checkedItems.netQty}
                            onChange={() => handleChange("netQty")}
                            className="sr-only peer"
                          />
                          <div className="w-[18px] h-[18px] border-[1px] border-gray-300 peer-checked:border-[#e77848] rounded transition-colors">
                            {checkedItems.netQty && (
                              <Check
                                className="w-[15px] h-[15px] text-[#e77848]"
                                strokeWidth={2}
                              />
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-Poppins text-gray-600">
                          Net Qty in gm
                        </span>
                      </label>

                      {/* Discount Checkbox */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={checkedItems.discount}
                            onChange={() => handleChange("discount")}
                            className="sr-only peer"
                          />
                          <div className="w-[18px] h-[18px] border-[1px] border-gray-300 peer-checked:border-[#e77848] rounded transition-colors">
                            {checkedItems.discount && (
                              <Check
                                className="w-[15px] h-[15px] text-[#e77848]"
                                strokeWidth={2}
                              />
                            )}
                          </div>
                        </div>
                        <span className="text-sm  font-Poppins text-gray-600">
                          Discount
                        </span>
                      </label>

                      {/* Rate Checkbox */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={checkedItems.rate}
                            onChange={() => handleChange("rate")}
                            className="sr-only peer"
                          />
                          <div className="w-[18px] h-[18px] border-[1px] border-gray-300 peer-checked:border-[#e77848] rounded transition-colors">
                            {checkedItems.rate && (
                              <Check
                                className="w-[15px] h-[15px] text-[#e77848]"
                                strokeWidth={2}
                              />
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 font-Poppins">
                          Rate
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="bg-white w-[100%]  rounded-lg shadow1-blue ">
                    {/* Table Header */}
                    <div className="overflow-x-auto bg-white rounded-lg w-[100%]">
                      <table className="w-[100%]">
                        <thead>
                          <tr className="bg-[#f0f1f364]">
                            <th className="py-4 px-2 text-left   text-[13px] font-medium font-Poppins text-gray-600 w-20 border-r border-gray-200">
                              Sr. No.
                            </th>
                            <th className="py-4 px-2 text-center text-[13px] font-medium font-Poppins text-gray-600 border-r border-gray-200">
                              Product Description
                            </th>
                            <th className="py-4 px-2 text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200">
                              HSN/SAC
                            </th>
                            <th className="py-4 px-2 text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200">
                              GST rate
                            </th>
                            <th className="py-4 px-2 text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200">
                              Gross Qty in gm
                            </th>
                            <th className="py-4 px-2 text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200">
                              Net Qty in gm
                            </th>
                            <th className="py-4 px-2 text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200">
                              Rate
                            </th>
                            <th className="py-4 px-2 text-center text-[13px] font-medium font-Poppins text-gray-600 w-32">
                              Amount(₹)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product, index) => (
                            <tr
                              key={product.id}
                              className="border-t border-gray-200"
                            >
                              <td className="py-2 px-4 text-sm text-gray-600 font-Poppins border-r border-gray-200">
                                {index + 1}
                              </td>
                              <td className="py-2 px-4 border-r font-Poppins  border-gray-200">
                                {product.barcodeVisible ? (
                                  <input
                                    type="text"
                                    ref={(el) =>
                                      (productNameInputRefs.current[index] = el)
                                    }
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="w-full border-0 outline-none font-Poppins focus:ring-0 text-sm"
                                    autoFocus
                                  />
                                ) : (
                                  product?.groupItemId?.itemName
                                )}
                              </td>
                              <td className="py-2 px-4 border-r font-Poppins  border-gray-200">
                                {product.hsn || 0}
                              </td>
                              <td className="py-2 px-4 border-r font-Poppins  border-gray-200">
                                {product.gstRate || 0}%
                              </td>
                              <td className="py-2 px-4 border-r font-Poppins  border-gray-200">
                                {/* <input
                                  type="number"
                                  className="w-full border-0  outline-none font-Poppins focus:ring-0 text-sm"
                                  placeholder="0.00"
                                /> */}
                                {product?.toWeight || 0}
                              </td>
                              <td className="py-2 px-4 border-r font-Poppins  border-gray-200">
                                {/* <input
                                  type="number"
                                  className="w-full border-0  outline-none font-Poppins focus:ring-0 text-sm"
                                  placeholder="0.00"
                                /> */}
                                {product?.netWeight || 0}
                              </td>
                              <td className="py-2 px-4 border-r font-Poppins  border-gray-200">
                                {/* <input
                                  type="number"
                                  className="w-full border-0  outline-none font-Poppins focus:ring-0 text-sm"
                                  placeholder="0.00"
                                /> */}
                                {product?.extraRate || 0}
                              </td>
                              <td className="py-2 font-Poppins  px-4">
                                {/* <input
                                  type="number"
                                  className="w-full border-0  outline-none font-Poppins focus:ring-0 text-sm"
                                  placeholder="0.00"
                                /> */}
                                {product?.totalPrice || 0}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* <div className="px-4 py-3 w-[100%] relative flex justify-between items-center">
                        <input
                          type="text"
                          value={barcode}
                          onChange={(e) => setBarcode(e.target.value)}
                          onKeyDown={handleBarcodeInput}
                          placeholder="Enter Barcode"
                          className="w-[70%] mr-4 py-2 px-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-Poppins"
                        />
                      </div> */}

                      <div className="px-4 py-3  w-[100%] relative flex  justify-between items-center">
                        <button
                          onClick={handleAddProduct}
                          className="w-[80%] mr-4 py-2 font-Poppins border-[1.5px] border-dashed border-[#60A5FA] text-[#60A5FA] rounded-sm hover:bg-blue-50 transition-colors"
                        >
                          ADD PRODUCT
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 text-[#60A5FA] bg-blue-50 rounded-[4px] transition-colors">
                          <Scan className="w-5 h-5" />
                          <span className=" font-Poppins">Scan Barcode</span>
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Total Row */}

                      <table className="w-[100%]">
                        <thead>
                          <tr className="bg-[#F9FAFB]">
                            <th className="text-left   text-[13px] font-medium font-Poppins text-gray-600 w-20 border-r border-gray-200"></th>
                            <th className="text-center text-[13px] font-medium font-Poppins text-gray-600 border-r border-gray-200"></th>
                            <th className="text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200"></th>
                            <th className="text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200"></th>
                            <th className="text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200"></th>
                            <th className="text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200"></th>
                            <th className="text-center text-[13px] font-medium font-Poppins text-gray-600 w-32 border-r border-gray-200"></th>
                            <th className="text-center text-[13px] font-medium font-Poppins text-gray-600 w-32"></th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr className="border- border-gray-200 bg-[#f0f1f364]">
                            <td className="py-3 px-2 text-sm  font-Poppins font-medium text-gray-600 border-r border-gray-200">
                              Total ₹
                            </td>
                            <td className="border-r border-gray-200"></td>
                            <td className="border-r border-gray-200"></td>
                            <td className="border-r border-gray-200"></td>
                            <td className="py-3 px-4 font-Poppins text-[17px] text-gray-600 border-r border-gray-200">
                              {totals.grossQty.toFixed(2)}
                            </td>
                            <td className="py-3  font-Poppins px-4 text-[17px] text-gray-600 border-r border-gray-200">
                              {totals.netQty.toFixed(2)}
                            </td>
                            <td className="border-r  border-gray-200"></td>
                            <td className="py-3 px-4 font-Poppins text-[17px] text-gray-600">
                              {totals.amount.toFixed(2)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className=" flex w-[100%]  justify-between gap-[20px]  mt-[19px] mb-[20px]">
                    <div className="flex w-[50%]  flex-col gap-[15px] ">
                      <div className="bg-white  w-[100%] rounded-lg shadow1-blue  ">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr>
                                <th className="py-2 font-Poppins px-4 text-left text-sm font-medium text-gray-600 border-r border-gray-200">
                                  HSN/SAC
                                </th>
                                <th className="py-2  font-Poppins px-4 text-left text-sm font-medium text-gray-600 border-r border-gray-200">
                                  Taxable Value
                                </th>
                                <th
                                  colSpan="2"
                                  className="border-r font-Poppins border-gray-200"
                                >
                                  <div className="py-2 font-Poppins px-4 text-left text-sm font-medium text-gray-600">
                                    Central Tax
                                  </div>
                                  <div className="flex border-t border-gray-200">
                                    <div className="py-2  font-Poppins px-4 text-left text-sm font-medium text-gray-600 w-1/2 border-r border-gray-200">
                                      Rate
                                    </div>
                                    <div className="py-2 font-Poppins px-4 text-left text-sm font-medium text-gray-600 w-1/2">
                                      Amount
                                    </div>
                                  </div>
                                </th>
                                <th
                                  colSpan="2"
                                  className="border-r font-Poppins border-gray-200"
                                >
                                  <div className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                                    State Tax
                                  </div>
                                  <div className="flex border-t border-gray-200">
                                    <div className="py-2 px-4 text-left text-sm font-medium text-gray-600 w-1/2 border-r border-gray-200">
                                      Rate
                                    </div>
                                    <div className="py-2 px-4 text-left text-sm font-medium text-gray-600 w-1/2">
                                      Amount
                                    </div>
                                  </div>
                                </th>
                                <th className="py-2 font-Poppins text-center px-4 text-left text-sm font-medium text-gray-600">
                                  Total
                                  <br />
                                  Tax Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t border-gray-200">
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4"></td>
                              </tr>
                              <tr className="bord border-gray-200">
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4"></td>
                              </tr>
                              <tr className="bord border-gray-200">
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4 border-r border-gray-200"></td>
                                <td className="py-6 px-4"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {companyInfo?.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-4">
                          {/* Bank Details Card */}
                          <div className="bg-white rounded-lg shadow1-blue p-[20px] relative">
                            <div className="flex justify-between items-start mb-2">
                              <h2 className="text-[#FF6B35] font-Poppins text-[16px] font-[400]">
                                Bank Details
                              </h2>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Pencil className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="space-y-[6px]">
                              <div className="flex  items-center  gap-[20px] justify-between">
                                <span className="text-[#000000] text-[14px] fnt-[300] font-Poppins">
                                  Account Name :
                                </span>
                                <span className="text-[#5d5b5b] text-[12px] fnt-[300] font-Poppins">
                                  {item?.holderName}
                                </span>
                              </div>
                              <div className="flex gap-[20px] justify-between items-center">
                                <span className="text-[#000000] text-[14px] fnt-[300] font-Poppins">
                                  Account No :
                                </span>
                                <span className="text-[#5d5b5b] text-[12px] fnt-[300] font-Poppins">
                                  {item?.accountNo}
                                </span>
                              </div>
                              <div className="flex  items-center  gap-[20px] justify-between">
                                <span className="text-[#000000] text-[14px] fnt-[300] font-Poppins">
                                  IFSC Code:
                                </span>
                                <span className="text-[#5d5b5b] text-[12px]  gap-[4px] flex fnt-[300] font-Poppins">
                                  {item?.IFSCCode}
                                </span>
                              </div>
                              <div className="flex gap-[20px] justify-between">
                                <span className="text-[#000000] text-[14px] fnt-[300] font-Poppins">
                                  Bank Name:
                                </span>
                                <div className="flex items-center gap-1">
                                  {/* <img
                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20at%209.49.54%E2%80%AFAM-bp4n5M7G0uw5Cl2JjhtVKuMn5vn970.png"
                                  alt="ICICI Bank"
                                  className="h-5 object-contain"
                                /> */}
                                  <span className="text-[#5d5b5b] text-[12px] fnt-[300] font-Poppins">
                                    {item?.bankName}
                                  </span>
                                </div>
                              </div>
                              <div className="flex  i  gap-[20px] justify-between">
                                <span className="text-[#000000] text-[14px] fnt-[300] font-Poppins">
                                  Address:
                                </span>
                                <span className="text-[#5d5b5b] text-right text-[12px] fnt-[300] font-Poppins">
                                  {item?.bankAddress}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Terms & Conditions Card */}
                          <div className="bg-white rounded-lg shadow1-blue p-[20px] relative">
                            <div className="flex justify-between items-start mb-[10px]">
                              <h2 className="text-[#FF6B35] font-Poppins text-[16px] font-[400]">
                                Term & Condition
                              </h2>
                              <button className="text-gray-400 hover:text-gray-600">
                                <Pencil className="w-4 h-4" />
                              </button>
                            </div>
                            <ol className="list-decimal list-outside ml-4 space-y-2">
                              <li className="text-[#5d5b5b] text-[12px] fnt-[300] font-Poppins">
                                {item?.terms}
                              </li>
                              {/* <li className="text-[#5d5b5b]  text-[12px] fnt-[300] font-Poppins">
                                Payment due in 7 days from invoice date.
                              </li> */}
                            </ol>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className=" flex w-[48%]">
                      <div className="bg-white  w-[100%]  rounded-lg  shadow1-blue p-6">
                        <div className="space-y-2">
                          {/* CGST */}
                          {/* Discount */}
                          <div className="flex items-center justify-between gap-4">
                            <label className="text-gray-600 font-Poppins text-lg font-medium">
                              Discount
                            </label>
                            <div className="flex-1 max-w-[320px] grid grid-cols-2 gap-4">
                              <div className="relative w-full border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                                <label
                                  htmlFor="indis"
                                  className={` absolute left-[13px] font-Poppins leading-3  px-[5px]  bg-[#fff] text-[13px]   transition-all duration-200 ${
                                    discountInFocused
                                      ? "text-[#000] -translate-y-[19px] hidden "
                                      : "text-[#8f8f8f] flex cursor-text"
                                  }`}
                                >
                                  Discount- in %
                                </label>
                                <input
                                  type="number"
                                  name="discount"
                                  id="indis"
                                  value={discountPercentage}
                                  onChange={(e) =>
                                    setDiscountPercentage(e.target.value)
                                  }
                                  onKeyDown={handleDiscountKeyPress}
                                  onFocus={() => setDiscountInFocused(true)}
                                  onBlur={() => setDiscountInFocused(false)}
                                  autocomplete="nasme"
                                  className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                                />
                              </div>
                              <div className="relative w-full border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                                <span
                                  className={` absolute left-[13px] font-Poppins leading-3  px-[5px]  bg-[#fff] text-[13px]   transition-all duration-200 ${
                                    discountAmount || outFocused
                                      ? "text-[#000] -translate-y-[21px] "
                                      : "text-[#000000] -translate-y-[21px] "
                                  }`}
                                >
                                  Discount- Out ₹
                                </span>
                                {/* <input
                                  type="number"
                                  name="gstNumber"
                                  id="number"
                                  onFocus={() => setGstFocused(true)}
                                  onBlur={() => setGstFocused(false)}
                                  autocomplete="nasme"
                                  className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                                /> */}
                                <p
                                  onFocus={() => setOutocused(true)}
                                  onBlur={() => setOutocused(false)}
                                >
                                  {discountAmount.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <label className="text-gray-600 font-Poppins text-lg font-medium">
                              CGST
                            </label>
                            <div className="flex-1 max-w-[320px]">
                              <div className=" relative w-full font-Poppins px-[15px] h-10 border-[1px]  border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                <p>{cgst.toFixed(2)}</p>
                              </div>
                            </div>
                          </div>

                          {/* SGST */}
                          <div className="flex items-center justify-between gap-4">
                            <label className="text-gray-600 font-Poppins text-lg font-medium">
                              SGST
                            </label>
                            <div className="flex-1 max-w-[320px]">
                              <div className=" relative w-full h-10 border-[1px]   font-Poppins px-[15px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                <p>{sgst.toFixed(2)}</p>
                              </div>
                            </div>
                          </div>

                          {/* IGST */}
                          <div className="flex items-center justify-between gap-4">
                            <label className="text-gray-600 font-Poppins text-lg font-medium">
                              IGST
                            </label>
                            <div className="flex-1 max-w-[320px]">
                              <div className=" relative w-full h-10 border-[1px]  font-Poppins px-[15px]  border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                <p></p>
                              </div>
                            </div>
                          </div>

                          {/* Total Tax Amount */}
                          <div className="flex items-center justify-between gap-4">
                            <label className="text-gray-600 font-Poppins text-lg font-medium">
                              Total Tax Amount
                            </label>
                            <div className="flex-1 max-w-[320px]">
                              <div className=" relative w-full h-10 border-[1px]  font-Poppins px-[15px]  border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                <p>{totalTaxAmount.toFixed(2)}</p>
                              </div>
                            </div>
                          </div>

                          {/* TCS Checkbox */}
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <div className="relative flex items-center justify-center">
                                  <input
                                    type="checkbox"
                                    checked={checkedItems.tcs}
                                    onChange={() => handleChange("tcs")}
                                    className="sr-only peer"
                                  />
                                  <div className="w-[18px] h-[18px] border-[1px] border-gray-300 peer-checked:border-[#e77848] rounded transition-colors">
                                    {checkedItems.tcs && (
                                      <Check
                                        className="w-[15px] h-[15px] text-[#e77848]"
                                        strokeWidth={2}
                                      />
                                    )}
                                  </div>
                                </div>
                                <span className="text-gray-600 font-Poppins text-lg font-medium">
                                  TCS 206C(1H) @0.1%
                                </span>
                              </label>
                            </div>
                            <div className="flex-1 max-w-[320px]">
                              <div className=" relative w-full h-10 border-[1px]  font-Poppins px-[15px]  border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                <p></p>
                              </div>
                            </div>
                          </div>

                          {/* Round Off */}
                          <div className="flex items-center justify-between gap-4">
                            <label className="text-gray-600 font-Poppins text-lg font-medium">
                              Round Off
                            </label>
                            <div className="flex-1 max-w-[320px]">
                              <div className=" relative w-full h-10 border-[1px]  border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                <p></p>
                              </div>
                            </div>
                          </div>

                          {/* Total Amount */}
                          <div className="flex items-center justify-between gap-4">
                            <label className="text-[#FF6B35] text-gray-600 font-Poppins text-lg font-medium">
                              TOTAL AMOUNT
                            </label>
                            <div className="flex-1 max-w-[320px]">
                              <div className=" relative w-full h-10 border-[1px]  font-Poppins px-[15px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer">
                                <p>{finalTotal.toFixed(2)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className=" bs-spj  font-[500] font-Poppins text-[#fff] rounded-[8px] py-[5px] justify-center  text-[18px] mx-auto mt-[10px] flex w-[120px]"
                    onClick={handleSaveInvoice}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextUIModal isOpen={partyModalopen}>
        <ModalContent className="md:max-w-[760px] max-w-[740px] shadow-none relative  bg-transparent rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[510px]  ">
          <>
            <div className="relative w-[100%] max-w-[730px] mt-[10px]   bg-white  rounded-2xl z-[100] flex justify-center !py-0 mx-auto  h-[96%]">
              <div
                className=" absolute right-[-13px]  top-[-13px]  flex gap-[5px]  z-[300] items-center cursor-pointer py-[5px]  border-red rounded-bl-[8px] px-[5px]"
                onClick={closePartyModal}
              >
                <i className=" text-[30px] text-[red] shadow-delete-icon bg-white   rounded-full fa-solid fa-circle-xmark"></i>
              </div>
              <div className=" flex flex-col gap-[15px] w-[100%]  p-[25px]  ">
                <div>
                  <h1 className=" flex  font-[600] font-Poppins text-[24px]">
                    Create New Party
                  </h1>
                </div>
                <div className="  flex w-[100%] gap-[15px]">
                  <div className=" flex w-[50%] flex-col gap-[16px]">
                    <div
                      ref={createdropdownRef}
                      className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer"
                      onClick={() => setCreateDropdownOpen((prev) => !prev)} // Toggle dropdown on click
                    >
                      <span
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          createselectedType || groupFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f]"
                        }`}
                      >
                        Party Group
                      </span>
                      <input
                        type="text"
                        name="firmType"
                        id="type"
                        value={createselectedType}
                        className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                        readOnly
                        onFocus={() => setGroupFocused(true)}
                        onBlur={() => setGroupFocused(false)}
                      />
                      <i
                        className={
                          createdropdownOpen
                            ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                            : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                        }
                      ></i>
                    </div>

                    <AnimatePresence>
                      {createdropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute  mt-[50px] bg-white w-[330px] border border-[#dedede] rounded-lg shadow-md z-10"
                        >
                          {[
                            "Sole Proprietorship",
                            "Partnership",
                            "LLC",
                            "Corporation",
                          ].map((type, index) => (
                            <>
                              <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 font-Poppins cursor-pointer text-sm text-[#00000099]"
                                onClick={() => {
                                  setCreateSelectedType(type);
                                  setCreateDropdownOpen(false);
                                }}
                              >
                                {type}
                              </div>
                            </>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="relative w-full border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <lavel
                        htmlFor="partyName"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyNameFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f]"
                        }`}
                      >
                        Party Name
                      </lavel>
                      <input
                        type="text"
                        name="name"
                        id="partyName"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setPartyNameFocused(true)}
                        onBlur={() => setPartyNameFocused(false)}
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full  border-[1px] border-[#dedede]  h-[97px]  shadow rounded-lg flex items-center space-x-4 text-[#43414199]">
                      <span
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyAddressFocused
                            ? "text-[#000] -translate-y-[48px] font-[]"
                            : "  -translate-y-[27px] "
                        }`}
                      >
                        Address
                      </span>
                      <textarea
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        onFocus={() => setPartyAddressFocused(true)}
                        onBlur={(e) =>
                          setPartyAddressFocused(e.target.value !== "")
                        }
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] pt-[10px]  h-[100%] font-Poppins font-[400] bg-transparent"
                      ></textarea>
                    </div>
                    <div className="relative w-full border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <lavel
                        htmlFor="gstNumber"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyGstFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f]"
                        }`}
                      >
                        GST Number
                      </lavel>
                      <input
                        type="number"
                        name="GST"
                        id="gstNumber"
                        value={formData.GST}
                        onChange={handleInputChange}
                        onFocus={() => setPartyGstFocused(true)}
                        onBlur={() => setPartyGstFocused(false)}
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="PanParty"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyPanFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f] cursor-text"
                        }`}
                      >
                        PAN Number
                      </label>
                      <input
                        type="number"
                        name="panNo"
                        id="PanParty"
                        value={formData.panNo}
                        onChange={handleInputChange}
                        onFocus={() => setPartyPanFocused(true)}
                        onBlur={() => setPartyPanFocused(false)}
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                  </div>

                  <div className=" flex w-[50%] gap-[16px] flex-col ">
                    <div
                      ref={firmdropdownRef}
                      className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer"
                      onClick={() => setFirmDropdownOpen((prev) => !prev)} // Toggle dropdown on click
                    >
                      <label
                        htmlFor="selectFirm"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          firmselectedType || firmFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f]"
                        }`}
                      >
                        Firm Type
                      </label>
                      <input
                        type="text"
                        name="firmType"
                        id="selectFirm"
                        value={firmselectedType}
                        className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                        readOnly
                        onFocus={() => setFirmFocused(true)}
                        onBlur={() => setFirmFocused(false)}
                      />
                      <i
                        className={
                          firmdropdownOpen
                            ? "fa-solid fa-chevron-up text-[14px] pr-[10px]"
                            : "fa-solid fa-chevron-down text-[14px] pr-[10px]"
                        }
                      ></i>
                    </div>

                    <AnimatePresence>
                      {firmdropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute  mt-[50px] bg-white w-[230px] border border-[#dedede] rounded-lg shadow-md z-10"
                        >
                          {[
                            "Sole Proprietorship",
                            "Partnership",
                            "LLC",
                            "Corporation",
                          ].map((type, index) => (
                            <>
                              <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 font-Poppins cursor-pointer text-sm text-[#00000099]"
                                onClick={() => {
                                  setFirmSelectedType(type);
                                  setFirmDropdownOpen(false);
                                }}
                              >
                                {type}
                              </div>
                            </>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="partyState"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyStateFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f] cursor-text"
                        }`}
                      >
                        State Name
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="partyState"
                        value={formData.state}
                        onChange={handleInputChange}
                        onFocus={() => setPartyStateNameFocused(true)}
                        onBlur={() => setPartyStateNameFocused(false)}
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="partycity"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyCityFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f] cursor-text"
                        }`}
                      >
                        City Name
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="partycity"
                        value={formData.city}
                        onChange={handleInputChange}
                        onFocus={() => setPartyCityFocused(true)}
                        onBlur={() => setPartyCityFocused(false)}
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="partyPin"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyPinFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f] cursor-text"
                        }`}
                      >
                        Pin Code
                      </label>
                      <input
                        type="number"
                        name="pinCode"
                        id="partyPin"
                        value={formData.pinCode}
                        onChange={handleInputChange}
                        onFocus={() => setPartyPinFocused(true)}
                        onBlur={() => setPartyPinFocused(false)}
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="partynumber"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyNumberFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f] cursor-text"
                        }`}
                      >
                        Mobile Number
                      </label>
                      <input
                        type="number"
                        name="mobileNumber"
                        id="partynumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        onFocus={() => setPartyNumberFocused(true)}
                        onBlur={() => setPartyNumberFocused(false)}
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="emailparty"
                        className={` absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[14px]   transition-all duration-200 ${
                          partyEmailFocused
                            ? "text-[#000] -translate-y-[21px] "
                            : "text-[#8f8f8f] cursor-text"
                        }`}
                      >
                        Email ID
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="emailparty"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setPartyEmailFocused(true)}
                        onBlur={() => setPartyEmailFocused(false)}
                        autocomplete="nasme"
                        className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className=" bs-spj  font-[500] font-Poppins text-[#fff] rounded-[8px] py-[5px] justify-center text-[18px] mx-auto mt-[10px] flex w-[120px]"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </>
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
                Stock {  selectedStock ? "Update" :" Added"} successfully!
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
                  className="inline-flex font-Poppins justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#122f97] to-[#0c288c] border border-transparent rounded-md hover:from-green-600 hover:to-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
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
