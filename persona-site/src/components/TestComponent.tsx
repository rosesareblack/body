'use client';

import { useState } from 'react';

interface TestComponentProps {
  title?: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ title = "Test Component" }) => {
  const [count, setCount] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Counter:</span>
          <span className="font-mono text-xl font-bold text-blue-600">{count}</span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setCount(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Status:</span>
          <button
            onClick={() => setIsActive(prev => !prev)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-green-100 text-green-800 border border-green-300' 
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            {isActive ? 'Active' : 'Inactive'}
          </button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600">
          This component demonstrates TypeScript interfaces, React hooks, and Tailwind CSS styling.
        </p>
      </div>
    </div>
  );
};

export default TestComponent;