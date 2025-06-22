function ReviewSection(props) {
  const { string, stringType } = props;

  if (stringType === "sm") {
    return (
      <span
        style={{
          fontFamily: "'Caudex', serif",
          fontSize: "clamp(16px, 2vw, 22px)",
          letterSpacing: "0.03em",
          lineHeight: 1.6,
          fontWeight: 400,
          color: "#333",
          marginBottom: 0,
        }}
      >
        {string}
      </span>
    );
  }

  if (stringType === "md") {
    return (
      <span
        style={{
          fontFamily: "'Caudex', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          letterSpacing: "0.03em",
          lineHeight: 1.6,
          fontWeight: 700,
          color: "rgb(20, 118, 125)",
          marginBottom: 0,
        }}
      >
        {string}
      </span>
    );
  }

  if (stringType === "lg") {
    return (
      <span
        style={{
          fontFamily: "'Caudex', serif",
          fontSize: "clamp(24px, 4vw, 48px)",
          letterSpacing: "0.03em",
          lineHeight: 1,
          fontWeight: 700,
          color: "rgb(20, 118, 125)",
          wordBreak: "break-word",
          overflowWrap: "break-word",
          display: "inline-block",
          marginBottom: 0,
        }}
      >
        {string}
      </span>
    );
  }

  if (stringType === "ref1") {
    return (
      <p
        style={{
          fontSize: "clamp(12px, 1.5vw, 16px)",
          fontStyle: "italic",
          color: "#666",
          margin: 0,
          textAlign: "end",
        }}
      >
        {string}
      </p>
    );
  }

  if (stringType === "ref2") {
    return (
      <p
        style={{
          fontSize: "clamp(10px, 1vw, 14px)",
          fontStyle: "italic",
          color: "#666",
          margin: 0,
          textAlign: "end",
        }}
      >
        {string}
      </p>
    );
  }

  return null;
  
}

export default ReviewSection;
