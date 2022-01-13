import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBdZkcZCsPCL3_rKEPoailt93JGDQjpng0",
    authDomain: "galano-barbershop.firebaseapp.com",
    projectId: "galano-barbershop",
    storageBucket: "galano-barbershop.appspot.com",
    messagingSenderId: "74832928576",
    appId: "1:74832928576:web:5f5569e2da3c37fccea4a5",
    measurementId: "G-MWDY76TM7F"
});

export const db = getFirestore()