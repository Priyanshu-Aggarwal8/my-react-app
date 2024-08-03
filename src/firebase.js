// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5_eR_b_IphfV4DwPiadSWGOwqckd8N0E",
  authDomain: "my-react-project-d0f53.firebaseapp.com",
  projectId: "my-react-project-d0f53",
  storageBucket: "my-react-project-d0f53.appspot.com",
  messagingSenderId: "742306560644",
  appId: "1:742306560644:web:dde793f791b266db8ea0d1",
  measurementId: "G-QXY0BQ54VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);