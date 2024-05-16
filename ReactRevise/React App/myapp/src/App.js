import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css' ;
import Home from './components/Home';
import Favourites from './components/Favourites';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/"  element={<Home/>}/>
          <Route path = "/Favourites" element = {<Favourites/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  ) ;
}
export default App ;