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


const OnYourMind = document.getElementById('on-your-mind');

OnYourMind.addEventListener('click', (event)=>{
  event.preventDefault();
  const Overlay3 = document.querySelector('.overlay3');
  Overlay3.style.display = "flex";

});


const GoBack = document.querySelector('.create-post-span');

GoBack.addEventListener('click', (event)=>{
  event.preventDefault();
   const Overlay3 = document.querySelector('.overlay3');
  Overlay3.style.display = "none";
  
});


// 🧩 Close overlay3 when clicking outside overlay-div
const overlay3 = document.querySelector('.overlay3');
const overlayDiv = document.querySelector('.overlay-div');

// Only run if overlay exists
if (overlay3 && overlayDiv) {
  overlay3.addEventListener('click', (event) => {
    // Check if the click happened *outside* the overlay-div
    if (!overlayDiv.contains(event.target)) {
      overlay3.style.display = 'none';
    }
  });
}



// Select elements
const photoIcon = document.getElementById('photoIcon');
const imageInput = document.getElementById('imageInput2');
const imageContainer = document.querySelector('.image-container');

// When user clicks the photo/video icon, open file picker
photoIcon.addEventListener('click', () => {
  imageInput.click();
});

// When an image is selected
imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageBase64 = e.target.result;

      // Set background image of the .image-container
      imageContainer.style.backgroundImage = `url(${imageBase64})`;
      imageContainer.style.backgroundSize = "cover";
      imageContainer.style.backgroundPosition = "center";
     
    };
    reader.readAsDataURL(file);
  }
});


/*

const PostButton = document.querySelector('.post-button');
 
PostButton.addEventListener('click', () => {
 

  const currentUser = localStorage.getItem("currentUser");

  // Get the background image from .image-container
  const bgImage = imageContainer.style.backgroundImage;

  if (bgImage && bgImage.includes('url')) {
    // Extract the image URL from backgroundImage (remove `url("...")`)
    const imageUrl = bgImage.slice(5, -2);

    // Save the image to localStorage for this user
    if (currentUser) {
      localStorage.setItem(`postImage_${currentUser}`, imageUrl);
    }

    // Optional: also save text input
    const postText = document.querySelector('.text3').value;
    if (postText.trim() !== "") {
      localStorage.setItem(`postText_${currentUser}`, postText);
    }

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Please select an image before posting.");
  }
});
*/


const PostButton = document.querySelector('.post-button');
const overlay4 = document.querySelector('.overlay4');

PostButton.addEventListener('click', () => {
  const currentUser = localStorage.getItem("currentUser");
  const bgImage = imageContainer.style.backgroundImage;

  if (bgImage && bgImage.includes('url')) {
    // Show overlay
    overlay4.style.display = "flex"; // or "block" depending on your CSS

    // Keep it visible for 2 seconds
    setTimeout(() => {
      overlay4.style.display = "none";

      // Continue saving after delay
      const imageUrl = bgImage.slice(5, -2);
      if (currentUser) {
        localStorage.setItem(`postImage_${currentUser}`, imageUrl);
      }

      const postText = document.querySelector('.text3').value;
      if (postText.trim() !== "") {
        localStorage.setItem(`postText_${currentUser}`, postText);
      }

      // Redirect after overlay hides
      window.location.href = "dashboard.html";
    }, 2000); // 2000ms = 2 seconds

  } else {
    alert("Please select an image before posting.");
  }
});





//this is for the picking an image in the overlay div

const ImagePicker = document.querySelector('.image-picker');
const StoryImageInput = document.getElementById('storyImageInput');



ImagePicker.addEventListener('click', () => {
  StoryImageInput.click();
});


StoryImageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageBase64 = e.target.result;

     
      imageContainer.style.backgroundImage = `url(${imageBase64})`;
      imageContainer.style.backgroundSize = "cover";
      imageContainer.style.backgroundPosition = "center";

     
      overlay3.style.display = "flex";
    };
    reader.readAsDataURL(file);
  }
});


//This is for picking an emoji

const emojiButton = document.querySelector('.emoji-container');
const emojiPicker = document.querySelector('.emoji-picker');
const textInput = document.querySelector('.text3');


emojiButton.addEventListener('click', (event) => {
  event.stopPropagation();
  emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'flex' : 'none';
});


document.addEventListener('click', (event) => {
  if (!emojiPicker.contains(event.target) && !emojiButton.contains(event.target)) {
    emojiPicker.style.display = 'none';
  }
});


emojiPicker.addEventListener('click', (event) => {
  if (event.target.classList.contains('emoji')) {
    textInput.value += event.target.textContent;
    emojiPicker.style.display = 'none';
  }
});




//this is for the feelings button

const Feeling = document.querySelector('.feeling-container');
const emojiPicker2 = document.querySelector('.emoji-picker2');


Feeling.addEventListener('click', (event) => {
  event.stopPropagation();
  emojiPicker2.style.display =
    emojiPicker2.style.display === 'none' || emojiPicker2.style.display === ''
      ? 'flex'
      : 'none';
});


