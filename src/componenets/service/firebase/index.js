import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVNAP9Sl4SN335ky52iZaviAC25PbWhQY",
  authDomain: "miapp1-8b3ef.firebaseapp.com",
  projectId: "miapp1-8b3ef",
  storageBucket: "miapp1-8b3ef.appspot.com",
  messagingSenderId: "962054706899",
  appId: "1:962054706899:web:92b7844285af21fd30a626",
};

const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);
