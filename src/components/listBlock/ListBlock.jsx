import React from "react";
import { ListItem } from "./ListItem";
import data from "/data.json";

export const ListBlock = ({ state }) => {
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

    return filteredData;
  }
  function mkList(data) {
    const components = [];
    for (let i = 0; i < data.length; i++) {
      components.push(<ListItem props={data[i]} />);
    }
    return components;
  }

  return (
    <div className="w-full flex flex-col mb-10">
      {mkList(mkFilters(data.employees, state))}
    </div>
  );
};
