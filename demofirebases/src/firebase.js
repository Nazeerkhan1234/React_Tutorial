// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcvP8vf6f4ll9sEA6HUe-3v3eS3yszc8Q",
  authDomain: "pep-fgp8.firebaseapp.com",
  projectId: "pep-fgp8",
  storageBucket: "pep-fgp8.appspot.com",
  messagingSenderId: "519234392112",
  appId: "1:519234392112:web:e0dca01d7e06f58b0c5df5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();