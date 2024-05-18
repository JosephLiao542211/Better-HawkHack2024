import React from 'react';
import Item from "./Items"; // Corrected from "./Items" to "./Item"

interface ListItem {
    id: number;
    text: string;
}

const items: ListItem[] = [
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
    return (
        <div className="h-64 w-full overflow-y-scroll bg-gray-100 p-4 rounded-md shadow-md">
            <ul className="space-y-2">
                {items.map(item => (
                    <Item key={item.id} text={item.text} />
                ))}
            </ul>
        </div>
    );
};

export default ScrollableList;
