import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("admin-login-btn").addEventListener("click", () => {
  const email = document.getElementById("admin-email").value;
  const password = document.getElementById("admin-password").value;





  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Admin Login Successful"))
    .catch(error => {
      document.getElementById("admin-error").textContent = error.message;
    });
})

