import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    id: 0,
    email: "",
    password: "",
    token: "",
    reEnterPassword: ""
  };
  render() {
    return (
      <div>
        <h3>Please Insert Your Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Passsword: </label>
            <input
              type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label>Re-Enter Passsword: </label>
            <input
              type="password"
              required
              className="form-control"
              value={this.state.reEnterPassword}
              onChange={this.onChangeReEnterPassword}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };
  onChangeReEnterPassword = e => {
    this.setState({ reEnterPassword: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.password === this.state.reEnterPassword) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      console.log(user);
      axios
        .post("http://localhost:3000/api/users/register", user)
        .then(res => console.log(res.data));
      window.location = "/";
    } else {
      alert("passwords are not identical");
    }
  };
}

export default Register;
