
import React from 'react'
import { store } from '../configureStore'
import { Provider } from 'react-redux'
import sync_DB_With_Store from '../configureStore'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Router from '../routes/routes'

sync_DB_With_Store()


function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  )
}
export default App
