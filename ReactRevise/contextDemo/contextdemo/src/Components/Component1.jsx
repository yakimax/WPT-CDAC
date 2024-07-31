import React,{useContext, useEffect} from 'react' ;
import Context from './Helper/Context' ;


function Component1() {
  let {arr,setArr} = useContext(Context) ;

 
  return (
    <div>
        Component1<br/>
        <button onClick={()=>{setArr(arr+1)}}>count++</button>
        <h1>{arr}</h1>
    </div>
  )
}

export default Component1 ;