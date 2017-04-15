import React, { PropTypes } from 'react';
import { Layout, IndexRoute, Router, Route, Switch, BrowserRouter} from 'react-router';
import HomePage from './components/home/homepage.jsx';

class App extends React.Component {
    render() {
        return (

            <div>
                                <p>header</p>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
