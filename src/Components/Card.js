import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import GradeIcon from 'material-ui-icons/Grade'


const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom:20,
    display:'flex',
    justifyContent: 'space-between',
  },
  cardCover: {
  	width:'100%',
  	marginBottom:20,
  	marginLeft:10,
  	display:'flex',
  },
  detail: {
  	display:'flex',
  	flexDirection:'column',
    justifyContent: 'space-between',
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
    minWidth: 'calc(100%)',
  },
  row: {
  	display: 'flex',
  	justifyContent: 'space-between',
  }
});

function SimpleCard(props) {
	const classes = props.classes;
	return (
		<div className={classes.row}>  
			<Card className={classes.card}>
			<div className="details">
				<CardContent>         
					<Typography type="headline" component="h2">{props.user.user.first_name}</Typography>
					<Typography type="body1" className={classes.pos}>{props.user.city}</Typography>
						{/* TODO: Plug in ratings*/}
						<GradeIcon />
						<GradeIcon />
						<GradeIcon />
						<GradeIcon />
						<GradeIcon />
						<Typography className={classes.pos}>432 ratings</Typography>
					<Typography component="p">
						{props.user.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button dense>Learn More</Button>
				</CardActions>
			</div>
		</Card>
		{/* TODO: Plug in images*/}
		<Card className={classes.cardCover}>
			<CardMedia
				className={classes.cover}
				image="https://i.pinimg.com/736x/5c/8a/08/5c8a087338ab2385123966b82f4937a8--tara-stiles-yoga-yoga-bodies.jpg"
				title="Live from space album cover"/>
		</Card>
		<Card className={classes.cardCover}>
			<CardMedia
				className={classes.cover}
				image="https://mindbodygreen-res.cloudinary.com/images/c_scale,w_770,q_80,f_auto,fl_lossy/crp/newtarastiles2016_coloraddition-828x492/10-minute-yoga-sequence-revive-energy.jpg"
				title="Live from space album cover"/>
		</Card>
		<Card className={classes.cardCover}>
			<CardMedia
				className={classes.cover}
				image="http://d30i07b9wlivv4.cloudfront.net/uploads/2016/03/25183442/fit-tip1.jpg"
				title="Live from space album cover"/>
		</Card>
		</div>
	);
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
