import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/rootLayout/RootLayout.tsx';
import SignIn from './components/Sign-In.tsx';
import SignUp from './components/Sign-Up.tsx';
import MainLayout from './components/layout/mainLayout/MainLayout.tsx';
import LandingPage from './components/Landingpage.tsx';
import Homepage from './components/Homepage.tsx';
import ProfilePage from './components/ProfilePage.tsx';
import About from './components/About.tsx';
import MoodoMeter from './components/MoodoMeter.tsx';
import Reset from './components/ResetPass.tsx';
import Forgot from './components/forgotpass.tsx';
import Contact from './components/Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "reset-password", element: <Reset /> },
      { path: "forgot-password", element: <Forgot /> },

    ],
  },
  {
    path: "/home",
    element: <MainLayout/>,
    children: [
      { index: true, element: <Homepage/> },
      { path: "profile", element: <ProfilePage/> },
      { path: "moodometer", element: <MoodoMeter/> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
