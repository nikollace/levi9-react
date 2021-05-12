import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import CartHeader from "../CartHeader/CartHeader";
import loginIcon from "../../../assets/log-in.svg";
import logoutIcon from "../../../assets/log-out.svg";
import registerIcon from "../../../assets/user-plus.svg";
import { logout, emptyCart } from "../../../store/actions";
import logoImg from "../../../assets/logo.png";

const Header = () => {
  const userName = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <img src={logoImg} alt="Levi9" className={classes["logo-img"]} />
          <div className={classes.shop}>shop</div>
        </Link>
        <div className={classes["user-actions"]}>
          {!userName ? (
            <>
              <NavLink
                to="/login"
                className={classes.route}
                activeClassName={classes.active}
              >
                Login
                <img src={loginIcon} alt="Login" className={classes.icon} />
              </NavLink>
              <NavLink
                to="/register"
                className={classes.route}
                activeClassName={classes.active}
              >
                Register
                <img
                  src={registerIcon}
                  alt="Register"
                  className={classes.icon}
                />
              </NavLink>
            </>
          ) : (
            <>
              <div>
                Welcome <strong>{userName}</strong>
              </div>
              <NavLink
                className={classes.route}
                activeClassName={classes.active}
                to="/login"
                onClick={() => {
                  localStorage.clear();
                  dispatch(logout());
                  dispatch(emptyCart());
                }}
              >
                Logout
                <img src={logoutIcon} alt="Logout" className={classes.icon} />
              </NavLink>
            </>
          )}
          <CartHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
