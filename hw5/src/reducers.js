import { combineReducers } from 'redux'
//reducers
export function articles( state = {articles: {}, keyword: ''}, action) {
    switch(action.type) {
        case 'UPDATE_ARTICLES' :
            return {...state, articles: action.articles}
        case 'FILTER_ARTICLE':
            return {...state,articles:action.articles,keyword:action.keyword}
        case 'SEARCH_ARTICLE':
            return {...state,keyword:action.keyword}
        case 'LOGOUT':
            return {articles:{},keyword:''}
        default:
            return {...state};
    }
}

export function navi(state = { location:'START' }, action) {
    switch (action.type) {
        case 'NAVPROFILE':
            return { ...state, location: 'PROFILE'}
        case 'NAVMAIN':
            return { ...state, location: 'MAIN' }
        case 'NAVINDEX':
            return { ...state, location: 'START' }
        default:
            return { ...state}
    }
}

export function profile(state = { username:'', headline: '', avatar: '', zipcode: '', email: '' }, action) {
    switch (action.type) {
        case 'UPDATE_HEADLINE':
            return { ...state, headline: action.headline }
        case 'UPDATE_USER':
            return { ...state, username: action.username, headline: action.headline }
        case 'LOGIN_LOCAL':
            return { ...state, username: action.username}
        case 'UPDATE_PROFILE':
            if (action.headline) return { ...state, headline: action.headline }
            if (action.avatar) return { ...state, avatar: action.avatar }
            if (action.zipcode) return { ...state, zipcode: parseInt(action.zipcode) }
            if (action.email) return { ...state, email: action.email }
        default:
            return state
    }
}


export function followers(state = { follower: {} }, action) {
    switch(action.type) {
        case 'FOLLOWER_UPDATE':
            return { ...state, follower: action.follower }
        default:
            return state
    }
}
export const check = (state = {success:'',error:''}, action)=>{
    switch(action.type){
        case 'SUCCESS':
            return {...state,success:action.success}
        case 'ERROR':
            return {...state,error:action.error}
        case 'LOGOUT':
            return {success:'',error:''}
        default:
            return {...state}
    }
}
const Reducer = combineReducers({
   navi, articles, profile, followers,check
})

export default Reducer



