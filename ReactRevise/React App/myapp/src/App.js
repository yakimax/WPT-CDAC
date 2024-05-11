import './App.css' ;
import Pagination from './components/Pagination' 
import Carousel from './components/Carousel' ;
import Navbar from './components/Navbar' ;
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Carousel/>
      <Pagination/>
      <Footer/>
    </div>
  ) ;
}
export default App ;