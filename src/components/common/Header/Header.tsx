import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return (
        <nav id="header" className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">Narq</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button className="flex items-center space-x-2">
                                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Profile" className="h-8 w-8 rounded-full"/>
                                <span className="text-gray-700">John Smith</span>
                                <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 text-sm"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}