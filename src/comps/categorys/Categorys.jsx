import React from 'react';
import styles from './categorys.module.css'
import { Link } from 'react-router-dom';
const Categorys = () => {
    const categorysArray =["electronics","jewelery","men's clothing","women's clothing",]
    return (
        <div className={styles.hiro}>
            {categorysArray.map(v=>{
                return <Link id={v.split(" ").join().replaceAll("'","").replaceAll(",","")} key={v} to={`/items/${v}`}>
                    <h3>{v}</h3>
                    <img src={v=="electronics"?"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg":
                    v=="jewelery"?"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg":
                    v=="men's clothing"?"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg":
                    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
                    } alt="" />
                </Link>
            })}
        </div>
    );
}

export default Categorys;
