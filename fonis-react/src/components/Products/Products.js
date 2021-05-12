import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Products.module.css";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";
import { API_URL } from "../../config/";
import { fetchWithLoader } from "../../utils";

const urlAllProducts = `${API_URL}/products`;
const allCategories = `${API_URL}/products/categories`;

const Products = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchWithLoader(allCategories, { method: "GET" })
      .then((res) => res.json())
      .then((response) => setCategories(response))
      .catch((error) => console.log("Fetch error ", error));
  }, []);

  useEffect(() => {
    // when category changed fetch data
    fetchWithLoader(
      category ? `${API_URL}/products/category/${category}` : urlAllProducts
    )
      .then((res) => res.json())
      .then((resultData) => setItems(resultData))
      .catch((error) =>
        console.log("Error while fetching particular category", error)
      );
  }, [category]);

  return (
    <>
      <Categories categories={categories} />
      <div className={classes.grid}>
        {items?.map((item) => (
          <Product
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
