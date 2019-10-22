import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { pirateTranslation } from './api-helper';
import { chefTranslation } from './api-helper';
import { minionTranslation } from './api-helper';
import Header from './components/Header';
import Home from './components/Home';
import MinionPage from './components/MinionPage';
import PiragePage from './components/PiratePage';
import ChefPage from './components/ChefPage';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      minionKey: "XWqJ_ruAxXIWJfpGNR_zBweF",
      pirateMessage: '',
      chefMessage: '',
      minionMessage: '',
      formData: {
        name: ''
      }
    }
  }


  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleSubmitPirate = async (event) => {
    event.preventDefault();
    const response = await pirateTranslation(this.state.formData.userInput)
    const pirateMessage = response.data.contents.translated;
    console.log(pirateMessage)
    this.setState({
      pirateMessage: pirateMessage
    })
  }

  handleSubmitChef = async (event) => {
    event.preventDefault();
    const response = await chefTranslation(this.state.formData.userInput)
    const chefMessage = response.data.contents.translated;
    console.log(chefMessage)
    this.setState({
      chefMessage: chefMessage
    })
  }


  handleSubmitMinion = async (event) => {
    event.preventDefault();
    const response = await minionTranslation(this.state.formData.userInput)
    const minionMessage = response.data.contents.translated;
    console.log(minionMessage)
    this.setState({
      minionMessage: minionMessage
    })
  }



  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <Route exact path="/" render={() => (<Home />)} />
          <Route path="/pirate" render={() => (<PiragePage handleSubmit={this.handleSubmitPirate} handleChange={this.handleChange} pirateMessage={this.state.pirateMessage} />)} />
          <Route path="/chef" render={() => (<ChefPage handleSubmit={this.handleSubmitChef} handleChange={this.handleChange} chefMessage={this.state.chefMessage} />)} />
          <Route path="/minion" render={() => (<MinionPage handleSubmit={this.handleSubmitMinion} handleChange={this.handleChange} minionMessage={this.state.minionMessage} />)} />

        </main>
      </div>
    );
  }
}

export default App;