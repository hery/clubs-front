import { createStore } from 'redux'
import clubsApp from '../reducers'

let store = createStore(clubsApp)

export default store;