import firebase from 'firebase/app';
import 'firebase/firestore';
import { Category, Flashcard } from './types'; // Replace './types' with the path to your type definitions

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Check if Firebase is already initialized before initializing it again
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const getCategoriesByUser = async (userId: string): Promise<Category[]> => {
  try {
    const categoriesSnapshot = await db.collection('categories').where('userId', '==', userId).get();
    const categories: Category[] = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      flashcards: doc.data().flashcards || [],
    }));
    return categories;
  } catch (error) {
    throw new Error('Error fetching categories: ' + error.message);
  }
};

export { db, getCategoriesByUser };
