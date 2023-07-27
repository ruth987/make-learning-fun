import React, { useEffect, useRef, useState, useContext } from 'react';
import { addFlashcard } from './CrudFlashcards';
import { getCategoriesByUser, db, Category, Flashcard, addCategory } from '../../fireStudy';
import { AuthContext } from '../../components/Authentication/AuthProvider';

type FlashcardBuilderProps = {
  onResize: (width: number) => void;
  onClose: () => void;
};

const FlashcardBuilder: React.FC<FlashcardBuilderProps> = ({ onResize, onClose }) => {
  const { user } = useContext(AuthContext);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [builderWidth, setBuilderWidth] = useState(0);
  const builderRef = useRef<HTMLDivElement>(null);
  const newCategoryObj = { title: newCategory, flashcards: [], userId: user?.uid || '' };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (user) {
          const userCategories = await getCategoriesByUser(user.uid);
          setCategories(userCategories);
          console.log('Categories:', userCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [user]);

  useEffect(() => {
    if (builderRef.current) {
      const width = builderRef.current.offsetWidth;
      setBuilderWidth(width);
      onResize(width);
    }
  }, [builderRef, onResize]);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
   setAnswer(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleNewCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };
  TODO: //check the add flashcard function

  const handleAddFlashcard = async () => {
    if (!question || !answer || !selectedCategory) {
      return;
    }
  
    const newFlashcard: Flashcard = {
      id: `${Date.now()}-${Math.random()}`,
      userId: user?.uid || '',
      category: selectedCategory,
      question: question,
      answer: answer,
    };
  
    try {
      await addFlashcard(newFlashcard);
      const updatedCategories = [...categories];
      const categoryIndex = updatedCategories.findIndex(
        (category) => category.title === selectedCategory
      );
  
      if (categoryIndex === -1) {
        return;
      }
  
      updatedCategories[categoryIndex].flashcards.push(newFlashcard);
      setCategories(updatedCategories);
      setQuestion('');
      setAnswer('');
      setSelectedCategory(''); // Reset the selected category
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };
  TODO: //check the add category function
  const handleAddCategory = async () => {

    if (!newCategory) {
      return;
    }
  
    const newCategoryObj = { title: newCategory, flashcards: [] };
    
    try {
      await addCategory(newCategoryObj);
      const newCategories = [...categories, newCategoryObj];
      setCategories(newCategories);
      setNewCategory('');
    } catch (error) {
      console.error("Error adding new category: ", error);
    }
  };
  

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4" ref={builderRef}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Flashcard Builder</h2>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="question">
          Question
        </label>
        <textarea
          id="question"
          className="w-full border border-gray-300 rounded-lg p-2"
          rows={2}
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="answer">
          Answer
        </label>
        <textarea
          id="answer"
          className="w-full border border-gray-300 rounded-lg p-2"
          rows={2}
          value={answer}
          onChange={handleAnswerChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.title} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <button
          className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleAddFlashcard}
        >
          Add Flashcard
        </button>
      </div>
      <hr className="my-4" />
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="new-category">
          New Category
        </label>
        <div className="flex">
          <input
            id="new-category"
            className="flex-1 border border-gray-300 rounded-l-lg p-2"
            type="text"
            value={newCategory}
            onChange={handleNewCategoryChange}
          />
          <button
            className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:shadow-outline"
            onClick={handleAddCategory}
          >
            Add Category
          </button>
        </div>
      </div>
      {/* <div>
        {categories.map((category) => (
          <div key={category.title} className="mb-4">
            <h3 className="font-bold">{category.title}</h3>
            <ul>
              {category.flashcards.map((flashcard, index) => (
                <li key={index}>
                  <p className="font-bold">{flashcard.question}</p>
                  <p>{flashcard.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FlashcardBuilder;
