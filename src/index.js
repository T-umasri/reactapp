import '../node_modules/bootstrap/dist/js/bootstrap.min'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Updt from './form';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addstudent from './createform';
const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    },
    {
      path:'/updateStudent/:id',
      element:<Updt/>
    },
    {
      path:'/createform',
      element:<Addstudent/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={myrouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


