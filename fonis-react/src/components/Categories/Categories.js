import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Categories.module.css";

const Categories = ({ categories, setCategory }) => (
  <>
    <div className={classes.optionbar}>
      <NavLink
        to={`/`}
        exact
        activeClassName={classes.active}
        className={classes.item}
      >
        All
      </NavLink>
      {categories.map((cat, index) => {
        return (
          <div key={cat}>
            <span className={classes.separator}>-</span>
            <NavLink
              key={index}
              to={`/category/${cat}`}
              activeClassName={classes.active}
              className={classes.item}
            >
              {cat}
            </NavLink>
          </div>
        );
      })}
    </div>
  </>
);

export default Categories;
