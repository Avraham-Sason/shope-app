import React, { useState,useEffect } from "react";
import styles from "./search_Input.module.css";

const SearchInput = ({setSearchArr,setInputVal,sort,setSort,arr}) => {
  const haendleInput = (e) => {
    setInputVal(e);
    setSearchArr(
      arr.filter(
        (v) =>
          v.title.toLowerCase().includes(e.toLowerCase()) ||
          v.description.toLowerCase().includes(e.toLowerCase())
      )
    );
  };
  const haendleSortButton = () => {
    sort ? setSort(false) : setSort(true);
    setSearchArr((prev) =>
      sort
        ? [...prev].sort((a, b) => a.price - b.price)
        : [...prev].sort((a, b) => a.price - b.price).reverse()
    );
  };
  return (
    <div className={styles.hiro}>
      <button onClick={haendleSortButton}>
        {sort ? (
          <i className="fa fa-sort-numeric-desc" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-sort-numeric-asc" aria-hidden="true"></i>
        )}
      </button>
      <input onInput={(e) => haendleInput(e.target.value)} type="text" />
    </div>
  );
};

export default SearchInput;
