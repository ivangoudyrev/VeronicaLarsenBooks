function HomePage() {
  return (
    <>
      <div 
        className="static-bg"
        style={{ backgroundImage: "url('/assets/bg_image_couple.avif')" }}
      >
      </div>

      <div className="container-fluid bg-light mx-0"
           style={{
             marginTop: "-300px", // pull the section upward
            //  paddingTop: "100px", // preserve inner spacing
            //  paddingBottom: "60px",
            //  position: "relative",
            //  zIndex: 2, // ensures it's above the background
           }}
      >
        <div className="row">
          {/* Left container */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="p-4 border rounded h-100">
              <h3>Left Column</h3>
                <p>This content will appear on the left on larger screens, and stack on top on small screens.</p>
            </div>
          </div>
          {/* Right container */}
          <div className="col-md-6">
            <div className="p-4 border rounded h-100">
              <h3>Right Column</h3>
              <p>This content will appear on the right on larger screens, and stack below on small screens.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
