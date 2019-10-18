import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { pirateTranslation } from './api-helper';


class App extends React.Component {
  constructor() {
    super();
  }


  async componentDidMount() {
    const response = await pirateTranslation()
  }



  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;