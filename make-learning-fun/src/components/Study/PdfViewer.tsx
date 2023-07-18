import React, { ChangeEvent, useRef, useState } from 'react';

const PdfViewer: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showFlashcardBuilder, setShowFlashcardBuilder] = useState(false);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the selected file
      // You can use a PDF library like pdf.js to display the PDF content
      console.log('Selected file:', file);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  const toggleFlashcardBuilder = () => {
    setShowFlashcardBuilder(!showFlashcardBuilder);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
      <h1 className="text-4xl font-bold mb-8">PDF Viewer</h1>
      <div className="flex w-full justify-center items-center">
        <div className="w-7/10 border border-gray-300 rounded-lg p-4">
          {/* PDF viewer component */}
          {/* Use your preferred PDF library here */}
        </div>
        <div className="w-3/10 ml-4">
          <div className="flex justify-center">
            <button
              className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center"
              onClick={openFileSelector}
            >
              Select File
            </button>
          </div>
          <div className="flex justify-end">
            <div className="fixed bottom-4 right-4">
              <button
                className="bg-purple-800 hover:bg-purple-900 text-white rounded-full w-12 h-12 flex items-center justify-center"
                onClick={toggleFlashcardBuilder}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileSelect}
          />
          {showFlashcardBuilder && <FlashcardBuilder />}
        </div>
      </div>
    </div>
  );
};

const FlashcardBuilder: React.FC = () => {
  // Add your FlashcardBuilder component code here
  return <div>Flashcard Builder Component</div>;
};

export default PdfViewer;
