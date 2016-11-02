import React from 'react'
import {connect} from 'react-redux'
//the component which is a collection of followers 
export const Following=({followers})=>{
  return(
      <div>
        <table className="sidebar">
          <tbody>
              <tr>
                  <td>
                  <p className="sidename"> Followed Users</p>
              </td>
          </tr>
              {Object.keys(followers).map(
                (iden) => 
                followers[iden]).map((person)=>{ 
            return <Userfriend  
            name = {person.name} 
            avatar = {person.avatar} 
            headline = {person.headline}
            key = {person.name}/>})}
            <tr>
                <td>
                <p></p>
              <input type="text" className="maintxt" 
              placeholder="Add a user to the following list"/>
            <input type="button" value="Add"/>
            </td>
          </tr>
          </tbody>
          </table>
    </div>
  )
}

const Userfriend = ({name, avatar, headline}) => {
    return(
      <tr>
      <td>
        <img src={avatar} className="follow"/>
        <p>{name}</p>
        <p>{headline}?</p>
        <input type="button" value="Unfollow"/> 
      </td>
    </tr>)
}

export default connect((state)=>{
  return {
    followers: state.followers.follower
  }
})(Following)
