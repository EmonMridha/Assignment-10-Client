// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD29lBCVZjMqhm4nehtGG2NlbX80UHICdI",
  authDomain: "assignment-10-df0af.firebaseapp.com",
  projectId: "assignment-10-df0af",
  storageBucket: "assignment-10-df0af.firebasestorage.app",
  messagingSenderId: "533799285337",
  appId: "1:533799285337:web:a98957616404ff12383748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);