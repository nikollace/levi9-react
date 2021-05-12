import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import classes from "./details.module.css";
import { addToCart, removeFromCart } from "../../store/actions";
import { API_URL } from "../../config";
import { fetchWithLoader } from "../../utils";
import Button from "../Button/Button";

const Details = () => {
  const [item, setItem] = useState(null);
  const [amount, setAmount] = useState(0);
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWithLoader(`${API_URL}/products/${params.id}`)
      .then((res) => res.json())
      .then((resultData) => setItem(resultData));
  }, [params.id]);

  return item ? (
    <div className={classes.details}>
      <img src={item.image} alt={item.title} className={classes.img} />
      <div className={classes.info}>
        <button className={classes.goback} onClick={() => history.push("/")}>
          &#8602; go back
        </button>
        <h1 className={classes.title}>{item.title}</h1>
        <div className={classes.price}>{`$ ${item.price}`}</div>
        <div className={classes.desc}>{item.description}</div>
        <div className={classes.buttons}>
          <Button
            onClick={() => {
              setAmount(amount + 1);
              dispatch(addToCart(item.id));
            }}
          >
            Add to Cart <span style={{ fontSize: 24, marginLeft: 8 }}>+</span>
          </Button>
          {!!amount && (
            <Button
              onClick={() => {
                setAmount(amount - 1);
                dispatch(removeFromCart(item.id));
              }}
              variant="secondary"
            >
              Remove from Cart
              <span style={{ fontSize: 24, marginLeft: 8 }}>&#9760;</span>
            </Button>
          )}
        </div>
        <div className={classes.amount}>
          {" "}
          Amount: <span className={classes["amount-value"]}>{amount}</span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Details;
