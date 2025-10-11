import React from "react";

export const FilterButtons = () => {
  const buttonDefStyle =
    "w-1/3 h-full cursor-pointer font-semibold bg-gray-700 text-white";
  const buttonClickedStyle = "";

  return (
    <div className="w-2/5 h-12 bg-white rounded-[5px] mb-7 border border-white">
      <button
        className={`${buttonDefStyle} rounded-l-[5px] border-r border-r-white`}
      >
        All employees
      </button>
      <button className={`${buttonDefStyle} border-r border-r-white`}>
        On the rise
      </button>
      <button className={`${buttonDefStyle} rounded-r-[5px]`}>
        Salary over 1000$
      </button>
    </div>
  );
};
