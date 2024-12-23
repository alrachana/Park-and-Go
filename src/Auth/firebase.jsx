// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOvaq9Qj8Sqp-pthXN06i0swlycFCKeFI",
  authDomain: "park-and-go-fe8e6.firebaseapp.com",
  projectId: "park-and-go-fe8e6",
  storageBucket: "park-and-go-fe8e6.firebasestorage.app",
  messagingSenderId: "239709944770",
  appId: "1:239709944770:web:3545943be737fe44e4f45b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export{auth}