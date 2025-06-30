import { auth } from "../admin/firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("user-login-btn").addEventListener("click", () => {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("User Login Successful"))
    .catch(error => {
      document.getElementById("user-error").textContent = error.message;
    });
});
