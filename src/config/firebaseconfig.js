import firebase from "firebase"
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyC4B5aBP-ptXXvLrL1763bRmp5G0CSLYi4",
  authDomain: "lucas-marques.firebaseapp.com",
  projectId: "lucas-marques",
  storageBucket: "lucas-marques.appspot.com",
  messagingSenderId: "370593665927",
  appId: "1:370593665927:web:803caf50ee74b05e31f922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database