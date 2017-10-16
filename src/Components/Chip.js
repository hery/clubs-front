// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
  chip: {
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  svgIcon: {
    color: grey[800],
  },
  row: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
  },
});

function handleRequestDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function Chips(props) {
  const classes = props.classes;
  return (
    <div className={classes.row}>
      <Chip
        label="Featured"
        onRequestDelete={handleRequestDelete}
        className={classes.chip}
      />

      <Chip
        label="New York City"
        onRequestDelete={handleRequestDelete}
        className={classes.chip}
      />

      <Chip
        label="Vinyasa Yoga"
        onRequestDelete={handleRequestDelete}
        className={classes.chip}
      />

      <Chip
        label="Tara Stiles"
        onRequestDelete={handleRequestDelete}
        className={classes.chip}
      />
    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);