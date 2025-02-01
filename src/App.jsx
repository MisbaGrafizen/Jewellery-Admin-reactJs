// import React, { useEffect, useState } from "react";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Cookies from "js-cookie";
// import ScrollToTop from "./Component/Scrooltop";
// import Login from "./pages/authPage/Login";
// import CreateCompany from "./pages/mainPages/CreateCompany";
// import PurchesInvoice from "./pages/purches/PurchesInvoice";
// import InventoryCreate from "./pages/mainPages/InventoryCreate";
// import LabourSetting from "./pages/mainPages/labourSetting/LabourSetting";
// import Scan from "./pages/scan";
// import InvoicePage from "./pages/purches/InvoicePage";
// import ProtectedRoute from "./Component/ProtectedRoute";
// import StockAddPage from "./pages/mainPages/StockMain/StockAddPage";
// import DashBoard from "./pages/dashBoard/DashBoard";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const token = Cookies.get("authToken");
//   const location = useLocation();

//   useEffect(() => {
//     const initializeApp = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a loading delay
//       setLoading(false);
//     };

//     initializeApp();
//   }, []);

//   useEffect(() => {
//     if (token && location.pathname === "/") {
//       window.history.replaceState({}, document.title, "/create-account");
//     }
//   }, [token, location]);

//   if (loading) {
//     return <div></div>; // Show a loading spinner or placeholder
//   }

//   return (
//     <>
//       <ScrollToTop />
//       <div className="w-100 ease-soft-spring h-[100%] !bg-[#F6FAFB] duration-1000">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               Cookies.get("authToken") ? (
//                 <Navigate to="/create-account" />
//               ) : (
//                 <Login />
//               )
//             }
//           />

//           <Route
//             path="/create-account"
//             element={
//               <ProtectedRoute>
//                 <CreateCompany />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/purches-invoice"
//             element={
//               <ProtectedRoute>
//                 <PurchesInvoice />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/inventory"
//             element={
//               <ProtectedRoute>
//                 <InventoryCreate />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/labour"
//             element={
//               <ProtectedRoute>
//                 <LabourSetting />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/invoice-bill/:id"
//             element={
//               <ProtectedRoute>
//                 <InvoicePage />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/scan" element={<Scan />} />
//           <Route path="/add-stock" element={<StockAddPage />} />
//  <Route path="/dashboard" element={<DashBoard />} /> 
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import ScrollToTop from "./Component/Scrooltop";
import LoginPage from "./pages/authPage/LoginPage";
import CreateCompany from "./pages/mainPages/CreateCompany";
import PurchesInvoice from "./pages/purches/PurchesInvoice";
import Login from "./pages/authPage/Login";
import InventoryCreate from "./pages/mainPages/InventoryCreate";
import LabourSetting from "./pages/mainPages/labourSetting/LabourSetting";
import Scan from "./pages/scan";
import InvoicePage from "./pages/purches/InvoicePage";
import ProtectedRoute from "./Component/ProtectedRoute";
import StockAddPage from "./../src/pages/mainPages/StockMain/StockAddPage"
import DashBoard from "./pages/dashBoard/DashBoard";
import CreateBarCodeStock from "./pages/NewStockCreate/CreateBarCodeStock";
import CreateNonbarStock from "./pages/NewStockCreate/CreateNonbarStock";

function App() {

  return (
    <>
      <ScrollToTop />
      <div className="w-100 ease-soft-spring h-[100%]  !bg-[#F6FAFB]  duration-1000 ">
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateCompany /> } />
          {/* purches screen */}
          <Route path="/purches-invoice" element={<PurchesInvoice />} />
          <Route path="/inventory" element={<InventoryCreate />} />
          <Route path="/labour" element={<LabourSetting />} />

          <Route path="/invoice-bill/:id" element={<InvoicePage />} />
          <Route path="/scan" element={<Scan />}/>
          <Route path="/add-stock" element={<StockAddPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* New Page Of stock create */}
          <Route path="/barcode-stock" element={<CreateBarCodeStock />} />
          <Route path="/nonbarcode-stock" element={<CreateNonbarStock />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
