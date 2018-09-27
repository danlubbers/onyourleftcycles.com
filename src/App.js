import React, { Component } from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="enitre-app-wrapper">
          <Helmet>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\
              <meta name="theme-color" content="#000000" />
              <meta name="author" content="On Your Left Cycles" />
              <meta name="description" content="" />
              <meta name="keywords" content="s" />
              <title>On Your Left Cycles, Louisville, KYr</title>
              <link rel="alternate" hreflang="en" href="https://onyourleftcycles.net" />
              <link rel="canonical" href="https://onyourleftcycles.net" />
          </Helmet>
        <div className='header-app'>
          <Header />
        </div>
        <div className='footer-app'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
