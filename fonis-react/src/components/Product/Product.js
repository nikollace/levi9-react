import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../../utils";
import classes from "./Product.module.css";

const Product = ({ id, title, description, img }) => (
  <div className={classes.item}>
    <Link to={`/details/${id}`}>
      <div className={classes["image-wrapper"]}>
        <img src={img} alt={title} className={classes.image} />
      </div>
    </Link>
    <div className={classes.info}>
      <Link to={`/details/${id}`}>
        <h3 className={classes.title} title={title}>
          {truncate(title, 50)}
        </h3>
      </Link>
      <div className={classes.desc} title={description}>
        {truncate(description, 100)}
      </div>
      <Link to={`/details/${id}`} className={classes.btn}>
        More &#8594;
      </Link>
    </div>
  </div>
);

export default Product;
