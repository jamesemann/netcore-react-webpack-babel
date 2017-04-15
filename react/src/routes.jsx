import React from 'react';
//import { Route, IndexRoute } from 'react-router';
import { IndexRoute, BrowserRouter, Route } from 'react-router-dom'

import App from './app.jsx';
import HomePage from './components/home/HomePage.jsx';

class Routes extends React.Component {
    render() {
        return (
            <Route path="/" component={App}>
                
            </Route>
        );
    }
}

export default Routes;