function ButtonGoogle({ retailerURLGoogle }) {
  return (
    <button
      type="button"
      className="btn border rounded-4 bg-light p-0 mx-2"
      onClick={() => window.open(retailerURLGoogle, "_blank")}
    >
      <img
        style={{padding: 3, width: "60px", height: "60px"}} 
        src="assets/officialLogos/lockup_ic_Google_Product_Vlarge_2582x2990px_clr.avif" width="70" alt="GooglePlay" 
      />
    </button>
  );
}

export default ButtonGoogle;
