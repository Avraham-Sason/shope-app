import React, { useContext, useEffect, useState } from "react";
import styles from "./itemeList.module.css";
import { Link, useParams } from "react-router-dom";
import { dataArr } from "../../pages/home";
import AddToCart from "../../comps/addToCart/AddToCart";
import SearchInput from "../../comps/search_Input/Search_Input";

const ItemeList = () => {
  const [arr, setArr] = useContext(dataArr);
  const [filterArray, setFilterArray] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [searchArr, setSearchArr] = useState([]);
  const [sort, setSort] = useState( );
  const params =useParams()
  useEffect(() => {
    setFilterArray(sort?arr.filter((v) => v.category == params.id).sort((a,b)=>a.price-b.price):
    arr.filter((v) => v.category == params.id).sort((a,b)=>a.price-b.price).reverse())
  }, [sort]);
    
  return (
    <div className={styles.all}>
        <SearchInput arr={arr} setFilterArray={setFilterArray} setInputVal={setInputVal} setSearchArr={setSearchArr} setSort={setSort} sort={sort} />
      <div className={styles.hiro}>
        {inputVal==""?
        filterArray.length
          ? filterArray.map((v) => {
              return (
                <Link key={v.id} to={`/item/${v.id}`}>
                  <img src={v.image} alt="pic" />
                  <p className={styles.price}>
                    <b>{`${v.price} $`}</b>
                  </p>
                  <AddToCart obg={v} />
                  <p>{v.title}</p>
                </Link>
              );
            })
          : "":searchArr.length
          ? searchArr.map((v) => {
              return (
                <Link key={v.id} to={`/item/${v.id}`}>
                  <img src={v.image} alt="pic" />
                  <p className={styles.price}>
                    <b>{`${v.price} $`}</b>
                  </p>
                  <AddToCart obg={v} />
                  <p>{v.title}</p>
                </Link>
              );
            })
          : ""}
      </div>
      <div className={styles.hiro}></div>
    </div>
  );
};
// }
export default ItemeList;
