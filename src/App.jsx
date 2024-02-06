import React from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portoflio from './Components/Portfolio/Portoflio'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/NotFound/Notfound'

export default function App() {


  let routs = createHashRouter([
    {
      path: "", element: <Layout />, children: [

        { index: true, element: <Home /> },

        { path: "about", element: <About /> },
        { path: "Portfolio", element: <Portoflio /> },
        { path: "contact", element: <Contact /> },

        { path: "*", element: <Notfound /> }
      ],
    }
  ])

  return (

    <>

      <RouterProvider router={routs}></RouterProvider>
    </>
  )
}
