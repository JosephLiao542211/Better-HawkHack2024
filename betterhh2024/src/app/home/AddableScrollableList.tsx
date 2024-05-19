import React, { useState, useMemo } from 'react';
import ItemParam from './ItemParam';
import Modal from './Modal';
import { createClient } from '@/utils/supabase/client';

interface ItemData {
  param1: string;
  param2: string;
  param3: string;
}

const AddableScrollableList: React.FC = async () => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [showModal, setShowModal] = useState(false);

  const supabase = useMemo(() => createClient(), []); 
  const { data, error } = await supabase.auth.getUser()
  
  data.user// Create Supabase client once

  const initialItems: ItemData[] = [
    { param1: "Value 1", param2: "Value 2", param3: "Value 3" },
    { param1: "Value 4", param2: "Value 5", param3: "Value 6" },
    { param1: "Value 7", param2: "Value 8", param3: "Value 9" },
  ];

  // Set initial items when component mounts
  useState(() => {
    setItems(initialItems);
  });

  return (
    <div className="max-w-md mx-auto">
      <div className="max-h-64 overflow-y-auto rounded">
        {items.map((item, index) => (
          <ItemParam key={index} param1={item.param1} param2={item.param2} param3={item.param3} />
        ))}
      </div>

      {/* <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Add Item
      </button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAddItem={handleAddItem}
      /> */}
    </div>
  );
};

export default AddableScrollableList;
