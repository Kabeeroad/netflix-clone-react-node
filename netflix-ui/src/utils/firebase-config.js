import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc4LsdFxepldm1tMwhjVjUYDerE6SwHHo",
  authDomain: "react-netflix-clone-2e930.firebaseapp.com",
  projectId: "react-netflix-clone-2e930",
  storageBucket: "react-netflix-clone-2e930.appspot.com",
  messagingSenderId: "21835867105",
  appId: "1:21835867105:web:acc81aa1e9722549ab28a0",
  measurementId: "G-2BNEHWMH95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
