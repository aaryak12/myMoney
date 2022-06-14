import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDuP3lstIuYbXec-kgEhvl8YgCfURBxY3I",
  authDomain: "mymoneynew-9a5f6.firebaseapp.com",
  projectId: "mymoneynew-9a5f6",
  storageBucket: "mymoneynew-9a5f6.appspot.com",
  messagingSenderId: "719026767123",
  appId: "1:719026767123:web:10bb4dfc7dec729a1286e6"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }