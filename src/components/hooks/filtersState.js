import { useState } from "react";

export const filtersState = () => {
  const [filterButtons, setFilterButtons] = useState([
    { id: "all", text: "All employees", isActive: true },
    { id: "onRise", text: "On the rise", isActive: false },
    { id: "more", text: "Salary over 1000$", isActive: false },
  ]);

  return {
    filterButtons,
    setFilterButtons,
  };
};
