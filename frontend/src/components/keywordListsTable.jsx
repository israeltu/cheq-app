import React, { Component } from "react";
import axios from "axios";
import KeywordList from "../components/keywordList";
import { Link } from "react-router-dom";

class KeywordListTable extends Component {
  state = {
    keywordLists: [],
    name: "keywords"
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/keywordlists")
      .then(res => {
        console.log(res.data[1]);
        this.setState({ keywordLists: res.data });
      })
      .catch(err => console.log(err));
  }

  OnDeleteKeywordList = id => {
    axios
      .delete("http://localhost:3000/api/keywordlists/" + id)
      .then(res => console.log(res));

    this.setState({
      keywordLists: this.state.keywordLists.filter(k => k.id !== id)
    });
  };

  render() {
    return (
      <div>
        <h3>Listed Keywordlists</h3>
        <p>
          <Link
            to="/createKeywordList/"
            className="btn btn-primary btn-sm"
            role="button"
          >
            Create new
          </Link>
        </p>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Keywords</th>
              <th>Number Of Keywords</th>
              <th>Language</th>
              <th>Is Private</th>
              <th>Last Modified</th>
              <th>Origin Keywords</th>
              <th>Version</th>
              <th>Origin Version</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.keywordLists.map(k => (
              <KeywordList
                key={k.id}
                onDelete={this.OnDeleteKeywordList}
                keywordlist={k}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default KeywordListTable;
