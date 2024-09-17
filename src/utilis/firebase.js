// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc7f2iL1p5k9BeH-k5RLu9j-9zGimoU9A",
  authDomain: "netflix-gpt-35984.firebaseapp.com",
  projectId: "netflix-gpt-35984",
  storageBucket: "netflix-gpt-35984.appspot.com",
  messagingSenderId: "230056564577",
  appId: "1:230056564577:web:8438fc220563b6ac1f9720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();