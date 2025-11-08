import React from "react";
import { ListItem } from "./ListItem";

export const ListBlock = ({
  filterState,
  employeesList,
  setEmployeesList,
  searchInputValue,
}) => {
  function onSearch(filteredList) {
    const searchedList = [];
    if (searchInputValue) {
      filteredList.forEach((e) => {
        if (e.name.toLowerCase().startsWith(searchInputValue.toLowerCase())) {
          searchedList.push(e);
        }
      });
      return searchedList;
    } else {
      return filteredList;
    }
  }
  function mkFilters(employees, filterButtons) {
    const filteredData = [];
    let id = "";
    filterButtons.forEach((e) => {
      if (e.isActive === true) {
        id = e.id;
      }
    });

    if (id === "all") {
      employees.forEach((e) => {
        filteredData.push(e);
      });
    } else if (id === "onRise") {
      employees.forEach((e) => {
        if (e.isOnRise) {
          filteredData.push(e);
        }
      });
    } else if (id === "more") {
      employees.forEach((e) => {
        if (e.salary >= 1000) {
          filteredData.push(e);
        }
      });
    } else {
      console.error("Undefined button id in mkFilters function");
    }

    return onSearch(filteredData);
  }

  function mkList(data) {
    const components = [];
    for (let i = 0; i < data.length; i++) {
      components.push(
        <ListItem props={data[i]} setEmployeesList={setEmployeesList} />
      );
    }
    return components;
  }

  return (
    <div className="w-full flex flex-col mb-10">
      {mkList(mkFilters(employeesList, filterState))}
    </div>
  );
};
