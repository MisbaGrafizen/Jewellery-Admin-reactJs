import React, { useState } from "react";
import Header from "../../Component/header/Header";
import SideBar from "../../Component/sidebar/SideBar";
import { motion, AnimatePresence } from "framer-motion";

export default function InventoryCreate() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [carat, setCarat] = useState([]);
  const [name, setName] = useState("");
  const [editingCarat, setEditingCarat] = useState(null);
  const [editCaratName, setEditCaratName] = useState("");
  const [caratIdToDelete, setCaratIdToDelete] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const firmTypes = [
    "Sole Proprietorship",
    "Partnership",
    "LLC",
    "Corporation",
  ];

  const handleSelect = (type) => {
    setSelectedType(type);
    setDropdownOpen(false);
  };

  // Handle adding a new category
  const handlePlusClick = () => {
    setInputVisible(true);
  };

  const handleKeyPress = (e, type) => {
    if (e.key === "Enter" && type === "carat") {
      if (name.trim()) {
        setCarat((prev) => [...prev, { id: Date.now(), name }]);
        setName("");
        setInputVisible(false);
      }
    }
  };

  // Handle double-click for editing a category
  const handleCategoryDoubleClick = (category, index) => {
    setEditingCarat(index);
    setEditCaratName(category.name);
  };

  // Save edited category
  const handleSaveEditCategory = (index, id) => {
    if (!editCaratName.trim()) {
      alert("Carat name cannot be empty.");
      return;
    }

    setCarat((prevCarat) =>
      prevCarat.map((carat, idx) =>
        idx === index ? { ...carat, name: editCaratName.trim() } : carat
      )
    );

    setEditingCarat(null); // Exit editing mode
    setEditCaratName(""); // Clear input
  };

  // Handle category deletion
  const handleOpenDeleteModal = (context, id) => {
    setDeleteContext(context);
    setCategoryIdToDelete(id);
  };

  const handleDeleteCategory = () => {
    if (categoryIdToDelete) {
      setCategories((prev) =>
        prev.filter((category) => category.id !== categoryIdToDelete)
      );
      setCaratIdToDelete(null);
    }
  };

  const handleCategoryClick = (id) => {
    setSelectedCaratIndex(id);
  };

  return (
    <>
      <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Inventory" />
          <div className="flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className="flex w-[100%] max-h-[93%] pb-[20px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
              <div className="flex flex-col gap-[25px] w-[100%]">
                <div className="flex flex-col gap-[6px] w-[100%]">
                  <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
                    Carats
                  </h1>
                  <div className="w-[100%] flex flex-col gap-[15px]">
                    <div className="flex gap-[20px]">
                      <div className="flex gap-[15px] items-center flex-wrap">
                        {!isInputVisible ? (
                          <div className="flex">
                            <div
                              onClick={handlePlusClick}
                              className="border-[1px] border-dashed border-[#0099dd] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                            >
                              <i className="text-[20px] font-[800] text-[#0099dd] fa-solid fa-plus"></i>
                            </div>
                          </div>
                        ) : (
                          <div className="flex border-[#0099dd] border-dashed border-[1px] rounded-[8px] overflow-hidden">
                            <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              onKeyDown={(e) => handleKeyPress(e, "carat")}
                              placeholder="Carats"
                              className="px-[10px] outline-none  font-Poppins py-[5px] md150:w-[120px] md11:w-[120px]"
                              autoFocus
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex-wrap flex relative gap-[10px]">
                        {Array.isArray(carat) ? (
                          carat.map((carat, index) => (
                            <div
                              key={carat?.id}
                              className="border-[1px] border-[#0099dd] font-[500] md150:text-[18px] md11:text-[15px]  w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                              onClick={() => handleCategoryClick(carat?.id)}
                              onDoubleClick={() =>
                                handleCategoryDoubleClick(carat, index)
                              }
                            >
                              {editingCarat === index ? (
                                <>
                                  <div className="flex flex-col justify-center">
                                    <input
                                      type="text"
                                      name="name"
                                      value={editCaratName}
                                      onChange={(e) =>
                                        setEditCaratName(e.target.value)
                                      }
                                      onKeyDown={(e) =>
                                        e.key === "Enter" &&
                                        handleSaveEditCategory(index, carat?.id)
                                      }
                                      className="text-center w-[100px] mt-[39px] bg-transparent border-none outline-none"
                                      autoFocus
                                    />
                                    <p
                                      className="text-red-500 hover:bg-red-100 bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px] font-Montserrat cursor-pointer mx-auto"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenDeleteModal(
                                          "category",
                                          category?.id
                                        );
                                      }}
                                    >
                                      Delete
                                    </p>
                                  </div>
                                </>
                              ) : (
                                <p>{carat.name}</p>
                              )}
                            </div>
                          ))
                        ) : (
                          <p> No Categories Available</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] w-[100%]">
                  <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
                    Metal
                  </h1>
                  <div className="w-[100%] flex flex-col gap-[15px]">
                    <div className="flex gap-[20px]">
                      <div className="flex gap-[15px] items-center flex-wrap">
                        {!isInputVisible ? (
                          <div className="flex">
                            <div
                              onClick={handlePlusClick}
                              className="border-[1px] border-dashed border-[#0099dd] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                            >
                              <i className="text-[20px] font-[800] text-[#0099dd] fa-solid fa-plus"></i>
                            </div>
                          </div>
                        ) : (
                          <div className="flex border-[#0099dd] border-dashed border-[1px] rounded-[8px] overflow-hidden">
                            <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              onKeyDown={(e) => handleKeyPress(e, "carat")}
                              placeholder="Carats"
                              className="px-[10px] outline-none  font-Poppins py-[5px] md150:w-[120px] md11:w-[120px]"
                              autoFocus
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex-wrap flex relative gap-[10px]">
                        {Array.isArray(carat) ? (
                          carat.map((carat, index) => (
                            <div
                              key={carat?.id}
                              className="border-[1px] border-[#0099dd] font-[500] md150:text-[18px] md11:text-[15px]  w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                              onClick={() => handleCategoryClick(carat?.id)}
                              onDoubleClick={() =>
                                handleCategoryDoubleClick(carat, index)
                              }
                            >
                              {editingCarat === index ? (
                                <>
                                  <div className="flex flex-col justify-center">
                                    <input
                                      type="text"
                                      name="name"
                                      value={editCaratName}
                                      onChange={(e) =>
                                        setEditCaratName(e.target.value)
                                      }
                                      onKeyDown={(e) =>
                                        e.key === "Enter" &&
                                        handleSaveEditCategory(index, carat?.id)
                                      }
                                      className="text-center w-[100px] mt-[39px] bg-transparent border-none outline-none"
                                      autoFocus
                                    />
                                    <p
                                      className="text-red-500 hover:bg-red-100 bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px] font-Montserrat cursor-pointer mx-auto"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenDeleteModal(
                                          "category",
                                          category?.id
                                        );
                                      }}
                                    >
                                      Delete
                                    </p>
                                  </div>
                                </>
                              ) : (
                                <p>{carat.name}</p>
                              )}
                            </div>
                          ))
                        ) : (
                          <p> No Categories Available</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] w-[100%]">
                  <h1 className="flex pl-[6px] font-Poppins text-[18px] text-[#427ae1]">
                    Product Category
                  </h1>
                  <div className="w-[100%] flex flex-col gap-[15px]">
                    <div className="flex gap-[20px]">
                      <div className="flex gap-[15px] items-center flex-wrap">
                        {!isInputVisible ? (
                          <div className="flex">
                            <div
                              onClick={handlePlusClick}
                              className="border-[1px] border-dashed border-[#0099dd] md150:text-[18px] md11:text-[15px] w-[140px] md11:w-[120px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                            >
                              <i className="text-[20px] font-[800] text-[#0099dd] fa-solid fa-plus"></i>
                            </div>
                          </div>
                        ) : (
                          <div className="flex border-[#0099dd] border-dashed border-[1px] rounded-[8px] overflow-hidden">
                            <input
                              type="text"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              onKeyDown={(e) => handleKeyPress(e, "carat")}
                              placeholder="Carats"
                              className="px-[10px] outline-none  font-Poppins py-[5px] md150:w-[120px] md11:w-[120px]"
                              autoFocus
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex-wrap flex relative gap-[10px]">
                        {Array.isArray(carat) ? (
                          carat.map((carat, index) => (
                            <div
                              key={carat?.id}
                              className="border-[1px] border-[#0099dd] font-[500] md150:text-[18px] md11:text-[15px]  w-fit px-[15px] font-Poppins md11:w-[100px] md150:h-[40px] md11:h-[35px] flex justify-center items-center rounded-[8px] cursor-pointer"
                              onClick={() => handleCategoryClick(carat?.id)}
                              onDoubleClick={() =>
                                handleCategoryDoubleClick(carat, index)
                              }
                            >
                              {editingCarat === index ? (
                                <>
                                  <div className="flex flex-col justify-center">
                                    <input
                                      type="text"
                                      name="name"
                                      value={editCaratName}
                                      onChange={(e) =>
                                        setEditCaratName(e.target.value)
                                      }
                                      onKeyDown={(e) =>
                                        e.key === "Enter" &&
                                        handleSaveEditCategory(index, carat?.id)
                                      }
                                      className="text-center w-[100px] mt-[39px] bg-transparent border-none outline-none"
                                      autoFocus
                                    />
                                    <p
                                      className="text-red-500 hover:bg-red-100 bg-white border-[1.5px] w-[123px] flex justify-center text-center mt-[10px] rounded-[5px] font-Montserrat cursor-pointer mx-auto"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenDeleteModal(
                                          "category",
                                          category?.id
                                        );
                                      }}
                                    >
                                      Delete
                                    </p>
                                  </div>
                                </>
                              ) : (
                                <p>{carat.name}</p>
                              )}
                            </div>
                          ))
                        ) : (
                          <p> No Categories Available</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex">
                  <div className="w-full h-full mx-auto rounded-[10px] border border-[#427ae1]   relative">
                    <div className="box-border border-[#427ae1]  w-full">
                      <div className="sticky top-0 flex  bs-mix-green border-[#427ae1] w-full">
                        <div className="flex justify-center text-center gap-[7px] py-[10px] border-r border-b border-[#427ae1]  items-center px-3 min-w-[6%] max-w-[6%]">
                          <input
                            type="checkbox"
                            id="check-all"
                            style={{ width: "15px", height: "15px" }}
                          />
                          <p className="w-fit  md11:text-[14px] md150:text-[18px] font-[600] text-[#000]  font-Poppins">
                            Sr.
                          </p>
                        </div>

                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#427ae1]  px-3 min-w-[17%] max-w-[88%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Carat
                          </p>
                        </div>
                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#427ae1]  px-3 min-w-[17%] max-w-[88%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Metal
                          </p>
                        </div>
                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#427ae1] px-3 min-w-[18%] max-w-[88%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Category
                          </p>
                        </div>
                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#427ae1] px-3 min-w-[17%] max-w-[15%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000] ">
                            Sub Category
                          </p>
                        </div>

                        <div className="flex justify-start text-center py-[10px] border-r border-b border-[#427ae1]  px-3 min-w-[15%] max-w-[14%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Vendor
                          </p>
                        </div>
                        <div className="flex justify-center text-center py-2 border-b border-[#427ae1]  px-3 min-w-[10%] max-w-[10%]">
                          <p className=" md11:text-[14px] md150:text-[18px] font-[600]  font-Poppins text-[#000]">
                            Add product
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="flex justify-center items-center text-center py-[10px] border-r border-b border-[#427ae1]  gap-[7px] px-3 min-w-[6%] max-w-[6%]">
                          <input
                            type="checkbox"
                            style={{ width: "15px", height: "15px" }}
                            className="ml-[-25%]"
                          />
                          <p className="font-[600] md11:text-[15px] md150:text-[17px] md11:mt-[5%] md150:mt-[2%]">
                            1
                          </p>
                        </div>

                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#427ae1]  px-3 min-w-[17%] max-w-[88%]">
                          <div
                            className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                            onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown on click
                          >
                            <input
                              type="text"
                              name="type"
                              id="type"
                              value={selectedType}
                              placeholder="select category"
                              className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                              readOnly
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
                                className="absolute top-[90%]  mt-1 bg-white w-[220px] border border-[#dedede] rounded-lg shadow-md z-10"
                              >
                                {firmTypes.map((type, index) => (
                                  <div
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                    onClick={() => handleSelect(type)}
                                  >
                                    {type}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#427ae1]  px-3 min-w-[17%] max-w-[88%]">
                        <div
                            className="relative w-full  rounded-lg  flex items-center space-x-4 text-[#00000099] cursor-pointer"
                            onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown on click
                          >
                            <input
                              type="text"
                              name="type"
                              id="type"
                              value={selectedType}
                              placeholder="select category"
                              className="w-full outline-none text-[15px] py-[9px] font-Poppins font-[400] bg-transparent cursor-pointer"
                              readOnly
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
                                className="absolute top-[90%]  mt-1 bg-white w-[220px] border border-[#dedede] rounded-lg shadow-md z-10"
                              >
                                {firmTypes.map((type, index) => (
                                  <div
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 font-Poppins  text-left cursor-pointer text-sm text-[#00000099]"
                                    onClick={() => handleSelect(type)}
                                  >
                                    {type}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#427ae1] px-3 min-w-[18%] max-w-[88%]">
                          <p className="md11:text-[14px] md150:text-[18px] font-[300]  font-Poppins"></p>
                        </div>
                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#427ae1] px-3 min-w-[17%] max-w-[15%]">
                          <p className="md11:text-[14px] md150:text-[18px] font-[300]  font-Poppins "></p>
                        </div>

                        <div className="flex justify-start md11:items-center text-center py-[10px] border-r border-b border-[#427ae1] px-3 min-w-[15%] max-w-[14%]"></div>
                        <div className="flex justify-center items-center gap-[15px] text-center py-2 border-b  border-[#427ae1] min-w-[10%] max-w-[9%]"></div>
                      </div>
                    </div>
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
