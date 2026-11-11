import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEgrgU2woFNieZUnY9yZ7_3JzGcPuZqeg",
    authDomain: "sigma-academy-4ba52.firebaseapp.com",
    projectId: "sigma-academy-4ba52",
    storageBucket: "sigma-academy-4ba52.firebasestorage.app",
    messagingSenderId: "779701029755",
    appId: "1:779701029755:web:83ae74999f081d6e024bde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Firestore Database
export const db = getFirestore(app);

console.log("Sigma Academy Firebase Connected!");
export const ADMIN_EMAIL = "millatulkarimsifat@gmail.com";
