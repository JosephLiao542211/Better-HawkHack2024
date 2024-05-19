import React, { useState } from 'react';
import ItemParam from './ItemParam';
import Modal from './Modal';

interface ItemData {
    param1: string;
    param2: string;
    param3: string;
}

const AddableScrollableList: React.FC = () => {
    const [items, setItems] = useState<ItemData[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<ItemData>({
        param1: '',
        param2: '',
        param3: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleAddItem = () => {
        setItems([...items, formData]);
        setFormData({ param1: '', param2: '', param3: '' });
        setShowModal(false);
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="max-h-64 overflow-y-auto rounded">
                {items.map((item, index) => (
                    <ItemParam
                        key={index}
                        param1={item.param1}
                        param2={item.param2}
                        param3={item.param3}
                    />
                ))}
            </div>
            <button
                className="mt-4 p-2 bg-blue-500 text-white rounded"
                onClick={() => setShowModal(true)}
            >
                Add Item
            </button>
            <Modal show={showModal} onClose={() => handleAddItem()}>
                <div className="mt-4 p-4">
                    <input
                        type="text"
                        name="param1"
                        value={formData.param1}
                        onChange={handleInputChange}
                        placeholder="Challenge Name"
                        className="w-full  text-black mb-2 p2 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="param2"
                        value={formData.param2}
                        onChange={handleInputChange}
                        placeholder="DUE DATE (MM/DD/YYYY)"
                        className="w-full mb-2 p2 p-2  text-black border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="param3"
                        value={formData.param3}
                        onChange={handleInputChange}
                        placeholder=" _______ $NEAR"
                        className="w-full mb-2 text-black p-2 border border-gray-300 rounded"
                    />
                </div>
            </Modal>
        </div>
    );
};

export default AddableScrollableList;
