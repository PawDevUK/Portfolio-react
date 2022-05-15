import { CHAT_OPEN, CHAT_CLOSED } from 'actions/isChatOpen.actions' 

export default function toggleChat( state = false , action){
    switch(action.type){
        case CHAT_OPEN:
            return true
        case CHAT_CLOSED:
            return false
            default:
                return state
    }
}