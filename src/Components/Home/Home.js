import React from 'react';
import storefront from '../../assets/images/oylc-store-front.jpg';

export default function Home() {
    return(
        <div className='home-wrapper'>
            <img className='store-front-image' src={storefront} alt=''/ >
        </div>
    )
}