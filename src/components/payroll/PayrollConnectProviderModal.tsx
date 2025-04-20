'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faLink,
  faLock,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';

interface PayrollConnectProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  provider: {
    name: string;
    logoUrl: string;
  } | null;
}

const PayrollConnectProviderModal: React.FC<PayrollConnectProviderModalProps> = ({
  isOpen,
  onClose,
  provider 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Connecting with:', { email, password });
    // Add connection logic here
    onClose();
  };

  if (!isOpen) return null;
  if (!provider) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[500px] flex flex-col relative p-6">
        {/* Close button */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} className="text-xl" />
        </button>

        {/* Connection logo */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faLink} className='text-blue-600' />
          </div>
        </div>

        {/* Header */}
        <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
          Connect to {provider.name}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Sign in to your {provider.name.split(' ')[0]} account to establish connection
        </p>

        {/* Provider info */}
        <div className="bg-gray-100 p-4 rounded-lg flex items-center mb-5">
          <img
            src={provider.logoUrl}
            alt={provider.name}
            className="w-10 h-10 rounded mr-3"
          />
          <span className="font-medium">{provider.name}</span>
        </div>

        {/* Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-5">
          <div className="flex items-start">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-amber-500 mt-1 mr-2" />
            <p className="text-amber-800 text-sm">
              Please ensure you're signing in with an administrator account that has full access to payroll data.
            </p>
          </div>
        </div>

        {/* Login form */}
        <form onSubmit={handleConnect}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium cursor-pointer"
          >
            Connect Account
          </button>
        </form>

        {/* Security note */}
        <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
          <FontAwesomeIcon icon={faLock} className="mr-2" />
          <span>Your credentials are securely encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default PayrollConnectProviderModal;