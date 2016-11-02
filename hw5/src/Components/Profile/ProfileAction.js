import{resource, url} from '../action.js'
//fetch the user information
export function fetchProfile(file) {
  return (dispatch) => {
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
} 
