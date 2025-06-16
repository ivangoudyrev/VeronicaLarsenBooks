function ButtonTumbler() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="/assets/tumbler_logo_sm.avif"
        alt="Tumbler"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://tumbler.com",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonTumbler;
