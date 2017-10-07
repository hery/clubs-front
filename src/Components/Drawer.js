import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import SimpleCard from './Card';
import Chips from './Chip';

import Toolbar from 'material-ui/Toolbar';
import Input from 'material-ui/Input';

import List from 'material-ui/List';

import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import RadioButtonUncheckedIcon from 'material-ui-icons/RadioButtonUnchecked'

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

import { grey } from 'material-ui/colors';

// TODO: It would be nice to make this component more modular
// i.e. separate the drawer, app bar, etc...

const drawerWidth = 260;
const primary = grey[900]; // #F44336
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
  	background: primary,
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  search: {
    'backgroundColor': primary,
    'color': accent,
    'marginLeft': 20,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: {
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
    <Typography>CLUBS: Find great yoga teachers</Typography>
    </div>
    <Divider />
			<List> {/* Refactor this out */}
				<ListItem button>
					<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary="Featured Teachers" />
				</ListItem>

        <ListItem button>
          <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="New Teachers" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Sign Up" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="FAQ" />
        </ListItem>

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
                <KeyboardArrowRightIcon />
              </IconButton>
              <Input 
                placeholder="City"
                inputStyle={'textAlign:center'}
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
            <Chips />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
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

