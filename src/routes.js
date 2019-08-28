import React from 'react';
import { Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomeComponent from './templates/home'
import About from './templates/about'
import Whatido from './templates/what-i-do'
import Gallery from './templates/gallery'
import Contact from './templates/contact'

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

const routes = (
    <React.Fragment>
        <Route exact path={`${process.env.PUBLIC_URL}`} component={ HomeComponent } />
        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={ About } />
        <Route exact path={`${process.env.PUBLIC_URL}/what-i-do`} component={ Whatido } />
        <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={ Gallery } />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ Contact } />
    </React.Fragment>
);

export default routes;