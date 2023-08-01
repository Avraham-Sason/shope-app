import React, { useEffect, useState } from "react";
import styles from "./stayle.module.css";
import Header from '../../comps/header/Header';
import Content from '../../comps/content/Content';
import axios from "axios";

const Home = () => {
  const [qwery,setQwery] =useState("london")
  const [info,setInfo] =useState()

  useEffect(() =>{
    doApi()
  },[qwery])
  
  const doApi = async()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${qwery}&APPID=9df5a7ae64ba54dd937af377ffc84e72&units=metric`
    const data = await axios.get(url)
    setInfo(data.data)
  }

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {
    q: 'London',
    days: '3'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};
const doApi2 = async()=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${qwery}&APPID=9df5a7ae64ba54dd937af377ffc84e72&units=metric`
  const data = await axios.get(url)
  setInfo(data.data)
}
try{
	const response = axios.request(options);

	console.log(response.data);
} catch (error) {
	console.error(error);
}
  
  return (
    <div className={styles.divAll}>
        <Header setQwery={setQwery}></Header>
        {info?<Content data={info}></Content>:"<h2>loading...</h2>" }

    </div>
  );
};

export default Home;
