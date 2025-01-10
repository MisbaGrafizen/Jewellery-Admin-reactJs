// import React from "react";
// import logo from "../../../public/imges/123.png";
// import mainpng from "../../../public/imges/loginPage.png";

// export default function Login() {
//   return (
//     <>
//       <div className="bg-white sm:bg-[#122f97] sm:py-11 h-[100vh]  sm:px-16  overflow-hidden">
//         <div className="login-bg flex h-full gap-14  overflow-hidden  justify-center">
//           <div className="hidden lg:block">
//             <div className="mb-7">
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="cursor-pointer"
//                 style={{ maxWidth: "200px" }}
//               />
//             </div>
//             <div className="text-4xl text-white font-medium font-Poppins capitalize text-center mb-">
//               Welcome to Billwale Services
//             </div>
//             <div className="text-white capitalize font-Montserrat text-sm  mt-[10px] mb-[18px]">
//               Enter your email and password to login into your account
//             </div>
//             <div className="text-center">
//               <img src={mainpng} alt="login" className="mx-auto" />
//             </div>
//           </div>

//           <div className="flex items-center justify-center relative  font-medium text-sm md:min-w-[621px] max-w-[621px]">
//             <div className="bg-white w-full sm:rounded-[29px] px-5  h-full sm:p-8 shadow-main flex flex-col overflow-auto">
//               <div className="space-y-2">
//                 <div className="flex items-center">
//                   <h1 className="text-3xl sm:text-[40px] font-[500] font-Poppins text-[#163151] mr-4 leading-[44px]">
//                     Log in
//                   </h1>
//                 </div>

//                 <p className="font-light text-sm sm:text-lg font-Poppins text-[#124077] text-opacity-[0.64]">
//                   Enter your Mobile Or Email and Password to login
//                 </p>
//               </div>

//               <form>
//                 <div className="mt-14">
//                   <div className="space-y-2">
//                     <div className="relative w-full border border-[#BCBCBC] py-5 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
//                       <svg
//                         width="19"
//                         height="16"
//                         viewBox="0 0 19 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="text-primary"
//                       >
//                         <path
//                           d="M0.976562 2.96875V12.9687C0.976562 14.0733 1.872 14.9688 2.97657 14.9688H16.1925C17.297 14.9688 18.1925 14.0733 18.1925 12.9687V2.96875M0.976562 2.96875V2.96875C0.976562 1.86418 1.87199 0.96875 2.97656 0.96875H16.1925C17.297 0.96875 18.1925 1.86418 18.1925 2.96875V2.96875M0.976562 2.96875L8.44087 8.17159C9.12807 8.65059 10.041 8.65059 10.7282 8.17159L18.1925 2.96875"
//                           stroke="currentColor"
//                           stroke-linejoin="round"
//                         />
//                       </svg>

//                       <label
//                         htmlFor="email"
//                         className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
//                       >
//                         Mobile or Email
//                       </label>
//                       <input
//                         type="text"
//                         name="username"
//                         id="email"
//                         className="w-full  h-[100%] outline-none text-[15px] font-Poppins font-[400] bg-transparent"
//                         placeholder="Enter 10 Digit Mobile Number or E-mail"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2 mt-8">
//                     <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
//                       <svg
//                         width="17"
//                         height="19"
//                         viewBox="0 0 17 19"
//                         fill="none"
//                         className="text-primary"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M8.62808 11.9727V13.9727M4.80232 7.97266V3.97266C4.80232 2.3158 6.08696 0.972656 7.67164 0.972656H9.58452C11.1692 0.972656 12.4538 2.3158 12.4538 3.97266V7.97266M2.97656 17.9727H14.2796C15.3842 17.9727 16.2796 17.0772 16.2796 15.9727V9.97266C16.2796 8.86809 15.3842 7.97266 14.2796 7.97266H2.97656C1.87199 7.97266 0.976562 8.86809 0.976562 9.97266V15.9727C0.976562 17.0772 1.87199 17.9727 2.97656 17.9727Z"
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>

