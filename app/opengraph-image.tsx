/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Precedent - Building blocks for your Next.js project";
export const contentType = "image/png";

export default async function OG() {
  const sfPro = await fetch(
    new URL("./fonts/SF-Pro-Display-Medium.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end", // Change this to position the text at the bottom
          padding: "2rem", // Some padding for the text
          backgroundImage: `
      linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%),
      url('https://res.cloudinary.com/djao481zq/image/upload/v1694298818/Main_LOGO_1_yabyi6.png')
    `, // Set the image as the background
          backgroundSize: "cover", // Cover the entire container with the image
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Do not repeat the image
        }}
      >
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
      </div>
    ),

    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    },
  );
}
