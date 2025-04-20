'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGaugeHigh, faBell, faShieldHalved, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function SubscriptionSuccessPage() {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('NARQ25REF');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    const text = "Check out Narq - the ultimate employee monitoring solution! Use my referral code NARQ25REF for special benefits.";
    const url = "https://narq.io";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const title = "Narq - Employee Monitoring Solution";
    const summary = "Check out Narq - the ultimate employee monitoring solution! Use my referral code NARQ25REF for special benefits.";
    const url = "https://narq.io";
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    const text = "Check out Narq - the ultimate employee monitoring solution! Use my referral code NARQ25REF for special benefits: https://narq.io";
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-4">
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-5xl w-full p-4 sm:p-8 flex flex-col items-center">
        <div className="w-18 h-18 md:w-22 md:h-22 font-bold rounded-full bg-green-100 flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={faCheck} className="text-green-500 text-4xl" />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-2">Congratulations!</h1>
        <p className="text-gray-600 font-semibold text-center text-base md:text-xl mb-6 sm:mb-8 mt-4">Your Narq subscription has been activated successfully</p>

        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex justify-between mb-4">
            <span className="text-gray-700 font-semibold">Payment Status</span>
            <span className="text-green-600 font-semibold">Successful</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Transaction ID</span>
            <span className="text-gray-900 font-medium">#NAR38291</span>
          </div>
        </div>

        <Link 
          href="/dashboard" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 flex items-center md:mb-24 transition duration-200 shadow-sm hover:shadow"
        >
          <FontAwesomeIcon icon={faGaugeHigh} className="text-white mr-2" /> Continue to Dashboard
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4 md:mt-1 mb-8 sm:mb-12 gap-9">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faBell} className="text-blue-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Instant Notifications</h3>
                <p className="text-gray-600 font-medium text-base">
                  You'll receive immediate alerts if any of your employees are detected working multiple jobs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faShieldHalved} className="text-purple-500 text-xl" />

              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Active Monitoring</h3>
                <p className="text-gray-600 font-medium text-base">
                  Our system continuously monitors your workforce to ensure compliance and productivity.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-center mt-4 md:mt-14">
          <h2 className="text-xl md:text-4xl font-bold text-white my-3">Share Narq With Your Network</h2>
          <p className="text-blue-100 text-sm font-semibold sm:text-base mb-4 sm:mb-8">Earn cash commissions for every successful referral</p>
          
          <div className="bg-white rounded-lg flex flex-col md:flex-row p-4 mb-6 w-full mx-auto justify-between">
            <div className="px-1 py-2 font-bold text-lg text-blue-900">NARQ25REF</div>
            <button 
              onClick={handleCopyCode}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center text-lg transition duration-200 font-semibold cursor-pointer"
            >
              <FontAwesomeIcon icon={faCopy} className="text-white text-xl mr-2" />

              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          <div className="flex justify-center space-x-4">
            <button 
              onClick={shareOnTwitter}
              className="w-11 h-14 cursor-pointer bg-[#1DA1F2] hover:bg-[#1a8cd8] rounded-full flex items-center justify-center text-white transition"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />

            </button>
            <button 
              onClick={shareOnLinkedIn}
              className="w-11 h-14 bg-[#0A66C2] hover:bg-[#094c8f] rounded-full flex items-center justify-center text-white transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-xl" />
            </button>
            <button 
              onClick={shareOnWhatsApp}
              className="w-11 h-14 cursor-pointer bg-[#25D366] hover:bg-[#1ea952] rounded-full flex items-center justify-center text-white transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
