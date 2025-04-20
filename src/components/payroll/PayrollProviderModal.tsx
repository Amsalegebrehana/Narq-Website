'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faMagnifyingGlass,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

interface Provider {
  name: string;
  logoUrl: string;
}

interface PayrollProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (provider: Provider) => void;
}

const PayrollProviderModal: React.FC<PayrollProviderModalProps> = ({
  isOpen,
  onClose,
  onConnect
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');


  const providers: Provider[] = [
    { name: 'ADP', logoUrl: 'https://logo.clearbit.com/adp.com' },
    { name: 'Workday', logoUrl: 'https://logo.clearbit.com/workday.com' },
    { name: 'Paychex', logoUrl: 'https://logo.clearbit.com/paychex.com' },
    { name: 'Gusto', logoUrl: 'https://logo.clearbit.com/gusto.com' },
    { name: 'Paylocity', logoUrl: 'https://logo.clearbit.com/paylocity.com' },
    { name: 'BambooHR', logoUrl: 'https://logo.clearbit.com/bamboohr.com' },
  ];

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmitRequest = () => {
    console.log('Submit request with details:', additionalDetails);
    onClose();
  };

  const handleProviderClick = (provider: Provider) => {
    onConnect(provider);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50  flex items-center justify-center z-50  ">
      <div className="bg-white rounded-xl w-[600px]  flex flex-col relative my-15">
        {/* Close button */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} className="text-xl text-gray-500 hover:text-gray-800 cursor-pointer mt-3" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Connect Payroll Provider</h2>
          <p className="text-gray-600 mt-1 text-sm font-semibold">Select your payroll provider to continue</p>
        </div>

        {/* Search */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="relative">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search providers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 text-sm font-semibold rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Providers List */}
        <div id="providers-list" className="overflow-y-auto max-h-[320px] flex-1 px-6 py-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Provider Cards */}
            {filteredProviders.map((provider, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleProviderClick(provider)}
              >
                <img
                  src={provider.logoUrl}
                  alt={provider.name}
                  className="w-10 h-10 rounded"
                />
                <p className="text-sm font-semibold mt-1">{provider.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          {!additionalDetails ? (
            <div
              className=" p-4 rounded-lg flex flex-col items-center gap-2"
            >
                <button
                  className="w-full py-3 px-4 bg-gray-100  hover:bg-gray-200  cursor-pointer text-gray-700 text-sm rounded-lg flex items-center justify-center gap-2"
                  onClick={() => setAdditionalDetails(' ')}
                >
      
                <div className="w-4 h-4 rounded-full border border-dashed border-gray-500 flex items-center justify-center">
                  <span className="text-gray-500">?</span>
                </div>
                  <span>Don't see your provider? Let us know</span>
                </button>
              <p className="text-xs text-gray-600 text-center mt-3">We'll reach out to discuss custom integration options</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 text-sm font-semibold mb-3">
                Don't see your provider? We can connect via API or data import
              </p>
              <div className="space-y-3">
                <textarea
                  placeholder="Provide additional details about your payroll system..."
                  className="w-full px-4 py-2 bg-white border border-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-24"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                />
                <button
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg flex items-center justify-center gap-2"
                  onClick={handleSubmitRequest}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Submit Request</span>
                </button>
              </div>
              <p className="text-xs text-gray-600 text-center mt-3">
                Our team will review your request and get back to you shortly
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayrollProviderModal;
