import React, { useState } from "react";
import backArrow from "../../../public/imges/main/back-arrow.png";
import flag from "../../../public/imges/main/headerIndia.png";
import alerT from "../../../public/imges/main/alert.png";
import Header from "../../Component/header/Header";
import SideBar from "../../Component/sidebar/SideBar";
import { Sidebar } from "lucide-react";

export default function CreateCompany() {
  const [isChecked, setIsChecked] = useState(false);
  const [dealerType, setDealerType] = useState("regular");
  const [accountType, setAccountType] = useState("jewellery");
  const [bankaccountType, setbankAccountType] = useState("saving");
  const [billType, setbillType] = useState("only");

  const [NameFocused, setNameFocused] = useState(false);
  const [EmailFocused, setEmailFocused] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(false);
  const [firmFocused, setFirmFocused] = useState(false);
  const [typeFocused, setTypeFocused] = useState(false);
  const [addressFocused, setAddressFocused] = useState(false);
  const [stateFocused, setStateFocused] = useState(false);
  const [cityFocused, setCityFocused] = useState(false);
  const [pinFocused, setPinFocused] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <section className=" flex  w-[100%] h-[100%] p-[15px] overflow-hidden ">
        <div className=" flex w-[100%] flex-col gap-[14px]  h-[96vh] ">
          <Header pageName=" Create New Company" />
          <div className=" flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className=" flex w-[100%] max-h-[93%] pb-[20px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px] ">
              <div className=" flex flex-col gap-[15px] w-[50%]  ">
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
                    Personal Details
                  </h1>

                  <div className=" w-[100%]  flex gap-[20px] border-[1px] bg-white shadow1-blue py-[29px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] flex-col gap-[20px]">
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            NameFocused
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder={NameFocused ? "" : ""}
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setNameFocused(true)}
                          onBlur={(e) => setNameFocused(e.target.value !== "")}
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="email"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            EmailFocused
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                        Email ID
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder={EmailFocused ? "" : ""}
                className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                          onFocus={() => setEmailFocused(true)}
                          onBlur={(e) => setEmailFocused(e.target.value !== "")}
                        />
                      </div>
                    </div>
                    <div className=" flex w-[100%] flex-col gap-[20px]">
                    <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="number"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            mobileNumber
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder={mobileNumber ? "" : ""}
                          className="w-full outline-none text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                          onFocus={() => setMobileNumber(true)}
                          onBlur={(e) => setMobileNumber(e.target.value !== "")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
                    Company Details
                  </h1>

                  <div className=" w-[100%]  flex gap-[20px] border-[1px] bg-white shadow1-blue py-[20px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] flex-col gap-[20px]">
                    <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="firm"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            firmFocused
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                          Firm Name
                        </label>
                        <input
                          type="text"
                          name="firm"
                          id="firm"
                          placeholder={firmFocused ? "" : ""}
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setFirmFocused(true)}
                          onBlur={(e) => setFirmFocused(e.target.value !== "")}
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede]  h-[90px]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                          htmlFor="address"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            addressFocused
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                      Buisness Address
                        </label>
                        <textarea
                          type="text"
                          name="address"
                          id="address"
                          placeholder={addressFocused ? "" : ""}
                          onFocus={() => setAddressFocused(true)}
                          onBlur={(e) => setAddressFocused(e.target.value !== "")}
                          className="w-full outline-none text-[14px] pt-[10px]  h-[100%] font-Poppins font-[400] bg-transparent"
                        ></textarea>
                      </div>

                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="state"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            stateFocused
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          placeholder={stateFocused ? "" : ""}
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setStateFocused(true)}
                          onBlur={(e) => setStateFocused(e.target.value !== "")}
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="state"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            cityFocused
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder={cityFocused ? "" : ""}
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setCityFocused(true)}
                          onBlur={(e) => setCityFocused(e.target.value !== "")}
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="pin"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            pinFocused
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                        Pin-Code
                        </label>
                        <input
                          type="text"
                          name="pin"
                          id="pin"
                          placeholder={pinFocused ? "" : ""}
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setPinFocused(true)}
                          onBlur={(e) => setPinFocused(e.target.value !== "")}
                        />
                      </div>
                    </div>
                    <div className=" flex w-[100%] flex-col gap-[20px]">
                    <div className="relative w-full  border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="type"
                          className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            typeFocused
                              ? "-translate-y-[50%] text-primary text-xs"
                              : "  -translate-y-[-35%] cursor-text  text-[#9f9e9e] text-xs"
                          }`}
                        >
                          Firm Type
                        </label>
                        <input
                          type="text"
                          name="type"
                          id="type"
                          placeholder={typeFocused ? "" : ""}
                          className="w-full outline-none text-[15px] py-[9px]  font-Poppins font-[400] bg-transparent"
                          onFocus={() => setTypeFocused(true)}
                          onBlur={(e) => setTypeFocused(e.target.value !== "")}
                        />
                      </div>
                      <div className="relative w-full  border-[1px] border-[#dedede]  shadow rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="name"
                          className="bg-white px-1 absolute left-[16px] text-[#000] top-0 transform -translate-y-1/2 font-Poppins font-[400]  text-[14px]  capitalize"
                        >
                          GST Number
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
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
                          name="number"
                          id="number"
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
                              style={{ display: "none" }}
                              checked={isChecked} // Bind state to the checkbox
                              onChange={handleCheckboxChange} // Update state on change
                            />

                            {/* Custom Checkbox */}
                            <span
                              onClick={handleCheckboxChange} // Handle click
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
                              {isChecked && (
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
                                    checked={dealerType === "regular"}
                                    onChange={(e) =>
                                      setDealerType(e.target.value)
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
                                    checked={dealerType === "composition"}
                                    onChange={(e) =>
                                      setDealerType(e.target.value)
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
                                    name="accountType"
                                    value="jewellery"
                                    checked={accountType === "jewellery"}
                                    onChange={(e) =>
                                      setAccountType(e.target.value)
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
                                    name="accountType"
                                    value="others"
                                    checked={accountType === "others"}
                                    onChange={(e) =>
                                      setAccountType(e.target.value)
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
              <div className=" flex w-[50%] flex-col gap-[20px] h-fit ">
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
                    Bank Details
                  </h1>

                  <div className=" w-[100%]  flex  flex-col gap-[20px] border-[1px] bg-white shadow1-blue py-[20px]  px-[20px] rounded-[10px] h-fit">
                    <div className=" flex w-[100%] gap-[20px]">
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
                            name="name"
                            id="name"
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
                            name="number"
                            id="number"
                            placeholder="Enter Account No "
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
                                checked={bankaccountType === "saving"}
                                onChange={(e) =>
                                  setbankAccountType(e.target.value)
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
                                checked={bankaccountType === "current"}
                                onChange={(e) =>
                                  setbankAccountType(e.target.value)
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
                                checked={bankaccountType === "od"}
                                onChange={(e) =>
                                  setbankAccountType(e.target.value)
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
                                checked={bankaccountType === "cc"}
                                onChange={(e) =>
                                  setbankAccountType(e.target.value)
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
                                checked={bankaccountType === "others"}
                                onChange={(e) =>
                                  setbankAccountType(e.target.value)
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
                            name="name"
                            id="name"
                            placeholder="Enter Bank Name"
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
                            name="number"
                            id="number"
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
                        name="email"
                        id="email"
                        placeholder="Enter Your Bank address  "
                        className="w-full outline-none text-[14px] pt-[10px]  h-[100%] font-Poppins font-[400] bg-transparent"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-[6px] w-[100%] ">
                  <h1 className=" flex  pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
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
                            name="name"
                            id="name"
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
                            name="number"
                            id="number"
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
                          name="email"
                          id="email"
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
                              name="number"
                              id="number"
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
                                checked={billType === "only"}
                                onChange={(e) => setbillType(e.target.value)}
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
                                checked={bankaccountType === "inventory"}
                                onChange={(e) =>
                                  setbankAccountType(e.target.value)
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
                  <div className=" flex font-Poppins text-[17px] font-[400]  h-[45px]  rounded-[7px] items-center justify-center  w-[150px]  text-[#fff] bg-[#009dd1] ">
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
