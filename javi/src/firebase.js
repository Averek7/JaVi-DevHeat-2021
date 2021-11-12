import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCOdMiOERN_4dFBtyNery0R4IpCeqSkLGw",
  authDomain: "javi-9f91b.firebaseapp.com",
  projectId: "javi-9f91b",
  storageBucket: "javi-9f91b.appspot.com",
  messagingSenderId: "280654418660",
  appId: "1:280654418660:web:10bfffbc59645e07af92f1",
  measurementId: "G-0DC327H30K",
};

const firebaseApp = firebase.initalizeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;