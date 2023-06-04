import React from "react";
import Select from "react-select";
const ComboBox = () => {
  const option = [{ value: "Filter By", label: "Filter By" }];
  const options = [
    { value: "Full time", label: "Full Time Job" },
    { value: "Remote", label: "Remote" },
    { value: "High Salary", label: "High Salary" },
    { value: "Top Companies", label: "Top Companies" },
  ];
  // handle get selected value 
  const handleGetSelectedValue = (event) => {
    console.log(event.value);
  
  }

  return (
    <div>
      <Select onChange={handleGetSelectedValue} defaultValue={option} options={options} />
    </div>
  );
};

export default ComboBox;
