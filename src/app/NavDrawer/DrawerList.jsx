import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import {
    Home,
    Add
} from '@material-ui/icons';


const Drawerlist = ({ history }) => {
    const redirect = path => () => history.push(path);

    return (
    <div>
        <ListItem button onClick={redirect('/')}>
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
    </div>
    )
};

export default withRouter(Drawerlist);
