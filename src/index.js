import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebaseConfig from './firebase/firebase'
import firebase from 'firebase/app'

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(firebaseConfig),
))


const firebaseProps = {
    firebase,
    createFirestoreInstance,
    config: firebaseConfig,
    dispatch: store.dispatch,
    userProfile: 'users',
    presence: 'presence',
    sessions: 'sessions'
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...firebaseProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

