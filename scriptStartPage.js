// document.addEventListener("DOMContentLoaded", function() {
document.getElementById('second').onclick = function() {
    window.location.href = 'indexArCor.html';
};
// });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('first').onclick = function() {
        window.location.href = 'indexRead.html';
    };

});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
