'use client';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 py-4 bg-white mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 text-sm mb-2 md:mb-0">
                        © 2025 Narq. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-500 text-sm hover:text-gray-700">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-500 text-sm hover:text-gray-700">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
    )
}