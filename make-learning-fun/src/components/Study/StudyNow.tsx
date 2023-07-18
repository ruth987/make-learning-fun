import React from 'react';
import PdfViewer from './PdfViewer';
import FlashcardBuilder from './FlashcardBuilder';

const StudyNow = () => {
  return (
    <div className="flex">
      <PdfViewer />
        {/* <FlashcardBuilder /> */}
    </div>
  );
};

export default StudyNow;
