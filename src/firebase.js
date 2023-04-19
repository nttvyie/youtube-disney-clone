import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWIm0p8_ihhqGyMajJ_CFuhqv1jcHfeE4",
  authDomain: "disneyplus-clone-13465.firebaseapp.com",
  projectId: "disneyplus-clone-13465",
  storageBucket: "disneyplus-clone-13465.appspot.com",
  messagingSenderId: "209036832262",
  appId: "1:209036832262:web:79771a81431bf461da5d87",
  measurementId: "G-5MHV6360R7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
