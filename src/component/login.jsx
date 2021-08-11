import React, { Component } from "react";
import joi from "joi-browser";
import Form from "./common/form";

class loginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: joi.string().min(2).max(5).required().label("Username"),
    password: joi.string().required(),
  };

  doSubmit = () => {
    // call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password")}

          {this.renderButton("login")}
        </form>
      </div>
    );
  }
}

export default loginForm;
