import React, { useState } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  const [stage, setStage] = useState(1);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#141416] p-4 rounded-2xl shadow-lg w-full max-w-[50%] relative">
        <button
          className="absolute top-5 right-10 text-gray-500 hover:text-gray-700 text-3xl p-2"
          onClick={() => { setStage(1); onClose(); }}
        >
          &times;
        </button>

        {stage === 1 && (
          <div>
            <div className='ht1 text-[48px] ml-5'>
              Create New Goal
            </div>
            <div className='h2 text-[16px] w-[75%] ml-5'>
              Fill in the parameters below and issue a challenge to everyone on Better. Remember, always bet on yourself!
            </div>
            {children}
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ml-5"
              onClick={() => setStage(2)}
            >
              Next
            </button>
          </div>
        )}

        {stage === 2 && (
          <div>
            <div className='ht1 text-[48px] ml-5'>
              Task
            </div>
            <div className='h2 text-[16px] w-[75%] ml-5'>
              Select Your Challenge
            </div>
            {/* Add form fields or other content for stage 2 */}

            
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ml-5"
              onClick={() => setStage(1)}
            >
              Back
            </button>
            
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded ml-2"
              
              onClick={() => { setStage(3) }}
            >
              Next
            </button>
          </div>
        )}

{stage === 3 && (
          <div>
            <div className='ht1 text-[48px] ml-5'>
              Confirm Your Goal
            </div>
            <div className='h2 text-[16px] w-[75%] ml-5'>
              Review the details of your goal and confirm to create it.
            </div>
            {/* Add form fields or other content for stage 2 */}
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ml-5"
              onClick={() => setStage(1)}
            >
              Back
            </button>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded ml-2"
              
              onClick={() => { setStage(1); onClose(); }}
            >
              Confirm
            </button>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Modal;
