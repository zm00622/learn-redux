import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; // Creates the redux store
import allReducers from './reducers'; // Imports the reducers you've created from index.js of reducers folder.
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// The second object in const store allows you to use REDUX_DEVTOOLS in the broswer. These tools
// give you the ability to see your store logging the state changes.

ReactDOM.render(
  // <React.StrictMode> 
  // Provider (imported above) allows you to access the store inside the app.
  <Provider store={store}> 
    <App />
  </Provider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
// serviceWorker.unregister();



