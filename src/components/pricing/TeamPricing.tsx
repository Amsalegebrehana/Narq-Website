'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faMagnifyingGlass,
    faPaperPlane,
    faUsers,
    faArrowRight,
    faDatabase,
    faChartLine,
    faShieldHalved,
    faCopy,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';

interface Provider {
  name: string;
  logoUrl: string;
  teamSize: number
}

interface TeamPricingModalProps {
  isOpen: boolean;
  onClose: () => void;
//   onConnect: (provider: Provider) => void;
  teamSize: number
}

const TeamPricingModal: React.FC<TeamPricingModalProps> = ({
  isOpen,
  onClose,
  teamSize
//   onConnect
}) => {
  
  const [isCodeApplied, setIsCodeApplied] = useState(false);
  
  const applyCode = () => {
    navigator.clipboard.writeText("EARLYBIRD15");
    setIsCodeApplied(true);
  };

  const handleSubmitRequest = () => {
    console.log('Submit request with details:');
    onClose();
  };

  const handleProviderClick = (provider: Provider) => {
    // onConnect(provider);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50  flex items-center justify-center z-50  ">
      <div className="bg-white rounded-xl w-[500px]  flex flex-col  relative my-15">
        {/* Close button */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} className="text-xl text-gray-500 hover:text-gray-800 cursor-pointer mt-3" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center mt-6 p-3 ">
            <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-600 mt-3" />

            <p className="text-gray-900 mt-4 text-2xl font-bold">Your Team Size</p>
            <p className="text-blue-600 mt-4 text-5xl font-bold">{teamSize}</p>
        </div>

        <div className="flex flex-col items-center">
            <p className='text-gray-600 text-lg font-semibold'>Active employees in your payroll system</p>
        </div>

        {/* Business Plan Section */}
        <div className="bg-blue-50 my-4 mx-7 p-6 rounded-xl items-center">
          <div className="flex justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-blue-900">Business Plan</h3>
              <p className="text-blue-700 text-base font-semibold">Up to 40 employees</p>
            </div>
            <div className="text-right">
            <p className={`text-2xl font-bold text-blue-900 ${isCodeApplied ? 'line-through' : ''}`}>$3,000</p>
              { isCodeApplied && <p className='text-2xl font-bold text-green-700'>$2,550</p>}
              <p className="text-blue-700 font-medium text-base">Billed annually</p>
            </div>
          </div>
          
          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faDatabase} className="text-blue-800 text-lg" />
              <span className="text-blue-800 text-base font-medium">Employees added to Narq Database</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faChartLine} className="text-blue-800 text-lg" />
              <span className="text-blue-800 text-base font-medium">Regular tracking for overemployment</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faShieldHalved} className="text-blue-800 text-lg" />
              <span className="text-blue-800 text-base font-medium">Deterrent for sleazy prospective employees</span>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center my-3 gap-2'>
            <p className="text-blue-700 text-md font-medium">View full pricing table</p>
            <FontAwesomeIcon icon={faArrowRight} className=" text-blue-600 text-sm" />
        </div>
        {/* Footer */}
        <div className="py-4 mx-7">
              <div className="space-y-3">
                
                <button
                  className="w-full py-3 px-4 font-medium bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg flex items-center justify-center gap-2"
                  onClick={handleSubmitRequest}
                >
                  <span>Sign Up & Pay Now</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
             
        </div>

        {/* referal code */}
        <hr className="border-blue-200 my-4 mx-7" />
        <div className="flex items-center justify-between mx-7 mb-5 p-3 rounded-lg gap-2">
          <input type="text" value={"EARLYBIRD15"} className='font-bold text-lg border border-blue-200 rounded-lg w-full py-2 px-2' />
          <div>
            {isCodeApplied ? (
              <span className="bg-blue-100 text-blue-600 px-4 py-3 rounded-lg flex items-center font-semibold">
                Applied  <FontAwesomeIcon icon={faCheck} className="text-blue-600 ml-2" />

              </span>
            ) : (
              <button 
                onClick={applyCode} 
                className="flex text-blue-600 font-semibold bg-blue-100 py-3 px-4 rounded-lg items-center cursor-pointer hover:bg-blue-200 transition duration-200"
              >
              Copy 
              <FontAwesomeIcon icon={faCopy} className="text-blue-600 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPricingModal;
