import {TOGGLE_LANG}from 'actions/toggleLang.actions'

export default function EngLang(state=true,action){
    switch(action.type){
        case TOGGLE_LANG:
            return action.payload
            default:
                return state
    }
}