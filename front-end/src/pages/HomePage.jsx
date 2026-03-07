import BookSection from "../components/BookSection";
import books from "../data/books";
import "./HomePage.css";

function HomePage() {

  return (
    <>
      {/* Background Top Image */}
      <div
        className="static-bg-top"
        style={{
          backgroundImage: "url('/assets/bg_image_couple.avif')",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
          width: "100%",
          minWidth: "100px",
        }}
      ></div>

      {books.map((book, index) => (
        <BookSection
          key={book.id}
          bookId={book.id}
          bookTitle={book.title}
          isTop={index === 0}
          bookImageURL={book.coverImage}
          retailerURLKindle={book.retailerURLs.kindle}
          retailerURLiBooks={book.retailerURLs.iBooks}
          retailerURLGoogle={book.retailerURLs.google}
          retailerURLNook={book.retailerURLs.nook}
          retailerURLKobo={book.retailerURLs.kobo}
          viewBookURL=""
          {...book.bookSectionProps}
        />
      ))}

      {/* Background Bottom Image */}
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

export default HomePage;
