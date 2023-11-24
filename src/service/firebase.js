// firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1UHARwJDJ3aMf2AXlnHLFbiIouBjXTSs",
    authDomain: "bankapp-480e8.firebaseapp.com",
    projectId: "bankapp-480e8",
    storageBucket: "bankapp-480e8.appspot.com",
    messagingSenderId: "753077057851",
    appId: "1:753077057851:web:f5661683ede572c4f81f1e"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
