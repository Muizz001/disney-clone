import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAwJpGZ24DtxWqTu5iliMu8ko3jWkZHY0M",
    authDomain: "disney-7f78c.firebaseapp.com",
    projectId: "disney-7f78c",
    storageBucket: "disney-7f78c.appspot.com",
    messagingSenderId: "983652432164",
    appId: "1:983652432164:web:0543a46f216549c7f41bb1",
    measurementId: "G-QVT556MFZM"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
 


  export { auth };
  export default db