
export const userlogin = {username, password} => {
	return (dispatch) => {
				//dispatch({type:'LOGIN', username: username})
				dispatch(navmain())
		}
}
export const navmain = () => {
	return {type:'NAVMAIN'};
}
export const navprofile=() => {
	return {type: 'NAVPROFILE'};
}
export const navlanding=() => {
	return {type: 'NAVINDEX'};
}
