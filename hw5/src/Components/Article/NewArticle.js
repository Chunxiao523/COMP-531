import React from 'react'
import {connect} from 'react-redux'

//The textarea to create new articles and images 
export const NewArticle=(postarti)=>{
	return (
		<div>
			<p></p>
			<textarea rows="10" cols="50" 
			defaultValue="Please input a new article.">		
			</textarea>
			<p></p>
			<input type="button" value="post" onClick={()=>{postarti()}}/>
			<input type="button" value="cancel"/>
			<p></p>
			<input type="file"/>
			<input type="button" value="update the image"/>
		</div>
	)
}

export default connect()(NewArticle)