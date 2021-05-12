import classes from "./input.module.css";

const Input = ({
  type,
  name,
  value,
  label,
  onChange,
  onBlur,
  required,
  error,
}) => {
  return (
    <div className={classes.wrapper}>
      {!!label && (
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        className={classes.input}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {!!error && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default Input;
