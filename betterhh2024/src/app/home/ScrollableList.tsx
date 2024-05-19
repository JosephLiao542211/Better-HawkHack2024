import React, { useState } from 'react';
import Item from './Item';

interface ListItem {
    id: number;
    text: string;
}

const initialItems: ListItem[] = [
    { id: 1, text: 'Do 5000 pushups' },
    { id: 2, text: 'Do 120 squats' },
    { id: 3, text: 'Do 5, 50kg lunges' },
    { id: 4, text: 'Do 180 jumping jacks' },
];

const ScrollableList: React.FC = () => {
    const [items, setItems] = useState<ListItem[]>(initialItems);

    const addItem = () => {
        const newItem: ListItem = {
            id: items.length + 1,
            text: `Item ${items.length + 1}`,
        };
        setItems([...items, newItem]);
    };

    return (
        <div className="h-96 w-full bg-opacity-0 overflow-y-scroll bg-gray-100 p-4  bg-[#191D23] shadow-md">
            <ul className="space-y-2">
                {items.map((item) => (
                    <Item key={item.id} text={item.text} />
                ))}
            </ul>
        </div>
    );
};

export default ScrollableList;
