import ButtonGoogle from "./retailerButtons/ButtonGoogle";
import ButtoniBooks from "./retailerButtons/ButtoniBooks";
import ButtonKindle from "./retailerButtons/ButtonKindle";
import ButtonKobo from "./retailerButtons/ButtonKobo";
import ButtonNook from "./retailerButtons/ButtonNook";
import ReviewSection from "./ReviewSection";

function BookSection(props) {
  const {
    bookTitle,
    isTop,
    bookImageURL,
    review1string1,
    review1string1type,
    review1string2,
    review1string2type,
    review1string3,
    review1string3type,
    review1string4,
    review1string4type,
    review1string5,
    review1string5type,
    review1string6,
    review1string6type,
    review1string7,
    review1string7type,
    review1string8,
    review1string8type,
    review1string1Ref,
    review1string1RefType,
    review1string2Ref,
    review1string2RefType,

    review2string1,
    review2string1type,
    review2string2,
    review2string2type,
    review2string3,
    review2string3type,
    review2string4,
    review2string4type,
    review2string5,
    review2string5type,
    review2string6,
    review2string6type,
    review2string7,
    review2string7type,
    review2string8,
    review2string8type,
    review2string1Ref,
    review2string1RefType,
    review2string2Ref,
    review2string2RefType,

    review3string1,
    review3string1type,
    review3string2,
    review3string2type,
    review3string3,
    review3string3type,
    review3string4,
    review3string4type,
    review3string5,
    review3string5type,
    review3string6,
    review3string6type,
    review3string7,
    review3string7type,
    review3string8,
    review3string8type,
    review3string1Ref,
    review3string1RefType,
    review3string2Ref,
    review3string2RefType,

    retailerURLKindle,
    retailerURLiBooks,
    retailerURLGoogle,
    retailerURLNook,
    retailerURLKobo,
    viewBookURL,
  } = props;
  return (
    <>
      <div>
        <div
          className={`container border shadow rounded-3 text-center p-4 mb-4 ${
            isTop ? "hero-content" : ""
          }`}
          style={{
            // marginTop: "-60vh",
            maxWidth: "980px",
            backgroundColor: isTop ? "white" : "rgba(255, 255, 255, 0.8)"
          }}
        >
          <div className="row">
            {/* Left column */}
            <div className="col-6 align-self-center">
              <div className="mb-3">
                <img
                  className={`${
                    bookTitle == "The Edge of Us"
                      ? ""
                      : "border rounded-3 shadow-lg"
                  }`}
                  src={bookImageURL}
                  alt="Book Cover"
                  style={{
                    width: "40vw",
                    maxWidth: "300px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            
            {/* Right column */}
            <div className="col-6 align-self-center p-1">
              <div className="mb-3">
                <div className="mb-3">
                  <ReviewSection string={review1string1} stringType={review1string1type} />
                  <ReviewSection string={review1string2} stringType={review1string2type}/>
                  <ReviewSection string={review1string3} stringType={review1string3type}/>
                  <ReviewSection string={review1string4} stringType={review1string4type}/>
                  <ReviewSection string={review1string5} stringType={review1string5type}/>
                  <ReviewSection string={review1string6} stringType={review1string6type}/>
                  <ReviewSection string={review1string7} stringType={review1string7type}/>
                  <ReviewSection string={review1string8} stringType={review1string8type}/>
                  <ReviewSection string={review1string1Ref} stringType={review1string1RefType}/>
                  <ReviewSection string={review1string2Ref} stringType={review1string2RefType}/>
                </div>

                <div className="mb-3">
                  <ReviewSection string={review2string1} stringType={review2string1type} />
                  <ReviewSection string={review2string2} stringType={review2string2type}/>
                  <ReviewSection string={review2string3} stringType={review2string3type}/>
                  <ReviewSection string={review2string4} stringType={review2string4type}/>
                  <ReviewSection string={review2string5} stringType={review2string5type}/>
                  <ReviewSection string={review2string6} stringType={review2string6type}/>
                  <ReviewSection string={review2string7} stringType={review2string7type}/>
                  <ReviewSection string={review2string8} stringType={review2string8type}/>
                  <ReviewSection string={review2string1Ref} stringType={review2string1RefType}/>
                  <ReviewSection string={review2string2Ref} stringType={review2string2RefType}/>
                </div>

                <div className="mb-3">
                  <ReviewSection string={review3string1} stringType={review3string1type} />
                  <ReviewSection string={review3string2} stringType={review3string2type}/>
                  <ReviewSection string={review3string3} stringType={review3string3type}/>
                  <ReviewSection string={review3string4} stringType={review3string4type}/>
                  <ReviewSection string={review3string5} stringType={review3string5type}/>
                  <ReviewSection string={review3string6} stringType={review3string6type}/>
                  <ReviewSection string={review3string7} stringType={review3string7type}/>
                  <ReviewSection string={review3string8} stringType={review3string8type}/>
                  <ReviewSection string={review3string1Ref} stringType={review3string1RefType}/>
                  <ReviewSection string={review3string2Ref} stringType={review3string2RefType}/>
                </div>
              </div>
              <div className="d-none d-md-block p-0">
                <div className="p-0">
                  {retailerURLKindle && <ButtonKindle retailerURLKindle={retailerURLKindle} />}
                  {retailerURLiBooks && <ButtoniBooks retailerURLiBooks={retailerURLiBooks} />}
                  {retailerURLGoogle && <ButtonGoogle retailerURLGoogle={retailerURLGoogle} />}
                  {retailerURLNook && <ButtonNook retailerURLNook={retailerURLNook} />}
                  {retailerURLKobo && <ButtonKobo retailerURLKobo={retailerURLKobo} />}
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-success my-3 disabled"
                    onClick={() => window.open(viewBookURL, "_blank")}
                    disabled
                  >
                    View Book
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-md-none mt-3">
            <div className="mx-0 mb-2 p-0">
              {retailerURLKindle && <ButtonKindle retailerURLKindle={retailerURLKindle} />}
                  {retailerURLiBooks && <ButtoniBooks retailerURLiBooks={retailerURLiBooks} />}
                  {retailerURLGoogle && <ButtonGoogle retailerURLGoogle={retailerURLGoogle} />}
                  {retailerURLNook && <ButtonNook retailerURLNook={retailerURLNook} />}
                  {retailerURLKobo && <ButtonKobo retailerURLKobo={retailerURLKobo} />}
            </div>
            <div>
              <button
                type="button"
                className="btn btn-success my-3"
                onClick={() => window.open(viewBookURL, "_blank")}
                disabled
              >
                View Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookSection;
