import React, { useState, useEffect } from 'react';
import { MailIcon, UserIcon, LockClosedIcon } from '@heroicons/react/solid';
import googleLogo from '../assets/google-logo.svg';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (loading) {
  //     // navigate('/loadingpage');
  //     return;
  //   }
  //   // if (user) navigate('/');

  // }, [user, loading, navigate]);

  const signInWithGoogleOnClick = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await registerWithEmailAndPassword(username, email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center login-container">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">Sign up</h1>
          <p className="text-gray-500">Join the Make-Learning-Fun community</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="space-y-6">
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block border border-gray-300 w-full px-10 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Email"
                required
              />
            </div>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block border border-gray-300 w-full px-10 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Username"
                required
              />
            </div>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block border border-gray-300 w-full px-10 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Password"
                required
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
            <div className="mt-4 text-center">
              <span>Already have an account? </span>
              <Link to="/loginpage" className="text-blue-500">Log in</Link>
            </div>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or sign up with</p>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2 mt-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            onClick={signInWithGoogleOnClick}
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
