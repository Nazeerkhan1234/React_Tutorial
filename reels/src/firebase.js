import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBew2e2qQDebVkG_yE0zqIMxKMdRZSQqIs",
    authDomain: "reels-fjp8-70eb0.firebaseapp.com",
    projectId: "reels-fjp8-70eb0",
    storageBucket: "reels-fjp8-70eb0.appspot.com",
    messagingSenderId: "954600915515",
    appId: "1:954600915515:web:ede9f4cb13d3f8254e121e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();