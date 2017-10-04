import React from 'react';

// What are these guys?
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

// Colors: https://material-ui-next.com/style/color/
import { grey } from 'material-ui/colors';
const primary = grey[900]; // #F44336
// const accent = purple['A200']; // #E040FB


// JSS: https://github.com/cssinjs/jss
const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 3,
    marginTop: 0,
    width: '100%',
  },
  bar: {
  	background:primary,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
});


// Functional component
function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className='{classes.root}'>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>Clubs</Typography>
          <Button color="contrast">Login</Button>
          <Button color="contrast">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Typechecking: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// Defines the classes props as required?
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


// Style injection through CSS in JS
export default withStyles(styles)(ButtonAppBar);
