import React from 'react';

const Modal = ({ isOpen, onClose, selectedRow }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Selected Row</h2>
          <p className="mb-2"><span className="font-semibold">Name:</span> {selectedRow.name}</p>
          <p className="mb-2"><span className="font-semibold">Age:</span> {selectedRow.age}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;