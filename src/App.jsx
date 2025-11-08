import { useState } from "react";

import { TitleBlock } from "./components/titleBlock/TitleBlock";
import "./App.css";
import { SearchBlock } from "./components/searchBlock/SearchBlock";
import { ListBlock } from "./components/listBlock/ListBlock";
import { AddEmployeeForm } from "./components/addEmployeeFormBlock/AddEmployeeForm";
import data from "/data.json";

function App() {
  const [emplList, setEmplList] = useState(data.employees);
  const [filterButtons, setFilterButtons] = useState([
    { id: "all", text: "All employees", isActive: true },
    { id: "onRise", text: "On the rise", isActive: false },
    { id: "more", text: "Salary over 1000$", isActive: false },
  ]);
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <div className="w-full h-full flex flex-col items-center">
      <TitleBlock emplList={emplList} />

      <SearchBlock
        filterState={filterButtons}
        setFilterState={setFilterButtons}
        setSearchInputValue={setSearchInputValue}
      />

      <ListBlock
        filterState={filterButtons}
        employeesList={emplList}
        setEmployeesList={setEmplList}
        searchInputValue={searchInputValue}
      />

      <AddEmployeeForm setEmplList={setEmplList} />
    </div>
  );
}

export default App;
