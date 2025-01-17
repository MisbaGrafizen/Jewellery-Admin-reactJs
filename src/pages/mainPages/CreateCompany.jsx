import { useEffect, useRef, useState } from "react";
import Header from "../../Component/header/Header";
import SideBar from "../../Component/sidebar/SideBar";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { getUserByIdAction } from "../../redux/action/userManagement";
import { addCompanyInfoAction } from "../../redux/action/generalManagement";

export default function CreateCompany() {
  const [isChecked, setIsChecked] = useState(false);

  const [NameFocused, setNameFocused] = useState(false);
  const [EmailFocused, setEmailFocused] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(false);
  const [firmFocused, setFirmFocused] = useState(false);
  const [typeFocused, setTypeFocused] = useState(false);
  const [addressFocused, setAddressFocused] = useState(false);
  const [stateFocused, setStateFocused] = useState(false);
  const [cityFocused, setCityFocused] = useState(false);
  const [pinFocused, setPinFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedType, setSelectedType] = useState("");
  const userId = Cookies.get("user");
  const [formData, setFormData] = useState({
    firmName: "",
    firmType: "",
    address: "",
    state: "",
    city: "",
    pinCode: "",
    gstNumber: "",
    panNumber: "",
    holderName: "",
    accountNo: "",
    accountType: "saving",
    bankName: "",
    IFSCCode: "",
    bankAddress: "",
    beginingFrom: "",
    terms: "",
    invoicePrefix: "",
    invoiceNumber: "",
    TCSApply: false,
    dealerType: "regular",
    type: "jewellery",
    billType: "only",
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.getUserById);

  useEffect(() => {
    if (userId) {
      dispatch(getUserByIdAction(userId));
    }
  }, [dispatch, userId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCompanyInfoAction(formData));
    alert("Data created Successfully.");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);






  
  return (
    <>
      <section className=" flex  w-[100%]  h-[100%] select-none *: p-[15px] overflow-hidden ">
        <div className=" flex w-[100%] flex-col gap-[14px]  h-[96vh] ">
          <Header pageName=" Create New Company" />
          <div className=" flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className=" flex w-[100%] max-h-[100%] pb-[20px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px] ">
              <div className=" flex flex-col gap-[10px] w-[50%]  ">
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[16px] text-[#427ae1]">
                    Personal Details
                  </h1>

                  <div className=" w-[100%]  flex gap-[16px] border-[1px] bg-white shadow1-blue py-[20px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] flex-col gap-[16px]">
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={user?.name}
                          placeholder="Your Name"
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setNameFocused(true)}
                          onBlur={(e) => setNameFocused(e.target.value !== "")}
                          autocomplete="nasme"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="email"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Email ID
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={user?.email}
                          placeholder="Enter Email"
                          className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                          onFocus={() => setEmailFocused(true)}
                          onBlur={(e) => setEmailFocused(e.target.value !== "")}
                          autocomplete="naqsme"
                        />
                      </div>
                    </div>
                    <div className=" flex w-[100%] flex-col gap-[16px]">
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="number"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          value={user?.mobileNumber}
                          placeholder="Mobile Number"
                          className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                          onFocus={() => setMobileNumber(true)}
                          onBlur={(e) => setMobileNumber(e.target.value !== "")}
                          autocomplete="nasme"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[16px] text-[#427ae1]">
                    Company Details
                  </h1>

                  <div className=" w-[100%]  relative flex gap-[16px] border-[1px] bg-white shadow1-blue py-[20px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] flex-col gap-[16px]">
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="firm"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Firm Name
                        </label>
                        <input
                          type="text"
                          name="firmName"
                          id="firm"
                          value={formData?.firmName}
                          onChange={handleChange}
                          placeholder=" Enter Your Firm Name"
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setFirmFocused(true)}
                          onBlur={(e) => setFirmFocused(e.target.value !== "")}
                          autocomplete="nasme"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede]  h-[90px]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="address"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Buisness Address
                        </label>
                        <textarea
                          type="text"
                          name="address"
                          id="address"
                          value={formData?.address}
                          onChange={handleChange}
                          placeholder=" Enter Your Buisness Address"
                          onFocus={() => setAddressFocused(true)}
                          onBlur={(e) =>
                            setAddressFocused(e.target.value !== "")
                          }
                          autocomplete="nasme"
                          className="w-full outline-none text-[14px] pt-[10px]  h-[100%] font-Poppins font-[400] bg-transparent"
                        ></textarea>
                      </div>

                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="state"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          value={formData?.state}
                          onChange={handleChange}
                          placeholder="Enter Your State"
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setStateFocused(true)}
                          onBlur={(e) => setStateFocused(e.target.value !== "")}
                          autocomplete="nasme"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="state"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={formData?.city}
                          onChange={handleChange}
                          placeholder="Enter Your City"
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setCityFocused(true)}
                          onBlur={(e) => setCityFocused(e.target.value !== "")}
                          autocomplete="nasme"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="pin"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Pin-Code
                        </label>
                        <input
                          type="text"
                          name="pinCode"
                          id="pin"
                          value={formData?.pinCode}
                          onChange={handleChange}
                          placeholder="Enter Pin-Code"
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setPinFocused(true)}
                          onBlur={(e) => setPinFocused(e.target.value !== "")}
                          autocomplete="nasme"
                        />
                      </div>
                    </div>
                    <div className=" flex w-[100%] flex-col gap-[16px]">
                      <div
                        ref={dropdownRef}
                        className="relative w-full border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099] cursor-pointer"
                        onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown on click
                      >
                        <label
                          htmlFor="type"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          Firm Type
                        </label>
                        <input
                          type="text"
                          name="firmType"
                          id="type"
                          value={selectedType}
                          placeholder="Select Firm Type"
                          className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                          readOnly
                          onFocus={() => setTypeFocused(true)}
                          onBlur={() => setTypeFocused(false)}
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
                            className="absolute  mt-[50px] bg-white w-[270px] border border-[#dedede] rounded-lg shadow-md z-10"
                          >
                            {[
                              "Sole Proprietorship",
                              "Partnership",
                              "LLC",
                              "Corporation",
                            ].map((type, index) => (
                              <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 font-Poppins cursor-pointer text-sm text-[#00000099]"
                                onClick={() => {
                                  setSelectedType(type);
                                  setDropdownOpen(false);
                                }}
                              >
                                {type}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="relative w-full border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          GST Number
                        </label>
                        <input
                          type="number"
                          name="gstNumber"
                          id="number"
                          value={formData?.gstNumber}
                          onChange={handleChange}
                          autocomplete="nasme"
                          placeholder="Enter Your GST Number "
                          className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          PAN Number
                        </label>
                        <input
                          type="number"
                          name="panNumber"
                          id="number"
                          value={formData?.panNumber}
                          onChange={handleChange}
                          autocomplete="nasme"
                          placeholder="Enter Your PAN Number "
                          className="w-full outline-none text-[14px] h-full  py-[9px] font-Poppins font-[400] bg-transparent"
                        />
                      </div>
                      <div className=" flex flex-col gap-[15px]">
                        <div className=" flex ">
                          <label className="flex cursor-pointer items-center gap-[10px]">
                            <p className="flex  select-none font-Poppins">
                              TCS Apply
                            </p>

                            {/* Hidden Checkbox */}
                            <input
                              type="checkbox"
                              id="custom-checkbox"
                              name="TCSApply"
                              style={{ display: "none" }}
                              checked={formData.TCSApply} // Bind state to the checkbox
                              onChange={handleChange} // Update state on change
                            />

                            {/* Custom Checkbox */}
                            <span
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  TCSApply: !prev.TCSApply,
                                }))
                              } // Handle click
                              style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: isChecked ? "#009dd1" : "#fff", // Change background on state
                                borderRadius: "28%",
                                border: "1px solid #ccc",
                                display: "inline-block",
                                position: "relative",
                                cursor: "pointer",
                              }}
                            >
                              {/* Tick Mark */}
                              {formData.TCSApply && (
                                <span
                                  style={{
                                    position: "absolute",
                                    top: "3px",
                                    left: "5px",
                                    width: "6px",
                                    height: "10px",
                                    border: "solid white",
                                    borderWidth: "0 2px 2px 0",
                                    transform: "rotate(45deg)",
                                  }}
                                ></span>
                              )}
                            </span>
                          </label>
                        </div>
                        <div className=" flex ">
                          <label className="flex cursor-pointer flex-col justify-start ">
                            <p className="flex text-[14px]  select-none font-Poppins">
                              Dealer Type
                            </p>
                            <div className=" flex justify-between w-full gap-[20px]">
                              <label className="flex items-center gap-[5px] cursor-pointer group">
                                <div className="relative flex items-center justify-center w-7 h-7">
                                  <input
                                    type="radio"
                                    name="dealerType"
                                    value="regular"
                                    checked={formData.dealerType === "regular"}
                                    onChange={(e) =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        dealerType: e.target.value,
                                      }))
                                    }
                                    className="sr-only peer"
                                  />
                                  <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                                  <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                                </div>
                                <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                                  Regular
                                </span>
                              </label>

                              <label className="flex items-center gap-[5px] cursor-pointer group">
                                <div className="relative flex items-center justify-center w-7 h-7">
                                  <input
                                    type="radio"
                                    name="dealerType"
                                    value="composition"
                                    checked={
                                      formData.dealerType === "composition"
                                    }
                                    onChange={(e) =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        dealerType: e.target.value,
                                      }))
                                    }
                                    className="sr-only peer"
                                  />
                                  <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                                  <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                                </div>
                                <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                                  Composition
                                </span>
                              </label>
                            </div>
                          </label>
                        </div>

                        <div className=" flex ">
                          <label className="flex cursor-pointer flex-col justify-start gap-[4px]">
                            <p className="flex text-[14px]  select-none font-Poppins">
                              Account Type
                            </p>
                            <div className=" flex justify-between w-full gap-[20px]">
                              <label className="flex items-center gap-[5px] cursor-pointer group">
                                <div className="relative flex items-center justify-center w-7 h-7">
                                  <input
                                    type="radio"
                                    name="type"
                                    value="jewellery"
                                    checked={formData.type === "jewellery"}
                                    onChange={(e) =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        accountType: e.target.value,
                                      }))
                                    }
                                    className="sr-only peer"
                                  />
                                  <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                                  <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                                </div>
                                <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                                  jewellery
                                </span>
                              </label>

                              <label className="flex items-center gap-[5px] cursor-pointer group">
                                <div className="relative flex items-center justify-center w-7 h-7">
                                  <input
                                    type="radio"
                                    name="type"
                                    value="others"
                                    checked={formData.type === "others"}
                                    onChange={(e) =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        accountType: e.target.value,
                                      }))
                                    }
                                    className="sr-only peer"
                                  />
                                  <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                                  <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                                </div>
                                <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                                  others jewellery
                                </span>
                              </label>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex w-[50%] flex-col gap-[16px] h-fit ">
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[16px] text-[#427ae1]">
                    Bank Details
                  </h1>

                  <div className=" w-[100%]  flex  flex-col gap-[14px] border-[1px] bg-white shadow1-blue py-[20px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] gap-[16px]">
                      <div className=" flex w-[100%] flex-col gap-[20px]">
                        <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                          <label
                            htmlFor="name"
                            className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                          >
                            Account Holder Name
                          </label>
                          <input
                            type="text"
                            name="holderName"
                            id="name"
                            value={formData?.holderName}
                            onChange={handleChange}
                            autocomplete="nasme"
                            placeholder="Enter Account Holder Name"
                            className="w-full outline-none text-[12px]  py-[9px] font-Poppins font-[400] bg-transparent"
                          />
                        </div>
                      </div>
                      <div className=" flex w-[100%] flex-col gap-[20px]">
                        <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                          <label
                            htmlFor="name"
                            className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                          >
                            Account No
                          </label>
                          <input
                            type="number"
                            name="accountNo"
                            id="number"
                            value={formData?.accountNo}
                            onChange={handleChange}
                            placeholder="Enter Account No "
                            autocomplete="nasme"
                            className="w-full outline-none text-[12px]  py-[9px] font-Poppins font-[400] bg-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" flex ">
                      <label className="flex cursor-pointer flex-col justify-start gap-[10px] ">
                        <p className="flex text-[14px] pl-[16px]  select-none font-Poppins">
                          Select aacount type{" "}
                        </p>
                        <div className=" flex justify-between w-full gap-[20px]">
                          <label className="flex items-center gap-[5px] cursor-pointer group">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="radio"
                                name="bankType"
                                value="saving"
                                checked={formData.bankType === "saving"}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    bankType: e.target.value,
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                              <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                            </div>
                            <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                              Saving
                            </span>
                          </label>

                          <label className="flex items-center gap-[5px] cursor-pointer group">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="radio"
                                name="bankType"
                                value="current"
                                checked={formData.bankType === "current"}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    bankType: e.target.value,
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                              <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                            </div>
                            <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                              Current
                            </span>
                          </label>
                          <label className="flex items-center gap-[5px] cursor-pointer group">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="radio"
                                name="bankType"
                                value="od"
                                checked={formData.bankType === "od"}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    bankType: e.target.value,
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                              <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                            </div>
                            <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                              OD
                            </span>
                          </label>
                          <label className="flex items-center gap-[5px] cursor-pointer group">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="radio"
                                name="bankType"
                                value="cc"
                                checked={formData.bankType === "cc"}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    bankType: e.target.value,
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                              <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                            </div>
                            <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                              CC
                            </span>
                          </label>
                          <label className="flex items-center gap-[5px] cursor-pointer group">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="radio"
                                name="bankType"
                                value="others"
                                checked={formData.bankType === "others"}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    bankType: e.target.value,
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                              <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                            </div>
                            <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                              Others
                            </span>
                          </label>
                        </div>
                      </label>
                    </div>
                    <div className=" flex w-[100%] gap-[20px]">
                      <div className=" flex w-[100%] flex-col gap-[20px]">
                        <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                          <label
                            htmlFor="name"
                            className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                          >
                            Bank Name
                          </label>
                          <input
                            type="text"
                            name="bankName"
                            id="name"
                            value={formData?.bankName}
                            onChange={handleChange}
                            placeholder="Enter Bank Name"
                            autocomplete="nasme"
                            className="w-full outline-none text-[12px]  py-[9px] font-Poppins font-[400] bg-transparent"
                          />
                        </div>
                      </div>
                      <div className=" flex w-[100%] flex-col gap-[20px]">
                        <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                          <label
                            htmlFor="name"
                            className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                          >
                            IFSC Code
                          </label>
                          <input
                            type="number"
                            name="IFSCCode"
                            autocomplete="nasme"
                            id="number"
                            value={formData?.IFSCCode}
                            onChange={handleChange}
                            placeholder="Enter IFSC Code "
                            className="w-full outline-none text-[12px]  py-[9px] font-Poppins font-[400] bg-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full  border-[1px] border-[#dedede]  h-[90px]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="name"
                        className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]   text-[14px]  capitalize"
                      >
                        Bank Address
                      </label>
                      <textarea
                        type="email"
                        name="bankAddress"
                        id="email"
                        value={formData?.bankAddress}
                        onChange={handleChange}
                        placeholder="Enter Your Bank address  "
                        className="w-full outline-none text-[14px] pt-[10px]  h-[100%] font-Poppins font-[400] bg-transparent"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[16px] text-[#427ae1]">
                    General Details
                  </h1>

                  <div className=" w-[100%]  flex  flex-col gap-[20px] border-[1px] bg-white shadow1-blue py-[20px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] gap-[20px]">
                      <div className=" flex w-[100%] flex-col gap-[20px]">
                        <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                          <label
                            htmlFor="name"
                            className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                          >
                            Financial year Beginning From
                          </label>
                          <input
                            type="text"
                            name="beginingFrom"
                            id="name"
                            value={formData?.beginingFrom}
                            onChange={handleChange}
                            placeholder="Financial year Beginning From"
                            className="w-full outline-none text-[12px]  py-[9px] font-Poppins font-[400] bg-transparent"
                          />
                        </div>
                      </div>
                      <div className=" flex w-[100%] flex-col gap-[20px]">
                        <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                          <label
                            htmlFor="name"
                            className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                          >
                            Invoice Prefix
                          </label>
                          <input
                            type="number"
                            name="invoicePrefix"
                            id="number"
                            value={formData?.invoicePrefix}
                            onChange={handleChange}
                            placeholder="Enter Account No "
                            className="w-full outline-none text-[12px]  py-[9px] font-Poppins font-[400] bg-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" flex  w-[100%] gap-[20px]">
                      <div className="relative w-[50%]  border-[1px] border-[#dedede]  h-[90px]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]   text-[14px]  capitalize"
                        >
                          Term & Condition
                        </label>
                        <textarea
                          type="email"
                          name="terms"
                          id="email"
                          value={formData?.terms}
                          onChange={handleChange}
                          placeholder="Enter Term & Condition "
                          className="w-full outline-none text-[14px] pt-[10px]  h-[100%] font-Poppins font-[400] bg-transparent"
                        ></textarea>
                      </div>

                      <div className=" flex flex-col gap-[20px] w-[50%]">
                        <div className=" flex w-[100%] flex-col gap-[20px]">
                          <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                            <label
                              htmlFor="name"
                              className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                            >
                              Invoice Number
                            </label>
                            <input
                              type="number"
                              name="invoiceNumber"
                              id="number"
                              value={formData?.invoiceNumber}
                              onChange={handleChange}
                              placeholder="Enter Account No "
                              className="w-full outline-none text-[12px]  py-[9px] font-Poppins font-[400] bg-transparent"
                            />
                          </div>
                        </div>
                        <div className=" flex gap-[20px]">
                          <label className="flex items-center gap-[5px] cursor-pointer group">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="radio"
                                name="billType"
                                value="only"
                                checked={formData?.billType === "only"}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    billType: e.target.value,
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                              <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                            </div>
                            <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                              Only Bill
                            </span>
                          </label>
                          <label className="flex items-center gap-[5px] cursor-pointer group">
                            <div className="relative flex items-center justify-center w-7 h-7">
                              <input
                                type="radio"
                                name="billType"
                                value="inventory"
                                checked={formData?.billType === "inventory"}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    billType: e.target.value,
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="absolute w-[18px] h-[18px] rounded-full border-[1.5px] border-gray-300" />
                              <div className="absolute w-[10px] h-[10px] rounded-full bg-[#009dd1] transform scale-0 peer-checked:scale-100 transition-transform duration-200" />
                            </div>
                            <span className="text-[12px] text-gray-700 font-Poppins group-hover:text-gray-900">
                              Bill with Inventory
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-[100%] flex justify-end">
                  <div
                    className=" flex font-Poppins text-[17px] font-[400]  h-[45px]  rounded-[7px] items-center justify-center  w-[150px]  text-[#fff] bg-[#009dd1] "
                    onClick={handleSubmit}
                  >
                    <p>ADD COMPANY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
