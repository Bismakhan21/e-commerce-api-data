// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeCgKRtnlhyhnF-Y9D4ACtdd8uqbECfJg",
  authDomain: "e-commerce-api-data.firebaseapp.com",
  projectId: "e-commerce-api-data",
  storageBucket: "e-commerce-api-data.appspot.com",
  messagingSenderId: "623258052823",
  appId: "1:623258052823:web:7fedd657ad20430490e892"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app);

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, database , firebase_app};
