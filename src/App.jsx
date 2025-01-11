import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";


import ScrollToTop from "./Component/Scrooltop";
import LoginPage from "./pages/authPage/LoginPage";
import CreateCompany from "./pages/mainPages/CreateCompany";



function App() {
 

  return (
    <>
      <ScrollToTop />
      <div className="w-100 ease-soft-spring h-[100%] p-[15px] !bg-[#fbffff]  duration-1000 ">

        <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/create-account" element={<CreateCompany />} />
         
        </Routes>
      </div>
    </>
  );
}

export default App;
