import React from 'react'
import {connect} from 'react-redux'
import ArticlesView from './articlesView'
import {searchArticle,filterarticle} from './articleActions'
import NewArticle from './newArticle.js'
//The articles in the main page
const Article = ({articles,keyword, username, dispatch}) => {
	const userarticle=filterarticle(articles,keyword)
	const layoutStyle = {
  		margin:'10px'
	}
	let key
	return(
	<div >
		<div className="searchdiv" style={layoutStyle}>
			<input id="searchField" className="form-control maintxt" type="text" placeholder="Search for articles"
	      		ref={(node)=>{key = node}}
				onChange={()=>{dispatch(searchArticle(key.value))}}/>
		</div>
		<NewArticle style={layoutStyle}/>
			{userarticle.map((article) =>
					<ArticlesView className="card col-md-6"
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
)}

export default connect((state)=>{
	return {
		articles:state.articles.articles,
		keyword:state.articles.keyword,
		username: state.profile.username
	}
})(Article)