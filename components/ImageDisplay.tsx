
import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  prompt: string;
}

const LoadingSkeleton: React.FC = () => (
  <div className="w-full aspect-square bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
      <svg className="w-16 h-16 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  </div>
);

const Placeholder: React.FC = () => (
    <div className="w-full aspect-square bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-lg flex flex-col items-center justify-center text-center p-4">
        <svg className="w-16 h-16 text-gray-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-300">Your artwork will appear here</h3>
        <p className="text-gray-500 mt-1">Enter a prompt above and click "Generate" to start.</p>
    </div>
);


export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, prompt }) => {
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (imageUrl) {
    return (
      <div className="w-full aspect-square bg-black rounded-lg overflow-hidden shadow-2xl shadow-purple-900/20">
        <img
          src={imageUrl}
          alt={`Pixel art of: ${prompt}`}
          className="w-full h-full object-contain pixelated"
        />
      </div>
    );
  }

  return <Placeholder />;
};
