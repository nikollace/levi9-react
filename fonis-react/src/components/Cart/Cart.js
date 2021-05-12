import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = items.reduce((acc, item) => (acc += item.price), 0);
    setTotal(sum);
  }, [items, setTotal]);

  return (
    <div className={classes.cart}>
      {items.length ? (
        items.map((item, index) => <CartItem key={index + item.id} {...item} />)
      ) : (
        <div>
          "No items here... :'("
          <br />
          <br />
          <Link to="/">
            <Button>
              Go to homepage
              <span style={{ fontSize: 24, marginLeft: 8 }}>&#10165;</span>
            </Button>
          </Link>
        </div>
      )}
      {!!items.length && (
        <div className={classes.footer}>
          <div className={classes.total}>
            Total:{" "}
            <span className={classes["total-value"]}>${total.toFixed(2)}</span>
          </div>
          <Link to="/checkout">
            <Button type="submit">
              Go to checkout
              <span style={{ fontSize: 24, marginLeft: 8 }}>&#10165;</span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
