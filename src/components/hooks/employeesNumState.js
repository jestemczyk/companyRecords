import { useState } from "react";
import { employeesList } from "./employeesList";

export const employeesNumState = () => {
  const { emplList, setEmplList } = employeesList();
  const [employeesNum, setEmployeesNum] = useState(emplList.length);

  return {
    employeesNum,
    setEmployeesNum,
  };
};
