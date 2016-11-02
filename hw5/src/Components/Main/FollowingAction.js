import Promise from 'bluebird'
import  { resource } from '../action.js'
//follower's action
export function delFollower(name) { return fetchFollowers('DELETE', name) }
export function addFollower(name) { return fetchFollowers('PUT', name) }

export function fetchFollowers() {
    return (dispatch) => {
       var follower = { name: {}, headlines: {}, avatars: {}}

        resource('GET','following/')
        .then((r)=>{
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
