import React from 'react';
import { Button } from '@material-ui/core';
import TitleBar from './TitleBar.jsx';
import NavDrawer from './NavDrawer/NavDrawer.jsx';
import { Router, Route, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const loginButton = (<Button color="inherit">Login</Button>);
const title = 'Media Org';

if (window.location.pathname === "/index.html") window.location.href = "/";
const Home = () => (<div>Home</div>);

class App extends React.Component {

    render() {
        return (<Router history={createBrowserHistory()}>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </Router>);
    }
};

export default App;
