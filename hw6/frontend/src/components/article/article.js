import React from 'react'
import {connect} from 'react-redux'
import ArticlesView from './articlesView'
import {searchArticle,filterarticle} from './articleActions'
import NewArticle from './newArticle.js'
//The articles in the main page
const Article = ({articles,keyword, username, dispatch}) => {
	const userarticle=filterarticle(articles,keyword)
	
	let key
	return(
	<div>
		<div className="searchdiv">
			<input id="searchField" type="text" className="maintxt" placeholder="Search for articles"
	      		ref={(node)=>{key = node}}
				onChange={()=>{dispatch(searchArticle(key.value))}}/>
		</div>
		<NewArticle/>
	
		<div id="articleList" >
			{userarticle.map((article) =>
					<ArticlesView className="card"
							key = {article._id}
							_id = {article._id}
							username = {username}	
							author = {article.author}
							date = {article.date}  
							text = {article.text}
							img = {article.img}
							comments = {article.comments}
							/>
				)}
		</div>
	</div>
)}

export default connect((state)=>{
	return {
		articles:state.articles.articles,
		keyword:state.articles.keyword,
		username: state.profile.username
	}
})(Article)