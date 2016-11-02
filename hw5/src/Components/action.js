import Promise from 'bluebird'
import fetch from 'isomorphic-fetch'
import { fetchFollowers } from './Main/followingAction.js'
import { fetchArticles } from './Article/articleActions.js'
import { fetchProfile } from './Profile/ProfileAction.js'
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
//initialization function to initialize the main page
export function initialVisit() {
    return (dispatch) => {
          dispatch(fetchProfile('headlines'))
          dispatch(fetchProfile('avatars'))
          dispatch(fetchProfile('email'))
          dispatch(fetchProfile('zipcode'))
          dispatch(fetchFollowers())
          dispatch(fetchArticles())
          dispatch(navmain())
      }
}

//user register function
export const userregister = (username, email, zipcode) => {
	return (dispatch)=> {
		dispatch(navmain());
		dispatch(update(username, email, zipcode))
	}
}
//used to change the content of headlines
export const changestatus = (headline) => {
  const payload = {}
  payload['headline'] = headline
    return (dispatch) => {
        resource('PUT', 'headline', payload)
        .then((r) => {
           const action = { type: 'UPDATE_HEADLINE' }                
                action['headline'] = r.headline
            dispatch(action)
          })
        .catch((e) => {
          console.log('error')
        })  
    }
}
//The function to return success
export const returnsuccess=(e)=>{
    return {type:'SUCCESS',success:e};
}

//The function to return error
export const returnerror=(e)=>{
    return {type:'ERROR',error:e};
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
//update function
export const update=(username, email, zipcode) => {
	return {type: 'SIGNUP', username, email, zipcode}
}
//dummy server url
export const url = 'https://webdev-dummy.herokuapp.com'
//resource function

export const resource = (method, endpoint, payload) => {
  const options =  {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (payload) options.body = JSON.stringify(payload)

  return fetch(`${url}/${endpoint}`, options)
    .then(r => {
      if (r.status === 200) {
        return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
      } else {
        // useful for debugging, but remove in production
        console.error(`${method} ${endpoint} ${r.statusText}`)
        throw new Error(r.statusText)
      }
    })
}