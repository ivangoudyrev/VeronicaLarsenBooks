function ButtoniBooks({ retailerURLiBooks }) {
  return (
    <button
      type="button"
      className="btn border rounded-4"
      onClick={() => window.open(retailerURLiBooks, "_blank")}
      style={{
        marginLeft: "6px",
        marginRight: "6px", 
        padding: 0 
      }}
    >
      <img 
        src="assets/officialLogos/Apple_Books_Icon.avif" 
        width="60px" 
        alt="iBooks" />
    </button>
  );
}

export default ButtoniBooks;
