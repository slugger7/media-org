import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import {
    Inbox
} from '@material-ui/icons';

export const drawerList = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItem>
    </div>
);
