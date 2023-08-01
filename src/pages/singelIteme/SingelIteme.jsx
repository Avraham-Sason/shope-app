import React, { useContext, useEffect, useState } from "react";
import styles from "./singelIteme.module.css";
import { useParams } from "react-router-dom";
import { dataArr } from "../../pages/home";
import AddToCart from "../../comps/addToCart/AddToCart";

const SingelIteme = () => {
  const [arr, setArr] = useContext(dataArr);
  const param = useParams();
  const [findItem, setFindItem] = useState({});
  useEffect(() => {
    setFindItem(arr.find((v) => v.id == param.id));
  }, []);
  return (
    <div className={styles.hiro}>
      <img src={findItem.image} />
      <p>{findItem.title}</p>
      <AddToCart obg={findItem}/>
      <b>{findItem.price} $</b>
      <p>{findItem.description}</p>
    </div>
  );
};

export default SingelIteme;
