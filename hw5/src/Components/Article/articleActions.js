import{resource, url} from '../action.js'
//actions for the articles
export function fetchArticles() {
    return (dispatch, getState) => {
        resource('GET', 'articles')
        .then((response) => {            
            dispatch({ type: 'UPDATE_ARTICLES', articles: response.articles})    
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