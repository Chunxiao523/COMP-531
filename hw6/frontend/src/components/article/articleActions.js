import{resource, url} from '../../action.js'
//actions for the articles
export const editArticle = ( articleId, message ) => {
	return (dispatch) => {
		const payload = {text: message}
		 resource('PUT', `articles/${articleId}`, payload)
		 resource('GET', 'articles')
		 .then((r) => {
          
          	dispatch({type:'EDIT_ARTICLE', articles: r.articles})
        })
		
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
            dispatch({ type: 'UPDATE_ARTICLES', articles: response.articles})    
        })
    }
}

export const postArticle = (content, image) => {
	const fd = new FormData()
    fd.append('text', content)
    fd.append('image', image)
	return (dispatch) => {
		resource('POST', 'article', fd, false)
		resource('GET', 'articles')
		.then((r) => {
			// const article = response.articles[0]
			dispatch({type: 'UPDATE_ARTICLES', articles: r.articles})
			//dispatch({type: 'ADD_ARTICLE', article})
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