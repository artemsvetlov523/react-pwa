import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyDCPQKUOnBKvEezIJHybDOHKhKKDY8Fm0U",
    authDomain: "artem-test-5ded9.firebaseapp.com",
    databaseURL: "https://artem-test-5ded9.firebaseio.com",
    projectId: "artem-test-5ded9",
    storageBucket: "artem-test-5ded9.appspot.com",
    messagingSenderId: "345512507961",
    appId: "1:345512507961:web:e5fb944535f95a6be96be8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase