function ButtonInstagram() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="/assets/instagram_logo_sm.avif"
        alt="Instagram"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://instagram.com",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonInstagram;
