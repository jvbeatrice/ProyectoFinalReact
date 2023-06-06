import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4K8vMVRYM49sjxmepSCQmMRfIL5tAaYs",
  authDomain: "proyectoreactcoder-5b057.firebaseapp.com",
  projectId: "proyectoreactcoder-5b057",
  storageBucket: "proyectoreactcoder-5b057.appspot.com",
  messagingSenderId: "624707442949",
  appId: "1:624707442949:web:f9d17d868a44c554513f6c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
