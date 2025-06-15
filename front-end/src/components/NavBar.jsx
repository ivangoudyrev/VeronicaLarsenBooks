import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-center w-100 gap-4">
            <Link to="/" className="nav-link">Home</Link> 
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>
      <div className="container text-center mt-5 mx-0 p-0" style={{ maxWidth: "980px" }}> 
        <div
        style={{
          fontFamily: "EB Garamond, serif",
          letterSpacing: "0.14em", 
          fontSize: "36px",
          fontWeight: 500 }}
        >
          <em>USA TODAY</em> BESTSELLING AUTHOR
        </div>
        <h2>
          <span
            style={{
              fontFamily: "avenir-lt-w01_35-light1475496,sans-serif",
              fontSize: "55px",
              letterSpacing: "0.2em",
              fontWeight: 100
            }}
          >
            VERONICA LARSEN
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
