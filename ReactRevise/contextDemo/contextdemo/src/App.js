import './App.css' ;
import Component1 from './Components/Component1' ;
import Component2 from './Components/Component2' ;
import Component3 from './Components/Component3' ;
import Component4 from './Components/Component4' ;
import { useState,useEffect } from 'react' ;
import Context from './Components/Helper/Context' ;

function App() {
  const [arr,setArr] = useState(0) ;
  useEffect(()=>{

  },[arr])
  return (
    <Context.Provider value = {{arr,setArr}}>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
    </Context.Provider>
  ) ;
}

export default App ;
