 

 const create = document.getElementById('button2');
 create.addEventListener("click", (event)=>{
  event.preventDefault()
  window.location.href = "create-account.html";
 });




 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const firebaseConfig = {
  /*
  apiKey: "AIzaSyBZi03D8zM1-07ni5iIdTxmLoVq_wy7iI8",
  authDomain: "create-account-fb.firebaseapp.com",
  projectId: "create-account-fb",
  storageBucket: "create-account-fb.firebasestorage.app",
  messagingSenderId: "1022903792049",
  appId: "1:1022903792049:web:5022c8e9fe42a5d63a0d90"
  */

    apiKey: "AIzaSyAUp__DiYzcr3KpbhpZxeqEPV9MEgWioGk",
  authDomain: "create-account-fb2.firebaseapp.com",
  projectId: "create-account-fb2",
  storageBucket: "create-account-fb2.firebasestorage.com",
  messagingSenderId: "947400156863",
  appId: "1:947400156863:web:c4b1636fda119741b3080a"

   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById('submit');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('input3').value;
  const password = document.getElementById('user-password').value;
  const emailInput = document.getElementById('input3');
  const passwordInput = document.getElementById('user-password');

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully logged in
      const user = userCredential.user;

localStorage.setItem('currentUser', user.uid);

      alert("Login successful!");
      window.location.href = "dashboard.html"; 
      
    })
    .catch((error) => {
      /*
      const errorMessage = error.message;
      alert("Login failed: no user with that account. " /* + errorMessage);
      */
      
    });
    /*
    emailInput.value = "";
    passwordInput.value = "";
    */
});





const Submit = document.getElementById('submit');

Submit.addEventListener('click', async (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('input3');
  const passwordInput = document.getElementById('user-password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  //  Step 1: Client-side validation
  let hasError = false;

  if (email.length === 0) {
    emailError.style.display = "block";
    hasError = true;
    setTimeout(() => (emailError.style.display = "none"), 1000);
  }

  if (password.length === 0) {
    passwordError.style.display = "block";
    hasError = true;
    setTimeout(() => (passwordError.style.display = "none"), 1000);
  }

 
  if (hasError) return;

 
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem('currentUser', user.uid);
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    // Show this ONLY when credentials are wrong
    alert("Account not found");
  }


  
});







 

