import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartIcon from "../../../assets/cart.svg";
import classes from "./cartheader.module.css";

const selectCartCounter = (state) => state.cart.counter;

const Cart = () => {
  const counter = useSelector(selectCartCounter);

  return (
    <Link to="/cart" className={classes.cart}>
      <img src={cartIcon} alt="Cart" className={classes.icon} />
      <div className={classes.count}>{counter}</div>
    </Link>
  );
};

export default Cart;
