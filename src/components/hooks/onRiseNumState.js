import { useState } from "react";
import { employeesList } from "../employeesList";

export const onRiseNumState = () => {
  const count = employeesList().employeesList.filter(
    (emp) => emp.isOnRise
  ).length;
  const [onRiseNum, setOnRiseNum] = useState(count);

  return {
    onRiseNum,
    setOnRiseNum,
  };
};
