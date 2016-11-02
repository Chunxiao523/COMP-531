import React from 'react'
import {connect} from 'react-redux'
import Comment from './Comment.js'
//the view of a collection of the article's components
export const ArticlesView=({key,author,comments,date,img,text})=>{
  return (
    <div className="row">
          <div className="acard">           
              <p className="textsty">
                  Author: {author}, Timestamp: {date}
              </p>
              <img src={img}/>
              <p className="textsty">
                  {text}
              </p>
              <input type="button" value="Comment"/>
              <input type="button" value="Edit"/>
              {
                    comments.map((c)=>
                   <Comment key={c.commentId} 
                    author={c.author} 
                    date={c.date} 
                    text={c.text}/>
          )
        }
      </div>
        </div>             
    )
}

export default connect()(ArticlesView)