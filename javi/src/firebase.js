import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBIaeNGqJPgt4UGMt0yViciJ_w7mNIqidI",
  authDomain: "javi-development.firebaseapp.com",
  projectId: "javi-development",
  storageBucket: "javi-development.appspot.com",
  messagingSenderId: "326962623335",
  appId: "1:326962623335:web:34be47ec788bd836f175c2"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;