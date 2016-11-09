import React from 'react';
import { connect } from 'react-redux'
import {search} from '../action.js'
//search bar in main page
export const Search = ({dispatch}) => {
    let keyvalue
        return (
        <div class="col-md-4">
            <div class="addArticle"> 
               <input type="text" ref = {(node) => keyvalue = node} />
               <button type="submit" onClick={()=>{
                         dispatch( search(keyvalue.value))
                        }}>Search</button>         
            </div>
        </div>
    	)
}
export default connect() (Search)