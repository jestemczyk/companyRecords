import React from "react";
import { employeesNumState } from "../hooks/employeesNumState";
import { onRiseNumState } from "../hooks/onRiseNumState";

export const TitleBlock = () => {
  const { employeesNum, setEmployeesNum } = employeesNumState();
  const { onRiseNum, setOnRiseNum } = onRiseNumState();
  return (
    <div className="w-full bg-gray-700 p-7 text-2xl font-normal mb-10">
      <h1 className="text-3xl font-semibold mb-3">Company employee records</h1>
      <p>Total number of employees: {employeesNum}</p>
      <p>Will recive bonus: {onRiseNum}</p>
    </div>
  );
};
