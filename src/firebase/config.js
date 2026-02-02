import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCAmnACEFll7nel9fmSKPo4ceqUoQwV_FE",
  authDomain: "netflix-clone-11247.firebaseapp.com",
  projectId: "netflix-clone-11247",
  storageBucket: "netflix-clone-11247.appspot.com",
  messagingSenderId: "224038493788",
  appId: "1:224038493788:web:a5da09a84e30a43fd89099"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

/* 🔥 GOOGLE PROVIDER — FORCE ACCOUNT CHOOSER */
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account" // chooser every time
});

/* ---------------- SIGN UP ---------------- */
export const signup = async (name, email, password) => {
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
export const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    toast.error(error.code.split("/")[1].replaceAll("-", " "));
    throw error;
  }
};

/* ---------------- GOOGLE LOGIN ---------------- */
export const googleLogin = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);

    await addDoc(collection(db, "users"), {
      uid: res.user.uid,
      name: res.user.displayName,
      email: res.user.email,
      provider: "google",
      createdAt: new Date()
    });

    return res.user;
  } catch (error) {
    toast.error("Google login failed");
    throw error;
  }
};

/* ---------------- LOGOUT ---------------- */
export const logout = async () => {
  await signOut(auth);
};
