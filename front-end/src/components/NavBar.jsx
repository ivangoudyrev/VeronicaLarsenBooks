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
      <h2 className="text-center mt-5">
        <span
          style={{
            fontFamily: "eb aramond, serif",
            fontSize: "38px",
            letterSpacing: "0.14em",
          }}
        >
          <span style={{ fontStyle: "italic" }}>USA TODAY</span>
          &nbsp;BESTSELLING AUTHOR
        </span>
      </h2>
      <h2 className="text-center">
        <span
          style={{
            fontFamily: "avenir-lt-w01_35-light1475496,sans-serif",
            fontSize: "66px",
            letterSpacing: "0.2em",
            color: "#292929",
          }}
        >
          VERONICA LARSEN
        </span>
      </h2>
    </div>
  );
}

export default Navbar;
