'use client';
import Link from 'next/link';

export default function PublicHeader() {
  return (
    <nav className="bg-white py-4 border border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold">Narq</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900 font-medium">Solutions</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/sign-in" className="text-gray-600 hover:text-gray-900 font-medium">Login</Link>
            <Link 
              href="/auth/sign-up" 
              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}