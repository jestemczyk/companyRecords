import React from "react";
import { ListItem } from "./ListItem";
import data from "/data.json";

export const ListBlock = () => {
  function mkList(data) {
    const components = [];
    for (let i = 0; i < data.employees.length; i++) {
      components.push(<ListItem props={data.employees[i]} />);
    }
    return components;
  }

  return <div className="w-full flex flex-col mb-10">{mkList(data)}</div>;
};
