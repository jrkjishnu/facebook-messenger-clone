import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyD9-aR50Mr1oHIp92qOVCHFFofegbENFco",
  authDomain: "messenger-app-c09da.firebaseapp.com",
  projectId: "messenger-app-c09da",
  storageBucket: "messenger-app-c09da.appspot.com",
  messagingSenderId: "176789828783",
  appId: "1:176789828783:web:00cd2b9c7104fe8fc2905a",
  measurementId: "G-SC01LLNTNC"

});

const db = firebaseApp.firestore();

export {db}