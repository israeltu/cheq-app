import React, { Component } from "react";
import axios from "axios";
import Vast from "./vast.jsx";
import { Link } from "react-router-dom";

class VastsTable extends Component {
  state = {
    vasts: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/vasts")
      .then(res => {
        console.log(res.data[1]);
        this.setState({ vasts: res.data });
      })
      .catch(err => console.log(err));
  }

  OnDeleteVast = id => {
    axios
      .delete("http://localhost:3000/api/vasts/" + id)
      .then(res => console.log(res));

    this.setState({
      vasts: this.state.vasts.filter(v => v.id !== id)
    });
  };
  render() {
    return (
      <div>
        <h3>Listed Vasts</h3>
        <p>
          <Link
            to="/createVast/"
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
              <th>Name</th>
              <th>Date Created</th>
              <th>Description</th>
              <th>Active</th>
              <th>Continue On click</th>
              <th>Language</th>
              <th>Hide Timer</th>
              <th>Timer Location</th>
              <th>Skip Button Location</th>
              <th>Hide All UI</th>
              <th>Hide Play Button</th>
              <th>Hide Skip Button</th>
              <th>Fraud</th>
              <th>Brand Safety</th>
              <th>Network Id</th>
              <th>Ad Tag URL</th>
              <th>Width</th>
              <th>Height</th>
              <th>Duration</th>
              <th>White List Keywords</th>
              <th>Serve On Unmeasurable</th>
              <th>Is Branded</th>
              <th>Private Brand Safety</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.vasts.map(v => (
              <Vast key={v.id} onDelete={this.OnDeleteVast} vast={v} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VastsTable;
