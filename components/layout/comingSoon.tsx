import { FC } from "react";
import { ExternalLink } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
  ctaLink: string;
  ctaText?: string;
}

const ComingSoon: FC<ComingSoonProps> = ({
  title,
  description,
  ctaLink,
  ctaText = "Sign Up For Updates",
}) => {
  return (
  
      <div className="rounded-xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-left">{title}</h1>
        <p className="mb-6 text-gray-700">{description}</p>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 rounded-full bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-500"
        >
          <span>{ctaText}</span>
          <ExternalLink size={18} />
        </a>
      </div>
  )
};

export default ComingSoon;
