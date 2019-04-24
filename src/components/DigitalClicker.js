// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {

  state = {
    timesClicked:0
  }

  setClicks = () => {
    const clicks = this.state.timesClicked + 1
    this.setState({
      timesClicked: clicks
    })
  }

  render() {
    return <button onClick={this.setClicks} >{this.state.timesClicked}</button>
  }
}
