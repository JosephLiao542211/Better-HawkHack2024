import React, { useState } from 'react';
import ItemParam from './ItemParam';

interface ItemData {
  param1: string;
  param2: string;
  param3: string;
}

const AddableScrollableList: React.FC = () => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ItemData>({ param1: '', param2: '', param3: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAddItem = () => {
    setItems([...items, formData]);
    setFormData({ param1: '', param2: '', param3: '' });
    setShowForm(false);
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="max-h-64 overflow-y-auto ">
        {items.map((item, index) => (
          <ItemParam key={index} param1={item.param1} param2={item.param2} param3={item.param3} />
        ))}
      </div>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close Form' : 'Add Item'}
      </button>
      {showForm && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <input
            type="text"
            name="param1"
            value={formData.param1}
            onChange={handleInputChange}
            placeholder="Param 1"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="param2"
            value={formData.param2}
            onChange={handleInputChange}
            placeholder="Param 2"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="param3"
            value={formData.param3}
            onChange={handleInputChange}
            placeholder="Param 3"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <button
            className="mt-2 p-2 bg-green-500 text-white rounded"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default AddableScrollableList;
