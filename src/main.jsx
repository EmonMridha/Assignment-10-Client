import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddPlant from './components/AddPlant.jsx';
import AllPlants from './components/AllPlants.jsx';
import AddPlants from './components/AddPlants.jsx';
import MyPlants from './components/MyPlants.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import ViewDetails from './components/ViewDetails.jsx';
import Update from './components/Update.jsx';
import Error from './components/Error.jsx';
import Private from './components/Private.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/plants'),
        Component: Home
      },
      {
        path: '/addPlants',
        Component: () => <Private>
          <AddPlant></AddPlant>
        </Private>
      },
      {
        path: '/allPlants',
        loader: () => fetch('http://localhost:3000/plants'),
        Component: () => <Private>
          <AllPlants></AllPlants>
        </Private>
      },
      {
        path: '/myPlants',
        Component: () => <Private>
          <MyPlants></MyPlants>
        </Private>
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/plants/:id', // here we get the id parameter from the url
        loader: ({ params }) => fetch(`http://localhost:3000/plants/${params.id}`), // giving the id to the server to get specific plant details
        Component: ViewDetails
      },
      {
        path: '/update/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/plants/${params.id}`),
        Component: Update
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
