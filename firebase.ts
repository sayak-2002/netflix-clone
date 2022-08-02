// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC62NzTEaKnzKdkZD2dfB4N8rC91I87fNM",
  authDomain: "netflix-clone-ae5d7.firebaseapp.com",
  projectId: "netflix-clone-ae5d7",
  storageBucket: "netflix-clone-ae5d7.appspot.com",
  messagingSenderId: "1052668355386",
  appId: "1:1052668355386:web:23692483a6c7c912a4a603"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }