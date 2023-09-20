import CardCarousel from "@/components/CardCarousel";
import CategoryCard from "@/components/CategoryCard";
import ContactForm from "@/components/ContactForm";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/home/Hero";
import WebVitals from "@/components/home/web-vitals";
import ComingSoon from "@/components/layout/comingSoon";
import { DEPLOY_URL } from "@/lib/constants";
import { categoryCards, courseCards } from "data/sampleData";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Locate, LocateIcon, Mail, MapPin, Phone, Pin, Twitter, Youtube } from "lucide-react";
import VerticalSeparator from "@/components/shared/verticalSeparator";

export default async function Home() {

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <div className="z-10 w-full  px-5 xl:px-0 font-">
        <section className="w-full h-screen">
          <Hero></Hero>
        </section>
        <section className="w-full h-screen py-10">
          <div className="flex px-24 items-center">
            <Image className="w-1/2 p-10" src={'/section-2.png'} alt="section-2" width={514} height={120}></Image>
            <div className="w-1/2 align-middle py-10">
              <h1 className="py-5 text-xl font-bold">About The Skip Project</h1>
              <p>Founded with a vision to uplift the POC community in technology, **Skip** is more than just a learning platform. With our team of expert instructors and partnerships with prestigious educational institutions, we aim to create a ripple effect of positive change in the tech industry.</p>
              <button className="text-white h-10 bg-gradient-button px-5 my-5 rounded-lg">Watch Video</button>
            </div>
          </div>
        </section>
        <section className="w-full h-screen py-10">
          <div className="h-1/6 px-24">
            <div className="w-full h-1/2 text-center text-4xl font-bold">Upcoming <span className="text-green-300">Courses</span></div>
            <div className="w-1/2 h-1/2 text-center text-lg mx-auto py-2 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</div>
          </div>

          <div className="h-5/6 py-10 px-24">
            <CardCarousel>
              {courseCards.map((courseCard) => {
                return <CourseCard course={courseCard}></CourseCard>
              })}
            </CardCarousel>
          </div>
        </section>

        <section className="w-full h-fit py-10 font-rowdies">
          <div className="relative  bg-hero bg-cover bg-no-repeat flex flex-col justify-center text-white ">
            <div className="absolute  bg-gradient-to-r from-[#084FC7E5] to-[#7F56D9E5] w-full h-full"></div>
            <div className="py-10 z-10 h-full">
              <h1 className="font-bold text-4xl w-full text-center">Why <span className="text-green-300">learn</span> with our courses?</h1>
              <p className="font-saira py-10 w-full text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>

              <div className="flex  px-5 font-saira h-3/4 ">
                <div className="p-2 flex-1">
                  <div className="p-5 h-1/3  w-full">
                    <Image className="h-full w-full p-4" src={'/learn.svg'} alt="icon" height={20} width={20}></Image>
                  </div>
                  <h3 className="text-lg font-semibold text-center">0.1 Learn</h3>
                  <p className="text-center font-normal max-w-prose">Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
                </div>
                <VerticalSeparator></VerticalSeparator>
                <div className="p-2 flex-1">
                  <div className="p-5 h-1/3 w-full">
                    <Image className="h-full w-full p-4" src={'/graduate.svg'} alt="icon" height={20} width={20}></Image>
                  </div>
                  <h3 className="text-lg font-semibold text-center">0.1 Graduate</h3>
                  <p className="text-center font-normal max-w-prose">Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
                </div>
                <VerticalSeparator></VerticalSeparator>

                <div className="p-2 flex-1">
                  <div className="p-5 h-1/3 w-full">
                    <Image className="h-full w-full p-10" src={'/work.svg'} alt="icon" height={20} width={20}></Image>
                  </div>
                  <h3 className="text-lg font-semibold text-center">0.3 Work</h3>
                  <p className="text-center font-normal max-w-prose">Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/2 py-10">
            <div className="w-full text-center">
              <h1 className="font-bold text-4xl">Top <span className="text-green-300">Categories</span></h1>
              <h3 className="m-5">12,000+ unique online course list designs</h3>
            </div>
            <div className="flex gap-4 h-3/4 justify-center px-5 ">
              {categoryCards.map((value, index) => {
                return <div className="flex-1">
                  <CategoryCard {...value}></CategoryCard>
                </div>
              })}
            </div>
          </div>

        </section>
        <section className="py-5">
          <div className=" bg-[#4C2FBD] flex justify-center mx-[5%] rounded-lg">
            <div className="p-10 w-1/2 leading-relaxed pl-20">
              <h1 className="font-bold text-5xl text-white leading-relaxed">Let's discuss </h1>
              <h1 className="font-bold text-5xl text-white leading-relaxed">on something <span className="text-[#A91079]">cool </span></h1>
              <h1 className="font-bold text-5xl text-white leading-relaxed">together</h1>
              <div className="text-white">
                <div className="hover:bg-[#570A5780] hover:border-[#A91079] hover:border-2 py-3 w-2/3 rounded-lg flex gap-5"><Mail className='ml-2'></Mail>SaulDesign@gmail.com</div>
                <div className="hover:bg-[#570A5780] hover:border-[#A91079] hover:border-2 py-3 w-2/3 rounded-lg flex gap-5"><Phone className='ml-2'></Phone>+123 456 789</div>
                <div className="hover:bg-[#570A5780] hover:border-[#A91079] hover:border-2 py-3 w-2/3 rounded-lg flex gap-5"><MapPin className='ml-2'></MapPin>123 Street 456 House</div>
              </div>
              <div className="flex gap-3 mt-4">
                <Twitter className="" color="white"></Twitter>
                <Facebook className="" color="white"></Facebook>
                <Instagram className="" color="white"></Instagram>
              </div>
            </div>
            <div className="p-10 w-1/2"><ContactForm></ContactForm></div>

          </div>
        </section>
        <ComingSoon
          title="Join Our Tech Community Today!"
          description="Join Us and Explore Limitless Possibilities in Technology, Tailored for you."
          ctaLink="https://lmgfwsubawc.typeform.com/to/CQy3URCB"
        />

      </div>
    </>
  );
}

const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Project Skipto [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Project Skipcomes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Project Skipoffers a collection of hooks, utilities, and `@vercel/og`",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
