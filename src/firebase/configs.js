import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app"
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCthzTAxcdDgdGmlcrwBcCDzq_Q-zbV4L8",
    authDomain: "fir-7936e.firebaseapp.com",
    projectId: "fir-7936e",
    storageBucket: "fir-7936e.appspot.com",
    messagingSenderId: "725422218141",
    appId: "1:725422218141:web:2ac7b5beec5f11597b2d74",
    measurementId: "G-XQ4CGSS03F"
  }; 

  export const firebaseApp = initializeApp(firebaseConfig)