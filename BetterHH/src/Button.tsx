import React, { useEffect } from 'react';
import axios from 'axios';

function Button() {
    const [data, setData] = React.useState('penis1');
    const getData = () => {
        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((json) => console.log(json));
    };
    useEffect(() => {
        getData(), [];
    });
    return (
        <button
            onClick={getData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {data}
        </button>
    );
}

function handleClick() {
    console.log('Button clicked!');
}

export default Button;
