import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  state = {
      timesClicked:0
    }

  clicker = () => {
    const clicks = ++this.state.timesClicked
    this.setState({
      timesClicked: clicks
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.clicker}>{this.state.timesClicked}</button>
      </div>
    ) }

}
