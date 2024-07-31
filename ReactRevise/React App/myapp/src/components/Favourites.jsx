import React, { useContext, useEffect,useState } from 'react' ;
import { Context } from './Context';

function Favourites() {
    const [arr,setArr] = useState([]) ;
    let {array,setArray} = useContext(Context) ;
    useEffect(() => {
        setArr(array) ;
        console.log(array) ;
    },[arr]) ;
  return ( 
    <div className='divtable'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">S.no</th>
                <th scope="col">Poster</th>
                <th scope="col">Movie</th>
                <th scope="col">Description</th>
                <th scope="col">Remove</th>
                </tr>
            </thead>
            {
                // arr.map((movie)=>(
                //     <tbody class="table-group-divider">
                //         <tr>
                //         <th scope="row">1</th>
                //         <td>{}</td>
                //         <td>{movie.original_name !== undefined ? movie.original_name : movie.original_title}</td>
                //         <td>{movie.overview}</td>
                //             <div class="d-grid gap-2 col-6 mx-auto">
                //                 <button class="btn btn-primary" type="button">Remove</button>
                //             </div>
                //         </tr>
                //     </tbody>
                // ))
            };
        </table>
    </div>
  )
}

export default Favourites ;