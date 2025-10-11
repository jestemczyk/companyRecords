import React from "react";
import { MdDelete } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";

export const ListItemButtons = () => {
  const buttonsStyle =
    "w-9 h-9 bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400";
  return (
    <div className="flex gap-3">
      <button className={`${buttonsStyle} text-yellow-500`}>
        <FaCoins />
      </button>
      <button className={`${buttonsStyle} text-red-600`}>
        <MdDelete />
      </button>
    </div>
  );
};
