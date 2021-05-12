import React from 'react'
import classes from './layout.module.css'
import  Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children }) => 
    (
        <div className={classes.layout}>
            <Header />
            { children }
            <Footer />
        </div>
    )


export default Layout
