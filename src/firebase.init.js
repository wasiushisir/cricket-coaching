// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA74DXpoY0oiXVMLcckPZj0eiuya_Mnbew",
  authDomain: "cricket-academy-41c29.firebaseapp.com",
  projectId: "cricket-academy-41c29",
  storageBucket: "cricket-academy-41c29.appspot.com",
  messagingSenderId: "372701478167",
  appId: "1:372701478167:web:0fdcbc6f7eb6c49136cb52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;