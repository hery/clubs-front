import ResponsiveDrawer from '../components/Drawer'
import { connect } from 'react-redux'
import { setFilter } from '../actions'


const mapStateToProps = state => {
  return {
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setCityFilter: event => {
    	dispatch(setFilter(event.target.value))
    }
  }
}


const Drawer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResponsiveDrawer)


export default Drawer;

