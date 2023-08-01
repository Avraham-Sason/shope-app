import React, { useContext } from "react";
import styles from "./cartIteme.module.css";
import AddToCart from "../addToCart/AddToCart";
const CartItem = ({ obg }) => {
  return (
    <div className={styles.hiro}>
      <div className={styles.line}></div><br />
      <img src={obg.img} />
      <p>{obg.title}</p>
      <p>
        <b>{obg.price} $</b>
      </p>
      <AddToCart obg={obg}/>
    </div>
  );
};

export default CartItem;
