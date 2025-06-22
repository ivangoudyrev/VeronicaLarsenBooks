function ButtonNook({ retailerURLNook }) {
  return (
    <button
      type="button"
      className="btn border rounded-4"
      onClick={() => window.open(retailerURLNook, "_blank")}
      style={{ 
        marginLeft: "6px",
        marginRight: "6px", 
        padding: 0 
      }}
    >
      <img src="assets/officialLogos/nook-app.avif" width="60px" alt="Nook" />
    </button>
  );
}

export default ButtonNook;
