import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ""
    }
  }
  
  updateState = (query) => {(
    this.setState(()=>({
      query: query
    }))
  )}
  
  render() {
    
    const { query } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={query} onChange={(event)=> this.updateState(event.target.value)} />
          <p className="echo">Echo:{}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
