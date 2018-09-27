import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />

       <Footer />
      </div>
    );
  }
}

export default App;
