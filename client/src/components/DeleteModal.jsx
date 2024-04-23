import React from 'react';

const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0  w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <p className="text-lg">Are you sure you want to delete?</p>
        <div className="flex justify-center mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={onConfirm}>Yes</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
