import React from 'react';
import { connect } from 'react-redux'
import {search} from '../action.js'
//search bar in main page
export const Search = ({dispatch}) => {
    let keyvalue
        return (
        <div className="col-md-4">
            <div className="input-group-btn"> 
               <input type="text" className="form-control" ref = {(node) => keyvalue = node} />
               <button type="submit" className="btn btn-default" onClick={()=>{
                         dispatch( search(keyvalue.value))
                        }}>Search</button>         
            </div>
        </div>
    	)
}
export default connect() (Search)

