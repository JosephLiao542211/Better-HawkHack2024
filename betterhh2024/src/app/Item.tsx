import React from 'react';

interface ItemProps {
  text: string;
}

const Item: React.FC<ItemProps> = ({ text }) => {
  return (
    <li className="p-4 bg-white rounded-md shadow-sm hover:bg-gray-200">
      {text}
    </li>
  );
};

export default Item;
