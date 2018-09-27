import React, { Component } from 'react';
import logo from '../../assets/images/oylc-gear-logo.png';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return(
            <div>
            <header className="header">
              <Link to='/'><img src={logo} className="logo" alt="logo" /></Link>
              <h1 className="App-title">On Your Left Cycles</h1>
            </header>
           
          </div>
        )
    }
}

export default Header;