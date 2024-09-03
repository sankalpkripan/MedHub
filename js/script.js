// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiBqOFOjNGsZLn9eWGwOeC-NXAakDg2aY",
  authDomain: "medical-dashboard-20d6f.firebaseapp.com",
  projectId: "medical-dashboard-20d6f",
  storageBucket: "medical-dashboard-20d6f.appspot.com",
  messagingSenderId: "1062202687794",
  appId: "1:1062202687794:web:e5f4c4f58ccd8bfc69572b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In
document.getElementById('google-login').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('User:', user);
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      console.error('Error during sign-in:', error);
    });
});

// Email/Password Login
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User:', user);
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      console.error('Error during sign-in:', error.message);
      alert('Invalid email or password');
    });
});

// Show/Hide Password
document.getElementById('show-password').addEventListener('click', () => {
  const passwordField = document.getElementById('password');
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  this.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
});
