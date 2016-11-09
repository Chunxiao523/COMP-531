import React from 'react'
import {connect} from 'react-redux'
import {addFollower, delFollower} from './followingAction.js'
import Userfriend from'./userFriend.js'


//the component which is a collection of followers 
export const Following=({addFollower, followers})=>{
  let followername
  return(
      <div>
        <table className="sidebar">
          <tbody>
              <tr>
                  <td>
                     <p className="sidename"> Followed Users</p>
                  </td>
              </tr>
              <tr id="followerList">
                    {Object.keys(followers).map((iden) => followers[iden]).map((person)=>{ 
                    return <Userfriend 
                                    name = {person.name} 
                                    avatar = {person.avatar} 
                                    headline = {person.headline}
                                    key = {person.name}
                                    />})}
              </tr>
              <tr>
                  <td>
                      <input id="addFriend" type="text" className="maintxt" 
                        placeholder="Add a user to the following list" ref = {(node) => followername = node}/>
                      <input id="addBtn" type="button" value="Add" onClick={()=>addFollower(followername.value)}/>
                  </td>
              </tr>
          </tbody>
          </table>
    </div>
  )
}
export default connect((state)=>({
    followers: state.followers.follower
  }), (dispatch) => ({
    addFollower: (value) => dispatch(addFollower(value))
  }) 
)(Following)



