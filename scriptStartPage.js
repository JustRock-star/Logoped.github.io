// Updated start-page script: navigation + Firebase Google Sign-In

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

// Firebase configuration (kept from repository)
const firebaseConfig = {
  apiKey: "AIzaSyC6MCwKoSNIfesqbKeG1yVGTw2LeyTJcCg",
  authDomain: "web-games-server.firebaseapp.com",
  projectId: "web-games-server",
  storageBucket: "web-games-server.firebasestorage.app",
  messagingSenderId: "9281210355",
  appId: "1:9281210355:web:8f90f8ddc60d36d8a3b486",
  measurementId: "G-YY2GVTD5Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Helper to safely query elements
const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", function() {
  const first = $('first');
  const second = $('second');
  const signInBtn = $('googleSignIn');
  const signOutBtn = $('googleSignOut');
  const userInfo = $('userInfo');

  if (first) first.onclick = () => window.location.href = 'indexRead.html';
  if (second) second.onclick = () => window.location.href = 'indexArCor.html';

  if (signInBtn) {
    signInBtn.addEventListener('click', async () => {
      try {
        await signInWithPopup(auth, provider);
        // onAuthStateChanged will handle UI update
      } catch (err) {
        console.error('Sign in error', err);
        alert('Ошибка входа: ' + (err.message || err));
      }
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener('click', async () => {
      try {
        await signOut(auth);
      } catch (err) {
        console.error('Sign out error', err);
      }
    });
  }

  // Listen for auth state changes and update UI
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.displayName || 'Пользователь';
      const email = user.email || '';
      const photo = user.photoURL || '';

      if (userInfo) {
        userInfo.innerHTML = `
          <img src="${photo}" alt="${name}" class="avatar">
          <div class="user-text">
            <div class="name">${name}</div>
            <div class="email">${email}</div>
          </div>
        `;
        userInfo.classList.add('signed-in');
      }

      if (signInBtn) signInBtn.style.display = 'none';
      if (signOutBtn) signOutBtn.style.display = 'inline-block';
    } else {
      if (userInfo) {
        userInfo.innerHTML = '';
        userInfo.classList.remove('signed-in');
      }
      if (signInBtn) signInBtn.style.display = 'inline-block';
      if (signOutBtn) signOutBtn.style.display = 'none';
    }
  });
});