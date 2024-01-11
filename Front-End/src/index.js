import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UpdateStd from './Component/UpdateStd';
import ErrorPage from './Component/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddStudent from './Component/AddStudent';
import DeleteStd from './Component/DeleteStd';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/addStudent",
    element: <AddStudent/>,
  },
  {
    path: "/update/:id",
    element: <UpdateStd/>,
  },
  {
    path: "/delete/:id",
    element: <DeleteStd/>,
  },
  {
    path: "/error",
    element: <ErrorPage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   {/* <App />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
