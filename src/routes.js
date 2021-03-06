import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services.js';
import Contact from './Components/Contact/Contact.js';
import Blog from './Components/Blog/Blog.js';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
    </Switch>
)