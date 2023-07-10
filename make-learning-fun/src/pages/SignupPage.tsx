import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MailIcon, UserIcon, LockClosedIcon } from '@heroicons/react/solid';
import googleLogo from '../assets/google-logo.svg';

type FormData = {
  email: string;
  username: string;
  password: string;
};

const SignupPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Process the signup form data here
    console.log(data);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">Sign up</h1>
          <p className="text-gray-500">Join the Make-Learning-Fun community</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                {...register('email', { required: true })}
                className="block border border-gray-300 w-full px-10 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                {...register('username', { required: true })}
                className="block border border-gray-300 w-full px-10 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Username"
              />
            </div>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                {...register('password', { required: true })}
                className="block border border-gray-300 w-full px-10 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded-lg bg-blue-500 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or sign up with</p>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2 mt-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;