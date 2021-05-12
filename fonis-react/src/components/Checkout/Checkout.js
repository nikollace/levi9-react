import React from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/useInput";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Checkout = () => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: postcodeValue,
    isValid: postcodeIsValid,
    hasError: postcodeHasError,
    valueChangeHandler: postcodeChangeHandler,
    inputBlurHandler: postcodeBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInput(isNotEmpty);

  let isFormValid = true;

  if (
    !nameIsValid ||
    !emailIsValid ||
    !addressIsValid ||
    !postcodeIsValid ||
    !countryIsValid
  ) {
    isFormValid = false;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log("Success!");
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Checkout</h1>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          name="name"
          label="Full name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          error={nameHasError && "Name is not valid"}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          error={emailHasError && "Email is not valid"}
        />
        <Input
          type="address"
          name="address"
          label="Address"
          value={addressValue}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          error={addressHasError && "Address is not valid"}
        />
        <Input
          type="postcode"
          name="postcode"
          label="Postcode"
          value={postcodeValue}
          onChange={postcodeChangeHandler}
          onBlur={postcodeBlurHandler}
          error={postcodeHasError && "Postcode is not valid"}
        />
        <Input
          type="country"
          name="country"
          label="Country"
          value={countryValue}
          onChange={countryChangeHandler}
          onBlur={countryBlurHandler}
          error={countryHasError && "Country is not valid"}
        />
        <Button type="submit" disabled={!isFormValid}>
          Checkout<span style={{ fontSize: 24, marginLeft: 8 }}>&#10165;</span>
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
