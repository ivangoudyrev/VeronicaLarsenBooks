import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ku7ed29",
        "template_hchcq89",
        e.target,
        "asEuy2hBS_W8ZBXCW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send.");
        }
      );
  };
  return (
    <>
      <div>
        <div
          className="container border shadow rounded-3 hero-content"
          style={{
            marginTop: "10vh",
            maxWidth: "980px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            fontFamily: "EB Garamond, serif",
            letterSpacing: "0.14em",
          }}
        >
          <p className="text-center fs-1 mb-0">
            Contact the author...
          </p>
          <form
            className="row g-3 text-secondary bg-light rounded-3 p-4 m-2"
            onSubmit={sendEmail}
          >
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">
                Email (so I can respond)
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="commentArea" className="form-label">
                Your message
              </label>
              <textarea
                className="form-control"
                id="commentArea"
                name="message"
                required
              />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary mb-3">
                Send
              </button>
            </div>
          </form>
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

export default Contact;
