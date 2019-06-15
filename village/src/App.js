import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    this.getSmurfs()
  }

  getSmurfs = async () => {
    try {
      const smurfs = (await axios.get('http://localhost:3333/smurfs')).data
      this.setState({ smurfs, error: '' })
    } catch (error) {
      this.setState({ error: error.toString() })
    }
  }

  addSmurf = async (e, smurf) => {
    e.preventDefault()
    const containsEmptyValues = Object.values(smurf).some(value => value === '')
    if (!containsEmptyValues) {
      try {
        const smurfs = (await axios.post('http://localhost:3333/smurfs', {
          ...smurf
        })).data
        this.setState({ smurfs, error: '' })
      } catch (error) {
        this.setState({ error: error.toString() })
      }
    } else {
      this.setState({
        error: 'Error: smurf form data is missing some or all data!'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <SmurfForm handleSubmit={this.addSmurf} />
        {this.state.error && <p>{this.state.error}</p>}
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
