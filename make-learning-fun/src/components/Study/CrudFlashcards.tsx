// CrudFlashcard.ts
// import { db } from '../../../src/firebase';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqL5KGTV3Q6q-V1dI9JdrB7deH8HDkHJ8",
    authDomain: "make-learning-fun.firebaseapp.com",
    projectId: "make-learning-fun",
    storageBucket: "make-learning-fun.appspot.com",
    messagingSenderId: "388387807678",
    appId: "1:388387807678:web:cbc6b5b3d1089fdc4c59ef"
  };


firebase.initializeApp(firebaseConfig);



export const db = firebase.firestore();

type Flashcard = {
  id: string;
  userId: string;
  category: string;
  question: string;
  answer: string;
};

export const addFlashcard = async (flashcard: Flashcard) => {
  try {
    await db.collection('flashcards').doc(flashcard.id).set(flashcard);
    console.log('Flashcard added successfully');
  } catch (error) {
    console.error('Error adding flashcard:', error);
  }
};

export const deleteFlashcard = async (id: string) => {
  try {
    await db.collection('flashcards').doc(id).delete();
    console.log('Flashcard deleted successfully');
  } catch (error) {
    console.error('Error deleting flashcard:', error);
  }
};

export const updateFlashcard = async (id: string, updatedFlashcard: Partial<Flashcard>) => {
  try {
    await db.collection('flashcards').doc(id).update(updatedFlashcard);
    console.log('Flashcard updated successfully');
  } catch (error) {
    console.error('Error updating flashcard:', error);
  }
};

export const getFlashcardsByUserAndCategory = async (userId: string, category: string) => {
  try {
    const snapshot = await db
      .collection('flashcards')
      .where('userId', '==', userId)
      .where('category', '==', category)
      .get();
    return snapshot.docs.map((doc) => doc.data() as Flashcard);
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    return [];
  }
};
