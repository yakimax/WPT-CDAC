import React from 'react' ;

function Footer() {
  return (
    <div>
        <footer class="py-3 my-4" style={{backgroundColor : 'white'}} >
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
            </ul>
            <p style={{color: 'white'}} class="text-center text-muted">© 2024 ,Movie IMDB </p>
        </footer>
    </div>
  )
}

export default Footer ;