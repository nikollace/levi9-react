import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./layout.module.css";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => (
  <div className={classes.layout}>
    <Header />
    {children}
    <Footer />
    <Loader />
  </div>
);

export default Layout;
