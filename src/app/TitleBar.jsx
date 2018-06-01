import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core';
import {
    Menu
} from '@material-ui/icons';

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
}

const TitleBar = (props) =>  {
    const { classes, children, title } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {title}
                    </Typography>
                    {children}
                </Toolbar>
            </AppBar>
        </div>
    )
}

TitleBar.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    navButtonAction: PropTypes.func.isRequired
};

export default withStyles(styles)(TitleBar);
