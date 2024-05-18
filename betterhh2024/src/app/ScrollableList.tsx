import React, { useState } from 'react';
import Item from './Item';

interface ListItem {
    id: number;
    text: string;
}

const initialItems: ListItem[] = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
    { id: 6, text: 'Item 6' },
    { id: 7, text: 'Item 7' },
    { id: 8, text: 'Item 8' },
    { id: 9, text: 'Item 9' },
    { id: 10, text: 'Item 10' },
    { id: 11, text: 'Item 11' },
    { id: 12, text: 'Item 12' },
];

const ScrollableList: React.FC = () => {
    const [items, setItems] = useState<ListItem[]>(initialItems);

    const addItem = () => {
        const newItem: ListItem = {
            id: items.length + 1,
            text: `Item ${items.length + 1}`
        };
        setItems([...items, newItem]);
    };

    return (
        <div className="h-64 w-full bg-opacity-0 overflow-y-scroll bg-gray-100 p-4 rounded-md bg-[#191D23] shadow-md">
            <ul className="space-y-2">
                {items.map(item => (
                    <Item key={item.id} text={item.text} />
                ))}
            </ul>
            <button onClick={addItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Add Item
            </button>
        </div>
    );
};

export default ScrollableList;
