import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { pirateTranslation } from './api-helper';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }


  async componentDidMount() {
    const response = await pirateTranslation()
    this.setState({
      message: response.data.contents.translated
    })
  }



  render() {
    return (
    
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;