import { useSelector } from "react-redux";
import classes from "./loader.module.css";

const Loader = () => {
  const isLoaderShown = useSelector((state) => state.loader);

  return (
    isLoaderShown && (
      <div className={classes.loader}>
        <div className={classes.bounce1}></div>
        <div className={classes.bounce2}></div>
        <div className={classes.bounce3}></div>
      </div>
    )
  );
};

export default Loader;
