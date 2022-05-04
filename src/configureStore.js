import {
    configureStore
} from '@reduxjs/toolkit'
import {LocalOnEnter} from './config/VisitorsAPI.config'
import addCounter from 'actions/addCounter.actions'
import rootReducer from './reducers'

const middleware = []

export const store = configureStore({
    reducer:rootReducer()
})

export default function sync_DB_With_Store(){
    LocalOnEnter.get('/').then((res) => {
     store.dispatch(addCounter( res.data[res.data.length-1].counter ))
    });
}

