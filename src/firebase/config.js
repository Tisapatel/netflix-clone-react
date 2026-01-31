import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  addDoc,
  getFirestore,
  collection
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCAmnACEFll7nel9fmSKPo4ceqUoQwV_FE",
  authDomain: "netflix-clone-11247.firebaseapp.com",
  projectId: "netflix-clone-11247",
  storageBucket: "netflix-clone-11247.firebasestorage.app",
  messagingSenderId: "224038493788",
  appId: "1:224038493788:web:a5da09a84e30a43fd89099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      email: email,
      authProvider: "local",
      createdAt: new Date()
    });

    console.log("Signup Successful");
  } catch (error) {
    console.log(error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};


const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login Successful");
  } catch (error) {
    console.log(error.message);
     toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};


const logout = async () => {
  try {
    await signOut(auth);
    console.log("Logout Successful");
  } catch (error) {
    console.log(error.message);
     toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

export { auth, db, signup, login, logout };
