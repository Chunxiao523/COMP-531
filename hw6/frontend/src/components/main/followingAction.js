import Promise from 'bluebird'
import  { resource } from '../../action.js'
//follower's action
export const delFollower = (name) => { 
    return (dispatch) => {
        resource('DELETE',`following/${name}`) 
         .then((r) => {
            dispatch(fetchFollowers())
         }) 
         .catch((e)=>{
            console.log('delete error')
         })
     } 
 }
export const addFollower = (name) => { 
    return (dispatch) => {
        resource('PUT',`following/${name}`) 
         .then((r) => {
            dispatch(fetchFollowers())
         }) 
         .catch((e)=>{
            console.log('add error')
         }) 
        }
}

export const fetchFollowers= () => {
    return (dispatch) => {
       var follower = { name: {}, headlines: {}, avatars: {}}
       // resource('PUT',`following/jy54`) 
        resource('GET','following/')
        .then((r)=>{
            console.log(r)
            const str=r.following.join(',')
            const people=new Object()
            r.following.forEach((e)=>{
                people[e]={name:e}
            })
            Promise.all([
                resource('GET',`avatars/${str}`)
                .then((a)=>{
                    a.avatars.forEach((e)=>{
                        people[e.username].avatar=e.avatar;
                    })  
                }),
                resource('GET',`headlines/${str}`)
                .then((heads)=>{
                    heads.headlines.forEach((e)=>{
                        people[e.username].headline=e.headline;
                    })
                })
            ]).then(()=>{
                    dispatch({type:'FOLLOWER_UPDATE', 
                            follower:people})
                    })
            .catch((e) => {
                console.log('follower get error')
            })
        })

    }
}
