import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
    <>
<nav className="navBar">
    <h1>bloco de notas</h1>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">novo bloco</Link>
    </div>
</nav>
    </>
    );
}

export default Navbar;