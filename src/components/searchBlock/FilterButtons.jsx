import React, { useState } from "react";

export const FilterButtons = ({ filterState, setFilterState }) => {
  const buttonDefStyle = "w-1/3 h-full cursor-pointer font-semibold";
  const buttonClickedStyle = "";

  function changeFilter(clickedId) {
    setFilterState((prev) =>
      prev.map((button) => ({ ...button, isActive: button.id === clickedId }))
    );
  }

  return (
    <div className="w-2/5 h-12 bg-white rounded-[5px] mb-7 border border-white">
      {filterState.map((item) => {
        return (
          <button
            className={`${buttonDefStyle} ${
              item.isActive
                ? "text-white border-r-white bg-gray-700"
                : "text-black border-r-black bg-white"
            } rounded-[5px]`}
            key={item.id}
            onClick={() => changeFilter(item.id)}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
};
