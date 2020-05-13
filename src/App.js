import React, { Component } from 'react'
import data from '../src/data/data.json'

import AboutMe from './components/about-me'
import Skills from './components/skills/index'

// Importing CSS
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends Component {
  constructor() {
    super()

    this.state = {}
}

  render () {
    return (
      <div>
        <AboutMe />
        <Skills />
      </div>
    )
  }

  componentDidMount () {
    this.setState({...data})
  }
}

export default App
