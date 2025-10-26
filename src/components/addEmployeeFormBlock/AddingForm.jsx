import React, { useRef, useState } from "react";

export const AddingForm = ({ setEmplList }) => {
  const inputStyle =
    "w-2/6 h-10 mr-5 p-5 bg-white text-black focus:outline-none rounded-[5px]";
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const [numInputValue, setNumInputValue] = useState("");
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
    input1Ref.current.value = "";
    setNumInputValue("");
  }
  const handleChangeNumInput = (e) => {
    const input = e.target.value;
    const toNumbers = input.replace(/\D/g, "");
    setNumInputValue(toNumbers);
  };
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        if (input1Ref.current.value && input2Ref.current.value) {
          onSubmitFunction();
        }
      }}
    >
      <input
        type="text"
        placeholder="Name"
        ref={input1Ref}
        className={inputStyle}
      />
      <input
        placeholder="Salary in $"
        ref={input2Ref}
        className={inputStyle}
        value={numInputValue}
        onChange={handleChangeNumInput}
      />
      <button className="ml-10 w-30 h-10 rounded-[5px] border border-white text-white bg-gray-700 hover:text-black hover:bg-white">
        Add
      </button>
    </form>
  );
};
