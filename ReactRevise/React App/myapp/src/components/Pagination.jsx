import React,{useState} from 'react' ;
import MovieCard from './MovieCard' ;

export default function Pagination() {
    let [page,setPage] = useState(1) ;
    let [array,setArr] = useState([1,2,3]) ;
    const handlePrev = ()=>{
        if(page >= 2) {
            setPage(page--) ;
            console.log(page)
            if (array[0] > page && page >= 1) {
                setArr([array[0]-1,array[1]-1,array[2]-1]) ;
            }
        }
    }
    const handleNext = () => {
        setPage(page++) ;
        if (array[2] < page-1) {
            setArr([array[0]+1,array[1]+1,page-1]) ;
        }
    }
    const handleTarget = (e) => {
        let val = e.target.innerText ;
        setPage(val) ;
    }
  return (
    <div >
        <MovieCard page={page}/>
        <nav aria-label="Page navigation example" style={ { marginTop :'4rem' } }>
            <ul class="pagination justify-content-center">
            <li class="page-item" >
                <a onClick={handlePrev} class="page-link" href="#">Previous</a>
            </li>
            {
                array.map((pageNo)=>(
                    <li onClick={handleTarget} class="page-item"><a class="page-link" href="#">{pageNo}</a></li>
                ))
            }
                <li class="page-item">
                    <a onClick={handleNext} class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
  </div>
  )
}
