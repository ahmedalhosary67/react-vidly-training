import React from "react";

const Input = ({ name, label, onChange, value, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
        id={name}
      ></input>
      { error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
