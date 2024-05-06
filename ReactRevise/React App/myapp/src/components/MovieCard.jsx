import React, { useEffect, useState } from 'react' ;
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=f3d5cc67afc578246bf41c05b08e3164&page=' ;
const tempurl = 'https://image.tmdb.org/t/p/w500' ;

function MovieCard({page}) {
  const [arr,setArr] = useState([]) ;
  const [title,setTitle] = useState('') ;
  const [overview,setOverview] = useState('') ;
    const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2Q1Y2M2N2FmYzU3ODI0NmJmNDFjMDViMDhlMzE2NCIsInN1YiI6IjYyNmMwOThiNjdiNjEzMDA2NmQ1YjU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._XDfAXE4HbKaVrLgBjW5hlYU7Yl0TG8c3uzPN8AzThE'
        }
      }
     const handleOverview = (e)=> {
      let currtitle = e.target.parentElement.childNodes[0].innerText ;
      setTitle(currtitle) ;
      let filt  = arr.filter((movie)=>{
        return ( movie.original_name !== undefined ? movie.original_name : movie.original_title) === currtitle ;
      })
      setOverview( filt[0].overview ) ;
}
useEffect(()=>{
    async function fetchdata() {
      // console.log(page);
          const response = await fetch(url+page,options) ;
          const data = await response.json() ;
          setArr(data.results) ;
        } 
    fetchdata() ;
 },[page]) ;

return (
<div class="container text-center">
  <h1 style={{color :'white'}}>Trending Movies</h1>
    <div class="row align-items-center">
        {arr.map((movie)=>(
          <div class = "col" >
            <div class="card moviecard" style={{width: "15rem",height: "15rem"}}>
                <img  src = { tempurl + movie.backdrop_path } class = "card-img-top image" alt="..."/>
                    <div class="card-body">
                    <h5 class="title">{movie.original_name !== undefined ? movie.original_name : movie.original_title}</h5>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            {overview}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <button onClick={handleOverview} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      See Details
                    </button>
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