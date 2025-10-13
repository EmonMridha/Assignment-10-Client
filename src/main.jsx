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

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      {
        index:true,
        Component:Home
      },
      {
        path:'/addPlants',
        Component:AddPlant
      },
      {
        path:'/allPlants',
        Component:AllPlants
      },
      {
        path:'/addPlants',
        Component:AddPlant
      },
      {
        path:'/myPlants',
        Component:MyPlants
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
