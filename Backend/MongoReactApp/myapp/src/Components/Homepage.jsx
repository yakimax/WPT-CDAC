import React, { useEffect, useState } from 'react' ;
import Navbar from './Navbar';
import  RecipeReviewCard  from './RecipeReviewCard';
import Grid from '@mui/material/Unstable_Grid2';



function Homepage() {

  const [list,setlist] = useState([]) ;
  useEffect(()=>{
    async function getproducts(){
      let productsList = await fetch('http://localhost:4000/HOME') ;
      setlist(await productsList.json()) ;
      console.log(list) ;
    }
    getproducts() ;
  },[list])

  return (
    <>
      <Navbar/>
      <Grid container spacing={2} style={{marginLeft:'4vw',marginRight:'4vw'}}>
      {list ? list.map((products,_id)=>(
        <Grid xs={3}>
          <RecipeReviewCard name = {products.name} price = {products.price} url = {products.url} description = {products.description}  />
        </Grid>
      )): 'huh'}
      </Grid>
      {/* <div style={{marginLeft:'2vw',marginTop : '10vh',display:'flex',justifyContent:'center',marginRight:'2vw',flexDirection:'row'}}>
        {list ?list.map((products,_id)=>(
            <>
            </>
        )):<p>gan</p>
          }
      </div> */}
    </>
  ) ;
}

export default Homepage ;