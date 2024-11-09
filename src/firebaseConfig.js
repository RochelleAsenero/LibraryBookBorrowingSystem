// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDazhikuTwSo17PwYoX-lHBJ0F9iWznLws",
    authDomain: "librarybookborrowingsystem.firebaseapp.com",
    projectId: "librarybookborrowingsystem",
    storageBucket: "librarybookborrowingsystem.firebasestorage.app",
    messagingSenderId: "1042804045240",
    appId: "1:1042804045240:web:7ebb5f823d4d894f9a4b4d",
    measurementId: "G-8QTZ2B6V0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
