import React, { PropTypes } from 'react';
//import { Router, browserHistory } from 'react-router';
import Sample from './src/common/test.jsx';
import DataBindingTest from './src/common/databindingtest.jsx';
import App from './src/app.jsx';
import HomePage from './src/components/home/homepage.jsx';
import TopNav from './src/common/topnav.jsx';;
//import routes from './src/routes.jsx';
import { Link, IndexRoute, BrowserRouter, Route, Layout } from 'react-router-dom'


                //<ul>
                //    <li><Link to="/">Home</Link></li>
                //    <li><Link to="/about">About</Link></li>
                //    <li><Link to="/topics">Topics</Link></li>
                //</ul>

ReactDOM.render(
    <div>
        <BrowserRouter>

            <div>
                <div className="header ms-bgcolor-black ms-fontColor-neutralLight ms-font-l">
                    My Application
                    </div>

                <div className="contentWrapper">
                <TopNav/>


                

                <div className="maincontent ms-bgcolor-neutralLight">
                    <Route exact path="/" component={HomePage} />    
                </div>
                    </div>
                
            </div>
        </BrowserRouter>
    </div>,
    document.getElementById('app')
);

