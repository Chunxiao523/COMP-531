import React from 'react'
import {connect} from 'react-redux'
import Comment from './comment.js'
import { editArticle, addComment } from './articleActions.js'
import ContentEditable from './contentEditable.js'

//the view of a collection of the article's components
export const ArticlesView=({dispatch, key, _id,author,comments,date,img,text, username})=>{
  // var ContentEditable = require("react-contenteditable");
  let comment, newArticle
const layoutStyle = {
  margin:'10px'
}

  return (
    <div className="row">
      <div>
        <div className="card card-block" style={layoutStyle}>
               <img className="card-img-top img-responsive " src={img}/> 
                <div className="card-block">
                  <h4 className="card-title">Author: {author}, Date: {date} </h4>
                  <ContentEditable className="card-text text-justify"
                            html={text} 
                            contentEditable={username==author}
                            onChange={(e)=>{
                            newArticle=e.target}}/>
                </div>
        </div>  
              {author == username ? 
                <button  className="btn btn-default dropdown-toggle pull-right" onClick= {() =>{dispatch(editArticle(_id, newArticle.value))}}> Update Changes </button> : ''} 
              
              <p className="collection-item">
                  <textarea className="form-control" defaultValue="Add new comment here." ref = { (node) => comment = node }/>
                  <button className="btn btn btn-default dropdown-toggle pull-right" onClick={()=>{dispatch(addComment(_id, comment.value, -1))}} >post</button>
              </p>
           
              {
                    comments.map((c)=>
                   <Comment key={c.commentId} 
                    commentId={c.commentId}
                    author={c.author} 
                    date={c.date} 
                    text={c.text}
                    id = {_id}
                    username = {username}/>
                    )
              }
      </div>
  </div>             
    )
}

export default connect()(ArticlesView)
