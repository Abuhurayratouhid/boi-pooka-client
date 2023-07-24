import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu4pNkCS_RYuqX-_Fss37jzwo8FHRzHK4",
  authDomain: "boipooka-5df5c.firebaseapp.com",
  projectId: "boipooka-5df5c",
  storageBucket: "boipooka-5df5c.appspot.com",
  messagingSenderId: "367648404593",
  appId: "1:367648404593:web:cdabe91129d067caa057d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
