import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MailIcon, LockClosedIcon } from '@heroicons/react/solid';
import googleLogo from '../assets/google-logo.svg';
import {auth, SignInWithGoogle, signInWithEmailAndPassword} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
 
type FormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/');
  }, [user, loading]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(data.email, data.password);
      navigate('/');
    }
    catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">Log in</h1>
          <p className="text-gray-500">Welcome back!</p>
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
              Log in
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or log in with</p>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2 mt-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            onClick={SignInWithGoogle}
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
