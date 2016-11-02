import React from 'react'
import {connect} from 'react-redux'

//comment component
const Comment=({author,date,text})=>{
    return (
        <div className="comment">
            <p>
                {text}
            </p>
            <p>
                Author: {author}, Timestamp: {date}
            </p>
        </div>
    )
}

export default connect()(Comment)