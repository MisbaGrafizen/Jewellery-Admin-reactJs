import React, { useRef, useState } from "react";
import logo from "../../../public/imges/123.png";
import mainpng from "../../../public/imges/loginPage.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);
  const [nameFocused, setNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [mobileFocused, setMobileFocused] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [newpasswordFocused, setNewpasswordFocused] = useState(false);
  const [confirmpasswordFocused, setConfirmpasswordFocused] = useState(false);
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [isOtpSent, setIsOtpSent] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const isOtpComplete = otp.every((digit) => digit !== "");
  const isPasswordValid = password === confirmPassword && password.length >= 6;



  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  const otpRefs = useRef([]);

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value); // Only accept numeric values up to 10 digits
    }
  };
  const handleGetOtp = () => {
    if (mobileNumber.length === 10) {
      setIsOtpSent(true); // Enable OTP inputs
      otpRefs.current[0]?.focus(); // Focus on the first OTP input
    }
  };

  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if available
      if (value && index < otpRefs.current.length - 1) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = ""; // Clear the current field
      setOtp(newOtp);

      // Move to the previous field if available
      if (index > 0) {
        otpRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleNextStep = () => {
    if (registerStep === 1 && isOtpComplete) {
      setRegisterStep(2); // Navigate to password creation step
    } else if (registerStep === 2 && isPasswordValid) {
      alert("Registration Complete!");
      // You can navigate to a success page or login page here
      navigate("/dashboard"); // Example navigation
    }
  };

  return (
    <div className="bg-white sm:bg-[#122f97] sm:py-11 select-none h-[100vh] sm:px-16 overflow-hidden">
      <div className="login-bg flex h-full gap-14 overflow-hidden justify-center">
        {/* <div className="hidden lg:block">
          <div className="mb-7">
            {/* <img
              src={logo}
              alt="logo"
              className="cursor-pointer"
              style={{ maxWidth: "200px" }}
            /> 
          </div>
          <div className="text-4xl text-white font-medium font-Poppins capitalize text-center mb-">
            Welcome to SPJ Services
          </div>
          <div className="text-white capitalize font-Montserrat text-sm mt-[10px] mb-[18px]">
            Enter your email and password to login into your account
          </div>
          <div className="text-center">
            <img src={mainpng} alt="login" className="mx-auto" />
          </div>
        </div> */}

        <div className="flex items-center justify-center  relative font-medium text-sm md:min-w-[501px] max-w-[501px]">
          {isRegistering ? (
            <div className="bg-white w-full rounded-[7px]  relative   px-5 h-[580px] sm:p-[30px] shadow-main flex flex-col overflow-auto">
              <div className="space-y-">
                <h1 className="text-3xl sm:text-[40px] font-[400] font-Poppins text-[#163151]">
                  {registerStep === 1 ? "Register User" : "Create Password"}
                </h1>
                {/* <p className="font-light text-sm sm:text-lg font-Poppins text-[#124077] text-opacity-[0.64]">
                  {registerStep === 1
                    ? "Enter your Mobile, Email, and Name to Register"
                    : "Create a secure password for your account"}
                </p> */}
              </div>

              <form>
                {registerStep === 1 && (
                  <div className="mt-[40px] space-y-6">
                    {/* Name Input */}
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="name"
                        className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                          nameFocused
                            ? "-translate-y-[50%] text-primary text-xs"
                            : "  -translate-y-[-55%] cursor-text  text-[#9f9e9e] text-xs"
                        }`}
                      >
                        User Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={nameFocused ? "" : ""}
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                        onFocus={() => setNameFocused(true)}
                        onBlur={(e) => setNameFocused(e.target.value !== "")}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="email"
                        className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                          emailFocused
                            ? "-translate-y-[50%] text-primary text-xs"
                            : "  -translate-y-[-55%] cursor-text  text-[#9f9e9e] text-xs"
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={emailFocused ? "" : ""}
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={(e) => setEmailFocused(e.target.value !== "")}
                      />
                    </div>

                    {/* Mobile Number Input */}
                    <div className="flex gap-[10px]">
                      <div className="relative w-full border border-[#BCBCBC] py-4 px-1 rounded-lg flex items-center space-x-4 text-[#00000099]">
                        <label
                          htmlFor="number"
                          className={`bg-white px-1 absolute top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                            mobileFocused
                              ? "-translate-y-[50%] left-[20px] text-primary text-xs"
                              : " -translate-y-[-55%] cursor-text left-[50px] text-[#9f9e9e] text-xs"
                          }`}
                        >
                          Mobile Number
                        </label>
                        <p className=" flex font-[400] text-[15px] font-Poppins">
                          +91
                        </p>
                        <input
                          type="text"
                          name="number"
                          id="number"
                          value={mobileNumber}
                          placeholder={mobileFocused ? "" : ""}
                          className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                          onFocus={() => setMobileFocused(true)}
                          onBlur={(e) =>
                            setMobileFocused(e.target.value !== "")
                          }
                          onChange={handleMobileChange}
                        />
                      </div>
                      <div
                        className={`flex w-[150px] justify-center items-center text-[18px] rounded-[8px] font-[500] font-Poppins ${
                          mobileNumber.length === 10
                            ? "bg-[#fff] text-primary border-primary select-none active:bg-[#122f97] active:text-[#fff]  active:border-[0px] border-[1.5px] cursor-pointer"
                            : "bg-[#fb0a0a] text-[#fff] cursor-not-allowed"
                        }`}
                        onClick={handleGetOtp}
                      >
                        <p>Get OTP</p>
                      </div>
                    </div>

                    {isOtpSent && (
                      <div className="flex justify-between mt-6">
                        {otp.map((digit, index) => (
                          <div
                            key={index}
                            className={`relative w-[60px] h-[60px] rounded-lg flex items-center justify-center ${
                              isOtpSent ? "" : "border-gray-300"
                            } border-[1.5px]`}
                          >
                            <input
                              key={index}
                              type="text"
                              value={digit}
                              ref={(el) => (otpRefs.current[index] = el)}
                              maxLength={1}
                              disabled={!isOtpSent} // Disable until OTP is sent
                              onChange={(e) =>
                                handleOtpChange(index, e.target.value)
                              }
                              onKeyDown={(e) => handleOtpKeyDown(index, e)}
                              className={`w-12 h-12 text-center text-lg  font-Poppins rounded  outline-none 
                              
                              `}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {registerStep === 2 && (
                  <div className="mt-14 space-y-8">
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="name"
                        className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                          newpasswordFocused
                            ? "-translate-y-[50%] text-primary text-xs"
                            : "  -translate-y-[-55%] cursor-text  text-[#9f9e9e] text-xs"
                        }`}
                      >
                        New Password
                      </label>

                      <input
                        type="text"
                        name="password"
                        id="password"
                        value={password}
                        placeholder={newpasswordFocused ? "" : ""}
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                        onFocus={() => setNewpasswordFocused(true)}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={(e) =>
                          setNewpasswordFocused(e.target.value !== "")
                        }
                      />
                    </div>
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="name"
                        className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                          confirmpasswordFocused
                            ? "-translate-y-[50%] text-primary text-xs"
                            : "  -translate-y-[-55%] cursor-text  text-[#9f9e9e] text-xs"
                        }`}
                      >
                        Confirmed password
                      </label>

                      <input
                        type="text"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                   
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder={confirmpasswordFocused ? "" : ""}
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                        onFocus={() => setConfirmpasswordFocused(true)}
                        onBlur={(e) =>
                          setConfirmpasswordFocused(e.target.value !== "")
                        }
                      />
                    </div>
                  </div>
                )}

                <div className="text-center  w-[90%] bottom-[33px] absolute  ">
                <button
                    type="button"
                    onClick={handleNextStep}
                    className={`w-full px-3 py-4 rounded-md font-Poppins text-white text-xl font-medium ${
                      (registerStep === 1 && isOtpComplete) ||
                      (registerStep === 2 && isPasswordValid)
                        ? "bg-[#122f97] shadow-blue"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={
                      (registerStep === 1 && !isOtpComplete) ||
                      (registerStep === 2 && !isPasswordValid)
                    }
                  >
                    {registerStep === 1 ? "Go Ahead" : "Register Now"}
                  </button>
                  <p className="text-sm sm:text-[12px]  pl-[4px]  font-Poppins w-[90%] text-[#00000099]  mx-auto font-light mt-auto lg:mt-[10px]">
                    By Logging in, I agree with all
                    <a
                      href="https://billwale.com/privacypolicy?navigate=policy"
                      target="_blank"
                      className=" pl-[5px] pr-[5px] text-[#F7941D]"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </a>
                    and
                    <a
                      href="https://billwale.com/privacypolicy?navigate=terms"
                      target="_blank"
                      className="text-[#F7941D] pl-[5px]"
                      rel="noreferrer"
                    >
                      Terms of Service
                    </a>
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white w-full rounded-[7px] px-5 h-[580px] relative sm:p-8 shadow-main flex flex-col overflow-auto">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-[40px] font-[500] font-Poppins text-[#163151]">
                  Log In
                </h1>
                {/* <p className="font-light text-sm sm:text-lg font-Poppins text-[#124077] text-opacity-[0.64]">
                  Enter your Mobile or Email and Password to log in
                </p> */}
              </div>

              <form>
                <div className="mt-14 space-y-8">
                  {/* Name Input */}
                  <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                    <label
                      htmlFor="name"
                      className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                        nameFocused
                          ? "-translate-y-[50%] text-primary text-xs"
                          : "  -translate-y-[-55%] cursor-text  text-[#9f9e9e] text-xs"
                      }`}
                    >
                      User Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={nameFocused ? "" : ""}
                      className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                      onFocus={() => setNameFocused(true)}
                      onBlur={(e) => setNameFocused(e.target.value !== "")}
                    />
                  </div>
                  <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                    <label
                      htmlFor="name"
                      className={`bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize transition-all duration-200 ${
                        passwordFocused
                          ? "-translate-y-[50%] text-primary text-xs"
                          : "  -translate-y-[-55%] cursor-text  text-[#9f9e9e] text-xs"
                      }`}
                    >
                      Password
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={passwordFocused ? "" : ""}
                      className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={(e) => setPasswordFocused(e.target.value !== "")}
                    />
                  </div>
                </div>

                <div className="absolute w-[100%] bottom-[33px]">
                  <p
                    onClick={() => setIsRegistering(true)}
                    className="text-[#00cb82] cursor-pointer font-Poppins text-xs sm:text-base"
                  >
                    New User Registration
                  </p>

                  <div className="text-center  w-[90%]  mt-5">
                    <button
                      type="button"
                      className="w-full bg-bill shadow-blue px-3 bg-[#122f97] py-4 rounded-md font-Poppins text-white text-xl font-medium"
                    >
                      Log in
                    </button>
                  </div>
                  <p className="text-sm sm:text-[14px] font-Poppins w-[90%] text-[#00000099] text-center font-light mt-auto lg:mt-[10px]">
                    By Logging in, I agree with Billwale’s
                    <a
                      href="https://billwale.com/privacypolicy?navigate=policy"
                      target="_blank"
                      className="text-[#F7941D]"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </a>
                    and
                    <a
                      href="https://billwale.com/privacypolicy?navigate=terms"
                      target="_blank"
                      className="text-[#F7941D]"
                      rel="noreferrer"
                    >
                      Terms of Service
                    </a>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
