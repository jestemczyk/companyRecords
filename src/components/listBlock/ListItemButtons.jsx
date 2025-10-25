import React from "react";
import { MdDelete } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";

export const ListItemButtons = ({ id, setEmployeesList }) => {
  const buttonsStyle =
    "w-9 h-9 bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400";
  function deleteEmployee() {
    setEmployeesList((prev) => prev.filter((item) => item.id !== id));
  }

  function makeOnRiseEmployee() {
    setEmployeesList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isOnRise: !item.isOnRise } : item
      )
    );
  }

  return (
    <div className="flex gap-3">
      <button
        className={`${buttonsStyle} text-yellow-500`}
        onClick={makeOnRiseEmployee}
      >
        <FaCoins />
      </button>
      <button
        className={`${buttonsStyle} text-red-600`}
        onClick={deleteEmployee}
      >
        <MdDelete />
      </button>
    </div>
  );
};
