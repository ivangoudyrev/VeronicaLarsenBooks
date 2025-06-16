import { Link } from "react-router-dom";
import ButtonFacebook from "./ButtonFacebook";
import ButtonInstagram from "./ButtonInstagram";
import ButtonPinterest from "./ButtonPinterest";
import ButtonTwitter from "./ButtonTwitter";
import ButtonYouTube from "./ButtonYouTube";
import ButtonTumbler from "./ButtonTumbler";


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
      <div className="container text-center mt-5 p-0" style={{ maxWidth: "980px" }}> 
        <div
        style={{
          fontFamily: "EB Garamond, serif",
          letterSpacing: "0.14em", 
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 500 }}
        >
          <em>USA TODAY</em> BESTSELLING AUTHOR
        </div>
        <h2>
          <span
            style={{
              fontFamily: "avenir-lt-w01_35-light1475496,sans-serif",
              fontSize: "clamp(36px, 6vw, 66px)",
              letterSpacing: "0.2em",
              fontWeight: 100
            }}
          >
            VERONICA LARSEN
          </span>
        </h2>
      </div>
      <div className="d-flex justify-content-center w-100 gap-4">
        <ButtonFacebook />
        <ButtonTwitter />
        <ButtonYouTube />
        <ButtonPinterest />
        <ButtonTumbler />
        <ButtonInstagram />        
      </div>
    </div>
  );
}

export default Navbar;
