import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUcciLFd6TiEy4SxxyD1tpFUzbiLSseOc",
  authDomain: "gym-management-system-23a9b.firebaseapp.com",
  projectId: "gym-management-system-23a9b",
  storageBucket: "gym-management-system-23a9b.appspot.com",
  messagingSenderId: "487472705043",
  appId: "1:487472705043:web:abb1f1af694917553b99e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export both auth and db
export { auth, db };
