import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

class CreateKeywordList extends Component {
  state = {
    userId: jwt_decode(localStorage.getItem("userAccessToken")).id,
    name: "",
    description: "",
    keywords: {},
    numberOfKeywords: 0,
    language: "",
    isPrivate: false,
    lastModified: new Date(),
    originKeywords: {},
    version: 0,
    originVersion: 0,
    serverMsg: ""
  };
  setServerMsg = msg => {
    this.setState({ serverMsg: msg });
  };

  render() {
    console.log();
    return (
      <div>
        <h3>Create new KeywordList</h3>
        <p>
          <div>{this.state.serverMsg}</div>
        </p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Id: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.userId}
              onChange={this.onChangeUserId}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Keywords: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.keywords}
              onChange={this.onChangeKeywords}
            />
          </div>
          <div className="form-group">
            <label>Number of keywords: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.numberOfKeywords}
              onChange={this.onChangeNumberOfKeywords}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Language: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.language}
              onChange={this.onChangeLanguage}
            />
          </div>
          <div className="form-group">
            <label>Is private?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.isPrivate}
              onChange={this.onChangeIsPriavte}
            />
          </div>
          <div className="form-group">
            <label>Last modified: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.lastModified}
              onChange={this.onChangeLastModified}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Origin keywords: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.originKeywords}
              onChange={this.onChangeOriginKeywords}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Version: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.version}
              onChange={this.onChangeVersion}
            />
          </div>
          <div className="form-group">
            <label>Origin Version: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.originVersion}
              onChange={this.onChangeOriginVersion}
              disabled
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create keywordList"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }

  onChangeUserId = e => {
    this.setState({ userId: e.target.value });
  };
  onChangeName = e => {
    this.setState({ name: e.target.value });
  };
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };
  onChangeKeywords = e => {
    this.setState({
      numberOfKeywords: !e.target.value ? 0 : e.target.value.split(",").length
    });
    this.setState({ keywords: e.target.value });
  };
  onChangeNumberOfKeywords = e => {
    this.setState({ numberOfKeywords: e.target.value });
  };
  onChangeLanguage = e => {
    this.setState({ language: e.target.value });
  };
  onChangeIsPriavte = e => {
    this.state.isPrivate
      ? this.setState({ isPrivate: false })
      : this.setState({ isPrivate: true });
  };
  onChangeLastModified = e => {
    this.setState({ lastModified: e.target.value });
  };
  onChangeOriginKeywords = e => {
    this.setState({ originKeywords: e.target.value });
  };
  onChangeVersion = e => {
    this.setState({ version: e.target.value });
  };
  onChangeOriginVersion = e => {
    this.setState({ originVersion: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const keywordList = {
      user_id: this.state.userId,
      name: this.state.name,
      description: this.state.description,
      keywords: JSON.parse(this.state.keywords),
      number_of_keywords: this.state.numberOfKeywords,
      language: this.state.language,
      is_private: this.state.isPrivate,
      last_modified: new Date(),
      origin_keywords: JSON.parse(this.state.keywords),
      version: this.state.version,
      origin_version: this.state.version
    };
    console.log(keywordList);
    axios({
      method: "post",
      url: "http://localhost:3000/api/keywordlists",
      data: keywordList,
      headrs: {
        Authorization: "Bearer " + localStorage.getItem("userAccessToken")
      }
    })
      .then(() => this.props.history.push("/keywords"))
      .catch(error => this.setServerMsg(error.response.data));
  };
}

export default CreateKeywordList;
