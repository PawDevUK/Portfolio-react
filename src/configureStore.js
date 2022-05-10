import {
    configureStore
} from '@reduxjs/toolkit'
import {LocalOnEnter} from './config/VisitorsAPI.config'
import addCounter from 'actions/addCounter.actions'
import { AddHeaderMenu, AddProjects, AddReactInfo, AddStack, AddFooterRightData } from 'actions/pageContent.actions'
import rootReducer from './reducers'
import { rightData } from 'config/footer.config'
import { Menu } from 'config/headerMenu.config'
import { stack } from 'config/stack.config'
import { projects } from 'config/projects.config'
import { ReactComponentData } from 'config/reactComponent.config'
import logger from 'redux-logger'

const middleware = [logger]

export const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

export function sync_DB_With_Store(){
    LocalOnEnter.get('/').then((res) => {
     store.dispatch(addCounter( res.data[res.data.length-1].counter ))
    });
}

export function syncConfigWithStore(){
    store.dispatch(AddHeaderMenu(Menu))
    store.dispatch(AddStack(stack))
    store.dispatch(AddReactInfo(ReactComponentData))
    store.dispatch(AddProjects(projects))
    store.dispatch(AddFooterRightData(rightData))
}
