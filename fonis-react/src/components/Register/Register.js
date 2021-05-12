import React from "react";
import classes from "./Register.module.css";
import useInput from "../../hooks/useInput";
import { API_URL } from "../../config";
import { fetchWithLoader } from "../../utils";
import Input from "../Input/Input";
import Button from "../Button/Button";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

const Register = () => {
  let isFormValid = false;

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: userNameValue,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isNotEmpty);

  const postRequestHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    fetchWithLoader(`${API_URL}/users`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    userNameIsValid
  ) {
    isFormValid = true;
  }

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Register</h1>
      <form onSubmit={postRequestHandler}>
        <Input
          type="text"
          name="firstname"
          label="First name"
          value={firstNameValue}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          error={firstNameHasError && "Please enter a first name"}
        />
        <Input
          type="text"
          name="lastName"
          label="Last name"
          value={lastNameValue}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          error={lastNameHasError && "Please enter a last name"}
        />
        <Input
          type="text"
          name="email"
          label="Email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          error={emailHasError && "Please enter a valid email"}
        />
        <Input
          type="text"
          name="userName"
          label="Username"
          value={userNameValue}
          onChange={userNameChangeHandler}
          onBlur={userNameBlurHandler}
          error={userNameHasError && "Please enter a valid username"}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          error={passwordHasError && "Please enter a valid password"}
        />
        <Button type="submit" disabled={!isFormValid}>
          Register<span style={{ fontSize: 24, marginLeft: 8 }}>&#10165;</span>
        </Button>
      </form>
    </div>
  );
};

export default Register;
