// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy5NfpSAjxFnyosyVgexS3BO71yJZpGno",
  authDomain: "auth-project-858f0.firebaseapp.com",
  projectId: "auth-project-858f0",
  storageBucket: "auth-project-858f0.appspot.com",
  messagingSenderId: "911608816925",
  appId: "1:911608816925:web:f7be365f9f98ee3800adf4",
  measurementId: "G-L1WG0W6BFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;