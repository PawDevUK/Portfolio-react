import React, { useEffect } from 'react';
import { store } from '../configureStore';
import { Provider } from 'react-redux';
import { syncConfigWithStore } from '../configureStore';
import '../styles/themes.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Router from '../routes/routes';
import '../styles/styles.css';

function App() {
  useEffect(() => {
    syncConfigWithStore();
  });

  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  );
}
export default App;
