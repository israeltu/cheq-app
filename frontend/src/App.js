import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { listenerCount } from "cluster";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Login from "./components/login";
import KeywordListsTable from "./components/keywordListsTable";
import CreateKeywordList from "./components/createKeywordList";
import EditKeywordList from "./components/editKeywordList";
import VastsList from "./components/vastsTable";
import CreateVast from "./components/createVast";
import EditVast from "./components/editVast";
import Home from "./components/home";

require("../node_modules/bootstrap/dist/css/bootstrap.min.css");

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/keywords" component={KeywordListsTable} />
        <Route path="/vasts" component={VastsList} />
        <Route path="/createKeywordList" component={CreateKeywordList} />
        <Route path="/createVast" component={CreateVast} />
        <Route path="/editKeywordList/:id" component={EditKeywordList} />
        <Route path="/editVast/:id" component={EditVast} />
        <Route path="" component={Home} />
      </div>
    </Router>
  );
}

export default App;
