import React from "react";
import { ListItemButtons } from "./ListItemButtons";

export const ListItem = ({ props }) => {
  return (
    <div
      className={`w-full h-15 bg-white ${
        props.isOnRise ? "text-yellow-400" : "text-black"
      } flex items-center text-2xl pl-5 border-b border-b-black`}
    >
      <p className="w-4/6">{props.employeeName}</p>
      <p className="w-1/6">{props.salary}$</p>
      <ListItemButtons />
    </div>
  );
};
