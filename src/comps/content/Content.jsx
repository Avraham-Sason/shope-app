import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './content.module.css'
import Categorys from '../categorys/Categorys';
import ItemeList from '../../pages/itemeList/ItemeList';
import SingelIteme from '../../pages/singelIteme/SingelIteme';
import SearchInput from '../search_Input/Search_Input';
const Content = () => {
    return (
        <div className={styles.hiro}>
            <Routes>
                <Route path='/' element={<Categorys/>}></Route>
                <Route path='/Categorys' element={<Categorys/>}></Route>
                {/*לספק קטגוריות*/}
                <Route path='/items/:id' element={<ItemeList />}> </Route>
                {/* לספק מוצר בודד */}
                <Route path='/item/:id' element={<SingelIteme/>}> </Route>
                <Route path='/j' element={<SearchInput/>}> </Route>

            </Routes>
            
        </div>
    );
}

export default Content;