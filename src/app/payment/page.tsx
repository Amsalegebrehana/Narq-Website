'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCreditCard, faLock } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

export default function PaymentPage() {
  const [country, setCountry] = useState('United States');
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCreditCard} className="text-blue-600 mr-2" />
            <span className="font-semibold text-gray-800">Secure Payment</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLock} className="mr-2  text-green-700" />
            <span className="text-sm">Secured by Stripe</span>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-8">Complete your purchase</h1>
          
          {/* Plan Details */}
          <div className="flex justify-between items-start mb-8 p-3 bg-gray-50 rounded-lg">
            <div>
              <h2 className="font-semibold text-lg">Annual Team Plan</h2>
              <p className="text-gray-600 font-medium">10 team members</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">$1,188.00</p>
              <p className="text-gray-600 text-sm font-medium">$99/month billed annually</p>
            </div>
          </div>
          
          {/* Payment Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Card information</label>
              <div className=' border p-4 border-gray-100 rounded-md'>
                <div className="flex items-center gap-2">
                    <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full p-2 font-medium rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className=" flex space-x-1">
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">VISA</div>
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">MC</div>
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">AMEX</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                    <input
                    type="text"
                    placeholder="MM / YY"
                    className="p-2 rounded focus:ring-blue-500 font-medium focus:border-blue-500"
                    />
                    <input
                    type="text"
                    placeholder="CVC"
                    className="p-2 rounded focus:ring-blue-500 font-medium focus:border-blue-500"
                    />
                </div>
                </div>
              </div>
            
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Name on card</label>
              <input
                type="text"
                className="w-full p-1 border-b border-gray-100 shadow rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Country or region</label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-2 shadow rounded focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  {/* Add more countries as needed */}
                </select>
                <div className="absolute right-3 top-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
          </div>
           
        </div>
      
        <div className="max-w-3xl mx-auto py-8">
            {/* Renewal Notice */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-start">
                    <FontAwesomeIcon icon={faBell} className="text-blue-600 mt-1 mr-3" />
                    <div>
                    <h3 className="font-semibold text-blue-800">Renewal Notice</h3>
                    <p className="text-sm font-medium text-blue-800">
                        You'll receive an email 30 days before your next renewal in 2025. The renewal amount will be based on your team size at that time.
                    </p>
                    </div>
                </div>
                </div>
            
            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-8">
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Back
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center">
                Pay $1,188.00
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                </button>
            </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        <div className="flex justify-center space-x-4">
          <Link href="/terms" className="hover:text-gray-800">Terms</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-gray-800">Privacy</Link>
          <span>•</span>
          <Link href="/support" className="hover:text-gray-800">Contact Support</Link>
        </div>
      </footer>
    </div>
  );
}
