import { useState } from "react";
import { employeesList } from "../employeesList";

export const employeesNumState = () => {
  const [employeesNum, setEmployeesNum] = useState(
    employeesList().employeesList.length
  );

  return {
    employeesNum,
    setEmployeesNum,
  };
};
