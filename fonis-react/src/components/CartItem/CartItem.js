import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./CartItem.module.css";
import { removeFromCart } from "../../store/actions";
import Button from "../Button/Button";

const CartItem = ({ id, title, description, image, price, category }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.item}>
      <Link to={`/details/${id}`}>
        <div className={classes["image-wrapper"]}>
          <img src={image} alt={title} className={classes.image} />
        </div>
      </Link>
      <div className={classes.info}>
        <div className={classes.category}>
          <Link to={`/category/${category}`}>{category}</Link>
        </div>
        <Link to={`/details/${id}`}>
          <div className={classes.title}>{title}</div>
        </Link>
        <div>{description}</div>
      </div>
      <div className={classes.actions}>
        <div className={classes.price}>${price}</div>
        <Button
          onClick={() => dispatch(removeFromCart(id))}
          variant="secondary"
        >
          Remove from cart{" "}
          <span style={{ fontSize: 24, marginLeft: 8 }}>&#9760;</span>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
