// Shared Firebase initialization so every page uses the same project.
(function initializeFirebaseApp() {
  if (typeof firebase === "undefined") {
    console.warn("Firebase SDK not loaded before firebase-init.js.");
    return;
  }

  var firebaseConfig = {
    apiKey: "AIzaSyAmuHspyEASRd8xH1Xr-0vvXXfADrKBlq0",
    authDomain: "test-4d0bf.firebaseapp.com",
    projectId: "test-4d0bf",
    storageBucket: "test-4d0bf.firebasestorage.app",
    messagingSenderId: "1080413115827",
    appId: "1:1080413115827:web:ba23bc74e8cec35d26a7c6",
    measurementId: "G-N7HRP1XPT8",
  };

  if (firebase.apps && firebase.apps.length) {
    return;
  }

  firebase.initializeApp(firebaseConfig);
})();

