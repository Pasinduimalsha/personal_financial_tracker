
import { getApp,getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsalqegH1lcTXtj7k8T1ZD8iz6h5KZFp8",
  authDomain: "finance-tracker-1b0d8.firebaseapp.com",
  projectId: "finance-tracker-1b0d8",
  storageBucket: "finance-tracker-1b0d8.appspot.com",
  messagingSenderId: "381288837831",
  appId: "1:381288837831:web:e0fccefbfd7f4b6bd7c4e2"
};

// Initialize Firebase
const app = getApps.length?getApp():initializeApp(firebaseConfig)

const db = getFirestore(app);


export {db};