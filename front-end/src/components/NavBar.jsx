import { Link } from "react-router-dom";
// import ButtonFacebook from "./socialMediaButtons/ButtonFacebook";
// import ButtonInstagram from "./socialMediaButtons/ButtonInstagram";
// import ButtonPinterest from "./socialMediaButtons/ButtonPinterest";
// import ButtonTwitter from "./socialMediaButtons/ButtonTwitter";
// import ButtonYouTube from "./socialMediaButtons/ButtonYouTube";
// import ButtonTumbler from "./socialMediaButtons/ButtonTumbler";

function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-center w-100 gap-4">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/books" className="nav-link">
              Books
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-white">

      {/* </div> */}
      <div
        className="text-center"
        style={{ 
          maxWidth: "980px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "EB Garamond, serif",
            letterSpacing: "0.14em",
            fontSize: "clamp(16px, 4vw, 36px)",
            fontWeight: 500,
            whiteSpace: "nowrap",
            textAlign: "center",
            maxWidth: "100%",
            paddingTop: "6vh"
          }}
        >
          <em>USA TODAY</em> BESTSELLING AUTHOR
        </div>
        <div
          style={{
            fontFamily: "avenir-lt-w01_35-light1475496,sans-serif",
            fontSize: "clamp(20px, 7vw, 66px)",
            letterSpacing: "0.2em",
            fontWeight: 100,
            whiteSpace: "nowrap",
            textAlign: "center",
            maxWidth: "100%",
            // marginTop: "0.5rem",
          }}
        >VERONICA LARSEN
        </div>
      </div>
      </div>
      {/* <div className="d-flex justify-content-center w-100 gap-4">
        <ButtonFacebook />
        <ButtonTwitter />
        <ButtonYouTube />
        <ButtonPinterest />
        <ButtonTumbler />
        <ButtonInstagram />        
      </div> */}
    </>
  );
}

export default Navbar;
