import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'


const router = createBrowserRouter([
  {
    path:"/yt-senti-02/",
    element: <App />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/home',
        element: <Home />
      },
      {
        path:'/about',
        element: <About />
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);