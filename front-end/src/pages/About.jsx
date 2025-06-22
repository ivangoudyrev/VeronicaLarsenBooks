import "./HomePage.css";

function About() {
  return (
    <>
      <div>
        <div
          className="container border shadow rounded-3 hero-content"
          style={{
            marginTop: "10vh",
            maxWidth: "980px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <div className="row">
            {/* Left column */}
            <div className="col-sm-4 my-3 text-center align-self-center">
              <img
                className="img-fluid rounded-3 shadow-lg"
                src="assets/veronica.avif"
                alt="Veronica"
                // style={{
                //   width: "",
                  // maxWidth: "300px",
                //   height: "auto",
                // }}
              />
            </div>

            {/* Right column */}
            <div className="col-sm-8 align-self-center p-3">
              <div>
                <p className="text-center">ABOUT THE AUTHOR</p>
                <p>
                  Veronica Larsen's novels are known to feature engaging
                  story-lines, relatable characters, heart-tugging moments, and
                  tangible chemistry that builds throughout the story.
                </p>
                <p>
                  Larsen began writing around the age of seven, scribbling Nancy
                  Drew-like stories between the margins of composition
                  notebooks. Her journey into the romance genre began once upon
                  a long military deployment when she penned a steamy romance
                  for her husband, a US Marine. This story eventually turned
                  into her debut novel Entangle. She fell in love with writing
                  about love and hasn't looked back since.
                </p>
                <p>
                  She holds a Bachelor of Science in Psychology, which has come
                  in handy in resolving the messy lives of the fictional people
                  in her head.
                </p>
              </div>
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

export default About;
