import React, { useState } from "react";
import Select from "react-select";
const ComboBox = () => {
  const option = [{ value: "Filter By", label: "Filter By" }];
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <Select defaultValue={option} options={options} />
    </div>
  );
};

export default ComboBox;