emojiPicker2.addEventListener('click', (event) => {
  if (event.target.classList.contains('emoji')) {
    const selectedEmoji = event.target.textContent;

    
    textInput.value += selectedEmoji;
    overlay3.style.display = 'flex';

     emojiPicker2.style.display = 'none';
  }
});

document.addEventListener('click', (event) => {
  if (
    !emojiPicker2.contains(event.target) &&
    !Feeling.contains(event.target)
  ) {
    emojiPicker2.style.display = 'none';
  }
});


const EditButton = document.getElementById('edit-button');

EditButton.addEventListener('click', ()=>{


});



const EditMenu = document.getElementById('edit-menu');
const EditPostLink = document.getElementById('edit-post-link');

EditButton.addEventListener('click', (event) => {
  event.stopPropagation();
  EditMenu.style.display = EditMenu.style.display === 'none' || EditMenu.style.display === ''
    ? 'block'
    : 'none';
});


EditPostLink.addEventListener('click', (event) => {
  event.preventDefault();
  overlay3.style.display = 'flex';
  EditMenu.style.display = 'none';
});

document.addEventListener('click', (event) => {
  if (!EditMenu.contains(event.target) && !EditButton.contains(event.target)) {
    EditMenu.style.display = 'none';
  }
});


//this is for deleting the post

const MoveToBin = document.getElementById('move-to-bin');

MoveToBin.addEventListener('click', () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) return;


  const imageKey = `postImage_${currentUser}`;
  const textKey = `postText_${currentUser}`;

 
  localStorage.removeItem(imageKey);
  localStorage.removeItem(textKey);

 
  const postImageDiv = document.getElementById('post-image');
  const postTextDiv = document.getElementById('p2');
  const userPostDiv = document.querySelector('.user-post');

  if (postImageDiv) {
    postImageDiv.src = ""; 
    postImageDiv.style.display = "none";
  }

  if (postTextDiv) {
    postTextDiv.textContent = "";
  }

  if (userPostDiv) {
    userPostDiv.style.display = "none";
  }

  alert("Post moved to bin successfully!");
});




const settingsLink = document.getElementById('settings-link');
const settingsPanel = document.getElementById('settings-panel');
const dropdown = document.querySelector('.dropdown'); 

settingsLink.addEventListener('click', (e) => {
  e.preventDefault();

  if (dropdown) {
    dropdown.style.display = 'none';
  }

  if (settingsPanel) {
    settingsPanel.style.display =
      settingsPanel.style.display === 'block' ? 'none' : 'block';
  }

  e.stopPropagation();
});


document.addEventListener('click', (e) => {
  if (
    settingsPanel &&
    settingsPanel.style.display === 'block' &&
    !settingsPanel.contains(e.target) &&
    e.target !== settingsLink
  ) {
    settingsPanel.style.display = 'none';
  }
});

/*
const Dark = document.querySelector('.dark');


Dark.addEventListener('click', ()=>{

  const Nav = document.querySelector('.facebook-nav');
  const FacebookContainer = document.querySelector('.facebook-container');
  const Search2 = document.querySelector('.search');
  const userIcon = document.querySelector('.user-icon');
  const userIcon2 = document.querySelector('.user-icon2');
  const Find = document.querySelector('.find');
  const Account = document.querySelector('.account');
  const Service1 = document.querySelector('.service1');
  const UserProfile = document.querySelector('.user-profile');
  const UserName = document.querySelector('.user-name');
  const facebookServices = document.querySelector('.facebook-services');
  const uploadProfile = document.querySelector('.upload-profile');
  const createStory = document.querySelector('.create-story');
  const storyContainer = document.querySelector('.story-container2');
  const GroupChats = document.querySelector('.group-chats');
  const createPost = document.querySelector('.create-post');
  const userPost = document.querySelector('.user-post');
  const postContainer = document.querySelector('.post-container');


  Nav.classList.add('dark-mode');
  FacebookContainer.classList.add('dark-mode');
  Search2.classList.add('dark-mode');
  userIcon.classList.add('dark-mode');
  userIcon2.classList.add('dark-mode');
  Find.classList.add('dark-mode');
  Account.classList.add('dark-mode');
  Service1.classList.add('dark-mode');
  UserProfile.classList.add('dark-mode');
  UserName.classList.add('dark-mode');
  facebookServices.classList.add('dark-mode');
  uploadProfile.classList.add('dark-mode');
  createStory.classList.add('dark-mode');
  storyContainer.classList.add('dark-mode');
  GroupChats.classList.add('dark-mode');
  createPost.classList.add('dark-mode');
  userPost.classList.add('dark-mode');
  postContainer.classList.add('.dark-mode');
});

const Light = document.querySelector('.light');

Light.addEventListener('click', () => {
  const Nav = document.querySelector('.facebook-nav');
   const FacebookContainer = document.querySelector('.facebook-container');
   const Search2 = document.querySelector('.search');
  const userIcon = document.querySelector('.user-icon');
  const userIcon2 = document.querySelector('.user-icon2');
  const Find = document.querySelector('.find');
  const Account = document.querySelector('.account');
   const Service1 = document.querySelector('.service1');
  const UserProfile = document.querySelector('.user-profile');
  const UserName = document.querySelector('.user-name');
  const facebookServices = document.querySelector('.facebook-services');
  const uploadProfile = document.querySelector('.upload-profile');
  const createStory = document.querySelector('.create-story');
  const storyContainer = document.querySelector('.story-container2');
  const GroupChats = document.querySelector('.group-chats');
   const createPost = document.querySelector('.create-post');
   const userPost = document.querySelector('.user-post');
    const postContainer = document.querySelector('.post-container');

  Nav.classList.remove('dark-mode');
  FacebookContainer.classList.remove('dark-mode');
  Search2.classList.remove('dark-mode');
  userIcon.classList.remove('dark-mode');
  userIcon2.classList.remove('dark-mode');
  Find.classList.remove('dark-mode');
  Account.classList.remove('dark-mode');
    Service1.classList.remove('dark-mode');
  UserProfile.classList.remove('dark-mode');
  UserName.classList.remove('dark-mode');
  facebookServices.classList.add('dark-mode');
   uploadProfile.classList.remove('dark-mode');
   createStory.classList.remove('dark-mode');
   storyContainer.classList.remove('dark-mode');
    GroupChats.classList.remove('dark-mode');
   createPost.classList.remove('dark-mode');
   userPost.classList.remove('dark-mode');
    postContainer.classList.remove('.dark-mode');
});

*/

