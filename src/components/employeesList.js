import data from "/data.json";

export const employeesList = () => {
  const employeesList = data.employees;

  return {
    employeesList,
  };
};
