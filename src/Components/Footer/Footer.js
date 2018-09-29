import React from 'react';

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';


export default function Footer() {
    return(
        <div>
            <footer>
                <div className='footer-content'>
                    <section className='social-media'> 
                        <div className='facebook-icon'>
                            <a href='https://www.facebook.com/On-Your-Left-Cycles-169162313839/' target='_blank' rel="noopener noreferrer" alt='facebook' aria-label='facebook'><FaFacebook /></a>
                        </div>
                        <div className='instagram-icon'>
                            <a href='https://www.instagram.com/onyourleftcycles/' target='_blank' rel="noopener noreferrer" alt='instagram' aria-label='instagram'><FaInstagram /></a>
                        </div>
                        <div className='twitter-icon'>
                            <a href='https://twitter.com/oylc' target='_blank' rel="noopener noreferrer" alt='twitter' aria-label='twitter'><FaTwitterSquare /></a>
                        </div>
                    </section>

                    <div className='copyright-wrapper'>
                        <h1 className='oylc-copyright'>@ 2018 On Your Left Cycles | SITE BY <a className='danlubbers' href="http://danlubbers.com">DAN LUBBERS </a></h1>
                    </div>
                </div>
            </footer>
        </div>
    )
}