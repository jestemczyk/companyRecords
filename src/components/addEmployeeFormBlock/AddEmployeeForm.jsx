import React from "react";
import { AddingForm } from "./AddingForm";

export const AddEmployeeForm = () => {
  return (
    <div className="w-full bg-gray-700 p-7">
      <h2 className="mb-5 text-white text-3xl font-semibold">
        Add new employee
      </h2>
      <AddingForm />
    </div>
  );
};
