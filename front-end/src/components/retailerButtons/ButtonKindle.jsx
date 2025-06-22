function ButtonKindle({ retailerURLKindle }) {
  return (
    <button
      type="button"
      className="btn border rounded-4 bg-light p-0"
      onClick={() => window.open(retailerURLKindle, "_blank")}
      style={{ 
        padding: 0, 
        marginRight: "6px",
        width: "60px", 
        height: "60px",
        overflow: "hidden"
      }}
    >
      <img 
        src="assets/officialLogos/kindle-smile-logo.avif"  
        alt="Kindle"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }} 
      />
    </button>
  );
}

export default ButtonKindle;
