import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    hello: null
  }

  // automatically get called when rendered
  // set up API call to our Express server
  componentDidMount() {
    axios.get('/hello')
      // if hello is got, then pass hello to res.data
      // res.data is set automatically by the Express server
      .then(res => this.setState({hello: res.data}) )
      // else catch and output err in console
      .catch(err => console.log(err) )
  }

  render() {
    return (
      <div>
        {this.state.hello
          // if true, display hello
          // else, display null
          ? <div> {this.state.hello} </div>
          : null }
      </div>
    );
  }
}

export default App;
