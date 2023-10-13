import { getFirestore, collection, getDocs  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA_nNPVRwXqmgLlxdYL4NmJwiItX9t2D5E",
    authDomain: "social-network-c61c9.firebaseapp.com",
    projectId: "social-network-c61c9",
    storageBucket: "social-network-c61c9.appspot.com",
    messagingSenderId: "496904934051",
    appId: "1:496904934051:web:4cc5210ca6b1e3661c2516",
    measurementId: "G-ZBR0EJZW08"
  };

  
export function createrUser(auth, singUpEmail, singPassword) {
  createUserWithEmailAndPassword(auth, singUpEmail, singPassword)
     .then(userCredential => {
       console.log('signup');
     })
     .catch(error => {
       console.error('Error al registrarse:', error.message);
     })
    };

export function loginUser(auth, loginEmail, loginPassword) {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(userCredential => {
    
      console.log('login');
    })
    .catch(error => {
      console.error('Error al registrarse:', error.message);
    })
}