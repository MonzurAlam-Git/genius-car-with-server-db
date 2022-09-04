// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZwO10-WL6NVuscdJoTScpfg8iOxVXVg8",
  authDomain: "genius-car-services-reca-15559.firebaseapp.com",
  projectId: "genius-car-services-reca-15559",
  storageBucket: "genius-car-services-reca-15559.appspot.com",
  messagingSenderId: "882853888080",
  appId: "1:882853888080:web:9943356e0084f1b2895155",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
