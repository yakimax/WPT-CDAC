import React, { useState,useEffect } from 'react' ;

function Hello() {
  const [count,setCount] = useState(0) ;
    let handlecountplusplus = () => {
      setCount(count + 1) ;
    }
    let handlecountminusminus = () => {
      setCount(count - 1) ;
    }
    useEffect (()=>{
       setTimeout(()=>{
          handlecountplusplus() ;
      },3000) ;
  })
return (
    <>
      <div style={{ "margin-top" : "60px" }}>
        <div>Hello</div>
        <div>{count}</div>
        <button onClick={handlecountplusplus}>count++</button>
        <button onClick={handlecountminusminus}>count--</button>
      </div>
    </>
  )
}
export default Hello ;