import React from 'react';
import { Button } from '@material-ui/core';
import TitleBar from './TitleBar.jsx';
import NavDrawer from './NavDrawer/NavDrawer.jsx';

const loginButton = (<Button color="inherit">Login</Button>);
const title = 'Media Org';

class App extends React.Component {
    render() {
        return (<div>
            {/* <TitleBar title={title} navButtonAction={toggleDrawer}>
                {loginButton}
                </TitleBar> */}
            <NavDrawer />
        </div>);
    };
};

export default App;
