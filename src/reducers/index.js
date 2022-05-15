import { combineReducers } from '@reduxjs/toolkit'
import Visitors from 'reducers/counterReducer'
import PageContent from 'reducers/PageContent.reducer'
import Users from 'reducers/users'
import toggleChat from 'reducers/chat.reducer'

export default function rootReducer(){
    return combineReducers({
        Visitors,
        Users,
        PageContent,
        toggleChat,
    })
}