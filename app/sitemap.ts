import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://project-skip.org",
      lastModified: new Date(),
    },
    ...users.map((user: any) => ({
      url: `https://project-skip.org/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
