import {resource, url} from '../../action.js'
import fetch, { mock } from 'mock-fetch'
import { returnerror, returnsuccess } from '../../action.js'
export function uploadimage (file) {
    return (dispatch) => {
              const fd = new FormData()
              fd.append('image', file)
              resource('PUT', 'avatar', fd, false)
              .then((r) => {
                  dispatch({ type: 'UPDATE_PROFILE', avatar: r.avatar })
              })
              .catch(err=>{
                  dispatch(returnerror('update avatar failed'))
              })
      }
}
export function updateprofile( email, zipcode, pw, pwconf) {
    return (dispatch) => {
        const err = validateprofile( email, zipcode, pw, pwconf)
        if(err && err.length > 0) {
            return dispatch(returnerror(err))
        }
        if (email) {
              resource('PUT', 'email', {email})
              .then((r) => {
              dispatch({type: 'UPDATE_PROFILE', email: r.email})
              dispatch(returnsuccess('Email updated!'))
            })
              .catch((e) => {
              dispatch(returnerror('update email error'))
            })
        }

        if (zipcode) {
              resource('PUT', 'zipcode', {zipcode})
              .then((r) => {
              dispatch({type: 'UPDATE_PROFILE', zipcode: r.zipcode})
               dispatch(returnsuccess('Zipcode updated!'))
            })
              .catch((e) => {
              dispatch(returnerror('update zipcode error'))
            })
        }
       
      }
  }
export function validateprofile( email, zipcode, pw, pwconf) {
   if(email) {
        if(!email.match('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])')) {
          return "Please input a valid email address, such as a@b.co."
      }
    }
    if(zipcode) {
        if(!zipcode.match('^[0-9]{5}$')){
          return 'Length of zipcode should be five numbers. ie: 77005 '         
        }  
    }
   
    if(pw && pwconf) {
        return "will not change password"
    }

}

//fetch the user information
export function fetchProfile(file) {
  return (dispatch) => 
  	   resource('GET', file)
  	    .then((r) => {
  	    	switch(file) {
  	    		case 'avatars':
  	    			dispatch({type: 'UPDATE_PROFILE', avatar: r.avatars[0].avatar})
  	    			break
  	    		case 'email':
  	    			dispatch({type: 'UPDATE_PROFILE', email: r.email})
  	    			break
  	    		case 'zipcode':
  	    		 	dispatch({type: 'UPDATE_PROFILE', zipcode: r.zipcode})
  	    		 	break
  	    		 case 'headlines' :
  	    		 	dispatch({type: 'UPDATE_PROFILE', headline: r.headlines[0].headline})
  	    		 	break
  			}
    	})
 	
} 
