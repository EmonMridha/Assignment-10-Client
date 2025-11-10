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
import ViewDetails2 from './components/ViewDetails2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('https://assignment-10-server-topaz-two.vercel.app/plants'),
        element: <Home></Home>
      },
      {
        path: '/addPlants',
        element:  <Private>
          <AddPlant></AddPlant>
        </Private>
      },
      {
        path: '/allPlants',
        loader: () => fetch('https://assignment-10-server-topaz-two.vercel.app/plants'),
        element:  <Private>
          <AllPlants></AllPlants>
        </Private>
      },
      {
        path: '/myPlants',
        element:  <Private>
          <MyPlants></MyPlants>
        </Private>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/plants/:id', // here we get the id parameter from the url
        loader: ({ params }) => fetch(`https://assignment-10-server-topaz-two.vercel.app/plants/${params.id}`), // giving the id to the server to get specific plant details
        element: <Private><ViewDetails></ViewDetails></Private>
      },
      {
        path: '/update/:id',
        loader: ({ params }) => fetch(`https://assignment-10-server-topaz-two.vercel.app/plants/${params.id}`),
        element: <Private><Update></Update></Private>
      },
      {
        path: '/details2/:id',
        loader: ({ params }) => fetch(`https://assignment-10-server-topaz-two.vercel.app/plants/${params.id}`),
        element: <Private><ViewDetails2></ViewDetails2></Private>
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
