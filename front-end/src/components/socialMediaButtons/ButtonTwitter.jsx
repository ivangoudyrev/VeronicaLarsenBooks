function ButtonTwitter() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="/assets/x_logo_sm.avif"
        alt="Twitter"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://x.com",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonTwitter;
