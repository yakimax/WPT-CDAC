import React, { useEffect, useState } from 'react' ;
const url = 'https://api.themoviedb.org/3/trending/all/day' ;
const tempurl = 'https://image.tmdb.org/t/p/w500' ;

function MovieCard() {
  const [arr,setArr] = useState([]) ;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2Q1Y2M2N2FmYzU3ODI0NmJmNDFjMDViMDhlMzE2NCIsInN1YiI6IjYyNmMwOThiNjdiNjEzMDA2NmQ1YjU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XDfAXE4HbKaVrLgBjW5hlYU7Yl0TG8c3uzPN8AzThE'
        }
    }
const handleClick = (e)=>{
  e.preventDefault() ;
}
useEffect(()=>{
    async function fetchadata() {
          const response = await fetch(url,options) ;
          const data = await response.json() ;
          setArr(data.results) ;
        }
    fetchadata() ;
},[arr]) ;
return (
<div class="container text-center">
  <h1 style={{color :'white'}}>Trending Movies</h1>
    <div class="row align-items-center">
        {arr.map((movie)=>(
          <div class = "col" >
            <div class="card moviecard" style={{width: "15rem",height: "15rem"}}  >
                <img  src = { tempurl + movie.backdrop_path } class = "card-img-top image" alt="..."/>
                    <div class="card-body">
                        <h5 class="title">{movie.original_name !== undefined ? movie.original_name : movie.original_title}</h5>
                        {/* <Popup movies={arr} title = {movie.original_name !== undefined ? movie.original_name : movie.original_title}/> */}
                    </div>
            </div>
          </div>
        ))
        }
  </div>
</div>
  )
}
export default MovieCard ;