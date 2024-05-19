import React from 'react';
import Link from 'next/link'


function Logout(){
  return (
    <Link href="/logout">
    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
                </Link>
    
  );
};

export default Logout;
