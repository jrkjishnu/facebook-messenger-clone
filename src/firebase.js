import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCyUqSmB0vL0UmJ5zdW7TCcxfasjkFhRF0",
    authDomain: "facebook-messenger-clone-47e4c.firebaseapp.com",
    projectId: "facebook-messenger-clone-47e4c",
    storageBucket: "facebook-messenger-clone-47e4c.appspot.com",
    messagingSenderId: "867337217960",
    appId: "1:867337217960:web:c65c7a7660941067349f9d",
    measurementId: "G-6CGFQ89GBR"

});

const db = firebaseApp.firestore();

export {db}