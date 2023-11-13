import React from 'react'
import Topbar from '../Topbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Topbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout