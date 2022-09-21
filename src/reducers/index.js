import EngLang from 'reducers/toggleLang.reducer'
import PageContent from 'reducers/PageContent.reducer'
import Users from 'reducers/users'
import Visitors from 'reducers/counterReducer'
import WT_Route from 'reducers/WT_router.reducer'
import { combineReducers } from '@reduxjs/toolkit'
import isChatOpen from 'reducers/chat.reducer'

export default function rootReducer(){
    return combineReducers({
        Visitors,
        Users,
        PageContent,
        isChatOpen,
        EngLang,
        WT_Route
    })
}