import React, { useState } from 'react' ;

function Hello() {
  const [count,setCount] = useState(0) ;

    let handlecountplusplus = () => {
      setCount(count + 1) ;
    }
    let handlecountminusminus = () => {
      setCount(count - 1) ;
    }
  return (
    <>
        <div>Hello</div> <div>{count}</div>
        <button onClick={handlecountplusplus}>count++</button>
        <button onClick={handlecountminusminus}>count--</button>
    </>
  )
}

export default Hello ;