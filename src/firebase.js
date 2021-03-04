import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaaVaz9oEO_mRYnf7UxqXVhUSJPRYkQLQ",
  authDomain: "todo-app-kp-b8e5d.firebaseapp.com",
  databaseURL: "https://todo-app-kp-b8e5d-default-rtdb.firebaseio.com",
  projectId: "todo-app-kp-b8e5d",
  storageBucket: "todo-app-kp-b8e5d.appspot.com",
  messagingSenderId: "954764874968",
  appId: "1:954764874968:web:aa2611ef761942b57bb3ad",
  measurementId: "G-CP3RLVCMC3"
});

const db = firebaseApp.firestore();

export default db;