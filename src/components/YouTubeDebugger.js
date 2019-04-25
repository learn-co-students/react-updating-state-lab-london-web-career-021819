// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  bitrateTwelve = () => {
    this.setState({
      settings:{
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    })
  }

  resolution720 = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateTwelve}>Bitrate</button>
        <button className="resolution" onClick={this.resolution720}>Resolution</button>
      </div>
    )
  }

}

export default YouTubeDebugger;
