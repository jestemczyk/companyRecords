import React from "react";

export const FilterButtons = () => {
  const buttonDefStyle = "w-1/3 h-full cursor-pointer font-semibold";
  const buttonClickedStyle = "";

  const filterButtons = [
    { id: "all", text: "All employees", isActive: true },
    { id: "onRise", text: "On the rise", isActive: false },
    { id: "more", text: "Salary over 1000$", isActive: false },
  ];

  return (
    <div className="w-2/5 h-12 bg-white rounded-[5px] mb-7 border border-white">
      {filterButtons.map((item) => {
        return (
          <button
            className={`${buttonDefStyle} ${
              item.isActive
                ? "text-white border-r-white bg-gray-700"
                : "text-black border-r-black bg-white"
            } rounded-[5px]`}
            key={item.id}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
};
