import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import inventory from "../../../public/imges/sidebar/inventory.png";
import sales from "../../../public/imges/sidebar/sales.png";
import settings from "../../../public/imges/sidebar/settings.png";
import purches from "../../../public/imges/sidebar/purches.png";
import reports from "../../../public/imges/sidebar/reports.png";
import expan from "../../../public/imges/sidebar/expan.png";
import dashboard from "../../../public/imges/sidebar/dashBoard.png";
import newsales from "../../../public/imges/sidebar/newsales.png"
import order from "../../../public/imges/sidebar/order.png"
export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: dashboard, path: "/dashboard" },
    { name: "Day Book ", icon: expan, path: "/daybook" },
    { name: "Inventory", icon: inventory, path: "/inventory" },
    { name: "Stock", icon: sales,path: "/add-stock"  },
    { name: "Purchases", icon: purches, path: "/purches-invoice" },
    { name: "Sales", icon: newsales, path: "/sales-invoice" },
    { name: "Settings", icon: settings, path: "/create-account" },
    { name: "Labour", icon: reports, path: "/labour" },
    { name: "Orders", icon: order, path: "/orders" },
  ];

  return (
    <>
      <div className="flex min-w-[110px] max-w-[120px] overflow-y-auto rounded-[10px] py-[10px]  profile-box1 h-[86vh]">
        <div className="flex flex-col gap-[7px] w-[100%]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex w-[100%] flex-col text-[10px] gap-[3px] items-center font-Poppins py-[5px] mx-auto justify-center h-fit cursor-pointer ${
                location.pathname === item.path
                  ? "bg-[#F68D18] text-[#fff]"
                  : "bg-transparent text-[#ffffff]"
              }`}
              onClick={() => navigate(item.path)}
            >
              <img className="w-[27px] h-[27px]" src={item.icon} alt={item.name} />
              <p className=" flex text-[12px]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
