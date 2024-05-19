import React from 'react';

interface ItemProps {
    text: string;
}

const Item: React.FC<ItemProps> = ({ text }) => {
    return (
        <li className="flex items-center justify-between p-4 bg-white bg-opacity-20 hover:text-black rounded-md shadow-sm hover:bg-gray-100 transform transition duration-300 ease-in-out hover:scale-105">
            <span>{text}</span>
            <img
                src="Eo_circle_green_checkmark.svg.png"
                alt="Checkmark"
                className="max-w-[20px] max-h-[20px]"
            />
        </li>
    );
};

export default Item;
