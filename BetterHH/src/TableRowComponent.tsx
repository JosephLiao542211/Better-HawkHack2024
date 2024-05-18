// TableRowComponent.tsx
import React from 'react';

interface TableRowProps {
  name: string;
  date: string;
  totalBounty: string;
  onEnter: () => void;
}

const TableRowComponent: React.FC<TableRowProps> = ({ name, date, totalBounty, onEnter }) => {
  return (
    <div className="flex w-full border-b border-gray-200 ">
      <div className="flex-1 p1 p-2">{name}</div>
      <div className="flex-1 p1 p-2">{date}</div>
      <div className="flex-1 p1 p-2">{totalBounty}</div>
      <div className="flex-1 p1 p-2">
        <button
          onClick={onEnter}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default TableRowComponent;
