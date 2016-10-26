import { combineReducers } from 'redux'
import Action from './Components/action.js'
function navi(state = { location: 'START'}, action) {
	switch(action.type) {
		case 'NAVINDEX' :
			return {...state, location:'START'}
		case 'NAVMAIN' :
			return {...state, location:'MAIN'}
		case 'NAVPROFILE' :
			return {...state, location:'PROFILE'}
		default:
			return {...state}
	}
}
function followers(state = { followers: {} }, action) {
    switch(action.type) {
       
        default:
            return state
    }
}
const Reducer = combineReducers({
    navi, followers
})

export default Reducer



