import React, { Component } from "react";
import axios from "axios";

class CreateKeywordList extends Component {
  state = {
    userId: 0,
    name: "",
    description: "",
    keywords: {},
    numberOfKeywords: 0,
    language: "",
    isPrivate: false,
    lastModified: new Date(),
    originKeywords: {},
    version: "",
    originVersion: 0
  };
  render() {
    return (
      <div>
        <h3>Create new KeywordList</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Id: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.userId}
              onChange={this.onChangeUserId}
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
              required
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
      userId: this.state.userId,
      name: this.state.name,
      description: this.state.description,
      keywords: this.state.keywords,
      numberOfKeywords: this.state.numberOfKeywords,
      language: this.state.language,
      isPrivate: this.state.isPrivate,
      lastModified: this.state.lastModified,
      originKeywords: this.state.originKeywords,
      version: this.state.version,
      originVersion: this.state.originVersion
    };
    console.log(keywordList);
    axios
      .post("http://localhost:3000/api/keywordlists")
      .then(res => console.log(res.data));
    window.location = "/";
  };

  /*
componentDidMount() {
  axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })

}*/
}

export default CreateKeywordList;
