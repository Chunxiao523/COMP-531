import React from 'react'
import {connect} from 'react-redux'
import ContentEditable from './contentEditable'
import  { addComment } from './articleActions.js'
//comment component
const Comment=({dispatch, commentId, author, date, text, id, username})=>{
    let newComment
    return (
        <div className="comment">
            <p>
                <ContentEditable className="textsty"
                        html={text} 
                        contentEditable={username==author}
                        onChange={(e)=>{
                        newComment=e.target
              }}
              />
            </p>
            <p>
                Author: {author}, Timestamp: {date}
            </p>
            {author == username ? 
                <button className="btn btn-default dropdown-toggle pull-right" onClick = {() => {dispatch(addComment(id, newComment.value, commentId))}}>Update Comment</button> : ''}
        </div>
    )
}

export default connect()(Comment)