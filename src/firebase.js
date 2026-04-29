import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBcjCTXDWbHfWIg8CPgGaKFaL6pArzDkQQ",
  authDomain: "mobilemarry-92b16.firebaseapp.com",
  projectId: "mobilemarry-92b16",
  storageBucket: "mobilemarry-92b16.firebasestorage.app",
  messagingSenderId: "4051579837",
  appId: "1:4051579837:web:7645a6cf40eee4539f18d4",
  measurementId: "G-2M86CF9T47"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app, 'marry')
