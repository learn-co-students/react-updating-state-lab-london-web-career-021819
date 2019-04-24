import React from "react";

class YouTubeDebugger extends React.Component {
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
    this.changeRes = this.changeRes.bind(this)
  }

  changeRes () {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: "720p"}
      }
    })
  }

  changeBit = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBit}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.changeRes}>
          Change res
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
