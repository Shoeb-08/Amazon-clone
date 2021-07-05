// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCFSd-_lPJiTaKMQnVe-EyGbIIDkbBe74o",
    authDomain: "clone-19986.firebaseapp.com",
    projectId: "clone-19986",
    storageBucket: "clone-19986.appspot.com",
    messagingSenderId: "1094476386017",
    appId: "1:1094476386017:web:8eadab4491e58da31c71a0",
    measurementId: "G-7YFMSLMF5M"
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };