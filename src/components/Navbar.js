import { GiFilmProjector } from 'react-icons/gi';
function Navbar() {  
    return ( 
<nav className="navbar navbar-dark" style={{backgroundColor: "#0F0F1A"}}>
  <div className="container-fluid">
    <a className="navbar-brand">
      <GiFilmProjector size="1.5em"/> {' '}
      MY Movies List ◔ ⌣ ◔
    </a>
  </div>
</nav>
    
  );
}

export default Navbar;
