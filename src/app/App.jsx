import React from 'react';
import { Router, Route, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Button } from '@material-ui/core';
import NavDrawer from './NavDrawer/NavDrawer.jsx';
import Home from './Home.jsx';

const loginButton = (<Button color="inherit">Login</Button>);
const title = 'Media Org';

if (window.location.pathname === "/index.html") window.location.href = "/";


class App extends React.Component {

    render() {
        return (<Router history={createBrowserHistory()}>
            <NavDrawer>
                <Route exact path="/" component={Home} />
            </NavDrawer>
        </Router>);
    }
};

export default App;
