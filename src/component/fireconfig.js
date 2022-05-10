
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm5sBHSQQobMOxo6Y3txZZjSg-gtzNhW0",
  authDomain: "addnote-authdb.firebaseapp.com",
  databaseURL: "https://addnote-authdb-default-rtdb.firebaseio.com",
  projectId: "addnote-authdb",
  storageBucket: "addnote-authdb.appspot.com",
  messagingSenderId: "498961934274",
  appId: "1:498961934274:web:139e77ca1fee28e5a9585b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app)

export default app;

