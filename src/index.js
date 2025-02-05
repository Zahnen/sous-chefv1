import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import 'jquery';
import 'popper.js';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import 'firebase/auth';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
      userProfile: "users",
      useFirestoreForProfile: true,
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  // <Root />


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
