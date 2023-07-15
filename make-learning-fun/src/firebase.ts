import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
       apiKey: "AIzaSyAqL5KGTV3Q6q-V1dI9JdrB7deH8HDkHJ8",
       authDomain: "make-learning-fun.firebaseapp.com",
       projectId: "make-learning-fun",
       storageBucket: "make-learning-fun.appspot.com",
       messagingSenderId: "388387807678",
       appId: "1:388387807678:web:cbc6b5b3d1089fdc4c59ef"
     };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err: unknown) {
    console.error(err);
    alert((err as Error).message);
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: unknown) {
    console.error(err);
    alert((err as Error).message);
  }
};

const registerWithEmailAndPassword = async (username: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: username,
      authProvider: "local",
      email,
    });
  } catch (err: unknown) {
    console.error(err);
    alert((err as Error).message);
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err: unknown) {
    console.error(err);
    alert((err as Error).message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err: unknown) {
    console.error(err);
    alert((err as Error).message);
  }
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
