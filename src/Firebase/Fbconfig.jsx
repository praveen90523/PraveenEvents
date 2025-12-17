import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCMRLbG9OEE7hyWm_1ka_U-aEtVZmtIDyA",
  authDomain: "praveenevents-78de6.firebaseapp.com",
  databaseURL: "https://praveenevents-78de6-default-rtdb.firebaseio.com",
  projectId: "praveenevents-78de6",
  storageBucket: "praveenevents-78de6.firebasestorage.app",
  messagingSenderId: "346960835020",
  appId: "1:346960835020:web:2bae11900c6d3eab52ad69",
  measurementId: "G-R0YNV3234E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const author=getAuth(app)
export const db=getDatabase(app)