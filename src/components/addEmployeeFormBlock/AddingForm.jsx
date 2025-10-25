import React, { useRef } from "react";

export const AddingForm = ({ setEmplList }) => {
  const inputStyle =
    "w-2/6 h-10 mr-5 p-5 bg-white text-black focus:outline-none rounded-[5px]";
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  function onSubmitFunction() {
    setEmplList((prev) => {
      const newId = prev[prev.length - 1].id + 1;
      return [
        ...prev,
        {
          name: input1Ref.current.value,
          salary: input2Ref.current.value,
          isOnRise: false,
          id: newId,
        },
      ];
    });
  }
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmitFunction();
      }}
    >
      <input
        type="text"
        placeholder="Name"
        ref={input1Ref}
        className={inputStyle}
      />
      <input
        type="number"
        placeholder="Salary in $"
        ref={input2Ref}
        className={inputStyle}
      />
      <button className="ml-10 w-30 h-10 rounded-[5px] border border-white text-white bg-gray-700 hover:text-black hover:bg-white">
        Add
      </button>
    </form>
  );
};
