import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB7y1TDVQVpffWpMXs8EgnEnM-CyooBIVU",
  authDomain: "tricycle-reservation.firebaseapp.com",
  databaseURL: "https://tricycle-reservation-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tricycle-reservation",
  storageBucket: "tricycle-reservation.appspot.com",
  messagingSenderId: "1091927812965",
  appId: "1:1091927812965:web:917f3054a16a4102eacf8c"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;