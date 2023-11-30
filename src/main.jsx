import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'store', element: <ProductList />},
      { path: 'about', element: <About /> }
    ]
  },
  // {
  //   path: "profile",
  //   element: <Profile />,
  //   children: [
  //     { index: true, element: <DefaultProfile /> },
  //     { path: "spinach", element: <Spinach /> },
  //     { path: "popeye", element: <Popeye /> },
  //   ],
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
