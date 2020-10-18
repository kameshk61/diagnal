import React, { Component } from 'react'
import "./App.css";
import Movies from "./components/Movies/Movies";
import {Provider} from 'react-redux';
import store from "./store"

class App extends Component {

  render() {
    return (
      <Provider store={store}> 
        <Movies/>
      </Provider>
    )
  }
}

export default App


