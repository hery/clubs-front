import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';


import Toolbar from 'material-ui/Toolbar';
import Input from 'material-ui/Input';

import List from 'material-ui/List';

import About from './About'
import Results from './Results'
import SignIn from  '../container/SignIn'
import NewTeacherForm from './NewTeacherForm'

import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

import { Route, Link } from 'react-router-dom'

import { grey } from 'material-ui/colors';

// TODO: It would be nice to make this component more modular
// i.e. separate the drawer, app bar, etc...

const drawerWidth = 260;
const accent = grey[50]; // #F44336

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
  	background: accent,
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  search: {
    // 'backgroundColor': primary,
    // 'color': accent,
    'marginLeft': 20,
  },
  accentIcon: {
    'fill': grey[800],
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: {
    background: accent,
    // color: accent,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'fixed',
      height: 'calc(100%-64px)',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class ResponsiveDrawer extends React.Component {

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {

    const { classes } = this.props;

    const drawer = (
		<div>
		<div className={classes.drawerHeader}>
      <Link to="/"><Typography color="primary">Yoga Teachers Repository</Typography></Link>
    </div>
    <Divider />
			<List> {/* Refactor this out */}

        <Link to="/">
          <ListItem button>
            <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItem>
        </Link>

        <Link to="/teacher/new">
          <ListItem button>
            <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
            <ListItemText primary="Add Teacher" />
          </ListItem>
        </Link>

        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>

        <Link to="/signin">
          <ListItem button>
            <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItem>
        </Link>

			</List>
		</div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}>
                <MenuIcon 
                  className={classes.accentIcon}
                />
              </IconButton>
              <Input 
                onChange={ this.props.setCityFilter }
                placeholder="City"
                className={classes.search}/>
              <Input 
                placeholder="Teacher"
                className={classes.search}/>
              <Input 
                placeholder="Style"
                className={classes.search}/>

            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onRequestClose={this.handleDrawerToggle}
              ModalProps={{keepMounted: true, // Better open performance on mobile.
              }}>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
              <Route path='/' exact={true} component={Results}/>
              <Route path='/teacher/new' component={NewTeacherForm}/>
              <Route path='/about'component={About}/>
              <Route path='/signin'component={SignIn}/>
          </main>
        </div>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponsiveDrawer);

