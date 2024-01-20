// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Header from './components/Header';
// import Home from './components/Home';

// const router = createBrowserRouter([
//   {
//     path: "App",
//     element: <App/>,
//     children:[
//       {
//         path: "Header",
//     element: <Header/>,
//       },
//       {
//         path: "Home",
//     element: <Home/>,
//       }
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Showmore from './components/Showmore';
import View from './components/View';
import Login from './components/Login';
import Signup from './components/Signup';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Header',
        element: <Header />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Showmore',
        element: <Showmore />,
      },
      {
        path: 'View',
        element: <View />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'Signup',
        element: <Signup />,
      },
    
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