//                       <label
//                         htmlFor="password"
//                         className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
//                       >
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         placeholder="Enter Your Password"
//                         className="w-full  h-[100%] outline-none text-[15px] font-Poppins font-[400] bg-transparent"
//                       />
//                     </div>
//                     <small className="block text-[12px] font-Poppins  text-[#7A7A7A] font-light capitalize tracking-[-0.4px]">
//                       Password must be:- Minimum 8 Characters
//                       <br /> (1 Uppercase, 1 Lowercase, 1 Special character & 1
//                       Digit)
//                     </small>
//                   </div>
//                 </div>
//                 <div className=" absolute w-[90%] bottom-[40px] mt-[80px]">
//                   <div className=" flex justify-between items-center">
//                     <p className="text-[#00cb82] cursor-pointer font-Poppins font-[300] whitespace-nowrap text-xs sm:text-base">
//                       New User Registration
//                     </p>
//                     <p className="text-[#F7941D] whitespace-nowrap font-Poppins font-[300] text-xs sm:text-base">
//                       Forgot Password
//                     </p>
//                   </div>

//                   <div className="text-center mt-[10px]">
//                     <div className="flex items-center justify-center flex-col gap-6">
//                       <button
//                         type="submit"
//                         className="w-full bg-bill shadow-blue px-3 py-4 rounded-md font-Poppins text-white text-xl font-medium"
//                       >
//                         Login
//                       </button>
//                     </div>
//                   </div>
//                   <p className="text-sm sm:text-[14px] font-Poppins text-[#00000099] text-center font-light mt-auto lg:mt-[10px]">
//                     By Logging in, I agree with Billwale’s
//                     <a
//                       href="https://billwale.com/privacypolicy?navigate=policy"
//                       target="_blank"
//                       className="text-[#F7941D]"
//                       rel="noreferrer"
//                     >
//                       Privacy Policy
//                     </a>
//                     and
//                     <a
//                       href="https://billwale.com/privacypolicy?navigate=terms"
//                       target="_blank"
//                       className="text-[#F7941D]"
//                       rel="noreferrer"
//                     >
//                       Terms of Service
//                     </a>
//                   </p>
//                 </div>
//               </form>
//             </div>

//             <div className="bg-white w-full sm:rounded-[29px] px-5  h-full sm:p-8 shadow-main flex flex-col overflow-auto">
//               <div className="space-y-2">
//                 <div className="flex items-center">
//                   <h1 className="text-3xl sm:text-[40px] font-[500] font-Poppins text-[#163151] mr-4 leading-[44px]">
//                     Sign Up
//                   </h1>
//                 </div>

//                 <p className="font-light text-sm sm:text-lg font-Poppins text-[#124077] text-opacity-[0.64]">
//                   Enter your Mobile Or Email and User Name to Register
//                 </p>
//               </div>

//               <form>
//                 <div className="mt-14">
//                   <div className="space-y-2">
//                     <div className="relative w-full border border-[#BCBCBC] py-5 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
//                       <svg
//                         width="19"
//                         height="16"
//                         viewBox="0 0 19 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="text-primary"
//                       >
//                         <path
//                           d="M0.976562 2.96875V12.9687C0.976562 14.0733 1.872 14.9688 2.97657 14.9688H16.1925C17.297 14.9688 18.1925 14.0733 18.1925 12.9687V2.96875M0.976562 2.96875V2.96875C0.976562 1.86418 1.87199 0.96875 2.97656 0.96875H16.1925C17.297 0.96875 18.1925 1.86418 18.1925 2.96875V2.96875M0.976562 2.96875L8.44087 8.17159C9.12807 8.65059 10.041 8.65059 10.7282 8.17159L18.1925 2.96875"
//                           stroke="currentColor"
//                           stroke-linejoin="round"
//                         />
//                       </svg>

//                       <label
//                         htmlFor="Name"
//                         className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
//                       >
//                    User name
//                       </label>
//                       <input
//                         type="text"
//                         name="username"
//                         id="email"
//                         className="w-full  h-[100%] outline-none text-[15px] font-Poppins font-[400] bg-transparent"
//                         placeholder="Enter Your Name"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2 mt-8">
//                     <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
//                     <svg
//                         width="19"
//                         height="16"
//                         viewBox="0 0 19 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="text-primary"
//                       >
//                         <path
//                           d="M0.976562 2.96875V12.9687C0.976562 14.0733 1.872 14.9688 2.97657 14.9688H16.1925C17.297 14.9688 18.1925 14.0733 18.1925 12.9687V2.96875M0.976562 2.96875V2.96875C0.976562 1.86418 1.87199 0.96875 2.97656 0.96875H16.1925C17.297 0.96875 18.1925 1.86418 18.1925 2.96875V2.96875M0.976562 2.96875L8.44087 8.17159C9.12807 8.65059 10.041 8.65059 10.7282 8.17159L18.1925 2.96875"
//                           stroke="currentColor"
//                           stroke-linejoin="round"
//                         />
//                       </svg>

