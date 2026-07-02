import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3XkNhsB7Vcep4onxgcaZR7nsIsbm1MYI",
  authDomain: "careerbridge-c4532.firebaseapp.com",
  projectId: "careerbridge-c4532",
  storageBucket: "careerbridge-c4532.firebasestorage.app",
  messagingSenderId: "530298590013",
  appId: "1:530298590013:web:5699981f76c091ccdaeb54"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;