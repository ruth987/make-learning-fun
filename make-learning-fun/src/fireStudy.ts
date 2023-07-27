import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
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


type Flashcard = {
    question: string;
    answer: string;
    userId: string;
    id: string;
    category: string;
  };

type Category = {
    title: string;
    flashcards: Flashcard[];
    userId: string;
  };


const getCategoriesByUser = async (userId: string): Promise<Category[]> => {
  try {
    const q = query(collection(db, "categories"), where("userId", "==", userId));
    const docs = await getDocs(q);
    const categories: Category[] = [];
    docs.forEach((doc) => {
      const categoryData = doc.data() as Category;
      categories.push(categoryData);
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories by user:", error);
    throw error;
  }
};


const addCategory = async (category: Category) => {
    const colRef = collection(db, "categories");
    const docRef = await addDoc(colRef, category);
    return docRef;
  };

export {
  auth,
  db,
  getCategoriesByUser, 
    addCategory,
};
