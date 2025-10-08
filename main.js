 
 /*
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD361q1NW7VSsBn5FeZC1DBRKHDHUsoOOM",
    authDomain: "facebook-log-in-d6c36.firebaseapp.com",
    projectId: "facebook-log-in-d6c36",
    storageBucket: "facebook-log-in-d6c36.firebasestorage.app",
    messagingSenderId: "615096167975",
    appId: "1:615096167975:web:a5f75c0222199e6da72802",
    measurementId: "G-2WGD9QT298"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const auth = getAuth(app);

  
  const submit = document.getElementById('button2');

  submit.addEventListener("click", (event)=>{
 event.preventDefault()

 const emailInput = document.getElementById('input3');
 const passwordInput = document.getElementById('user-password');
 
 const email = document.getElementById('input3').value;
  const password = document.getElementById('user-password').value;
 
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    alert("Creating Account...")
   
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
   emailInput.value = "";
    passwordInput.value = "";

  });


  const loginBtn = document.getElementById('submit');
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById('input3').value;
  const password = document.getElementById('user-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful! Redirecting...");
      window.location.href = "practise.html"; // redirect
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
*/


 const create = document.getElementById('button2');
 create.addEventListener("click", (event)=>{
  event.preventDefault()
  window.location.href = "create-account.html";
 });




 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZi03D8zM1-07ni5iIdTxmLoVq_wy7iI8",
  authDomain: "create-account-fb.firebaseapp.com",
  projectId: "create-account-fb",
  storageBucket: "create-account-fb.firebasestorage.app",
  messagingSenderId: "1022903792049",
  appId: "1:1022903792049:web:5022c8e9fe42a5d63a0d90"
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
      alert("Login successful!");
      window.location.href = "dashboard.html"; 
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Login failed: " + errorMessage);
    });
    emailInput.value = "";
    passwordInput.value = "";
});



 







 

