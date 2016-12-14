import{resource, url} from '../../action.js'
//actions for the articles
export const editArticle = ( articleId, message ) => {
	return (dispatch) => {
		if (message != null) {
			const payload = {text : message}
			 resource('PUT', `articles/${articleId}`, payload)
			 resource('GET', 'articles')
			 .then((r) => {
	          	dispatch({type:'EDIT_ARTICLE', articles: r.articles})
	        })
		} else {
			console.log("you cannot post an empty article")
		}
    }
}

export const addComment = (articleId, message, commentId) => {
	return (dispatch) => {
		const payload = {text : message}    
        	payload.commentId = commentId
        resource('PUT', `articles/${articleId}`, payload)
         resource('GET', 'articles')
        .then((r)=>{
           
            dispatch({type:'EDIT_ARTICLE',articles: r.articles})
    
        })
	}
}

export const fetchArticles = () => {
    return (dispatch, getState) => {
        resource('GET', 'articles')
        .then((response) => { 
        console.log(response)           
            dispatch({ type: 'UPDATE_ARTICLES', articles: response.articles})    
        })
    }
}

export const postArticle = (content, image) => {
	 const fd = new window.FormData()
     fd.append('text', content)
     fd.append('image', image)
	return (dispatch) => {
		resource('POST', 'article', fd, false)
		//resource('POST', 'article', payload, true)

		resource('GET', 'articles')
		.then((r) => {
			dispatch({type: 'UPDATE_ARTICLES', articles: r.articles[0]})
		})
	}
}

export const filterarticle=(arti,key)=>{ 
	const myarti=sortarticle(arti).filter((arti)=>{
		if (arti.author.indexOf(key)>=0 || arti.text.indexOf(key)>=0)
		  return true
		else return false
	})
	return myarti
}
const sortarticle=(arti)=>{
	if (arti.length == 0) return arti
	const myarti=Object.keys(arti).map(
		(_id)=>arti[_id]).sort((x,y)=>{
			if (x.date<y.date) return 1
				else return -1
		})
	return myarti
}
export const searchArticle=(keyword)=>{
	return {type:'SEARCH_ARTICLE', keyword};
}