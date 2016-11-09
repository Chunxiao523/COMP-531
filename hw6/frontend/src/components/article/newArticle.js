import React from 'react'
import {connect} from 'react-redux'
import { postArticle } from './articleActions.js'

//The textarea to create new articles and images 
export const NewArticle=({dispatch})=>{
	let text, image
	return (
		<div>
			<p></p>
				<textarea id="newContent" rows="10" cols="50" defaultValue="Please input a new article." ref={(node)=>{text = node}}>		
				</textarea>
			<p></p>
			<input type="button" id="postArticle" value="post" onClick={()=>{dispatch(postArticle(text.value, image))
				text.value = ''
				image = undefined}}/>
			<input type="button" value="cancel"/>
			<p></p>
			<input type="file" onChange={(e)=>{image = e.target.files[0]}}/>
			<input type="button" value="update the image"/>
		</div>
	)
}

export default connect()(NewArticle)