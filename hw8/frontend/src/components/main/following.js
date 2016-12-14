import React from 'react'
import {connect} from 'react-redux'
import {addFollower, delFollower} from './followingAction.js'
import Userfriend from'./userFriend.js'


//the component which is a collection of followers 
export const Following=({addFollower, followers})=>{
  let followername
  const layoutStyle = {
      margin:'10px'
  }
  return(
      <div  className="card">
          <div className="card-block">
           <h4> Followed Users</h4>
           </div>
                  {Object.keys(followers).map((iden) => followers[iden]).map((person)=>{ 
                    return <Userfriend 
                            name = {person.name} 
                            avatar = {person.avatar} 
                            headline = {person.headline}
                            key = {person.name} style={layoutStyle}/>})}
                      <p></p>
                      <p></p>
                     <div className="input-group">
                            <input type="text" className="form-control maintxt" 
                        placeholder="Add a user to the following list" ref = {(node) => followername = node}/>
                            <div className="input-group-btn">
                                <button className="btn btn-default dropdown-toggle pull-right" onClick={()=>addFollower(followername.value)}>Add</button>
                            </div>
                        </div> 
    </div>
  )
}
export default connect((state)=>({
    followers: state.followers.follower
  }), (dispatch) => ({
    addFollower: (value) => dispatch(addFollower(value))
  }) 
)(Following)



