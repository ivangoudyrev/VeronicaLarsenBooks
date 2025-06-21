import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div
        className="static-bg"
        style={{
          backgroundImage: "url('/assets/bg_image_couple.avif')",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
          width: "100%",
          minWidth: "100px",
        }}
      ></div>

      <div className="bg-light">
        <div
          class="container text-center bg-light p-3 hero-content"
          style={{
            // marginTop: "-60vh",
            maxWidth: "980px",
          }}
        >
          <div class="row">
            {/* Left column */}
            <div class="col-6 align-self-center">
              <div className="mb-3">
                <img
                  src="assets/TEOU_WEB_paperback.avif"
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
            <div class="col-6 align-self-center">
              <div className="mb-3">
                <p
                  style={{
                    fontFamily: "'Caudex', serif",
                    fontSize: "clamp(16px, 2vw, 22px)",
                    letterSpacing: "0.03em",
                    lineHeight: 1.6,
                    fontWeight: 400,
                    color: "#333",
                    marginBottom: 0,
                  }}
                >
                  "The Edge of Us had a level of{" "}
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(24px, 4vw, 48px)",
                      color: "rgb(20, 118, 125)",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      display: "inline-block",
                      lineHeight: 1,
                    }}
                  >
                    intrigue
                  </span>{" "}
                  and{" "}
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(24px, 4vw, 48px)",
                      color: "rgb(20, 118, 125)",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      display: "inline-block",
                      lineHeight: 1,
                    }}
                  >
                    temptation
                  </span>{" "}
                  that made me salivate...{" "}
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      color: "rgb(20, 118, 125)",
                    }}
                  >
                    I was consumed by this novel."
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "clamp(12px, 1.5vw, 16px)",
                    fontStyle: "italic",
                    color: "#666",
                    margin: 0,
                    textAlign: "end",
                  }}
                >
                  -ESCAPENBOOKS
                </p>
              </div>
              <div className="d-none d-md-block">
                <div className="mb-2">
                  <button type="button" className="btn" style={{ padding: 0 }}>
                    <img src="assets/kindle_btn_sm.avif" alt="Kindle" />
                  </button>
                  <button type="button" className="btn" style={{ padding: 0 }}>
                    <img src="assets/ibooks_btn_sm.avif" alt="iBooks" />
                  </button>
                  <button type="button" className="btn" style={{ padding: 0 }}>
                    <img src="assets/googleplay_btn_sm.avif" alt="GooglePlay" />
                  </button>
                  <button type="button" className="btn" style={{ padding: 0 }}>
                    <img src="assets/nook_btn_sm.avif" alt="Nook" />
                  </button>
                  <button type="button" className="btn" style={{ padding: 0 }}>
                    <img src="assets/kobo_btn_sm.avif" alt="GooglePlay" />
                  </button>
                </div>
                <div>
                  <button type="button" className="btn btn-success my-3">
                    View Book
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-md-none mt-3">
            <div className="mb-2">
              <button type="button" className="btn" style={{ padding: 0 }}>
                <img src="assets/kindle_btn_sm.avif" alt="Kindle" />
              </button>
              <button type="button" className="btn" style={{ padding: 0 }}>
                <img src="assets/ibooks_btn_sm.avif" alt="iBooks" />
              </button>
              <button type="button" className="btn" style={{ padding: 0 }}>
                <img src="assets/googleplay_btn_sm.avif" alt="GooglePlay" />
              </button>
              <button type="button" className="btn" style={{ padding: 0 }}>
                <img src="assets/nook_btn_sm.avif" alt="Nook" />
              </button>
              <button type="button" className="btn" style={{ padding: 0 }}>
                <img src="assets/kobo_btn_sm.avif" alt="GooglePlay" />
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-success my-3">
                View Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="static-bg"
        style={{
          backgroundImage: "url('/assets/bg_image_bed.avif')",
          backgroundPosition: "bottom center",
          backgroundSize: "100% auto",
          width: "100%",
          minWidth: "100px",
        }}
      ></div>
    </>
  );
}

export default HomePage;
