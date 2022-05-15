export const CHAT_OPEN = 'CHAT_OPEN'
export const CHAT_CLOSED = 'CHAT_CLOSED'

export function chatOpen(){
    return{
        type:CHAT_OPEN
    }
}
export function chatClose(){
    return{
        type:CHAT_CLOSED
    }
}