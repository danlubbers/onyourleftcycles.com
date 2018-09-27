import React, { Component } from 'react';
import logo from '../../assets/images/oylc-gear-logo.png';

class Header extends Component {
    render() {
        return(
            <div>
            <header className="header">
              <img src={logo} className="logo" alt="logo" />
              <h1 className="App-title">On Your Left Cycles</h1>
            </header>
           
          </div>
        )
    }
}

export default Header;