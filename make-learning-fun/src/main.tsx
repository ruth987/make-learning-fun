import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider,} from "react-router-dom";
import StudyPage from './pages/StudyPage.tsx'
import HomePage from './pages/HomePage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import LoginPage from './pages/LoginPage.tsx';

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
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
