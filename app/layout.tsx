import "./globals.css";

//eslint-disable-next-line
import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import Head from "next/head";
import { Suspense } from "react";
import { inter, rowdies, saira, sfPro } from "./fonts";
export const metadata = {
  image:
    "https://res.cloudinary.com/djao481zq/image/upload//c_thumb,w_1200,h_630,g_auto/v1694298818/Main_LOGO_1_yabyi6.png",
  title: "Project Skip - Jumpstarting Minorities into Tech Careers",
  description:
    "Unlock your tech potential with Skip - a comprehensive online platform offering courses, certifications, and networking opportunities. Join our thriving community and bridge the tech knowledge gap. #TechEducation #POCsInTech",
  twitter: {
    card: "summary_large_image",
    title: "Project Skip - Jumpstarting Minorities into Tech Careers",
    description:
      "Unlock your tech potential with Skip - a comprehensive online platform offering courses, certifications, and networking opportunities. Join our thriving community and bridge the tech knowledge gap. #TechEducation #POCsInTech",
    creator: "@project-skip",
  },
  metadataBase: new URL("https://project-skip.vercel.app"),
  themeColor: "#FFF",
  linkedin: {
    title: "Empowering POCs in Tech | Join Skip's Tech Community",
    description:
      "Unlock your tech potential with Skip - a comprehensive online platform offering courses, certifications, and networking opportunities. Join our thriving community and bridge the tech knowledge gap. #TechEducation #POCsInTech",
  },
  facebook: {
    title: "Join Skip's Tech Community | Empowering POCs in Tech",
    description:
      "Discover Skip - the platform empowering POCs in the tech industry. Gain industry-ready skills, connect with experts, and unlock new opportunities. Join us today and bridge the tech knowledge gap. #TechEducation #POCsInTech",
  },
  instagram: {
    title: "Unlock Your Tech Potential with Skip",
    description:
      "Join Skip's thriving tech community. Gain cutting-edge tech skills, connect with industry experts, and unlock opportunities. Start your tech journey today! #TechEducation #POCsInTech",
  },
  site_name: "https://project-skip.vercel.app/",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* General meta tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="image"
          content="https://res.cloudinary.com/djao481zq/image/upload/v1694298818/Main_LOGO_1_yabyi6.png"
        />

        {/* Open Graph / Facebook meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.site_name} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djao481zq/image/upload/v1694298818/Main_LOGO_1_yabyi6.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter meta tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metadata.site_name} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/djao481zq/image/upload/v1694298818/Main_LOGO_1_yabyi6.png"
        />
        <meta property="twitter:creator" content="Project_Skip" />
      </Head>
      <body className={cx(sfPro.variable, inter.variable, saira.variable, rowdies.variable )}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>

        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
