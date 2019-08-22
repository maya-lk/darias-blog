import React from 'react';
import { Route } from 'react-router-dom';

import HomeComponent from './templates/home'
import About from './templates/about'
import Whatido from './templates/what-i-do'
import Gallery from './templates/gallery'
import Contact from './templates/contact'

const routes = (
    <React.Fragment>
        <Route path="/" component={ HomeComponent } exact />
        <Route path="/about" component={ About } />
        <Route path="/what-i-do" component={ Whatido } />
        <Route path="/gallery" component={ Gallery } />
        <Route path="/contact" component={ Contact } />
    </React.Fragment>
);

export default routes;