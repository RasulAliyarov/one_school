import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/'

function MainRoot() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainRoot