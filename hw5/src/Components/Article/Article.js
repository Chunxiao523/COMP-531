import React from 'react'
import {connect} from 'react-redux'
import ArticlesView from './articlesView'
import {searchArticle,filterarticle} from './articleActions'
import NewArticle from './NewArticle.js'

//The articles in the main page
const Article = ({articles,keyword,dispatch}) => {
	const userarticle=filterarticle(articles,keyword)
	let key
	return(
	<div>
		<div className="searchdiv">
			<input type="text" className="maintxt" 
	      		placeholder="Search for articles"
	      		ref={(node)=>{key = node}}
				onChange={()=>{dispatch(searchArticle(key.value))}}/>
		</div>
		<NewArticle/>
		<div className="cards">
		{userarticle.map((article) => 
			<ArticlesView
			key = {article._id}
			author = {article.author} 
			comments = {article.comments}
			date = {article.date} 
			img = {article.img}
			text = {article.text}		
			/>
		)}
		</div>
	</div>
)}

//return the sorted selected articles
export default connect((state)=>{
	return {
		articles:state.articles.articles,
		keyword:state.articles.keyword
	}
})(Article)