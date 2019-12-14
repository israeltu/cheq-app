import React, { Component } from "react";
import axios from "axios";

class EditKeywordList extends Component {
  state = {
    id: 0,
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
        <h3>Edit KeywordList</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Id: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.id}
              disabled
            />
          </div>
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
              value="Edit keywordList"
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
      numberOfKeywords: new String(e.target.value).split(",").length
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
      origin_keywords: JSON.parse(this.state.originKeywords),
      version: this.state.version,
      origin_version: this.state.originVersion
    };
    console.log(keywordList);
    axios
      .put(
        "http://localhost:3000/api/keywordlists/" + this.props.match.params.id,
        keywordList
      )
      .then(res => console.log(res.data));
    window.location = "/keywords";
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/api/keywordlists/" + this.props.match.params.id
      )
      .then(response => {
        this.setState({
          id: response.data.id,
          userId: response.data.user_id,
          name: response.data.name,
          description: response.data.description,
          keywords: JSON.stringify(response.data.keywords),
          numberOfKeywords: response.data.number_of_keywords,
          language: response.data.language,
          isPrivate: response.data.is_private,
          lastModified: response.data.last_modified,
          originKeywords: JSON.stringify(response.data.keywords),
          version: "",
          originVersion: response.data.version
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default EditKeywordList;
