import React from 'react'
import {connect} from 'react-redux'
import { postArticle } from './articleActions.js'

//The textarea to create new articles and images 
export const NewArticle=({dispatch})=>{
	let text, image
	return (
		<div>
			<textarea className="form-control" defaultValue="Add new article here." ref={(node)=>{text = node}}></textarea>
			<input type="button" className="btn btn-default dropdown-toggle pull-right" id="postArticle" value="post" onClick={()=>{dispatch(postArticle(text.value, image))
				text.value = ''
				image = undefined}}/>
			<input type="button" className="btn btn-default dropdown-toggle pull-right" value="cancel"/>
			<p></p>
			<input type="file" onChange={(e)=>{image = e.target.files[0]}}/>
		</div>
	)
}

export default connect()(NewArticle)