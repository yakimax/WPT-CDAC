import './App.css' ;
// import Hello from './components/Hello' ;
import Carousel from './components/Carousel' ;
import Navbar from './components/Navbar' ;
import MovieCard from './components/MovieCard' ;

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Carousel/>
      <MovieCard/>
    </div>
  ) ;
}
export default App ;