//                       <label
//                         htmlFor="password"
//                         className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
//                       >
//                         email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder="Enter Your Email"
//                         className="w-full  h-[100%] outline-none text-[15px] font-Poppins font-[400] bg-transparent"
//                       />
//                     </div>

//                   </div>
//                   <div className="space-y-2 mt-8">
//                     <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
//                     <i className="fa-thin text-primary font-[200] text-[20px] fa-phone"></i>

//                       <label
//                         htmlFor="password"
//                         className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
//                       >
//                         Number
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder="Enter Your Number"
//                         className="w-full  h-[100%] outline-none text-[15px] font-Poppins font-[400] bg-transparent"
//                       />
//                     </div>

//                   </div>

//                   <div className="space-y-8 mt-8">
//                     <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
//                       <svg
//                         width="17"
//                         height="19"
//                         viewBox="0 0 17 19"
//                         fill="none"
//                         className="text-primary"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M8.62808 11.9727V13.9727M4.80232 7.97266V3.97266C4.80232 2.3158 6.08696 0.972656 7.67164 0.972656H9.58452C11.1692 0.972656 12.4538 2.3158 12.4538 3.97266V7.97266M2.97656 17.9727H14.2796C15.3842 17.9727 16.2796 17.0772 16.2796 15.9727V9.97266C16.2796 8.86809 15.3842 7.97266 14.2796 7.97266H2.97656C1.87199 7.97266 0.976562 8.86809 0.976562 9.97266V15.9727C0.976562 17.0772 1.87199 17.9727 2.97656 17.9727Z"
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>

//                       <label
//                         htmlFor="password"
//                         className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
//                       >
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         placeholder="Enter Your Password"
//                         className="w-full  h-[100%] outline-none text-[15px] font-Poppins font-[400] bg-transparent"
//                       />
//                     </div>
//                     <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099] ">
//                       <svg
//                         width="17"
//                         height="19"
//                         viewBox="0 0 17 19"
//                         fill="none"
//                         className="text-primary"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M8.62808 11.9727V13.9727M4.80232 7.97266V3.97266C4.80232 2.3158 6.08696 0.972656 7.67164 0.972656H9.58452C11.1692 0.972656 12.4538 2.3158 12.4538 3.97266V7.97266M2.97656 17.9727H14.2796C15.3842 17.9727 16.2796 17.0772 16.2796 15.9727V9.97266C16.2796 8.86809 15.3842 7.97266 14.2796 7.97266H2.97656C1.87199 7.97266 0.976562 8.86809 0.976562 9.97266V15.9727C0.976562 17.0772 1.87199 17.9727 2.97656 17.9727Z"
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>

//                       <label
//                         htmlFor="password"
//                         className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
//                       >
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         placeholder="Enter Your Password"
//                         className="w-full  h-[100%] outline-none text-[15px] font-Poppins font-[400] bg-transparent"
//                       />
//                     </div>
//                   </div>

