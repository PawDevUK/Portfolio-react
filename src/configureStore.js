import {
    configureStore
} from '@reduxjs/toolkit'
import {LocalOnEnter} from './config/VisitorsAPI.config'
import addCounter from 'actions/addCounter.actions'
import AddFooterRightData from 'actions/footer.actions'
import rootReducer from './reducers'
import { rightData } from 'config/footer.config'

const middleware = []

export const store = configureStore({
    reducer:rootReducer()
})

export default function sync_DB_With_Store(){
    LocalOnEnter.get('/').then((res) => {
     store.dispatch(addCounter( res.data[res.data.length-1].counter ))
    });
}

export function syncConfigWithStore(){
    store.dispatch(AddFooterRightData(rightData))
}
