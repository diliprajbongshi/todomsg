// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArnsuFm91l1CnnbAV4b_E4Se-wxA6CR7E",
  authDomain: "todomsg-3db0c.firebaseapp.com",
  projectId: "todomsg-3db0c",
  storageBucket: "todomsg-3db0c.appspot.com",
  messagingSenderId: "920379470733",
  appId: "1:920379470733:web:57ad1661c6e551f881c3c4",
  measurementId: "G-LFWQMZK0HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;