import React from 'react';

import Drew from '../../assets/images/drew.jpg';
import Derek from '../../assets/images/derek.jpg';

export default function About() {
    return(
        <content className='about-wrapper'>
            <section className='about-us'>
                <h1>About Us</h1>
                <p>On Your Left Cycles was acquired by Drew Hartman and Derek Fetko in March of 2008. OYLC is located in the Irish/Phoenix Hill neighborhoods in Louisville, KY. Drew and Derek have a passion for all types of cycling, ranging from a child’s first balance bike to the serious weekend warrior. They are a full service shop that has decades of experience in their service department. Their skill set includes: custom bike builds, suspension service and custom wheels. They are certified from the Serotta International Cycling Institute(SICI) to provide custom bike fittings. They are passionate about building long term interpersonal relationships in the Louisville cycling community.</p>
            </section>
            <section className='shop-owners'>
                <h1>Shop Owners</h1>
                <div className='text-overlay'>
                    <h1 className='drew-text'>Drew Hartman</h1>
                </div>
                
                <img className='drew-image' src={Drew} alt='Drew Hartman' />

                 <div className='text-overlay'>
                    <h1 className='derek-text'>Derek Fetco</h1>
                </div>

                <img className='derek-image' src={Derek} alt='Derek Fetco' />

            </section>
        </content>
    )
}