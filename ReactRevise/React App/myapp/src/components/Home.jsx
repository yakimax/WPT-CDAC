import React, { useState } from 'react' ;
import Pagination from './Pagination' ;
import Carousel from './Carousel' ;
import Navbar from './Navbar' ;
import Footer from './Footer' ;
import { Context } from './Context';


export default function Home() {
  const [array,setArray]=useState({});
  
  return (
    <Context.Provider value ={{array,setArray}} >
        <Navbar/> 
        <Carousel/>
        <Pagination/>
        <Footer/>
    </Context.Provider>
  )
}
