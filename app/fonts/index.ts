import localFont from "next/font/local";
import { Inter, Rowdies, Saira } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const saira = Saira({
  variable: '--font-saira',
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900']
})

export const rowdies = Rowdies({
  variable: '--font-rowdies',
  subsets: ["latin"],
  weight: ['300', '400', '700']
})
