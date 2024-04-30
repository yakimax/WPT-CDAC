import React,{useState,useEffect} from 'react' ;

function Popup(props) {
    const [curr,setCurr]= useState({}) ;
    // console.log(props.movies) ;
    console.log(curr);
    useEffect(()=>{
        const filt  = props.movies.filter((movie)=>{
            return ( movie.original_name !== undefined ? movie.original_name : movie.original_title) === props.title ;
        })
        setCurr(filt) ;
    })
  return (
    <>
        <div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{curr.original_name !== undefined ? curr.original_name : curr.original_title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {curr.overview}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup ;