import React from 'react';

export default function Contact() {
    return(
        <main className='contact-wrapper'>
            <section className='contact'>
                <h1>Contact Us</h1>
                    <ul>
                        <li>
                            <span className='contact-title'>Email:</span><span> info@onyourleftcycles.net</span>
                        </li>
                        <li>
                            <span className='contact-title'>Phone:</span><span> 502.749.6775</span>
                        </li>
                        <li>
                            <span className='contact-title'>Mailing Address:</span><span> 625 Baxter Ave. Louisville, KY 40204</span>
                        </li>
                    </ul>
                    <h5>* Please note that the quickest way to reach us is by phone *</h5>
            </section>
        </main>
    )
}