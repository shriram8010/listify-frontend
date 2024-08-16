import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDC7GQeoy6i5VO390aTUUJenHMr61H51DM",
    authDomain: "massage-de135.firebaseapp.com",
    projectId: "massage-de135",
    storageBucket: "massage-de135.appspot.com",
    messagingSenderId: "578838776156",
    appId: "1:578838776156:web:3d53c83d3664da37019999",
    measurementId: "G-0PDKBCVX12"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()