// Import the functions you need from the SDKs you need
const { initializeApp } =require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {getStorage} = require('firebase/storage')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVX9jCIxPtoYaEpVWEfmbxf1xvy4ot1bU",
  authDomain: "resume-8937a.firebaseapp.com",
  projectId: "resume-8937a",
  storageBucket: "resume-8937a.appspot.com",
  messagingSenderId: "664295604522",
  appId: "1:664295604522:web:3cb1426194dde181c95e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const storage = getStorage(app)
module.exports={storage}