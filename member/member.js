import { auth } from "../admin/firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("member-login-btn").addEventListener("click", () => {
  const email = document.getElementById("member-email").value;
  const password = document.getElementById("member-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Member Login Successful"))
    .catch(error => {
      document.getElementById("member-error").textContent = error.message;
    });
});