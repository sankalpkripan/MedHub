import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiBqOFOjNGsZLn9eWGwOeC-NXAakDg2aY",
  authDomain: "medical-dashboard-20d6f.firebaseapp.com",
  projectId: "medical-dashboard-20d6f",
  storageBucket: "medical-dashboard-20d6f.appspot.com",
  messagingSenderId: "1062202687794",
  appId: "1:1062202687794:web:e5f4c4f58ccd8bfc69572b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('profile-pic').addEventListener('click', () => {
  const profileMenu = document.getElementById('profile-menu');
  profileMenu.classList.toggle('show');
});

document.getElementById('sign-out').addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = 'index.html'; // Redirect to login page
  }).catch((error) => {
    console.error('Error during sign-out:', error);
  });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    const profilePic = user.photoURL || 'https://via.placeholder.com/100';
    document.querySelector('#doctor-name').textContent = user.displayName || 'User';
    document.getElementById('profile-pic').src = profilePic;
    document.getElementById('email-display').textContent = ` ${user.email}`;
  } else {
    window.location.href = 'index.html'; // Redirect to login page if not authenticated
  }
});

