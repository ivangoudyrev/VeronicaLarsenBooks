function ButtonYouTube() {
  return (
    <button type="button" className="btn custom-btn">
      <img
        src="/assets/youtube_logo_sm.avif"
        alt="YouTube"
        className="btn-icon"
        onClick={() =>
          window.open(
            "https://youtube.com",
            "_blank"
          )
        }
      />
    </button>
  );
}

export default ButtonYouTube;
