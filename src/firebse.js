// import firebase from 'firebase';
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
const firebaseConfig = {
    apiKey: "AIzaSyBIDYpYMaQ8Bz7K1ejXDJS-tAnKaQd3pOw",
    authDomain: "slack-app-c1ef1.firebaseapp.com",
    projectId: "slack-app-c1ef1",
    storageBucket: "slack-app-c1ef1.appspot.com",
    messagingSenderId: "578417493122",
    appId: "1:578417493122:web:d7cbab1878c3b9c1c4209b",
    measurementId: "G-YWWH8F41XM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = getAuth();
  // const provider = new firebase.auth.GoogleAuthProvider();
  const provider = new GoogleAuthProvider();
  export {auth,provider};
  export default db;