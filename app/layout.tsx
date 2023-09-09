import "./globals.css";
//eslint-disable-next-line
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import ComingSoon from "@/components/layout/comingSoon";
import Head from "next/head";
export const metadata = {
  image:
    "https://res.cloudinary.com/djao481zq/image/upload/v1694298818/Main_LOGO_1_yabyi6.png",
  title: "Skip - Jumpstarting Minorities into Tech Careers",
  description:
    "Unlock your tech potential with Skip - a comprehensive online platform offering courses, certifications, and networking opportunities. Join our thriving community and bridge the tech knowledge gap. #TechEducation #POCsInTech",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://www.project-skip.org"),
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
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.facebook.title} />
        <meta property="og:image" content={metadata.image} />

        <meta
          property="og:description"
          content={metadata.facebook.description}
        />
        {/* ... Add og:image if you have it in metadata ... */}

        {/* Twitter */}
        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta
          property="twitter:description"
          content={metadata.twitter.description}
        />
        <meta property="twitter:creator" content={metadata.twitter.creator} />
        {/* ... Add twitter:image if you have it in metadata ... */}

        {/* Theme Color (for browsers that support it) */}
        <meta name="theme-color" content={metadata.themeColor} />
      </Head>
      <body className={cx(sfPro.variable, inter.variable)}>
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
