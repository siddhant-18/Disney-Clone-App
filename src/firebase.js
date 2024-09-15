import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-jSqa7bYCmNdq9j-SI2D1waVsBl8P5u0",
  authDomain: "disneyplus-clone-8a9fd.firebaseapp.com",
  projectId: "disneyplus-clone-8a9fd",
  storageBucket: "disneyplus-clone-8a9fd.appspot.com",
  messagingSenderId: "441376045907",
  appId: "1:441376045907:web:407605fc7093002419ffa6",
  measurementId: "G-V7N25KZ0M0"
};

// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();//provide google authentication on clicking login
const storage = firebase.storage();

export{auth,provider,storage};
export default db;
