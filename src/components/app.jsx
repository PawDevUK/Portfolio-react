
import React from 'react'
import { store } from '../configureStore'
import { Provider } from 'react-redux'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Router from '../routes/routes'

function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  )
}
export default App
