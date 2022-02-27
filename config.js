import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAzU4NmwVm8oP0w3ikNs-64uHTPdtAVBXY",
  authDomain: "e-ride-app-71c75.firebaseapp.com",
  projectId: "e-ride-app-71c75",
  storageBucket: "e-ride-app-71c75.appspot.com",
  messagingSenderId: "131551664175",
  appId: "1:131551664175:web:f53a5f88c8f8e885bd8eda"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
