// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1zzepwHy0KVFb05IXHq2NN6yW-hw5D00",
    authDomain: "todo-5c82c.firebaseapp.com",
    projectId: "todo-5c82c",
    storageBucket: "todo-5c82c.appspot.com",
    messagingSenderId: "403222022589",
    appId: "1:403222022589:web:cc18cd643c23e5501bead4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)