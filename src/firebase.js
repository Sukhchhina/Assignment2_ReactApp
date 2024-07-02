// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8cUgdZ1aEKFWd3I4Hd0McMIZgNpFNt8s",
    authDomain: "mdev1005assignment2.firebaseapp.com",
    projectId: "mdev1005assignment2",
    storageBucket: "mdev1005assignment2.appspot.com",
    messagingSenderId: "240428229071",
    appId: "1:240428229071:web:6a3bc2d56e2471245772ba",
    measurementId: "G-5GT8Z1DD2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };