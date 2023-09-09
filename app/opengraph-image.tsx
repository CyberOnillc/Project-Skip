<div
  style={{
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between", // Distributes space between the image and the text
    padding: "2rem",
    backgroundImage:
      "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
  }}
>
  {/* Image Container */}
  <div
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <img
      src="https://res.cloudinary.com/djao481zq/image/upload/v1694298818/Main_LOGO_1_yabyi6.png"
      alt="Precedent Logo"
      tw="w-20 h-20 mb-4 opacity-95"
    />
  </div>

  {/* Text */}
  <h1
    style={{
      fontSize: "100px",
      fontFamily: "SF Pro",
      background:
        "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
      backgroundClip: "text",
      color: "transparent",
      lineHeight: "5rem",
      letterSpacing: "-0.02em",
    }}
  >
    Project Skip
  </h1>
</div>;
