'use client';

import React, { useState } from 'react';
import Header from '@/components/common/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGaugeHigh, faBell, faShieldHalved, faCopy, faPlus } from '@fortawesome/free-solid-svg-icons';
import TeamPricingModal from '@/components/pricing/TeamPricing';

const DashboardNarq = () => {

    const [showPricingModal, setShowPricingModal] = useState(false);
    const [numberOfEmployees, setNumberOfEmployees] = useState(40);

    const handleConnectPayroll = () => {
        setShowPricingModal(true);
    }
    const handleCloseConnectModal = () => {
        setShowPricingModal(false);
    }
  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
        <main className='m-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow overflow-hidden'>

            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex  gap-4'>
                    <div className="w-9 h-12 font-bold rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
                    </div>
                    <div>
                        <p className='text-gray-800 text-lg md:text-2xl font-bold'>Connected to Workday</p>
                        <p className='text-gray-500 font-semibold text-sm md:text-base'>Your payroll system is successfully integrated</p>
                    </div>
                </div>

                <div className='mt-2 md:mt-0'>
                    <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium px-2.5 md:px-8 py-3 rounded-lg flex items-center justify-center"
                        onClick={handleConnectPayroll}
                    >
                        <FontAwesomeIcon icon={faPlus} className="text-white text-lg md:text-xl mr-2" />
                        Connect Additional Payroll
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                <div className='bg-gray-100 rounded-lg p-4'>
                    <p className='text-base font-semibod text-gray-500'>Date Connected</p>
                    <p className='text-lg font-semibod text-gray-800'>March 27, 2025</p>
                </div>
                <div className='bg-gray-100 rounded-lg p-4'>
                    <p className='text-base font-semibod text-gray-500'>Service Through</p>
                    <p className='text-lg font-semibod text-gray-800'>March 26, 2026</p>
                </div>
                <div className='bg-gray-100 rounded-lg p-4'>
                    <p className='text-base font-semibod text-gray-500'>Employee Coverage</p>
                    <p className='text-lg font-semibod text-gray-800'>Up to {numberOfEmployees} employees</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='bg-gray-100 rounded-lg p-4'>
                    <p className='text-base font-semibod text-gray-500'>Last Scan Date</p>
                    <p className='text-lg font-semibod text-gray-800'>April 15, 2025</p>
                </div>
                <div className='bg-gray-100 rounded-lg p-4'>
                    <p className='text-base font-semibod text-gray-500'>Red Flags</p>
                    <div className='flex justify-between'>
                        <p className='text-lg font-semibod text-gray-800'>0</p>
                        <p className='text-blue-600 font-semibod  hover:text-blue-700 cursor-pointer'>View History</p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 rounded-lg p-4 mt-8'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div>
                        <p className='text-lg font-semibod text-gray-800'>Payment Information</p>
                        <p className='text-base font-semibod text-gray-500'>Update your payment details via Stripe</p>
                    </div>
                    <p className='text-blue-600 font-semibod  hover:text-blue-700 cursor-pointer'>Update Payment</p>
                </div>
            </div>

            <div className='bg-gray-100 rounded-lg p-4 mt-8'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div>
                        <p className='text-lg font-semibod text-gray-800'>Contact Email</p>
                        <p className='text-base font-semibod text-gray-500'>john.smith@company.com</p>
                    </div>
                    <div className='flex flex-row justify-between md:flex-col gap-4 md:gap-0'>
                        <p className='text-blue-600 font-semibod  hover:text-blue-700 cursor-pointer text-right'>Change Email</p>
                        <p className='text-blue-600 font-semibod  hover:text-blue-700 cursor-pointer text-right'>Add Email</p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 rounded-lg p-4 mt-8'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div>
                        <p className='text-lg font-semibod text-gray-800'>Referral Code</p>
                        <p className='text-base font-semibod text-gray-500'>NARQ-JS2025</p>
                    </div>
                    <p className='text-blue-600 font-semibod  hover:text-blue-700 cursor-pointer'>Copy Code</p>
                </div>
            </div>

            <div className='bg-gray-100 rounded-lg p-4 mt-8 border border-red-200'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div>
                        <p className='text-lg font-semibod text-red-600'>Cancel Subscription</p>
                        <p className='text-base font-semibod text-gray-500'>Service will end on March 26, 2026</p>
                    </div>
                    <p className='text-red-600 font-semibod  hover:text-blue-700 cursor-pointer'>Cancel</p>
                </div>
            </div>
        </main>
        <TeamPricingModal isOpen={showPricingModal} onClose={handleCloseConnectModal} teamSize={numberOfEmployees} />
    </div>
  );
}

export default DashboardNarq;