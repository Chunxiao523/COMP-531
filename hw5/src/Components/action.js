export const userlogin = (username, password) => {
		console.log("caught")
		// dispatch ({type: 'LOGIN', username})
		//	dispatch (navmain())
		return {type: 'LOGIN', username}
		
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
export const register=(username, email, zipcode, password, pwconf) => {
	return {type: 'SIGNUP', username, email, zipcode, password}
}