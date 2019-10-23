import React from 'react'
import { Link } from 'react-router-dom'
import chefHome2 from '../chefHome2.png'
import { Animated } from "react-animated-css";



class ChefPage extends React.Component {
  componentWillUnmount() {
    this.props.clearMessages()
  }

  render() {
    return (
      <div id="chefPage">
        <div id="chefForm">
          <form onSubmit={this.props.handleSubmit}>
            <div id="chefTitle">
              <h2>Sweedish Chef Translation</h2>
            </div>
            <div id="userInput">
              <textarea onChange={this.props.handleChange} name="userInput" type="text" placeholder="To be Translated" ></textarea>
            </div>
            <div>
              <input type="submit" value="Get Translation!" />
            </div>
            <div id="translation">
              <h3>{this.props.chefMessage}</h3>
            </div>
          </form>
        </div>
        {this.props.chefMessage !== "" &&
          <Animated animationIn="zoomInUp" animationOut="zoomInUp" isVisible={true} animationInDuration="900">
            <div id="chefHome2">
              <img src={chefHome2} />
            </div>
          </Animated>
        }
      </div>
    )
  }
}

export default ChefPage;