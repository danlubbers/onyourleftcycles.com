import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services.js';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
    </Switch>
)