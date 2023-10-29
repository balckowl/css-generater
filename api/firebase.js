import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyARqYd_Z211UX7I7oc2Rsei0RzSB8DD_aU",
    authDomain: "css-generater.firebaseapp.com",
    projectId: "css-generater",
    storageBucket: "css-generater.appspot.com",
    messagingSenderId: "650614777493",
    appId: "1:650614777493:web:481bc93856b4c0b53f1d9c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export  { auth, provider }