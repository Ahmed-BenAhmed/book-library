
function Header() {
    return (
    <header className="container">
        <div className="d-flex justify-content-between">
            <div>
                <a className="logo">Ahmed Ben Ahmed</a>
            </div>
            <nav className="navbar">
                <ul className="d-flex justify-content-between" >
                    <li><a className="nav-link" href="#">Home</a></li>
                    <li><a className="nav-link" href="#">About Me</a></li>
                    <li><a className="nav-link" href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="buttons">
                <a href="#" className="suggest-btn">Suggest a book</a>
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;