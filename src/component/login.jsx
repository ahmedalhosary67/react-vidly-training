import React, { Component } from "react";

class loginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // call the server
    console.log("Submitted");
  };

  handleChange = (e) => {
    const account = this.state.account;
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="username">User Name</label>
            <input
              autoFocus
              name="username"
              value={this.state.account.username}
              type="text"
              class="form-control"
              id="username"
              onChange={this.handleChange}
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              class="form-control"
              id="password"
              onChange={this.handleChange}
              value={this.state.account.password}
            ></input>
          </div>

          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default loginForm;
