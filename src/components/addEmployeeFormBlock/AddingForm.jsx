import React from "react";

export const AddingForm = () => {
  const inputStyle =
    "w-2/6 h-10 mr-5 p-5 bg-white text-black focus:outline-none rounded-[5px]";
  return (
    <form>
      <input type="text" placeholder="Name" className={inputStyle} />
      <input type="text" placeholder="Salary in $" className={inputStyle} />
      <button className="ml-10 w-30 h-10 rounded-[5px] border border-white text-white bg-gray-700 hover:text-black hover:bg-white">
        Add
      </button>
    </form>
  );
};
