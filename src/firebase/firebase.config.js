// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8sD5JYDuQIGfP9Rvco3JD8Nbbdy5Q0A4",
  authDomain: "ginius-car-efa75.firebaseapp.com",
  projectId: "ginius-car-efa75",
  storageBucket: "ginius-car-efa75.appspot.com",
  messagingSenderId: "1008137559094",
  appId: "1:1008137559094:web:bf64ccc96118d6a6164c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app