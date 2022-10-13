// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsHG8B23gYITNSoG0R5I60A5qeobd411k",
  authDomain: "notebook-544d3.firebaseapp.com",
  projectId: "notebook-544d3",
  storageBucket: "notebook-544d3.appspot.com",
  messagingSenderId: "732065222998",
  appId: "1:732065222998:web:98ccb68d360dffbd4486f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {app, db}