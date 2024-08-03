// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth'; // Si usas autenticación
import 'firebase/firestore'; // Si usas Firestore
import 'firebase/storage'; // Si usas almacenamiento

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgBP3PuJ3u0lxoMCVHVG6o68rJ1UuooAM",
    authDomain: "restaurant-6fc68.firebaseapp.com",
    projectId: "restaurant-6fc68",
    storageBucket: "restaurant-6fc68.appspot.com",
    messagingSenderId: "180364397914",
    appId: "1:180364397914:web:233797e24c09eaf0f33763"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export default firebaseApp;
