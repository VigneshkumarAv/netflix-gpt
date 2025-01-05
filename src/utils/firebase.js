// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { API_KEY } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "netflix-gpt-b827d.firebaseapp.com",
  projectId: "netflix-gpt-b827d",
  storageBucket: "netflix-gpt-b827d.firebasestorage.app",
  messagingSenderId: "739334733434",
  appId: "1:739334733434:web:9f9efc753c5b64c16905c3",
  measurementId: "G-V3DDM3QWMH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
