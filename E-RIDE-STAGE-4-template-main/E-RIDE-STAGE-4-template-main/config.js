import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDdaDlLmlFPUxFvwdvVYF5tdYf5Sop_XFE",
    authDomain: "e-ride-stage-4-24dcb.firebaseapp.com",
    projectId: "e-ride-stage-4-24dcb",
    storageBucket: "e-ride-stage-4-24dcb.appspot.com",
    messagingSenderId: "597624457728",
    appId: "1:597624457728:web:d75082031cb7ddf4e2e6e5"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


