import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Drawer,
    List
} from '@material-ui/core';
import {
    Menu,
    ChevronRight,
    ChevronLeft
} from '@material-ui/icons';
import { drawerList } from './drawerList.jsx';
import { styles } from './styles.js'

class NavDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleDrawerOpen () {
        this.setState({ open: true });
    }

    handleDrawerClose() {
        this.setState({ open: false })
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => this.handleDrawerOpen()}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Mini Title
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={() => this.handleDrawerClose()}>
                            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{drawerList}</List>
                </Drawer>
                <main className={classes.content}>
                    <Typography noWrap>Hello world</Typography>
                </main>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(NavDrawer);