const Dark = document.querySelector('.dark');
const Light = document.querySelector('.light');

// Function to apply dark mode
function applyDarkMode() {
  const elements = [
    document.querySelector('.facebook-nav'),
    document.querySelector('.facebook-container'),
    document.querySelector('.search'),
    document.querySelector('.user-icon'),
    document.querySelector('.user-icon2'),
    document.querySelector('.find'),
    document.querySelector('.account'),
    document.querySelector('.service1'),
    document.querySelector('.user-profile'),
    document.querySelector('.user-name'),
    document.querySelector('.facebook-services'),
    document.querySelector('.upload-profile'),
    document.querySelector('.create-story'),
    document.querySelector('.story-container2'),
    document.querySelector('.group-chats'),
    document.querySelector('.create-post'),
    document.querySelector('.user-post'),
    document.querySelector('.dropdown'),
    document.querySelector('.settings-panel'),
    document.querySelector('.overlay4'),
    document.querySelector('.emoji-container2')
  ];

  elements.forEach(el => {
    if (el) el.classList.add('dark-mode');
  });
}

// Function to remove dark mode
function removeDarkMode() {
  const elements = [
    document.querySelector('.facebook-nav'),
    document.querySelector('.facebook-container'),
    document.querySelector('.search'),
    document.querySelector('.user-icon'),
    document.querySelector('.user-icon2'),
    document.querySelector('.find'),
    document.querySelector('.account'),
    document.querySelector('.service1'),
    document.querySelector('.user-profile'),
    document.querySelector('.user-name'),
    document.querySelector('.facebook-services'),
    document.querySelector('.upload-profile'),
    document.querySelector('.create-story'),
    document.querySelector('.story-container2'),
    document.querySelector('.group-chats'),
    document.querySelector('.create-post'),
    document.querySelector('.user-post'),
    document.querySelector('.dropdown'),
    document.querySelector('.settings-panel'),
    document.querySelector('.overlay4'),
    document.querySelector('.emoji-container2')
  ];

  elements.forEach(el => {
    if (el) el.classList.remove('dark-mode');
  });
}

// Check for saved dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    applyDarkMode();
  }
});

// Dark mode button click
Dark.addEventListener('click', () => {
  applyDarkMode();
  localStorage.setItem('darkMode', 'true');
});

// Light mode button click
Light.addEventListener('click', () => {
  removeDarkMode();
  localStorage.setItem('darkMode', 'false');
});




//this is for the like button at the bottom of the post

const LikeButton2 = document.querySelector('.like-button2');
const emojiContainer = document.querySelector('.emoji-container2');
const mainReactionImg = document.querySelector('.main-reaction-img');
const Post4 = document.querySelector('.post4-a');

LikeButton2.addEventListener('click', () => {
  Post4.style.display = "flex";
 

  if (emojiContainer.style.display === "flex") {
    emojiContainer.style.display = "none";
  } else {
    emojiContainer.style.display = "flex";
  }
});

document.addEventListener('click', (e) => {
  if (!emojiContainer.contains(e.target) && e.target !== LikeButton2) {
    emojiContainer.style.display = "none";
  }
});

document.querySelectorAll('.emoji').forEach((emoji) => {
  emoji.addEventListener('click', (e) => {
    const clickedEmojiSrc = e.target.getAttribute('src');
    mainReactionImg.setAttribute('src', clickedEmojiSrc);
    mainReactionImg.style.display = "block";
    emojiContainer.style.display = "none"; 
  });
});