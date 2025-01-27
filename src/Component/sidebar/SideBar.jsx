import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import inventory from "../../../public/imges/sidebar/inventory.png";
import sales from "../../../public/imges/sidebar/sales.png";
import settings from "../../../public/imges/sidebar/settings.png";
import purches from "../../../public/imges/sidebar/purches.png";
import reports from "../../../public/imges/sidebar/reports.png";
import expan from "../../../public/imges/sidebar/expan.png";

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Inventory", icon: inventory, path: "/inventory" },
    { name: "Sales", icon: sales,path: "/add-stock"  },
    { name: "Purchases", icon: purches, path: "/purches-invoice" },
    { name: "Settings", icon: settings, path: "/create-account" },
    { name: "Reports", icon: reports, path: "/labour" },
    { name: "Expans", icon: expan, },
  ];

  return (
    <>
      <div className="flex w-[120px] rounded-[10px] py-[10px] overflow-hidden bs-spj  h-[86vh]">
        <div className="flex flex-col gap-[20px] w-[100%]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex w-[100%] flex-col text-[13px] gap-[3px] items-center font-Poppins py-[5px] mx-auto justify-center h-fit cursor-pointer ${
                location.pathname === item.path
                  ? "bg-[#F68D18] text-[#fff]"
                  : "bg-transparent text-[#ffffff]"
              }`}
              onClick={() => navigate(item.path)}
            >
              <img className="w-[35px] h-[35px]" src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
