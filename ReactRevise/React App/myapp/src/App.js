import './App.css' ;
import Pagination from './components/Pagination' 
import Carousel from './components/Carousel' ;
import Navbar from './components/Navbar' ;
import MovieCard from './components/MovieCard' ;

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Carousel/>
      {/* <MovieCard/> */}
      <Pagination/>
    </div>
  ) ;
}
export default App ;