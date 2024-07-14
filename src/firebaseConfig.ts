
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyB5Xa-z8Pl1hxEq9m6dsVsZEc-hfT6MKfA",
  authDomain: "streamify-946f9.firebaseapp.com",
  projectId: "streamify-946f9",
  storageBucket: "streamify-946f9.appspot.com",
  messagingSenderId: "1070985733254",
  appId: "1:1070985733254:web:bc8e427e2cde5ae36c5d07",
  measurementId: "G-167G4GZ6DC"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

const db = getFirestore(app);

export { db };


