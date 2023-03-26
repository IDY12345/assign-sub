// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDV-eK2CoOPPOnqJPLTZPpYSakDl-BT40",
  authDomain: "hack-submissions.firebaseapp.com",
  projectId: "hack-submissions",
  storageBucket: "hack-submissions.appspot.com",
  messagingSenderId: "724317737614",
  appId: "1:724317737614:web:5265413801d31036b66fdf",
  measurementId: "G-CVY8ZW1VBT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);