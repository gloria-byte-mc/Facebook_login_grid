
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
    import { getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

   

  const firebaseConfig = {
    
    
    /* apiKey:"AIzaSyBZi03D8zM1-07ni5iIdTxmLoVq_wy7iI8",
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
  const db = getFirestore(app);
 
  /* remove here
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

localStorage.setItem('currentUser', user.uid);

  alert("Account created successfully");
 window.location.href = "dashboard.html";

});

   
  })
  /*
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    
  });
  */
 /* remove also here
  });


const SignUp = document.getElementById('sign-up');

SignUp.addEventListener('click', ()=>{

  const FirstNameError = document.getElementById('firstName-error');
  const SurNameError = document.getElementById('firstName-error2');
   const firstNameInput = document.getElementById('firstname').value;
   const SurNameInput = document.getElementById('surname').value;
   const EmailAddressError = document.getElementById('email-address-error');
   const PasswordError = document.getElementById('password-error2');

   if(firstNameInput === ""){
    FirstNameError.style.display = "block";
    setTimeout(()=>{
      FirstNameError.style.display = "none";
    },1000);
   }else{
    FirstNameError.style.display = "none";
   }

   if(SurNameInput === ""){
    SurNameError.style.display = "block";
    setTimeout(()=>{
      SurNameError.style.display = "none";
    },1000);
   }


   const EmailInput = document.getElementById('email-id').value;
   const PasswordInput = document.getElementById('password-id').value;

   if(EmailInput === ""){
    EmailAddressError.style.display = "block";
    setTimeout(()=>{
      EmailAddressError.style.display = "none";
    },1000);
   }

   if(PasswordInput === ""){
    PasswordError.style.display = "block";
    setTimeout(()=>{
      PasswordError.style.display = "none";
    },1000);
   }

   const GenderError = document.getElementById('genderError');
  const genderChecked = document.querySelector('input[name="gender"]:checked');

   if (!genderChecked) {
        GenderError.style.display = 'block';
      } else {
        GenderError.style.display = 'none'; 
      }
      setTimeout(()=>{
        GenderError.style.display = 'none';
      },1000);



 const ageError = document.getElementById('ageError');
const year = parseInt(document.getElementById('select-year').value);

if (year > 2007) {
 ageError.style.display = "block";
  setTimeout(() =>
     (ageError.style.display = "none"), 1000);
} else {
  ageError.style.display = "none";
}

});


/*
const  Accounting = document.getElementById('account');

Accounting.addEventListener('click', (event)=>{
  event.preventDefault();
  const Dropdown = document.querySelector('.dropdown');

  if(Dropdown.style.display === 'none'){
    Dropdown.style.display = 'flex';
  }else{
    Dropdown.style.display = 'none';
  }
});
*/
  const submit = document.getElementById('sign-up');

submit.addEventListener("click", async function(event) {
  event.preventDefault();

  // Input fields
  const firstName = document.getElementById('firstname').value.trim();
  const surName = document.getElementById('surname').value.trim();
  const selectYear = parseInt(document.getElementById('select-year').value);
  const selectedGender = document.querySelector('input[name="gender"]:checked')?.value;
  const email = document.getElementById('email-id').value.trim();
  const password = document.getElementById('password-id').value.trim();

  // Error elements
  const ageError = document.getElementById('ageError');
  const GenderError = document.getElementById('genderError');
  const FirstNameError = document.getElementById('firstName-error');
  const SurNameError = document.getElementById('firstName-error2');
  const EmailAddressError = document.getElementById('email-address-error');
  const PasswordError = document.getElementById('password-error2');

  // Basic validation
  let hasError = false;

  if (firstName === "") {
    FirstNameError.style.display = "block";
    hasError = true;
  }

  if (surName === "") {
    SurNameError.style.display = "block";
    hasError = true;
  }

  if (!selectedGender) {
    GenderError.style.display = "block";
    hasError = true;
  }

  if (email === "") {
    EmailAddressError.style.display = "block";
    hasError = true;
  }

  if (password === "") {
    PasswordError.style.display = "block";
    hasError = true;
  }

  // Age check — stop signup if too young
  if (selectYear > 2007) {
    ageError.style.display = "block";
    hasError = true;
  }

  // If any validation fails, stop the function here
  if (hasError) {
    setTimeout(() => {
      document.querySelectorAll('.fa-circle-exclamation, .error').forEach(e => e.style.display = 'none');
    }, 1500);
    return; // ✅ prevent account creation
  }

  // ✅ Create account only if all inputs are valid
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      uid: user.uid,
      firstName,
      surName,
      selectYear,
      selectedGender,
    });

    localStorage.setItem('currentUser', user.uid);
    alert("Account created successfully");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});








 




  

