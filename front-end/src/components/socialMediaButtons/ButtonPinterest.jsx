function ButtonPinterest() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="/assets/pinterest_logo_sm.avif"
        alt="Pinterest"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://pinterest.com",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonPinterest;
