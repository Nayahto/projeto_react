import './Navbar.css'

function Navbar() {
    return (
    <>
<nav className="navBar">
    <h1>bloco de notas</h1>
    <div className="links">
        <a href="/">Home</a>
        <a href="/create">novo bloco</a>
    </div>
</nav>
    </>
    );
}

export default Navbar;