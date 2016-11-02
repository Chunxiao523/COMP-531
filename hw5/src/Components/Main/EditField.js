import React from 'react';
import { connect } from 'react-redux'
//edit field in main page
export const EditField = ({dispatch}) => {
        return (
        <div className="col-md-4">
            <div className="addArticle"> 
                <textarea id="newArticle" cols="40" rows = "3"></textarea>
                <button>Post</button>
                <button type="button" id="cancelBtn">Cancel</button>
                <input type="file" id="uploadFile" />            
            </div>
        </div>
    	)
}
export default connect() (EditField)