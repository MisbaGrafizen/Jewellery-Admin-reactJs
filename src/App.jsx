import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";


import ScrollToTop from "./Component/Scrooltop";
import LoginPage from "./pages/authPage/LoginPage";
import CreateCompany from "./pages/mainPages/CreateCompany";
import PurchesInvoice from "./pages/purches/PurchesInvoice";
import Login from "./pages/authPage/Login";
import InventoryCreate from "./pages/mainPages/InventoryCreate";



function App() {
 

  return (
    <>
      <ScrollToTop />
      <div className="w-100 ease-soft-spring h-[100%]  !bg-[#fbffff]  duration-1000 ">

        <Routes>
         {/* <Route path="/" element={<LoginPage />} /> */}
         <Route path="/" element={<Login />} />
         <Route path="/create-account" element={<CreateCompany />} />
         {/* purches screen */}
         <Route path="/purches-invoice" element={<PurchesInvoice />} />
         <Route path="/inventory" element={<InventoryCreate />} />


        </Routes>
      </div>
    </>
  );
}

export default App;
