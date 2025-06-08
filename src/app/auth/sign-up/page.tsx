"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from '@/store/useAuthStore';
import { signUpSchema } from '@/validations/auth';
import { z } from 'zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const SignUp = () => {
    const router = useRouter();
    const { signUp,  isAuthenticated, isLoading } = useAuthStore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
          router.push('/dashboard');
        }
      }, [isAuthenticated, router]);

    const validateForm = () => {
        try {
            signUpSchema.parse({ email, password, confirmPassword, termsAccepted });
            setErrors({});
            setIsFormValid(true);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formattedErrors: Record<string, string> = {};
                error.errors.forEach(err => {
                    if (err.path) {
                        formattedErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(formattedErrors);
            }
            setIsFormValid(false);
        }
    }

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateForm();
        try {
            signUpSchema.parse({ email, password, confirmPassword, termsAccepted });
            console.log("Sign up button clicked", email, password);
            const response = await signUp(email, password);
            console.log("response", response);
            router.replace("/auth/login");
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formattedErrors: Record<string, string> = {};
                error.errors.forEach(err => {
                    if (err.path) {
                        formattedErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(formattedErrors);
            }
        }
      
    }

    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow mx-1 md:mx-0 md:rounded-3xl md:w-[480px] p-8 md:shadow-xl">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Google"
                            width={50}
                            height={30}
                            className="rounded-md"
                        />
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to Narq</h1>
                    <p className="text-gray-600 font-medium">Sign up to create your account</p>
                </div>

                {/* TODO: Google Sign In Button */}
                {/* <button className="w-full mb-6 flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <Image
                        src="/assets/images/google.png"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    <span className="text-gray-800 font-medium">Continue with Google</span>
                </button> */}

                {/* Divider */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-[1px] bg-gray-200"></div>
                    <span className="text-gray-600">or</span>
                    <div className="flex-1 h-[1px] bg-gray-200"></div>
                </div>

                {/* Email Password Form */}
                <form onSubmit={handleSignUp}>
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full pl-12 pr-4 py-3 font-medium border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full pl-12 pr-12 font-medium py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-5 h-5 cursor-pointer" />
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-800 mb-2 font-medium text-sm">Confirm Password</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`w-full pl-12 pr-4 font-medium py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}

                                />
                                 <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} className="w-5 h-5 cursor-pointer" />
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                        </div>
                    </div>

                    <button 
                        disabled={isLoading} 
                        type="submit" 
                        className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-6 font-medium"
                        >
                        {isLoading ? 'Signing up...' : 'Sign up'}
                    </button>

                    <div className={`flex items-center gap-2 ${errors.termsAccepted? 'mb-1': 'mb-6'} mb-1`}>
                        <input type="checkbox" checked={termsAccepted} className="w-4 h-4 rounded border-gray-300 cursor-pointer" onChange={(e) => setTermsAccepted(e.target.checked)} />
                        <span className="text-gray-800 font-medium text-sm">
                            I agree to the{" "}
                            <Link href="/terms" className="text-blue-700 font-medium hover:text-blue-800">Terms of Service</Link>
                            {" "}and{" "}
                            <Link href="/privacy" className="text-blue-700 font-medium hover:text-blue-800">Privacy Policy</Link>
                        </span>
                    </div>
                    {errors.termsAccepted && <p className="text-red-500 text-xs mt-1 mb-4">{errors.termsAccepted}</p>}

                    <p className="text-center text-gray-600 font-medium">
                        Already have an account?{" "}
                        <Link href="/auth/sign-in" className="text-blue-600 hover:text-blue-700">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;