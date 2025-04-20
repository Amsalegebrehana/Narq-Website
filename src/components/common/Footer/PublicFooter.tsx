'use client';
import Link from 'next/link';

export default function PublicFooter() {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="col-span-1">
            <Link href="/" className="text-xl font-bold">Narq</Link>
            <p className="mt-4 text-sm text-gray-600 font-semibold ">
              Ensuring workforce integrity through comprehensive employment verification.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/employment-verification" className="text-gray-600 font-semibold hover:text-gray-900 text-sm">Employment Verification</Link></li>
              <li><Link href="/database-access" className="text-gray-600 hover:text-gray-900 text-sm font-semibold ">Database Access</Link></li>
              <li><Link href="/reporting" className="text-gray-600 hover:text-gray-900 text-sm font-semibold ">Reporting</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about-us" className="text-gray-600 hover:text-gray-900 text-sm font-semibold ">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm font-semibold ">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm font-semibold ">Careers</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm font-semibold ">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm font-semibold ">Terms of Service</Link></li>
              <li><Link href="/security" className="text-gray-600 hover:text-gray-900 text-sm font-semibold ">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 font-semibold text-center">
            © 2025 Narq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}