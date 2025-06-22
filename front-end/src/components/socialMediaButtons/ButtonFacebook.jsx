function ButtonFacebook() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="/assets/fb_logo_sm.avif"
        alt="Facebook"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://facebook.com",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonFacebook;
