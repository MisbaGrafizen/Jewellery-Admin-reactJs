// import React, { useEffect, useState } from "react";
// import "../src/App.css";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Cookies from "js-cookie";
// import ScrollToTop from "./Component/Scrooltop";
// import LoginPage from "./pages/authPage/LoginPage";
// import CreateCompany from "./pages/mainPages/CreateCompany";
// import PurchesInvoice from "./pages/purches/PurchesInvoice";
// import Login from "./pages/authPage/Login";
// import InventoryCreate from "./pages/mainPages/InventoryCreate";
// import LabourSetting from "./pages/mainPages/labourSetting/LabourSetting";
// import Scan from "./pages/scan";
// import InvoicePage from "./pages/purches/InvoicePage";
// import ProtectedRoute from "./Component/ProtectedRoute";

// function App() {


//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       Cookies.get("token");

//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setLoading(false);
//     };
//     fetchData();
//   }, []);


//   const token = Cookies.get("authToken");
//     useEffect(() => {
//       if (token && location.pathname === "/") {
//         window.history.replaceState({}, document.title, "/create-account");
//       }
//     }, [token, location]);
//   return (
//     <>
//       <ScrollToTop />
//       <div className="w-100 ease-soft-spring h-[100%]  !bg-[#F6FAFB]  duration-1000 ">
//         <Routes>
//           {/* <Route path="/" element={<LoginPage />} /> */}
//           <Route path="/" element={token ? <Navigate to="/create-account" /> :<Login />} />
//           <Route path="/create-account" element={<ProtectedRoute><CreateCompany /> </ProtectedRoute>} />
//           {/* purches screen */}
//           <Route path="/purches-invoice" element={<ProtectedRoute><PurchesInvoice /></ProtectedRoute>} />
//           <Route path="/inventory" element={<ProtectedRoute><InventoryCreate /></ProtectedRoute>} />
//           <Route path="/labour" element={<ProtectedRoute><LabourSetting /></ProtectedRoute>} />
//           <Route path="/invoice-bill/:id" element={<ProtectedRoute><InvoicePage /></ProtectedRoute>} />
//           <Route path="/scan" element={<Scan />}/>
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
        </Routes>
      </div>
    </>
  );
}

export default App;
