import {
    configureStore
} from '@reduxjs/toolkit'
import {LocalOnEnter} from './config/VisitorsAPI.config'
import addCounter from 'actions/addCounter.actions'
import { AddHeaderMenu, AddProjects, AddReactInfo, AddStack, AddFooterRightData } from 'actions/pageContent.actions'
import rootReducer from './reducers'
import { rightData } from 'config/footer.config'

export const store = configureStore({
    reducer:rootReducer()
})

export function sync_DB_With_Store(){
    LocalOnEnter.get('/').then((res) => {
     store.dispatch(addCounter( res.data[res.data.length-1].counter ))
    });
}

export function syncConfigWithStore(){
    store.dispatch(AddHeaderMenu())
    store.dispatch(AddProjects())
    store.dispatch(AddReactInfo())
    store.dispatch(AddStack())
    store.dispatch(AddFooterRightData(rightData))
}
