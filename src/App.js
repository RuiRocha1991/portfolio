import React, { Component } from 'react';
import data from '../src/data/data.json'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {}
}

  render () {
    console.log('render')
    return (
      <div>
        {this.state.personalInfo && this.state.personalInfo.name}
      </div>
    )
  }

  componentDidMount () {
    this.setState({...data})
  }
}

export default App;
