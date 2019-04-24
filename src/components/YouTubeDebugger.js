// Code YouTubeDebugger Component Here
import React, { Component } from "react";
class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }
  handleOnClickBit = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleOnClickRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: "720p" }
      }
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClickBit} className="bitrate">
          BITRATE
        </button>
        <button onClick={this.handleOnClickRes} className="resolution">
          RESOLUTION
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
