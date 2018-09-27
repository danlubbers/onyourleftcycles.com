import React, { Component } from 'react';
import logo from '../../assets/images/oylc-gear-logo.png';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

class Header extends Component {
    render() {
        return(
            <div>
                <header>
                    <div className='logo-content'>
                        <Link to='/'><img src={logo} className="logo" alt="logo" /></Link>
                        <h1 className="App-title">On Your Left Cycles</h1>
                    </div>
                    <div className='hamburger-wrapper'>
                        <button className='hamburgerBtn'><FaBars/></button>
                    </div>
                </header>
           
          </div>
        )
    }
}

export default Header;