import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCAmnACEFll7nel9fmSKPo4ceqUoQwV_FE",
  authDomain: "netflix-clone-11247.firebaseapp.com",
  projectId: "netflix-clone-11247",
  storageBucket: "netflix-clone-11247.firebasestorage.app",
  messagingSenderId: "224038493788",
  appId: "1:224038493788:web:a5da09a84e30a43fd89099"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

/* ---------------- SIGNUP ---------------- */
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await addDoc(collection(db, "users"), {
      uid: res.user.uid,
      name,
      email,
      provider: "email",
      createdAt: new Date()
    });

    return res.user;
  } catch (error) {
    toast.error(error.code.split("/")[1].replaceAll("-", " "));
    throw error; 
  }
};

/* ---------------- LOGIN ---------------- */
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      toast.error("Account not found. Please Sign Up first");
    } else {
      toast.error(error.code.split("/")[1].replaceAll("-", " "));
    }
    throw error;
  }
};

/* ---------------- GOOGLE LOGIN ---------------- */
const googleLogin = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    return res.user;
  } catch (error) {
    toast.error("Google login failed");
    throw error;
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, signup, login, googleLogin, logout };
