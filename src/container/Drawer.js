import ResponsiveDrawer from '../components/Drawer'
import { connect } from 'react-redux'
import { setCityFilter,
         setTeacherFilter,
         setStyleFilter
   } from '../actions'


const mapStateToProps = state => {
  return {
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setCityFilter: event => {
    	dispatch(setCityFilter(event.target.value))
    },
    setTeacherFilter: event => {
    	dispatch(setTeacherFilter(event.target.value))
    },
    setStyleFilter: event => {
    	dispatch(setStyleFilter(event.target.value))
    }
  }
}


const Drawer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResponsiveDrawer)


export default Drawer;

