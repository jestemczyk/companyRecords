import React from "react";

export const TitleBlock = ({ emplList }) => {
  return (
    <div className="w-full bg-gray-700 p-7 text-2xl font-normal mb-10">
      <h1 className="text-3xl font-semibold mb-3">Company employee records</h1>
      <p>Total number of employees: {emplList.length}</p>
      <p>Will recive bonus: {emplList.filter((emp) => emp.isOnRise).length}</p>
    </div>
  );
};
