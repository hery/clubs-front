import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom:20,
    display:'flex',
    justifyContent: 'space-between',
  },
  detail: {
  	display:'flex',
  	flexDirection:'column',
    justifyContent: 'space-between',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  cover: {
    minWidth: 220,
    minHeight: 220,
  },
});


function SimpleCard(props) {
  const classes = props.classes;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
      	<div className="details">
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Word of the Day
          </Typography>
          <Typography type="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography type="body1" className={classes.pos}>
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
        </div>
        <CardMedia
          className={classes.cover}
          image="https://i.pinimg.com/736x/5c/8a/08/5c8a087338ab2385123966b82f4937a8--tara-stiles-yoga-yoga-bodies.jpg"
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
