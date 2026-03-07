import { Link } from "react-router-dom";
import books from "../data/books";

function Books() {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "2vh",
          maxWidth: "980px",
        }}
      >
        <div className="row justify-content-center">
          {books.map((book) => (
            <div key={book.id} className="col-6 col-md-4 mb-4">
              <Link
                to={`/books/${book.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="text-center p-3 border shadow rounded-3 h-100"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                >
                  <img
                    className="border rounded-3 shadow-lg"
                    src={`/${book.coverImage}`}
                    alt={book.title}
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      height: "auto",
                    }}
                  />
                  <p
                    className="mt-3 mb-0"
                    style={{
                      fontFamily: "Caudex, serif",
                      fontSize: "clamp(14px, 2vw, 18px)",
                      color: "rgb(20, 118, 125)",
                      fontWeight: 700,
                    }}
                  >
                    {book.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className="static-bg-bottom"
        style={{
          backgroundImage: "url('/assets/bg_image_bed.avif')",
        }}
      ></div>
      <div style={{ height: "50vh" }}></div>
    </>
  );
}

export default Books;
