import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center">
            <div className="bg-white rounded-3xl w-[480px] p-8 shadow-xl">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <div className="rounded-lg mx-auto mb-6">
                       <p className="text-[#167EE6] text-lg font-medium">Narq</p>
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to Narq</h1>
                    <p className="text-gray-600 font-medium">Sign in to continue to your account</p>
                </div>

                {/* Google Sign In Button */}
                <button className="w-full mb-6 flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <Image
                        src="/assets/google.png"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    <span className="text-gray-800 font-medium">Continue with Google</span>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-[1px] bg-gray-200"></div>
                    <span className="text-gray-600">or</span>
                    <div className="flex-1 h-[1px] bg-gray-200"></div>
                </div>

                {/* Email Password Form */}
                <form>
                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block text-gray-800 mb-2 font-medium text-sm">Email address</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-4 py-3 font-medium border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-800 mb-2 font-medium text-sm">Password</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full pl-12 pr-4 font-medium py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                            <span className="text-gray-800 font-medium text-sm">Remember me</span>
                        </label>
                        <Link href="/forgot-password" className="text-blue-700 font-medium text-sm hover:text-blue-800">
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-6 font-medium">
                        Sign in
                    </button>

                    <div className="flex items-center gap-2 mb-6">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                        <span className="text-gray-800 font-medium text-sm">
                            I agree to the{" "}
                            <Link href="/terms" className="text-blue-700 font-medium hover:text-blue-800">Terms of Service</Link>
                            {" "}and{" "}
                            <Link href="/privacy" className="text-blue-700 font-medium hover:text-blue-800">Privacy Policy</Link>
                        </span>
                    </div>

                    <p className="text-center text-gray-600 font-medium">
                        Don't have an account?{" "}
                        <Link href="/sign-up" className="text-blue-600 hover:text-blue-700">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;