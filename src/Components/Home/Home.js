import React from 'react';
import storefront from '../../assets/images/oylc-store-front.jpg';

export default function Home() {
    return(
        <main className='home-wrapper'>
            <div className='home-image'>
                <img className='store-front-image' src={storefront} alt=''/ >
            </div>
            <div className='horizontal-line'></div>
            <section className='store-info'>
                <h5>
                    Sun - Mon <span>CLOSED</span> | Tues - Fri <span>10-6</span> | Sat <span>10-4</span>
                </h5>
                <h5>
                    625 Baxter Avenue | Louisville, KY 40204 
                </h5>
                <h5>
                    502.749.6775
                </h5>
                <div className='horizontal-line'></div>    
            </section>
            <section className='about-us'>
                <h1>About Us</h1>
                <p>
                On Your Left Cycles is a customer service oriented bicycle shop located at 625 Baxter Avenue in Louisville, Kentucky. We are a BICYCLE SHOP specializing in custom bikes or bikes for any type of rider, hand built wheels, all things bmx, and hard to find parts along with your every day items. Stop by today to see the difference. Don't forget to stay updated by following us on Social Media located below. 
                </p>
            </section>    
        </main>
    )
}