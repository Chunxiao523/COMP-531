
const Reducer=(state={location:'START'}, action) =>{
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

export default Reducer

