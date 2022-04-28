import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


// the following helps make an API request to the JSON
// placeholder endpoint with 'axios'
// can also achieve that with 'fetch'
const axiosInstance = axios.create({
  // with the following baseURL, we can write 
  // axiosInstance.get('/posts') in componentDidMount()
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

class App extends Component {
  state = {
    hello: null
  }

  // automatically get called when rendered
  // set up API call to our Express server
  componentDidMount() {
    // using 'axios'
    axiosInstance.get('/posts')
      // if hello is got, then pass hello to res.data
      // res.data is set automatically by the Express server
      // .then(res => this.setState({hello: res.data}) )
      .then(res => console.log(res.data))
      // else catch and output err in console
      .catch(err => console.log(err) )

    // // using fetch
    // this.asyncFunction();
  }

  // // use fetch to make the API request
  // // async + await can make the API request
  // asyncFunction = async () => {
  //   await fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  // }

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
