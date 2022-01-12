// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhvzdBGJA-hLqKq8ZCuhq7TPGYhVfc_uM",
  authDomain: "clone-34dc7.firebaseapp.com",
  projectId: "clone-34dc7",
  storageBucket: "clone-34dc7.appspot.com",
  messagingSenderId: "1046175494397",
  appId: "1:1046175494397:web:069f43332ba0e1cdd28e94",
  measurementId: "G-8Y1N6XH1SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);