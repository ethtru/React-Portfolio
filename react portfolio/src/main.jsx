import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
// import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


