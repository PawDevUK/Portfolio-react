import {
    configureStore
} from '@reduxjs/toolkit'

import rootReducer from './reducers'

const middleware = []

export const store = configureStore({
    reducer:rootReducer()
})