import Promise from 'bluebird'
import fetch from 'isomorphic-fetch'
import { fetchFollowers } from './components/main/followingAction.js'
import { fetchArticles } from './components/article/articleActions.js'
import { fetchProfile } from './components/profile/profileAction.js'
//export const url = 'http://localhost:3000'
export const url = 'https://hw-7.herokuapp.com'
export const facebookLogin = () => {
    location = `${url}/auth/facebook`
  //  return { type: 'LOGIN_FACEBOOK' }
}

//user login function
export const userlogin = (username, password) => {
	return (dispatch) => {
    resource('POST', 'login', {username, password})
		.then((r) => {
      dispatch({type: 'LOGIN_LOCAL', username: r.username})
      dispatch(initialVisit())
		  })
		.catch((e) => {
     dispatch(returnerror(e))
		})	
  }
}
//user logout function
export const userlogout = () => {
  return (dispatch) => 
        resource('PUT','logout')
        .then((r) => {
            dispatch({type:'LOGOUT'})
            dispatch(navstartpage())
        }).catch((e) => {
            dispatch(returnerror(e))
        })
}
//user register function
export const userregister = (username, email, zipcode, bob, password) => {
  return (dispatch)=> {
    resource('POST', 'register', {username, email, zipcode, bob, password})
    .then((r) => {
      console.log(r)
         return dispatch(returnsuccess(` You have successively registered as "${r.username}".`))
    })
    .catch((e) => {
      console.log('register error')
    })
    
  }
}
//initialization function to initialize the main page
export function initialVisit() {
    return (dispatch) => {
        resource('GET', 'headlines')
        .then((r) => {
            dispatch(fetchProfile('headlines'))
            dispatch(fetchProfile('avatars'))
            dispatch(fetchProfile('email'))
            dispatch(fetchProfile('zipcode'))
            dispatch(fetchProfile('dob'))
            dispatch(fetchFollowers())
            dispatch(fetchArticles())
            dispatch(navmain())
        })
        .catch((err) => {
        })  
    }
}
//used to change the content of headlines
export const changeheadline = (headline) => {
    return (dispatch) => {
        resource('PUT', 'headline', {headline})
        .then((r) => {
            dispatch({ type: 'UPDATE_HEADLINE', headline: r.headline })
          })
        .catch((e) => {
          console.log('error')
        })  
    }
}
//The function to return success
export const returnsuccess=(success)=>{
    return {type:'SUCCESS', success: success, error: ''};
}

//The function to return error
export const returnerror=(e)=>{
  console.log(e)
    return {type:'ERROR', success: '', error:e};
}
//navi to main page 
export const navmain = () => {
	return {type:'NAVMAIN'};
}
//navi to profile page 
export const navprofile=() => {
  return {type: 'NAVPROFILE'};
}
//navi to start page
export const navstartpage=() => {
  return {type: 'NAVINDEX'};
}
//dummy server url
//export const url = 'https://hw-7.herokuapp.com'
//export const url = 'http://localhost:3000/'
//resource function

export const resource = (method, endpoint, payload, isJson = true) => {
  const options =  {method, credentials: 'include'}
  if (isJson) options.headers = {'Content-Type': 'application/json'}
  if (payload) {
    options.body = isJson ? JSON.stringify(payload) : payload
}
      console.log("front end body")
      console.log(options)
  return fetch(`${url}/${endpoint}`, options)
        .then((response) => {
            console.log(options)
            if (response.status == 401) {
                const message = `Unauthorized`
                throw new Error(message)
            } else {
                return response.json()
            }
    })
}