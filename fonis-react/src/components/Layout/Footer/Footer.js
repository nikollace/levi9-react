import React from "react";
import classes from "./Footer.module.css";

const Footer = () => (
  <div className={classes.footer}>
    <p>Levi9 - Fonis - {new Date().getUTCFullYear()} </p>
  </div>
);

export default Footer;
