/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Skip - Jumpstarting Minorities into Tech Careers";
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
          justifyContent: "space-between", // Distributes space between the image and the text
          padding: "2rem",
          backgroundImage:
            "linear-gradient(to bottom right, #3ca0a6 25%, #ffffff 50%, #966ce4 75%)",
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
            alt="Project Skip Vision"
            tw="w-200 h-200 mb-4 opacity-95"
          />
        </div>

        {/* Text */}
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
