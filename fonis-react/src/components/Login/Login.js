import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./Login.module.css";
import { auth } from "../../store/actions";
import { API_URL } from "../../config";
import { fetchWithLoader } from "../../utils";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const postRequestHandler = (e) => {
    e.preventDefault();
    fetchWithLoader(`${API_URL}/users/2`)
      .then((result) => result.json())
      .then((res) => {
        localStorage.setItem("auth", true);
        localStorage.setItem("token", "xxxxxxxxxxxxxxxxxxxxx");
        localStorage.setItem("userName", res.username);

        dispatch(auth(res.token, res.username));
        setError("");
        history.push("/");
      })
      .catch((e) => setError(e));
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.form} onSubmit={postRequestHandler}>
        <Input
          type="text"
          name="name"
          label="Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error && <p>{error}</p>}
        <Button type="submit">
          Login<span style={{ fontSize: 24, marginLeft: 8 }}>&#10165;</span>
        </Button>
      </form>
    </div>
  );
};

export default Login;
