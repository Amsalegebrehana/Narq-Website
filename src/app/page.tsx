import Image from "next/image";
import PublicFooter from "@/components/common/Footer/PublicFooter";
import PublicHeader from "@/components/common/Header/PublicHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex flex-col ">
        <div className="bg-gray-50 py-36 md:py-52  px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">Protect Your Business from Dual Employment</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 px-6 md:px-24">
              Join our network of trusted businesses to verify employment status and maintain workforce integrity.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/auth/sign-in" className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 font-medium">
                Get Started
              </Link>
              <Link href="/learn-more" className="bg-white text-gray-800 px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 font-medium">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="py-16 px-4 flex justify-center">
          <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="businessEmail" className="block mb-2 text-sm font-medium text-gray-700">
                  Business Email
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the <Link href="/terms" className="text-gray-900 underline">Terms of Service</Link> and <Link href="/privacy" className="text-gray-900 underline">Privacy Policy</Link>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 font-medium"
              >
                Create Account
              </button>
            </form>
          </div>
        </div> */}

      </main>
      <PublicFooter />
    </div>
  );
}
