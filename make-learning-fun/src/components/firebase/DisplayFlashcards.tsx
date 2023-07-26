
import React, { useEffect, useState } from 'react';
import { getFlashcardsByUserAndCategory, deleteFlashcard, updateFlashcard, addFlashcard } from './CrudFlashcards';

const DisplayFlashcards = ({ userId, category }) => {
    const [flashcards, setFlashcards] = useState([]);
    const [newFlashcard, setNewFlashcard] = useState({ id: '', userId: '', category: '', question: '', answer: '' });

    // Fetch flashcards on component mount
    useEffect(() => {
        const fetchFlashcards = async () => {
            const cards = await getFlashcardsByUserAndCategory(userId, category);
            setFlashcards(cards);
        }

        fetchFlashcards();
    }, [userId, category]);

    const handleDelete = async (id) => {
        await deleteFlashcard(id);
        // Update local state
        setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
    }

    const handleUpdate = async (id, updatedFlashcard) => {
        await updateFlashcard(id, updatedFlashcard);
        // Update local state
        setFlashcards(flashcards.map(flashcard => flashcard.id === id ? updatedFlashcard : flashcard));
    }

    const handleAdd = async () => {
        await addFlashcard(newFlashcard);
        // Update local state
        setFlashcards([...flashcards, newFlashcard]);
        setNewFlashcard({ id: '', userId: '', category: '', question: '', answer: '' });
    }

    return (
        <div className="bg-white text-purple-900 p-4 rounded-md">
            <h1 className="font-bold text-xl mb-4">Flashcards</h1>
            {flashcards.map((flashcard) => (
                <div key={flashcard.id} className="mb-4 p-2 border-purple-900 border rounded-md">
                    <p><strong>Question:</strong> {flashcard.question}</p>
                    <p><strong>Answer:</strong> {flashcard.answer}</p>
                    <button className="bg-purple-900 text-white px-2 py-1 rounded-md" onClick={() => handleDelete(flashcard.id)}>Delete</button>
                    <button className="bg-purple-900 text-white px-2 py-1 rounded-md" onClick={() => handleUpdate(flashcard.id, flashcard)}>Update</button>
                </div>
            ))}
            <h2 className="font-bold text-lg mb-2">Add a new flashcard:</h2>
            <input placeholder="ID" value={newFlashcard.id} onChange={(e) => setNewFlashcard({ ...newFlashcard, id: e.target.value })} />
            <input placeholder="Category" value={newFlashcard.category} onChange={(e) => setNewFlashcard({ ...newFlashcard, category: e.target.value })} />
            <input placeholder="Question" value={newFlashcard.question} onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })} />
            <input placeholder="Answer" value={newFlashcard.answer} onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })} />
            <button className="bg-purple-900 text-white px-2 py-1 rounded-md" onClick={handleAdd}>Add Flashcard</button>
        </div>
    );
}

export default DisplayFlashcards;