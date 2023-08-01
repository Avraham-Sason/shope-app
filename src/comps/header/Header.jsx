import React, { useContext, useState } from 'react';
import styles from './header.module.css';
import { dataArr } from "../../pages/home";
import { Link } from 'react-router-dom';
import { BsCart } from "react-icons/bs";

// import SearchInput from '../search_Input/Search_Input';
const Header = ({cartValue,setShowCart,productSum}) => {
    const [arr, setArr] = useContext(dataArr);
    const [inputVal, setInputVal] = useState("");
    const [searchArr, setSearchArr] = useState([]);
    const [sort, setSort] = useState( );

    return (
        <div className={styles.hiro}>
            <div className={styles.hedline}>
            <button onClick={()=>setShowCart(prev=>prev?false:true)} ><BsCart/> <span className={styles.cartSpan}>{cartValue.length?productSum:0}</span> </button>
                <Link to={"/"}><img src="./shopLogo.JPG" alt="d" /> </Link>
                {/* <SearchInput arr={arr} setInputVal={setInputVal} setSearchArr={setSearchArr} setSort={setSort} sort={sort}/> */}
            </div>
            
        </div>
    );
}

export default Header;
