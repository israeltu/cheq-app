import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    id: 0,
    email: "",
    password: "",
    token: "",
    reEnterPassword: "",
    serverMsg: ""
  };

  setServerMsg = msg => {
    this.setState({ serverMsg: msg });
  };
  render() {
    return (
      <div>
        <h3>Please Insert Your Details</h3>
        <p>
          <div>{this.state.serverMsg}</div>
        </p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              required
              className="form-control"
              value={this.state.email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
      axios
        .post("http://localhost:3000/api/users/register", user)
        .then(response => {
          //this.setServerMsg(response.data);
          this.props.history.push("/keywords");
        })
        .catch(error => this.setServerMsg(error.response.data));
    } else {
      alert("passwords are not identical");
    }
  };
}

export default Register;
