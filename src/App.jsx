import { TitleBlock } from "./components/titleBlock/TitleBlock";
import "./App.css";
import { SearchBlock } from "./components/searchBlock/SearchBlock";
import { ListBlock } from "./components/listBlock/ListBlock";
import { AddEmployeeForm } from "./components/addEmployeeFormBlock/AddEmployeeForm";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <TitleBlock />
      <SearchBlock />
      <ListBlock />
      <AddEmployeeForm />
    </div>
  );
}

export default App;
