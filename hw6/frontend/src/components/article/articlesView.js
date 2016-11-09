import React from 'react'
import {connect} from 'react-redux'
import Comment from './comment.js'
import { editArticle, addComment } from './articleActions.js'
import ContentEditable from './contentEditable.js'

//the view of a collection of the article's components
export const ArticlesView=({dispatch, key, _id,author,comments,date,img,text, username})=>{
  // var ContentEditable = require("react-contenteditable");
  let comment, newArticle

  return (
    <div className="row">
          <div className="acard">           
              <p className="title">
                Author: <p id="authorName">{author}</p> , Date: {date} 
              </p>
              <img src={img}/>      
              <ContentEditable className="textsty"
                        html={text} 
                        contentEditable={username==author}
                        onChange={(e)=>{
                        newArticle=e.target
              }}
              />
              
              {author == username ? 
                <button onClick= {() =>{dispatch(editArticle(_id, newArticle))}}> Update Changes </button> : ''}
              
              <li className="collection-item">
                  <textarea ref = { (node) => comment = node }/>
                  <button className="btn" onClick={()=>{dispatch(addComment(_id, comment.value, -1))}} >post</button>
              </li>
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