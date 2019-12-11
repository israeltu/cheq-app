import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          CHEQ-APP
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
                Register
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/logout" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
