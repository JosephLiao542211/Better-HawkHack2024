import React from 'react';

function Button() {
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Click me
    </button>
  );
}

function handleClick() {
  console.log('Button clicked!');
}

export default Button;
