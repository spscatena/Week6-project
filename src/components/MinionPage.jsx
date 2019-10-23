import React from 'react'
import minion2 from '../minion2.png'
import { Animated } from "react-animated-css";





class MinionPage extends React.Component {
  componentWillUnmount() {
    this.props.clearMessages()
  }

  render() {
    return (
      <div>
        <div id="minionForm">
          <form onSubmit={this.props.handleSubmit}>
            <div id="minionTitle">
              <h2>Minion Translation</h2>
            </div>
            <div id="userInput">
              <textarea onChange={this.props.handleChange} name="userInput" type="text" placeholder="To be Translated" ></textarea>
            </div>
            <div>
              <input type="submit" value="Get Translation!" />
            </div>
            <div id="translation">
              <h3>{this.props.minionMessage}</h3>
            </div>
          </form>
        </div>
        {this.props.minionMessage !== "" &&
          <Animated animationIn="bounceInDown" animationOut="bounceInDown" isVisible={true} animationInDuration="900">
            <div id="minion2">
              <img src={minion2} />
            </div>
          </Animated>
        }
      </div>
    )
  }
}

export default MinionPage;


//https://www.npmjs.com/package/react-animated-css
//bounceInDown

