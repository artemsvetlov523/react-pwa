import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";

const mainReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer
})

export default mainReducer