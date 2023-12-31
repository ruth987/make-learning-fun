import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider,} from "react-router-dom";
import StudyPage from './pages/StudyPage.tsx'
import HomePage from './pages/HomePage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import LoadingPage from './pages/LoadingPage.tsx';
import DisplayFlashcards from './components/Study/DisplayFlashcards.tsx';
import { AuthProvider } from './components/Authentication/AuthProvider.tsx';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <HomePage />,
  },
  {
     path: "/studypage", 
     element: <StudyPage />,
  },
  { 
    path: "/signuppage", 
    element: <SignupPage />,
  },
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "/loadingpage",
    element: <LoadingPage />,
  },
  {
    path : "/displayflashcards",
    element: <DisplayFlashcards userId={undefined} category={undefined} />,
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
