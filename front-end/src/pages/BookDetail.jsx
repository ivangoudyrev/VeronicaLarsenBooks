import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import ButtonKindle from "../components/retailerButtons/ButtonKindle";
import ButtoniBooks from "../components/retailerButtons/ButtoniBooks";
import ButtonGoogle from "../components/retailerButtons/ButtonGoogle";
import ButtonNook from "../components/retailerButtons/ButtonNook";
import ButtonKobo from "../components/retailerButtons/ButtonKobo";

function BookDetail() {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div className="container text-center" style={{ marginTop: "10vh" }}>
        <h2>Book not found</h2>
        <Link to="/books">Back to Books</Link>
      </div>
    );
  }

  const { retailerURLs } = book;

  return (
    <>
      <div
        className="container border shadow rounded-3"
        style={{
          marginTop: "2vh",
          maxWidth: "980px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="row p-4">
          {/* Left column - Book cover */}
          <div className="col-sm-5 text-center align-self-center mb-3">
            <img
              className="border rounded-3 shadow-lg"
              src={`/${book.coverImage}`}
              alt={book.title}
              style={{
                width: "60%",
                maxWidth: "300px",
                height: "auto",
              }}
            />
          </div>

          {/* Right column - Details */}
          <div className="col-sm-7 align-self-center p-3">
            <h2
              style={{
                fontFamily: "Caudex, serif",
                color: "rgb(20, 118, 125)",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              {book.title}
            </h2>

            <div
              style={{
                fontFamily: "Caudex, serif",
                fontSize: "clamp(14px, 2vw, 18px)",
                color: "#333",
                lineHeight: 1.6,
              }}
            >
              {book.description.split("\n\n").map((paragraph, i) => (
                <p key={i}>
                  {paragraph.split("\n").map((line, j, arr) => (
                    <span key={j}>
                      {line}
                      {j < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            {/* Retailer buttons */}
            <div className="mt-3 d-flex flex-wrap justify-content-center" style={{ gap: "8px" }}>
              {retailerURLs.kindle && <ButtonKindle retailerURLKindle={retailerURLs.kindle} />}
              {retailerURLs.iBooks && <ButtoniBooks retailerURLiBooks={retailerURLs.iBooks} />}
              {retailerURLs.google && <ButtonGoogle retailerURLGoogle={retailerURLs.google} />}
              {retailerURLs.nook && <ButtonNook retailerURLNook={retailerURLs.nook} />}
              {retailerURLs.kobo && <ButtonKobo retailerURLKobo={retailerURLs.kobo} />}
            </div>
          </div>
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

export default BookDetail;
