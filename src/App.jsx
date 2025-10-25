import { TitleBlock } from "./components/titleBlock/TitleBlock";
import "./App.css";
import { SearchBlock } from "./components/searchBlock/SearchBlock";
import { ListBlock } from "./components/listBlock/ListBlock";
import { AddEmployeeForm } from "./components/addEmployeeFormBlock/AddEmployeeForm";
import { filtersState } from "./components/hooks/filtersState";
import { employeesList } from "./components/hooks/employeesList";

function App() {
  const { filterButtons, setFilterButtons } = filtersState();
  const { emplList, setEmplList } = employeesList();
  return (
    <div className="w-full h-full flex flex-col items-center">
      <TitleBlock emplList={emplList} />
      <SearchBlock
        filterState={filterButtons}
        setFilterState={setFilterButtons}
      />
      <ListBlock
        filterState={filterButtons}
        employeesList={emplList}
        setEmployeesList={setEmplList}
      />
      <AddEmployeeForm setEmplList={setEmplList} />
    </div>
  );
}

export default App;
