
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
    import { getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

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
  const db = getFirestore(app);
 
  
  const submit = document.getElementById('sign-up');

  submit.addEventListener("click", function(event){
 event.preventDefault();
 
 //input fields
  const firstName = document.getElementById('firstname').value;
  const surName = document.getElementById('surname').value;
  const selectDay = document.getElementById('select-day').value;
  const selectMonth = document.getElementById('select-month').value;
  const selectYear = document.getElementById('select-year').value;
  const selectedGender = document.querySelector('input[name="gender"]:checked')?.value;
  const email = document.getElementById('email-id').value;
  const password = document.getElementById('password-id').value;

 

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const user = userCredential.user; 

   setDoc(doc(db, "users", user.uid),{
     email: user.email,
     uid: user.uid,
     firstName: firstName,
     surName: surName,
     selectDay: selectDay,
     selectMonth: selectMonth,
     selectYear: selectYear,
     selectedGender: selectedGender,
}).then(()=>{
 window.location.href = "dashboard.html";
});

   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    
  });
 
  });

  

