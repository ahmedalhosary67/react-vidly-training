import React, { Component } from "react";
import Input from "./input";

const SelectBox = ({ value, onChange }) => {
  return (
    <Input
      name="query"
      type="text"
      value={value}
      className="form-control my-3"
      placeholder="search..."
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SelectBox;