//                   <small className="block text-[12px] font-Poppins mt-[20px]  text-[#7A7A7A] font-light capitalize tracking-[-0.4px]">
//                     Password must be:- Minimum 8 Characters
//                     <br /> (1 Uppercase, 1 Lowercase, 1 Special character & 1
//                     Digit)
//                   </small>
//                 </div>
//                 <div className=" absolute w-[90%] bottom-[40px] mt-[80px]">
//                   <div className="text-center mt-[10px]">
//                     <div className="flex items-center justify-center flex-col gap-6">
//                       <button
//                         type="submit"
//                         className="w-full bg-bill shadow-blue px-3 py-4 rounded-md font-Poppins text-white text-xl font-medium"
//                       >
//                         Register Now
//                       </button>
//                     </div>
//                   </div>
// <p className="text-sm sm:text-[14px] font-Poppins text-[#00000099] text-center font-light mt-auto lg:mt-[10px]">
//   By Logging in, I agree with Billwale’s
//   <a
//     href="https://billwale.com/privacypolicy?navigate=policy"
//     target="_blank"
//     className="text-[#F7941D]"
//     rel="noreferrer"
//   >
//     Privacy Policy
//   </a>
//   and
//   <a
//     href="https://billwale.com/privacypolicy?navigate=terms"
//     target="_blank"
//     className="text-[#F7941D]"
//     rel="noreferrer"
//   >
//     Terms of Service
//   </a>
// </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import logo from "../../../public/imges/123.png";
import mainpng from "../../../public/imges/loginPage.png";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerStep, setRegisterStep] = useState(1);

  const handleNextStep = () => {
    setRegisterStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="bg-white sm:bg-[#122f97] sm:py-11 h-[100vh] sm:px-16 overflow-hidden">
      <div className="login-bg flex h-full gap-14 overflow-hidden justify-center">
        <div className="hidden lg:block">
          <div className="mb-7">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className="text-4xl text-white font-medium font-Poppins capitalize text-center mb-">
            Welcome to Billwale Services
          </div>
          <div className="text-white capitalize font-Montserrat text-sm mt-[10px] mb-[18px]">
            Enter your email and password to login into your account
          </div>
          <div className="text-center">
            <img src={mainpng} alt="login" className="mx-auto" />
          </div>
        </div>

        <div className="flex items-center justify-center relative font-medium text-sm md:min-w-[621px] max-w-[621px]">
          {isRegistering ? (
            <div className="bg-white w-full sm:rounded-[29px] px-5 h-full sm:p-8 shadow-main flex flex-col overflow-auto">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-[40px] font-[500] font-Poppins text-[#163151]">
                  {registerStep === 1 ? "Sign Up" : "Create Password"}
                </h1>
                <p className="font-light text-sm sm:text-lg font-Poppins text-[#124077] text-opacity-[0.64]">
                  {registerStep === 1
                    ? "Enter your Mobile, Email, and Name to Register"
                    : "Create a secure password for your account"}
                </p>
              </div>

              <form>
                {registerStep === 1 && (
                  <div className="mt-14 space-y-8">
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="name"
                        className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="email"
                        className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="number"
                        className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="Enter Your Mobile Number"
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                  </div>
                )}

                {registerStep === 2 && (
                  <div className="mt-14 space-y-8">
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="password"
                        className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your Password"
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                    <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                      <label
                        htmlFor="confirmPassword"
                        className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Your Password"
                        className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                      />
                    </div>
                  </div>
                )}

                <div className="text-center absolute w-[90%] bottom-[40px] mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      if (registerStep === 1) {
                        handleNextStep();
                      } else {
                        alert("Registration Complete!");
                      }
                    }}
                    className="w-full bg-bill shadow-blue px-3 py-4 rounded-md font-Poppins text-white text-xl font-medium"
                  >
                    {registerStep === 1 ? "Go Ahead" : "Register Now"}
                  </button>
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
          ) : (
            <div className="bg-white w-full sm:rounded-[29px] px-5 h-full sm:p-8 shadow-main flex flex-col overflow-auto">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-[40px] font-[500] font-Poppins text-[#163151]">
                  Log In
                </h1>
                <p className="font-light text-sm sm:text-lg font-Poppins text-[#124077] text-opacity-[0.64]">
                  Enter your Mobile or Email and Password to log in
                </p>
              </div>

              <form>
                <div className="mt-14 space-y-8">
                  <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                    <label
                      htmlFor="username"
                      className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
                    >
                      Mobile or Email
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter Mobile Number or Email"
                      className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                    />
                  </div>
                  <div className="relative w-full border border-[#BCBCBC] py-4 px-4 rounded-lg flex items-center space-x-4 text-[#00000099]">
                    <label
                      htmlFor="password"
                      className="bg-white px-1 absolute left-[20px] top-0 transform -translate-y-1/2 font-Poppins font-[300] text-primary text-sm sm:text-base capitalize"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      className="w-full outline-none text-[15px] font-Poppins font-[400] bg-transparent"
                    />
                  </div>
                </div>

                <div className="absolute w-[100%] bottom-[40px]">
                  <p
                    onClick={() => setIsRegistering(true)}
                    className="text-[#00cb82] cursor-pointer font-Poppins text-xs sm:text-base"
                  >
                    New User Registration
                  </p>

                  <div className="text-center  w-[90%]  mt-5">
                    <button
                      type="button"
                      className="w-full bg-bill shadow-blue px-3 py-4 rounded-md font-Poppins text-white text-xl font-medium"
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
