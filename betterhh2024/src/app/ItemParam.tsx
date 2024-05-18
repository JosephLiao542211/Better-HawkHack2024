import React from 'react';

interface ItemProps {
  param1: string;
  param2: string;
  param3: string;
}

const ItemParam: React.FC<ItemProps> = ({ param1, param2, param3 }) => {
  return (
    <div className="p-4 border-b border-gray-300 p3 grid grid-cols-9 o">
      <div className="col-span-4 gap-3 overflow-hidden mr-5  ">
        <p>{param1}</p>
        
      </div>
      <div className="col-span-2 md:col-span-2 overflow-hidden">
      <p>{param2}</p>
        
      </div>
      <div className="col-span-3 md:col-span- overflow-hidden mx-5 bg-[#26AB5F] items-center rounded-full py-1 ">
      <p className='text-center'>{param3}</p>
      </div>
    </div>
  );
};

export default ItemParam;
