import { combineReducers } from '@reduxjs/toolkit'
import Visitors from 'reducers/counterReducer'
import Users from 'reducers/users'


export default function rootReducer(){
    return combineReducers({
        Visitors,
        Users
    })
}