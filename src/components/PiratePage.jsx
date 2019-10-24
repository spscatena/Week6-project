import React from 'react'
import { Link } from 'react-router-dom';
import pirateship from '../pirate-ship-animation.png';
import { Animated } from "react-animated-css";



class PiratePage extends React.Component {
  componentWillUnmount() {
    this.props.clearMessages()
  }

  render() {
    return (
      <div>
        <div id="pirateForm">
          <form onSubmit={this.props.handleSubmit}>
            <div id="pirateTitle">
              <h2>Pirate Translation</h2>
            </div>
            <div id="userInput">
              <textarea onChange={this.props.handleChange} name="userInput" type="text" placeholder="To be Translated" ></textarea>
            </div>
            <div>
              <input type="submit" value="Get Translation!" />
            </div>
            <div id="translation">
              <h3>{this.props.pirateMessage}</h3>
            </div>
          </form>
        </div>
        {this.props.pirateMessage !== "" &&
          <Animated animationIn="fadeInRight" animationOut="fadeInRight" isVisible={true} animationInDuration="2000">
            <div id="pirate-shipt">
              <img src={pirateship} />
            </div>
          </Animated>
        }
      </div>
    )
  }
}

export default PiratePage;


