import React,{useContext} from 'react' ;
import Context from './Helper/Context' ;

function Component4() {
  let {arr,setArr} = useContext(Context) ;

  return (
    <div>Component4<br/>
    <button onClick={()=>{setArr(arr-1)}}>count--</button>   
    <h1>{arr}</h1>
  </div>
    
  )
}

export default Component4 ;