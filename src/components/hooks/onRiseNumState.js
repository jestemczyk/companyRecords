import { useState } from "react";
import { employeesList } from "./employeesList";

export const onRiseNumState = () => {
  const { emplList, setEmplList } = employeesList();
  const count = emplList.filter((emp) => emp.isOnRise).length;
  const [onRiseNum, setOnRiseNum] = useState(count);

  return {
    onRiseNum,
    setOnRiseNum,
  };
};
