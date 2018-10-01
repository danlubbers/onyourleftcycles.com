import React from 'react';

import Drew from '../../assets/images/drew-low-res.jpg';
import Derek from '../../assets/images/derek-low-res.jpg';

export default function About() {
    return(
        <content className='about-wrapper'>
            <section className='about-us'>
                <h1>About Us</h1>
                <p>On Your Left Cycles was acquired by Drew Hartman and Derek Fetko in March of 2008. OYLC is located in the Irish/Phoenix Hill neighborhoods in Louisville, KY. Drew and Derek have a passion for all types of cycling, ranging from a child’s first balance bike to the serious weekend warrior. They are a full service shop that has decades of experience in their service department. Their skill set includes: custom bike builds, suspension service and custom wheels. They are certified from the Serotta International Cycling Institute(SICI) to provide custom bike fittings. They are passionate about building long term interpersonal relationships in the Louisville cycling community.</p>
            </section>
            <div className='horizontal-line'></div>
            <section className='shop-owners'>
                <h1>Shop Owners</h1>

                <div className='drew-content'>
                    <div className='text-overlay'>
                        <h1 className='drew-text'>Drew Hartman</h1>
                    </div>
                    <img className='drew-image' src={Drew} alt='Drew Hartman' />

                    <p>With an affinity toward road riding and custom built bikes to match, it’s no secret that Drew is On Your Left’s go to for all things classic. Having grown up in Louisville, KY, he gained entry into the world of bicycles like so many others out there, on a BMX bike. Coupled by his early attendance at the high volume shop, St. Matthews Schwinn, Drew’s passion for working with his hands and doing it better every time took hold. Making the progression to big kid bikes was only natural.</p>

                    <p>Over the past 15 or so years Drew continues to refine his methods and always looks forward to the next build. The enthusiasm toward wheel building and helping customers build their dream bikes shows through in every specifically torqued bolt and his drive for excellence is never forgone on even the most basic of repairs.</p>

                    <p>Drew isn’t only focused on beautiful handbuilt bicycles, but also can be found in the kitchen preparing gourmet meals with the same attention to detail. Additionally, he’s probably following you on Instagram given you have a pulse.</p>

                 </div>
                 <div className='horizontal-line'></div>
                 <div className='derek-content'>
                    <div className='text-overlay'>
                        <h1 className='derek-text'>Derek Fetko</h1>
                    </div>
                    <img className='derek-image' src={Derek} alt='Derek Fetko' />

                    <p>
                    Having grown up in Southern Indiana, Derek was a tried and true BMX die hard. Luckily for all of us, not only has he since branched out with his riding disciplines but also upgraded to a home address in Louisville. While over in the dark side of Louisville, Derek gained entry into the bike shop world at the infamous Jeffersonville Schwinn. While we’re sure you’ve heard the stories, we can only assure you they’re all true. Unfortunately Jeff Schwinn was not meant to be, but that didn’t deter Derek from continuing to polish his skill set as a mechanic.</p>

                    <p>Nowadays you’ll find Derek instinctively occupying On Your Left’s first bench during business hours and surely out pedaling two wheels whenever the shop is closed. Whether it’s MTB, BMX, road or a commute to the pub, you’re sure to see the man on a bike everywhere from here to Alabama, California or Washington State. If there’s riding to be had, Derek will take whatever is on the menu. While we’re on the subject of menu’s, it’s been said the fastest way to your mechanic’s heart is with a 6 pack of beer, if you planning on sweet talking Derek, just remember it’s time to make the donuts.
                    </p>

                </div>

            </section>
        </content>
    )
}