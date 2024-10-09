import EngLang from 'reducers/toggleLang.reducer'
import PageContent from 'reducers/PageContent.reducer'
import Users from 'reducers/users.reducer'
import Visitors from 'reducers/counterReducer'
import WorkTracker from 'reducers/calendar.reducer'
import { combineReducers } from '@reduxjs/toolkit'
import isChatOpen from 'reducers/chat.reducer'
import ParticlesOptions from 'reducers/particlesOption.reducer'

export default function rootReducer(){
    return combineReducers({
        Visitors,
        Users,
        PageContent,
        isChatOpen,
        EngLang,
        WorkTracker,
        ParticlesOptions
    })
}