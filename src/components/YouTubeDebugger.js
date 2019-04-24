// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

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

  setBitrate= () => {
    this.setState({
      settings:
      Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  setResolution = () => {
    this.setState({
      settings:
      Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
    })
  }
  render(){
    return(
      <div>
      <button className="resolution" onClick={this.setResolution}>set Resolution</button>
      <button className="bitrate" onClick={this.setBitrate}>Set Bitrate</button>
    </div>)
  }

}
