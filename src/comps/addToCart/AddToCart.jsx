import React, { useContext} from "react";
import styles from "./addToCart.module.css";
import { cart } from "../../pages/home";
const AddToCart = ({obg}) => {
  const [cartValue, setCartValue] = useContext(cart);

  const handleCart = (e) => {
    if (e =="+"||e=="add to cart"){
      setCartValue((prev) => {
        const exsist = prev.find((v) => v.id == obg.id)
        if (exsist) {
          return prev.map((item) => {
            return item.id == obg.id ? {...item, count: item.count + 1 } : item;
        });
      } else {
        const newItem = {
          img: obg.image,
          price: obg.price,
          title: obg.title,
          id: obg.id,
          count: 1,
        };
        return [...prev,newItem]
      }
    });
  }
  else {
    setCartValue(prev=>{
      const exsist = prev.find((v) => v.id == obg.id)
      if(exsist.count>1){
        return prev.map((item) => {
          return item.id == obg.id ? {...item, count: item.count - 1 } : item;
      });
      }
      else{
        return prev.filter(v=>v.id != obg.id)
      }
    })
  }
  };
  return (
    <div
      className={styles.hiro}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {!cartValue.find(v=>v.id==obg.id) ? (
        <button id={styles.addToCart} onClick={(e)=>handleCart(e.target.innerHTML)}>add to cart</button>
      ) : (
        <span className={styles.sp}>
          <button className={styles.addAndRedus} onClick={(e)=>handleCart(e.target.innerHTML)}>+</button>
          {cartValue.find(v=>v.id==obg.id).count}
          <button className={styles.addAndRedus} onClick={(e)=>handleCart(e.target.innerHTML)}>-</button>
        </span>
      )}
    </div>
  );
};

export default AddToCart;
