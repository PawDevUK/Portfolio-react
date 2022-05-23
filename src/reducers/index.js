import { combineReducers } from '@reduxjs/toolkit'
import Visitors from 'reducers/counterReducer'
import PageContent from 'reducers/PageContent.reducer'
import Users from 'reducers/users'
import isChatOpen from 'reducers/chat.reducer'
import EngLang from 'reducers/toggleLang.reducer'

export default function rootReducer(){
    return combineReducers({
        Visitors,
        Users,
        PageContent,
        isChatOpen,
        EngLang,
    })
}