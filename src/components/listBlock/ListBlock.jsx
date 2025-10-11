import React from "react";
import { ListItem } from "./ListItem";

export const ListBlock = () => {
  return (
    <div className="w-full flex flex-col mb-10">
      <ListItem
        props={{ employeeName: "Jonh", salary: 1000, isOnRise: true }}
      />
      <ListItem
        props={{ employeeName: "Alex", salary: 1400, isOnRise: false }}
      />
    </div>
  );
};
