import React, { Component } from "react";
import joi from "joi-browser";
import Input from "./common/input";

class loginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: joi.string().min(2).max(5).required().label("Username"),
    password: joi.string().required(),
  };

  validate = () => {
    const { error } = joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema); // no { abortEarly: false } becouse i need only one schema which i focused
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} }); // if errors true(have any errors) or return embty object
    if (errors) return;

    // call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMassege = this.validateProperty(input);
    if (errorMassege) errors[input.name] = errorMassege;
    else delete errors[input.name]; //to delete value from errors object

    const account = this.state.account;
    account[input.name] = input.value; // e.currentTarget == e.target at jquery
    this.setState({ account, errors });
  };

  render() {
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={this.state.account.username}
            onChange={this.handleChange}
            error={this.state.errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={this.state.account.password}
            onChange={this.handleChange}
            error={this.state.errors.password}
          />

          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default loginForm;
