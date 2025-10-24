import React from "react";
import { FilterButtons } from "./FilterButtons";

export const SearchBlock = ({ state, setState }) => {
  return (
    <div className="w-full bg-gray-700 flex justify-center mb-10">
      <div className="w-[95%]">
        <input
          type="text"
          placeholder="Find an employee"
          className="w-full h-12 bg-white rounded-[5px] text-black p-5 mb-5 mt-5 focus:outline-none"
        />
        <FilterButtons state={state} setState={setState} />
      </div>
    </div>
  );
};
