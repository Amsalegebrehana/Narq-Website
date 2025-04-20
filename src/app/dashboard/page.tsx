'use client';

import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import { faBuildingColumns, faPlus, faGift, faCopy, faExternalLinkAlt, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlugCirclePlus } from '@fortawesome/free-solid-svg-icons/faPlugCirclePlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PayrollProviderModal from '@/components/payroll/PayrollProviderModal';
import PayrollConnectProviderModal from '@/components/payroll/PayrollConnectProviderModal';

interface EmailItem {
    value: string;
    isEditing: boolean;
}

export default function Dashboard() {

    const router = useRouter();

    const [copied, setCopied] = useState(false);
    const [emails, setEmails] = useState<EmailItem[]>([{ value: 'john@company.com', isEditing: false }]);
    const [showModal, setShowModal] = useState(false);
    const [showConnectModal, setShowConnectModal] = useState(false);
    const [provider, setProvider] = useState<{ name: string; logoUrl: string } | null>(null);
    const [additionalDetails, setAdditionalDetails] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProvider, setSelectedProvider] = useState<{ name: string; logoUrl: string } | null>(null);

    const handleCopyCode = () => {
        navigator.clipboard.writeText('NARQ2025XYZ');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const addEmail = () => {
        setEmails([...emails, { value: '', isEditing: true }]);
    };

    const toggleEdit = (index: number) => {
        const updatedEmails = [...emails];
        updatedEmails[index].isEditing = !updatedEmails[index].isEditing;
        setEmails(updatedEmails);
    };

    const updateEmail = (index: number, newValue: string) => {
        const updatedEmails = [...emails];
        updatedEmails[index].value = newValue;
        setEmails(updatedEmails);
    };

    const removeEmail = (index: number) => {
        const updatedEmails = emails.filter((_, i) => i !== index);
        setEmails(updatedEmails);
    };

    const handleConnect = () => {
        // router.push('/dashboard/narq');
        setShowModal(true);
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleCloseConnectModal = () => {
        setShowConnectModal(false);
    }
   
    const handleProviderConnect = (provider: { name: string; logoUrl: string }) => {
        console.log('Submit request with details:', additionalDetails);
        setSelectedProvider(provider);
        setShowConnectModal(true);
        setShowModal(true);
    }
    return (
        <div id="dashboard" className="min-h-screen bg-gray-50">
            <Header />

            <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='bg-white rounded-lg shadow overflow-hidden py-4'>
               
                    <div className="px-8 py-14 md:py-20 flex flex-col items-center justify-center">
                        <div className="w-18 h-18 md:w-24 md:h-24 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                            <FontAwesomeIcon icon={faBuildingColumns} className="text-blue-600 text-xl md:text-3xl" />
                        </div>
                        
                        <div className='flex flex-col items-center'>
                            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Connect Your Payroll Provider</h1>
                            <p className="text-gray-600 font-semibold text-center mb-10 max-w-lg">
                                To get started with Narq, connect your payroll provider to automatically sync your employee data.
                            </p>
                        
                            <button 
                                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg flex items-center justify-center"
                                onClick={handleConnect}
                            >
                                <FontAwesomeIcon icon={faPlugCirclePlus} className="text-white mr-2" />
                                <span className='font-medium'>Connect Payroll Provider</span>
                            </button>
                        </div>
                    </div>

                    {/* Contact Email Section */}
                    <div className="px-8 py-10">
                        <hr className="py-6 border-t border-gray-200" />
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Email</h2>
                        
                        {emails.map((email, index) => (
                            <div key={index} className="flex mb-4 gap-8 w-full items-center">
                                <input 
                                    type="email" 
                                    value={email.value} 
                                    onChange={(e) => updateEmail(index, e.target.value)}
                                    readOnly={!email.isEditing}
                                    className={`w-11/12 px-4 py-2 border border-gray-300 rounded-lg ${!email.isEditing ? 'bg-gray-50' : 'bg-white'}`} 
                                />
                                <div className="flex gap-2">
                                    <button 
                                        className="text-blue-600 hover:text-blue-700 cursor-pointer" 
                                        onClick={() => toggleEdit(index)}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    {index > 0 && (
                                        <button 
                                            className="text-red-400 hover:text-red-500 cursor-pointer" 
                                            onClick={() => removeEmail(index)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        
                        <button 
                            className="flex items-center text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
                            onClick={addEmail}
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            <span>Add Another Email</span>
                        </button>
                    </div>
                    
                    <div className="px-8 py-6">
                        <hr className="py-6 border-t border-gray-200" />
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Referral Code</h2>
                        
                        <div className="flex mb-4 gap-8 w-full">
                            <input 
                                type="text" 
                                value="NARQ2025XYZ" 
                                readOnly
                                className="w-11/12 px-4 py-2 border border-gray-300 bg-gray-50 rounded-lg" 
                                disabled
                            />
                            <button 
                                onClick={handleCopyCode}
                                className="text-blue-600 cursor-pointer hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faCopy} className="text-blue-600" />
                            </button>
                        </div>
                        
                        <div className="flex items-center text-gray-700">
                            <FontAwesomeIcon icon={faGift} className="text-blue-600 mr-2" />
                            <span>Get paid if your referral becomes a paying customer</span>
                        </div>
                    </div>
                </div>

            </main>
            <PayrollProviderModal isOpen={showModal} onClose={handleCloseModal} onConnect={handleProviderConnect} />
            <PayrollConnectProviderModal 
                isOpen={showConnectModal} 
                onClose={handleCloseConnectModal}
                provider={selectedProvider} 
            />
            <Footer />
        </div>
    )
}