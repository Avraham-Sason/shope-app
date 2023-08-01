import React, { createContext, useEffect, useState } from "react";
import styles from "./stayle.module.css";
import Content from "../../comps/content/Content";
import Header from "../../comps/header/Header";
import data from "../../../data";
import CartItem from "../../comps/cartItem/CartItem";
import { BsCart } from "react-icons/bs";

export const cart = createContext();
export const dataArr = createContext();

const Home = () => {
  const [arr, setArr] = useState(data);
  const [cartValue, setCartValue] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [sum, setSum] = useState(0);
  const [productSum, setProductSum] = useState(0);
  const [showCart, setShowCart] = useState(false);


  useEffect(() => {
    if (cartValue.length) {
      setSum(cartValue.map((v) => v.price * v.count).reduce((v, a) => v + a));
      setProductSum(cartValue.map((v) => v.count).reduce((v, a) => v + a));
    } else {
      setSum(0);
    }
  }, [cartValue]);
  
  const heanleSaveDelete = (e) => {
    if (e == "save") {
      localStorage.setItem("cart", JSON.stringify(cartValue));
    } else {
      localStorage.clear();
      setCartValue([]);
    }
  };
  return (
    <dataArr.Provider value={[arr, setArr]}>
      <cart.Provider value={[cartValue, setCartValue]}>
        <div className={`${styles.hiro} ${styles.center}`}>
          <div className={`${styles.head} `}>
            <Header cartValue={cartValue} productSum={productSum} setShowCart={setShowCart}/>
          </div>
          <div className={`${styles.main} ${styles.center}`}>
            
            {/* cart */}

            {showCart?<div className={`${styles.cart} `}>
              <div>
                <h2>{<BsCart />}</h2>
                <div className={styles.buttons}>
                  <button onClick={(e) => heanleSaveDelete(e.target.innerHTML)}>
                    save
                  </button>
                  <button onClick={(e) => heanleSaveDelete(e.target.innerHTML)}>
                    delete
                  </button>
                </div>
                <div className={styles.cartItems}>
                  {cartValue.map((v) => {
                    return <CartItem key={v.id} obg={v} />;
                  })}
                </div>
              </div>
              <div>
                {cartValue.length ? (
                  <div>
                    <p>sum: {sum} $</p>
                    <p>product num: -{productSum}- </p>
                  </div>
                ) : (
                  "nothing is in here yet...."
                )}
              </div>
            </div>:""}
            {/* content */}
            <div className={showCart?styles.content:styles.content2}>
              <Content />
            </div>
          </div>
        </div>
      </cart.Provider>
    </dataArr.Provider>
  );
};

export default Home;
