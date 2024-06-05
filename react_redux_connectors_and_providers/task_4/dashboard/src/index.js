import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App/App';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: composeWithDevTools(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);