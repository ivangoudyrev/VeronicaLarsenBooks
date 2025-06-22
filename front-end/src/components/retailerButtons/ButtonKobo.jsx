function ButtonKobo({ retailerURLKobo }) {
  return (
    <button
      type="button"
      className="btn border rounded-4"
      onClick={() => window.open(retailerURLKobo, "_blank")}
      style={{
        marginLeft: "6px", 
        padding: 0 
      }}
    >
      <img src="assets/officialLogos/KoboApp.avif" width="60px" alt="Kobo" />
    </button>
  );
}

export default ButtonKobo;
