import React, { useEffect } from 'react' ;
import {useState} from 'react' ;

let obj = [
     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
     "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s",
     "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
     "https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg"  
]

function Carousel() {
    const [index,setIndex] = useState(0) ;
    useEffect (()=>{
        const timer = setTimeout(()=>{
            handlenext() ;
        },3000) ;
        return()=>{
            clearTimeout(timer) ;
        } ;
    } )
    let handleprev = ()=>{
        setIndex((( index - 1 ) + obj.length ) % obj.length ) ;
    }
    let handlenext = ()=>{
        setIndex((( index + 1 ) + obj.length ) % obj.length ) ;
    }
  return (
    <>
        <div className='box'>
        <button style={{positon : "fixed",border:"none",background:"none"}} onClick={handleprev}>Prev</button>
            <img src={obj[index]} style={{width:"100vw"}} alt='none'/>
        <button style={{positon : "fixed",border:"none",background:"none"}} onClick={handlenext}>Next</button>
        </div>
    </>
  )
}
export default Carousel ;