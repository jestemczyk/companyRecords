import { TitleBlock } from "./components/titleBlock/TitleBlock";
import "./App.css";
import { SearchBlock } from "./components/searchBlock/SearchBlock";
import { ListBlock } from "./components/listBlock/ListBlock";
import { AddEmployeeForm } from "./components/addEmployeeFormBlock/AddEmployeeForm";
import { employeesNumState } from "./components/hooks/filtersState";
import { employeesList } from "./components/hooks/employeesList";

function App() {
  const { filterButtons, setFilterButtons } = employeesNumState();
  const { emplList, setEmplList } = employeesList();
  return (
    <div className="w-full h-full flex flex-col items-center">
      <TitleBlock />
      <SearchBlock
        filterState={filterButtons}
        setFilterState={setFilterButtons}
      />
      <ListBlock filterState={filterButtons} employeesList={emplList} />
      <AddEmployeeForm />
    </div>
  );
}

export default App;
