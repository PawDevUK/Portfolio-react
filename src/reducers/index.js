import { combineReducers } from '@reduxjs/toolkit'
import Visitors from 'reducers/counterReducer'
import FooterData from 'reducers/footerData.reducer'
import Users from 'reducers/users'


export default function rootReducer(){
    return combineReducers({
        Visitors,
        Users,
        FooterData,
    })
}