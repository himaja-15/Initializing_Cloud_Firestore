// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfNXo7J9jEiORYQpKn3kWQaeR8UqXGVss",
  authDomain: "blogging-app-8e0fb.firebaseapp.com",
  projectId: "blogging-app-8e0fb",
  storageBucket: "blogging-app-8e0fb.appspot.com",
  messagingSenderId: "1046329306714",
  appId: "1:1046329306714:web:4ab66606becef5368ef263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);