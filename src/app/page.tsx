'use client'
import React, { useState } from 'react';
import SimpleTable from './SimpleTable'; // Import SimpleTable Component
import Modal from './Modal'; // Import Modal Component

const App = () => {
  const initialData = [
    { key: 'john', name: 'John', age: 25 },
    { key: 'sarah', name: 'Sarah', age: 19 },
    { key: 'shamilla', name: 'Shamilla', age: 23 },
  ];

  const [data, setData] = useState(initialData);
  const [selectedRow, setSelectedRow] = useState(null);

  // Function to handle row click event
  const handleRowClick = (row:any) => {
    setSelectedRow(row);
  };

  // Function to handle modal close event
  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  return (
    <div className="container mx-auto mt-8 ">
      <h1 className="text-2xl font-bold mb-4">Simple Table</h1>
      <SimpleTable data={data} onRowClick={handleRowClick} />

      <Modal isOpen={selectedRow !== null} onClose={handleCloseModal} selectedRow={selectedRow} />
    </div>
  );
};

export default App;