import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/rootReducers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import localStorageMiddleware from './middleware/localStorageMiddleware'; // Import the middleware

// Configure the store with the rootReducer and applyMiddleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware), // Add the localStorageMiddleware
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
});

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();