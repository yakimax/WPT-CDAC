import React,{useContext} from 'react' ;
import Context from './Helper/Context'

function Component2() {
  let {arr,setArr} = useContext(Context) ;

  return (
    <div>Component2<br/>
    <button onClick={()=>{setArr(arr-1)}}>count--</button>
    <h1>{arr}</h1>
    </div>
  )
}

export default Component2