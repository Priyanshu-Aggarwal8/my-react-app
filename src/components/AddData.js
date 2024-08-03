// src/components/AddData.js

import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddData = () => {
  const [data, setData] = useState('');

  const handleAddData = async () => {
    try {
      await addDoc(collection(db, 'your-collection'), { data });
      console.log('Document added');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div>
      <h1>Add Data</h1>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} placeholder="Data" />
      <button onClick={handleAddData}>Add Data</button>
    </div>
  );
};

export default AddData;
