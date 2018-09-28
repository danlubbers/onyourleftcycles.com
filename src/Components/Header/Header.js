import React, { Component } from 'react';
import logo from '../../assets/images/oylc-gear-logo.png';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            showMobile: false
        };

        this.handleClickMobile = this.handleClickMobile.bind(this);
    }

    handleClickMobile() {
        this.setState({showMobile: !this.state.showMobile})
    }

    render() {
        let { showMobile } = this.state;
        let mobileDropDown = showMobile ? 'slide-mobile slide-mobile-position' : 'slide-mobile';
        return(
            <div>
                <header>
                    <div className='logo-content'>
                        <Link to='/'><img src={logo} className="logo" alt="logo" /></Link>
                        <h1 className="App-title">On Your Left Cycles</h1>
                    </div>

                    <div className='hamburger-wrapper'>
                        <button className='hamburgerBtn' onClick={this.handleClickMobile}><FaBars/></button>
                        <div className={mobileDropDown}>
                            <ul className='mobile-content-container'>
                            <div className='horizontal-line'></div>
                                <li>Products</li>
                            <div className='horizontal-line'></div>
                                <li>Services</li>
                            <div className='horizontal-line'></div>
                                <li>Rental</li>
                            <div className='horizontal-line'></div>
                                <li>Custom Builds</li>
                            <div className='horizontal-line'></div>       
                                <li>Sale</li>
                            <div className='horizontal-line'></div>
                                <li>Blog</li>
                            <div className='horizontal-line'></div>
                                <Link to='/about'><li>About</li></Link>
                            <div className='horizontal-line'></div>
                                <li>Staff</li>
                            <div className='horizontal-line'></div>
                                <li>Contact US</li>
                            </ul>

                        </div>
                    </div>

                </header>
          </div>
        )
    }
}

export default Header;