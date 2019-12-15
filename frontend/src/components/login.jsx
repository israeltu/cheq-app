import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    serverMsg: ""
  };

  setServerMsg = msg => {
    this.setState({ serverMsg: msg });
  };

  render() {
    return (
      <div>
        <h3>System Login</h3>
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
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
        Don't have an acccount?
        <Link to="/register"> Sign up here</Link>
      </div>
    );
  }
  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };
  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
    axios
      .post("http://localhost:3000/api/users/login", user)
      .then(res => {
        localStorage.setItem("userAccessToken", res.data.accessToken);
      })
      .then(() => {
        this.props.setAuthed(true);
        this.props.setMessage("user connected");
        this.props.history.push("/home");
      })
      .catch(error => this.setServerMsg(error.response.data));
  };
}

export default Login;
