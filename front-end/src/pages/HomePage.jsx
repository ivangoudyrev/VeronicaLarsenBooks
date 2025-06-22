import BookSection from "../components/BookSection";
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

      <BookSection 
        bookTitle="The Edge of Us"
        isTop={true}
        bookImageURL="assets/bookCovers/TEOU_WEB_paperback.avif" 
        review1string1='"The Edge of Us had a level of ' review1string1type="sm"
        review1string2="intrigue" review1string2type="lg"
        review1string3=" and " review1string3type="sm"
        review1string4="temptation" review1string4type="lg"
        review1string5=" that made me salivate..." review1string5type="sm"
        review1string6='I was consumed by this novel."' review1string6type="md"
        review1string1Ref="-ESCAPENBOOKS" review1string1RefType="ref1"
        review1string2Ref="" review1string2RefType=""
        retailerURLKindle="https://www.amazon.com/dp/B0748HZFVM"
        retailerURLiBooks="https://books.apple.com/us/book/the-edge-of-us/id1237942308"
        retailerURLGoogle="https://play.google.com/store/books/details/Veronica_Larsen_The_Edge_of_Us?id=lxouDwAAQBAJ"
        retailerURLNook="https://www.barnesandnoble.com/w/the-edge-of-us-veronica-larsen/1126897312"
        retailerURLKobo="https://www.kobo.com/us/en/ebook/the-edge-of-us"
        viewBookURL=""
      />

      <BookSection 
        bookTitle="All Your Broken Pieces"
        isTop={false}
        bookImageURL="assets/bookCovers/aybpieces.avif" 
        review1string1={`"I've always been a fan of Veronica Larsen's `} review1string1type="sm"
        review1string2="witty banter" review1string2type="lg"
        review1string3=", her " review1string3type="sm"
        review1string4="strong heroines" review1string4type="md"
        review1string5=", and " review1string5type="sm"
        review1string6="gorgeous writing" review1string6type="lg"
        review1string7=', but All Your Broken Pieces is on a whole new level."' review1string7type="sm"
        review1string1Ref="-NIKKI SLOANE" review1string1RefType="ref1"
        review1string2Ref="USA TODAY BESTSELLING AUTHOR" review1string2RefType="ref2"
        retailerURLKindle="https://www.amazon.com/dp/B017YLF0RA"
        retailerURLiBooks="https://books.apple.com/us/book/all-your-broken-pieces/id1178802121"
        retailerURLGoogle="https://play.google.com/store/books/details/Veronica_Larsen_All_Your_Broken_Pieces?id=8fjzDQAAQBAJ"
        retailerURLNook="https://www.barnesandnoble.com/w/enamor-veronica-larsen/1123726950"
        retailerURLKobo="https://www.kobo.com/us/en/ebook/all-your-broken-pieces"
        viewBookURL=""
      />

      <BookSection 
        bookTitle="All Your Broken Reasons"
        isTop={false}
        bookImageURL="assets/bookCovers/aybreasons.avif" 
        review1string1='"A great story of ' review1string1type="sm"
        review1string2="lust" review1string2type="lg"
        review1string3=", " review1string3type="sm"
        review1string4='fear' review1string4type="md"
        review1string5=' and ' review1string5type="sm"
        review1string6='love' review1string6type="lg"
        review1string7='."' review1string7type="sm"
        review1string1Ref="-SMOKING HOT BOOK BLOG" review1string1RefType="ref1"
        review1string2Ref="" review1string2RefType=""
        review2string1={`"This is not your typical love story but if you are wanting something different, then I suggest you pick this up. You won't regret getting this book."`} review2string1type="sm"
        review2string2="" review2string2type="sm"
        review2string3='' review2string3type=""
        review2string4='' review2string4type=""
        review2string5='' review2string5type=""
        review2string6='' review2string6type=""
        review2string7='' review2string7type=""
        review2string8='' review2string8type=""
        review2string1Ref="-Kindle Customer" review2string1RefType="ref1"
        review2string2Ref="" review2string2RefType=""
        retailerURLKindle="https://www.amazon.com/dp/B00NZE1DU4"
        retailerURLiBooks="https://books.apple.com/us/book/all-your-broken-reasons/id1205577274"
        retailerURLGoogle="https://play.google.com/store/books/details/Veronica_Larsen_All_Your_Broken_Reasons?id=AFxbBQAAQBAJ"
        retailerURLNook="https://www.barnesandnoble.com/w/entangle-veronica-larsen/1120422608"
        retailerURLKobo="https://www.kobo.com/us/en/ebook/all-your-broken-reasons"
        viewBookURL=""
      />

      <BookSection 
        bookTitle="All Your Broken Choices"
        isTop={false}
        bookImageURL="assets/bookCovers/ayb_choices.avif" 
        review1string1='"Seriously ' review1string1type="sm"
        review1string2="fantastic" review1string2type="lg"
        review1string3=' book."' review1string3type="sm"
        review1string4='' review1string4type=""
        review1string5='' review1string5type=""
        review1string6='' review1string6type=""
        review1string7='' review1string7type=""
        review1string1Ref="-OBSESSED WITH MYSHELF" review1string1RefType="ref1"
        review1string2Ref="" review1string2RefType=""
        review2string1='"Kept me on the edge of my seat. Really enjoyed reading this story. I never knew what would happen next. I probably should check my blood pressure."' review2string1type="sm"
        review2string2="" review2string2type="sm"
        review2string3='' review2string3type=""
        review2string4='' review2string4type=""
        review2string5='' review2string5type=""
        review2string6='' review2string6type=""
        review2string7='' review2string7type=""
        review2string8='' review2string8type=""
        review2string1Ref="-Kindle Customer" review2string1RefType="ref1"
        review2string2Ref="" review2string2RefType=""
        retailerURLKindle="https://www.amazon.com/What-She-Did-Veronica-Larsen/dp/0998401366"
        retailerURLiBooks="https://books.apple.com/us/book/all-your-broken-choices/id1205564095"
        retailerURLGoogle="https://play.google.com/store/books/details/Veronica_Larsen_All_Your_Broken_Choices?id=DQQvDwAAQBAJ"
        retailerURLNook="https://www.barnesandnoble.com/w/entice-veronica-larsen/1123836043"
        retailerURLKobo="https://www.kobo.com/us/en/ebook/all-your-broken-choices"
        viewBookURL=""
      />

      <BookSection 
        bookTitle="What She Did"
        isTop={false}
        bookImageURL="assets/bookCovers/whatSheDid.jpg" 
        review2string1='"There wasn’t an emotion left untouched by the time I reached the end of the book, not a feeling that I had not experienced."' review2string1type="sm"
        review2string2="" review2string2type=""
        review2string3='' review2string3type=""
        review2string4='' review2string4type=""
        review2string5='' review2string5type=""
        review2string6='' review2string6type=""
        review2string7='' review2string7type=""
        review2string8='' review2string8type=""
        review2string1Ref="-BOOKS LAID BARE" review2string1RefType="ref1"
        review2string2Ref="" review2string2RefType=""
        review1string1='"' review1string1type="sm"
        review1string2="Thrilling" review1string2type="md"
        review1string3=', ' review1string3type="sm"
        review1string4='suspenseful' review1string4type="md"
        review1string5=' and ' review1string5type="sm"
        review1string6='addicting' review1string6type="md"
        review1string7=', this book has tons of excitement."' review1string7type="sm"
        review1string8='' review1string8type=""
        review1string1Ref="-The Book Fairy Reviews" review1string1RefType="ref1"
        review1string2Ref="" review1string2RefType=""
        retailerURLKindle="https://www.amazon.com/Reckless-Touch-Veronica-Larsen-ebook/dp/B01M6BB9N7"
        retailerURLiBooks=""
        retailerURLGoogle=""
        retailerURLNook=""
        retailerURLKobo=""
        viewBookURL=""
      />

      {/* Background Bottom Image */}
      <div
        className="static-bg-bottom"
        style={{
          backgroundImage: "url('/assets/bg_image_bed.avif')",
          // backgroundPosition: "bottom center",
          // backgroundSize: "100% auto",
          // width: "150%",
          // height: "50vh",
          // minWidth: "100px",
        }}
      ></div>
      <div style={{ height: "50vh" }}></div>
    </>
  );
}

export default HomePage;
