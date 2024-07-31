import './App.css' ;
import Loginpage from './Components/Loginpage' ;
import Orderspage from './Components/Orderspage' ;
import Homepage from './Components/Homepage' ;
import { BrowserRouter , Route , Routes } from 'react-router-dom' ;
import Signup from './Components/Signup';
import { useState,createContext } from 'react';
import Context from './Components/Context'
// const Context = createContext([]) ;


function App() {
  const [theme,setTheme] = useState('') ;
  const [user,setUser] = useState('') ;
  const [logged,setLogged] = useState(false) ;
  return (
    <>
        <Context.Provider value={{theme,setTheme,user,setUser,logged,setLogged}}>
          <BrowserRouter>
          <Routes>
              <Route path = '/' element={<Homepage/>}/>
              <Route path = '/HOME' element={<Homepage/>}/>
              <Route path = '/LOGIN' element={<Loginpage/>}/>
              <Route path = '/SIGNUP' element={<Signup/>}/>
              <Route path = '/ORDERS' element={<Orderspage/>}/>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
      </>
  ) ;
}
export default App ;