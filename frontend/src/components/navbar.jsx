import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  logOut = () => {
    if (this.props.isAuthed) {
      axios
        .delete("http://localhost:3000/api/users/logout", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("userAccessToken")
          }
        })
        .then(res => {
          localStorage.removeItem("userAccessToken");
          console.log("user logout");
        })
        .then(() => {
          this.props.setAuthed(false);
          this.props.setMessage("Welcome please login");
          window.location = "/home";
        })
        .catch();
    } else {
      this.props.setMessage("Welcome please login");
      window.location = "/home";
    }
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to={"/home"} className="navbar-brand">
          <img
            src={require("../resources/logo.png")}
            alt=""
            height="50"
            width="150"
          />
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/vasts" className="nav-link">
                Vasts
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/keywords" className="nav-link">
                Keywords
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="nav-link">
                Sign up
              </Link>
            </li>
            <li className="navbar-item">
              <a href="#" onClick={this.logOut} className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
