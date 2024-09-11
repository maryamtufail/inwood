import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';

const News: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValid(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSubmitted(true);
      setEmail('maryamtufail78@gmail.com');
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[600px]">
            <div className="min-h-64 min-w-[50%] bg-gray-300"></div>
      <div className="w-full md:w-1/2 bg-green-50 p-8 md:p-16 flex flex-col justify-center ">
        <h2 className="text-4xl md:text-5xl  text-[#07484A] mb-8">
          Join Our <p className="font-bold mt-2">Newsletter</p>
        </h2>
        <p id="email-description" className="mb-5 text-md ">
          Receive exclusive deals, discounts and many offers.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-4 py-2 ${
                  isValid ? '' : ' border border-red-500'
                } bg-transparent`}
                placeholder="Enter your email"
                aria-describedby="email-description"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                {!isValid && (
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                )}
              </div>
            </div>
            
            {!isValid && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <button
            type="submit"
            className=" bg-[#70908B] text-white py-3 px-10 rounded-md hover:bg-transparent hover:text-[#07484A] border-2 border-[#70908B]  transition-all duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-6 p-4 bg-green-100 rounded-md flex items-center space-x-2 transition-all duration-300 ease-in-out">
            <CheckCircleIcon className="w-5 h-5 text-green-600" />
            <span className="text-green-800">Thank you for subscribing!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
