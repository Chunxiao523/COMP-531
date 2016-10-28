import { combineReducers } from 'redux'
import Action from './actions'

function navi(state = { error:'', success:'', location:'' }, action) {
    const clean = { error: '', success: '' }
    switch (action.type) {
        case Action.SUCCESS:
            return { ...state, ...clean, success: action.success }
        case Action.ERROR:
            return { ...state, ...clean, error: action.error }

        case Action.NAV_PROFILE:
            return { ...state, ...clean, location: 'PROFILE'}
        case Action.NAV_MAIN:
            return { ...state, ...clean, location: 'MAIN' }
        case Action.NAV_OUT:
            return { ...state, ...clean, location: 'START' }

        default:
            return { ...state, ...clean }
    }
}

function profile(state = { username:'', headline: '', avatar: '', zipcode: '', email: '' }, action) {
    switch (action.type) {

        case Action.UPDATE_HEADLINE:
        case Action.LOGIN_LOCAL:
            return { ...state, username: action.username, headline: action.headline }

        case Action.UPDATE_PROFILE:
            if (action.headline) return { ...state, headline: action.headline }
            if (action.avatar) return { ...state, avatar: action.avatar }
            if (action.zipcode) return { ...state, zipcode: parseInt(action.zipcode) }
            if (action.email) return { ...state, email: action.email }

        default:
            return state
    }
}

const Reducer = combineReducers({
    navi, profile
})

export default Reducer



