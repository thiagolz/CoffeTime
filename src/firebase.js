import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeEnG_v4BvUywtCQTe7GPtlWZu6HQiHEY",
  authDomain: "coffeetime-52dea.firebaseapp.com",
  projectId: "coffeetime-52dea",
  storageBucket: "coffeetime-52dea.appspot.com",
  messagingSenderId: "491599853309",
  appId: "1:491599853309:web:c2482bfbc66e42e8d0f094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export data base from firestore
export const db = getFirestore(app);
