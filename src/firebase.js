import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {GoogleAuthProvider} from "firebase/auth";

// firebase config **DO NOT TOUCH**
const firebaseConfig = {
  apiKey: "AIzaSyB_tP2La8GEba-DVTpvYjwaxQgqdoCDQqc",
  authDomain: "portfolio-abhishek787.firebaseapp.com",
  projectId: "portfolio-abhishek787",
  storageBucket: "portfolio-abhishek787.appspot.com",
  messagingSenderId: "999024350050",
  appId: "1:999024350050:web:65b9968c8bb5c06f05923b",
  measurementId: "G-DTWTN1Q5KN",
};

// initializing app
const app = initializeApp(firebaseConfig);

// Initializing Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export {db, auth, storage, provider};
