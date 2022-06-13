import {
    configureStore
} from '@reduxjs/toolkit'
import {LocalOnEnter} from './config/VisitorsAPI.config'
import addCounter from 'actions/addCounter.actions'
import { AddHeaderMenu, AddHeaderJumboText, AddProjects, AddReactInfo, AddStack, AddFooterRightData, AddButtons } from 'actions/pageContent.actions'
import rootReducer from './reducers'
import { rightData } from 'config/footer.config'
import { Menu } from 'config/headerMenu.config'
import { stack } from 'config/stack.config'
import { projects } from 'config/projects.config'
import { ReactComponentData } from 'config/reactComponent.config'
import logger from 'redux-logger'
import { addUUID_ToObject } from 'factory'
import { headerJumboText } from 'config/headerJumboText.config'
import { buttons } from 'config/common.config'

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
    store.dispatch(AddHeaderMenu(addUUID_ToObject(Menu)))
    store.dispatch(AddStack(addUUID_ToObject(stack)))
    store.dispatch(AddReactInfo(addUUID_ToObject(ReactComponentData)))
    store.dispatch(AddProjects(addUUID_ToObject(projects)))
    store.dispatch(AddFooterRightData(rightData))
    store.dispatch(AddHeaderJumboText(addUUID_ToObject(headerJumboText)))
    store.dispatch(AddButtons(addUUID_ToObject(buttons)))
}
