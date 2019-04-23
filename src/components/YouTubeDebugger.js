import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user : null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateBtnClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionBtnClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateBtnClick}/>
        <button className='resolution' onClick={this.handleResolutionBtnClick}/>
      </div>
    );
  }

}

export default YouTubeDebugger
