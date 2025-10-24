import { TitleBlock } from "./components/titleBlock/TitleBlock";
import "./App.css";
import { SearchBlock } from "./components/searchBlock/SearchBlock";
import { ListBlock } from "./components/listBlock/ListBlock";
import { AddEmployeeForm } from "./components/addEmployeeFormBlock/AddEmployeeForm";
import { employeesNumState } from "./components/hooks/filtersState";

function App() {
  const { filterButtons, setFilterButtons } = employeesNumState();
  return (
    <div className="w-full h-full flex flex-col items-center">
      <TitleBlock />
      <SearchBlock state={filterButtons} setState={setFilterButtons} />
      <ListBlock state={filterButtons} />
      <AddEmployeeForm />
    </div>
  );
}

export default App;
