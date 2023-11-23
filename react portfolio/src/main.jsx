import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
// import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Project',
        element: <Project />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


