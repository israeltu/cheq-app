import React, { Component } from "react";
import axios from "axios";

class EditVast extends Component {
  state = {
    id: 0,
    name: "",
    dateCreated: new Date(),
    description: "",
    active: false,
    continueOnClick: false,
    language: "",
    hideTimer: false,
    timerLocation: "",
    skipButtonLocation: "",
    hideAllUi: false,
    hidePlayButton: false,
    hideSkipButton: false,
    fraud: false,
    brandSafety: false,
    networkId: 0,
    adTagUrl: "",
    width: 0,
    height: 0,
    duration: 0,
    whiteListKeywords: "",
    serveOnUnmeasurable: false,
    isBranded: false,
    privateBrandSafety: false,
    serverMsg: ""
  };

  setServerMsg = msg => {
    this.setState({ serverMsg: msg });
  };

  render() {
    return (
      <div>
        <h3>Edit Vast</h3>
        <p>
          <div>{this.state.serverMsg}</div>
        </p>
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
            <label>Date created: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.dateCreated}
              onChange={this.onChangeDateCreated}
              disabled
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
            <label>Acitve?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.active}
              onChange={this.onChangeActive}
            />
          </div>
          <div className="form-group">
            <label>Continue on click?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.continueOnClick}
              onChange={this.onChangeContinueOnClick}
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
            <label>Hide Timer?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.hideTimer}
              onChange={this.onChangeHideTimer}
            />
          </div>
          <div className="form-group">
            <label>Timer Location: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.timerLocation}
              onChange={this.onChangeTimerLocation}
            />
          </div>
          <div className="form-group">
            <label>Skip Button- Location: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.skipButtonLocation}
              onChange={this.onChangeSkipButtonLocation}
            />
          </div>
          <div className="form-group">
            <label>Hide all UI?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.hideAllUi}
              onChange={this.onChangeHideAllUi}
            />
          </div>
          <div className="form-group">
            <label>Hide Play Button?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.hidePlayButton}
              onChange={this.onChangeHidePlayButton}
            />
          </div>
          <div className="form-group">
            <label>Hide Skip Button?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.hideSkipButton}
              onChange={this.onChangeHideSkipButton}
            />
          </div>
          <div className="form-group">
            <label>Fraud?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.fraud}
              onChange={this.onChangeFraud}
            />
          </div>
          <div className="form-group">
            <label>Brand Safety?: </label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.brandSafety}
              onChange={this.onChangeBrandSafety}
            />
          </div>
          <div className="form-group">
            <label>Network id:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.networkId}
              onChange={this.onChangeNetworkId}
            />
          </div>
          <div className="form-group">
            <label>Ad-tag URL:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.adTagUrl}
              onChange={this.onChangeAdTagUrl}
            />
          </div>
          <div className="form-group">
            <label>Width:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.width}
              onChange={this.onChangeWidth}
            />
          </div>
          <div className="form-group">
            <label>Height:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.height}
              onChange={this.onChangeHeight}
            />
          </div>
          <div className="form-group">
            <label>Duration:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>White list Keywords:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.whiteListKeywords}
              onChange={this.onChangeWhiteListKeywords}
            />
          </div>
          <div className="form-group">
            <label>Serve on unmeasurable?:</label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.serveOnUnmeasurable}
              onChange={this.onChangeServeOnUnmeasurable}
            />
          </div>
          <div className="form-group">
            <label>Is branded?:</label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.isBranded}
              onChange={this.onChangeIsBranded}
            />
          </div>
          <div className="form-group">
            <label>Private brand safety?:</label>
            <input
              type="checkbox"
              className="m-2"
              checked={this.state.privateBrandSafety}
              onChange={this.onChangePrivateBrandSafety}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit vast"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };
  onChangeDateCreated = e => {
    this.setState({ dateCreated: e.target.value });
  };
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };
  onChangeActive = e => {
    this.state.active
      ? this.setState({ active: false })
      : this.setState({ active: true });
  };

  onChangeContinueOnClick = e => {
    this.state.continueOnClick
      ? this.setState({ continueOnClick: false })
      : this.setState({ continueOnClick: true });
  };
  onChangeLanguage = e => {
    this.setState({ language: e.target.value });
  };
  onChangeHideTimer = e => {
    this.state.hideTimer
      ? this.setState({ hideTimer: false })
      : this.setState({ hideTimer: true });
  };
  onChangeTimerLocation = e => {
    this.setState({ timerLocation: e.target.value });
  };
  onChangeSkipButtonLocation = e => {
    this.setState({ skipButtonLocation: e.target.value });
  };
  onChangeHideAllUi = e => {
    this.state.hideAllUi
      ? this.setState({ hideAllUi: false })
      : this.setState({ hideAllUi: true });
  };
  onChangeHidePlayButton = e => {
    this.state.hidePlayButton
      ? this.setState({ hidePlayButton: false })
      : this.setState({ hidePlayButton: true });
  };
  onChangeHideSkipButton = e => {
    this.state.hideSkipButton
      ? this.setState({ hideSkipButton: false })
      : this.setState({ hideSkipButton: true });
  };
  onChangeFraud = e => {
    this.state.fraud
      ? this.setState({ fraud: false })
      : this.setState({ fraud: true });
  };
  onChangeBrandSafety = e => {
    this.state.brandSafety
      ? this.setState({ brandSafety: false })
      : this.setState({ brandSafety: true });
  };
  onChangeNetworkId = e => {
    this.setState({ networkId: e.target.value });
  };
  onChangeAdTagUrl = e => {
    this.setState({ adTagUrl: e.target.value });
  };
  onChangeWidth = e => {
    this.setState({ width: e.target.value });
  };
  onChangeHeight = e => {
    this.setState({ height: e.target.value });
  };
  onChangeDuration = e => {
    this.setState({ duration: e.target.value });
  };
  onChangeWhiteListKeywords = e => {
    this.setState({ whiteListKeywords: e.target.value });
  };
  onChangeServeOnUnmeasurable = e => {
    this.state.serveOnUnmeasurable
      ? this.setState({ serveOnUnmeasurable: false })
      : this.setState({ serveOnUnmeasurable: true });
  };
  onChangeIsBranded = e => {
    this.state.isBranded
      ? this.setState({ isBranded: false })
      : this.setState({ isBranded: true });
  };
  onChangePrivateBrandSafety = e => {
    this.state.privateBrandSafety
      ? this.setState({ privateBrandSafety: false })
      : this.setState({ privateBrandSafety: true });
  };

  onSubmit = e => {
    e.preventDefault();
    const vast = {
      name: this.state.name,
      date_created: this.state.dateCreated,
      description: this.state.description,
      active: this.state.active,
      continue_on_click: this.state.continueOnClick,
      language: this.state.language,
      hide_timer: this.state.hideTimer,
      timer_location: this.state.timerLocation,
      skip_button_location: this.state.skipButtonLocation,
      hide_all_ui: this.state.hideAllUi,
      hide_play_button: this.state.hidePlayButton,
      hide_skip_button: this.state.hideSkipButton,
      fraud: this.state.fraud,
      brand_safety: this.state.brandSafety,
      network_id: this.state.networkId,
      ad_tag_url: this.state.adTagUrl,
      width: this.state.width,
      height: this.state.height,
      duration: this.state.duration,
      whitelist_keywords: this.state.whiteListKeywords,
      serve_on_unmeasurable: this.state.serveOnUnmeasurable,
      is_branded: this.state.isBranded,
      private_brand_safety: this.state.privateBrandSafety
    };
    //console.log(vast);
    axios
      .put(
        "http://localhost:3000/api/vasts/" + this.props.match.params.id,
        vast,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("userAccessToken")
          }
        }
      )
      .then(() => this.props.history.push("/vasts"))
      .catch(error => this.setServerMsg(error.response.data));
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/vasts/" + this.props.match.params.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userAccessToken")
        }
      })
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          dateCreated: response.data.date_created,
          description: response.data.description,
          active: response.data.active,
          continueOnClick: response.data.continue_on_click,
          language: response.data.language,
          hideTimer: response.data.hide_timer,
          timerLocation: response.data.timer_location,
          skipButtonLocation: response.data.skip_button_location,
          hideAllUi: response.data.hide_all_ui,
          hidePlayButton: response.data.hide_play_button,
          hideSkipButton: response.data.hide_skip_button,
          fraud: response.data.fraud,
          brandSafety: response.data.brand_safety,
          networkId: response.data.network_id,
          adTagUrl: response.data.ad_tag_url,
          width: response.data.width,
          height: response.data.height,
          duration: response.data.duration,
          whiteListKeywords: response.data.whitelist_keywords,
          serveOnUnmeasurable: response.data.serve_on_unmeasurable,
          isBranded: response.data.is_branded,
          privateBrandSafety: response.data.private_brand_safety
        });
        console.log(response.data);
      })
      .catch(error => this.setServerMsg(error.response.data));
  }
}

export default EditVast;
