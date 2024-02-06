import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Portoflio from '../Portfolio/Portoflio'
import Contact from '../Contact/Contact'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>

            <div>
                <Navbar />

                <Outlet />

                <Footer />
            </div>

        </>
    )
}
