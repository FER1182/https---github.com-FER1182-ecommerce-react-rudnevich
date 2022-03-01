// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2BvGWE_RKJP_7I5Lg1F-NtHc3X5zNTA",
  authDomain: "ecommerce-react-rudnevich.firebaseapp.com",
  projectId: "ecommerce-react-rudnevich",
  storageBucket: "ecommerce-react-rudnevich.appspot.com",
  messagingSenderId: "1040426032757",
  appId: "1:1040426032757:web:92be8ec7816409f85aa23c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db