import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyATkEYZLzCv0A3Ep0g4WFvsPg5TMm0UpnE",
  authDomain: "netflix-2-212ca.firebaseapp.com",
  projectId: "netflix-2-212ca",
  storageBucket: "netflix-2-212ca.appspot.com",
  messagingSenderId: "168771669738",
  appId: "1:168771669738:web:4afdbd97e8dd5bb73f5193",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
