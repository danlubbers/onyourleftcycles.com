import React, { Component } from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import routes from './routes';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="enitre-app-wrapper">
          <Helmet>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\
              <meta name="theme-color" content="#000000" />
              <meta name="author" content="On Your Left Cycles" />
              <meta name="description" content="On Your Left Cycles is a customer service oriented bicycle shop located at 625 Baxter Avenue in Louisville, Kentucky. We are a BICYCLE SHOP specializing in custom bikes or bikes for any type of rider, hand built wheels, all things bmx, and hard to find parts along with your every day items. Stop by today to see the difference." />
              <meta name="keywords" content="on, your, left, cycles, on your left cycles, cycle, bicycle, bicycles, louisville, ky, kentucky, shop, service, repair, 625, baxter, ave, fitbike, fitbikeco, kona, norco, scott, surly, chris, king, chris king, industry, nine, industry nine, s&m, helmet, performance, bike, bikes, road, mtn, mountain, bmx, cyclocross, product, products, cherokee, park, trail, trails, O'bannon, o bannon, waverly, fat bike, custom, customize, customization, hand built, hand, built" />
              <title>On Your Left Cycles, Louisville, KY</title>
              <link rel="alternate" hreflang="en" href="http://onyourleftcycles.net" />
              <link rel="canonical" href="http://onyourleftcycles.net" />
          </Helmet>
          
          <header className='header-app-wrapper'>
              <Header />
          </header>

          <main>
              {routes}
          </main>

          <footer className='footer-app-wrapper'>
              <Footer />
          </footer>
      </div>
    );
  }
}

export default App;
