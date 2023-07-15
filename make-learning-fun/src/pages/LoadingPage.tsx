import React from 'react';
import { PrinterIcon } from '@heroicons/react/outline';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="flex flex-col items-center">
        <PrinterIcon className="w-12 h-12 animate-spin text-blue-500" />
        <h2 className="mt-4 text-lg font-medium text-gray-900">Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingPage;
