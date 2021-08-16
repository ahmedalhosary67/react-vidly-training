import React from "react";
import joi from "joi-browser";
import Form from "./common/form"; 

class Register extends Form {
    state = {
        data: { username: "", password: "", name: "" },
        errors: {},
    };

    schema = {
        username: joi.string().email().required().label("Uesrname"),
        password: joi.string().min(5).required().label("Password"),
        name: joi.string().required().label("Name"),
    };

    doSubmit = () => {
        // call the server
        console.log("Submitted");
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default Register;
