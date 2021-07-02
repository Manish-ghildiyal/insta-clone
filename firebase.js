import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5URuArmCwiAVXNoJjNOG6z0tzZV3SMms",
  authDomain: "instagram-clone-react-5fc1b.firebaseapp.com",
  //databaseURL: "https://instagram-clone-react-5fc1b.firebaseio.com",
  projectId: "instagram-clone-react-5fc1b",
  storageBucket: "instagram-clone-react-5fc1b.appspot.com",
  messagingSenderId: "155691876031",
  appId: "1:155691876031:web:2d7d4f10bad86a2a5a500a",
  measurementId: "G-180D197Q18"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };