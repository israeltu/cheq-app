import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//import { listenerCount } from "cluster";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Login from "./components/login";
import KeywordListsTable from "./components/keywordListsTable";
import CreateKeywordList from "./components/createKeywordList";
import EditKeywordList from "./components/editKeywordList";
import VastsTable from "./components/vastsTable";
import CreateVast from "./components/createVast";
import EditVast from "./components/editVast";
import Home from "./components/home";
import { throws } from "assert";

require("../node_modules/bootstrap/dist/css/bootstrap.min.css");

class App extends Component {
  state = {
    isAuthed: false,
    homeMessage: "Welcome please login"
  };
  setHomeMessage = message => {
    this.setState({ homeMessage: message });
  };

  setAuthed = value => {
    this.setState({ isAuthed: value });
    console.log("user logged?" + this.state.isAuthed);
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar
            setAuthed={this.setAuthed}
            isAuthed={this.state.isAuthed}
            setMessage={this.setHomeMessage}
          />
          <br />
          <Route
            exact
            path="/home"
            render={() => <Home message={this.state.homeMessage} />}
          />

          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                setAuthed={this.setAuthed}
                setMessage={this.setHomeMessage}
              />
            )}
          />
          <Route
            exact
            path="/keywords"
            render={() =>
              this.state.isAuthed ? (
                <Redirect to="/keywords" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/vasts"
            render={() =>
              this.state.isAuthed ? (
                <Redirect to="/vasts" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/keywords" component={KeywordListsTable} />
          <Route path="/vasts" component={VastsTable} />
          <Route path="/createKeywordList" component={CreateKeywordList} />
          <Route path="/createVast" component={CreateVast} />
          <Route path="/editKeywordList/:id" component={EditKeywordList} />
          <Route path="/editVast/:id" component={EditVast} />
        </div>
      </Router>
    );
  }
}

export default App;
