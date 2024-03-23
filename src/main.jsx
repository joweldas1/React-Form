import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './assets/MainLayout/MainLayout';
import Home from './Home/Home';
import GeneralForm from './generalForm/GeneralForm';
import StateForm from './StateForm/StateForm';
import UnControlled from './UnControlled/UnControlled';
import HookForm from './CustomHook/HookForm';
import HookFrom2 from './CustomHook/HookFrom2';
import Showreuse from './ResuableProps/Showreuse';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"form1",
        element:<GeneralForm></GeneralForm>
      },
      {
        path:"/form2",
        element:<StateForm></StateForm>
      },
      {
        path:"/form3",
        element:<UnControlled></UnControlled>
      },
      {
        path:"/form4",
        element:<HookForm></HookForm>
      },
      {
        path:"/form5",
        element:<HookFrom2></HookFrom2>
      },
      {
        path:"/form6",
        element:<Showreuse></Showreuse>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
