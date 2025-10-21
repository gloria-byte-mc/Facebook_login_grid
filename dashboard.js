import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

  //  Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAUp__DiYzcr3KpbhpZxeqEPV9MEgWioGk",
    authDomain: "create-account-fb2.firebaseapp.com",
    projectId: "create-account-fb2",
    storageBucket: "create-account-fb2.firebasestorage.com",
    messagingSenderId: "947400156863",
    appId: "1:947400156863:web:c4b1636fda119741b3080a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  //  Get the input element
  const searchInput = document.getElementById("search-button");

  //  Listen for Enter key
  searchInput.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await searchFriends();
    }
  });

  //  Function to search Firestore by firstName or surName
  async function searchFriends() {
    const name = searchInput.value;
    if (!name) {
      alert("Please type a name!");
      return;
    }

    try {
      const usersRef = collection(db, "users");


      console.log("Searching for:", name);
console.log("Total docs in users:", (await getDocs(collection(db, "users"))).docs.length);


      // Search both firstName and surName fields
      const q1 = query(usersRef, where("firstName", "==", name));
      const q2 = query(usersRef, where("surName", "==", name));

      const [snap1, snap2] = await Promise.all([
        getDocs(q1),
        getDocs(q2)
      ]);

      let foundUser = null;

      if (!snap1.empty) foundUser = snap1.docs[0];
      else if (!snap2.empty) foundUser = snap2.docs[0];

      if (foundUser) {
        const userData = foundUser.data();
        const userId = foundUser.id; 

        // Store found user in localStorage
        localStorage.setItem("viewUser", JSON.stringify(userData)); 

       
        window.location.href = `dashboard.html?uid=${userId}`;
      } else {
        alert("No user found with that name.");
      }

      searchInput.value = "";
    } catch (error) {
      console.error("Error searching user:", error);
      alert("Something went wrong: " + error.message);
    }
  }

