import { useState } from "react";
import data from "/data.json";

export const employeesList = () => {
  const [emplList, setEmplList] = useState(data.employees);

  return {
    emplList,
    setEmplList,
  };
};
