import React, { useState } from 'react';

type Flashcard = {
  question: string;
  answer: string;
};

type Category = {
  title: string;
  flashcards: Flashcard[];
};

const FlashcardBuilder: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');

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

  const handleAddFlashcard = () => {
    if (!question || !answer || (!selectedCategory && !newCategory)) {
      return;
    }

    const newFlashcard: Flashcard = {
      question,
      answer,
    };

    let updatedCategories = [...categories];

    if (selectedCategory) {
      const categoryIndex = updatedCategories.findIndex(
        (category) => category.title === selectedCategory
      );

      if (categoryIndex !== -1) {
        updatedCategories[categoryIndex].flashcards.push(newFlashcard);
      }
    } else if (newCategory) {
      const newCategoryObj: Category = {
        title: newCategory,
        flashcards: [newFlashcard],
      };
      updatedCategories = [...updatedCategories, newCategoryObj];
      setNewCategory('');
    }

    setCategories(updatedCategories);
    setQuestion('');
    setAnswer('');
    setSelectedCategory('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-2/3">
          <h1 className="text-2xl mb-4">Flashcard Builder</h1>
          <div className="w-full">
            <label htmlFor="question" className="block mb-2">
              Question
            </label>
            <textarea
              id="question"
              value={question}
              onChange={handleQuestionChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the question"
            />
          </div>
          <div className="w-full mt-4">
            <label htmlFor="answer" className="block mb-2">
              Answer
            </label>
            <textarea
              id="answer"
              value={answer}
              onChange={handleAnswerChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter the answer"
            />
          </div>
          <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center">
            <div className="w-full sm:w-1/2">
              <label htmlFor="category" className="mr-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.title} value={category.title}>
                    {category.title}flashcardbuilder
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <input
                type="text"
                value={newCategory}
                onChange={handleNewCategoryChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="New Category"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleAddFlashcard}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Flashcard
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white p-8 overflow-y-auto">
        {categories.map((category) => (
          <div key={category.title} className="mb-4">
            <h2 className="text-lg font-semibold">{category.title}</h2>
            {category.flashcards.map((flashcard, index) => (
              <div key={index} className="bg-white p-4 rounded shadow mt-2">
                <p className="font-medium">{flashcard.question}</p>
                <p className="text-gray-500">{flashcard.answer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardBuilder;
