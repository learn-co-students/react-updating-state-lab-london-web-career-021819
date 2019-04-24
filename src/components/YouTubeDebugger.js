import React, { Component }  from 'react'

export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      } } }

  clicked = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      } } ) }

  clicked2 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video:{
          ...this.state.settings.video,
          resolution: '720p'
      } } } ) }

render() {
  return (
        <div>
          <button className='bitrate' onClick={this.clicked}> Change bitrate </button>
          <button className='resolution' onClick={this.clicked2}> Resolution </button>
        </div>
      ) }


}
