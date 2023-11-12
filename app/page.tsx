import CardCarousel from "@/components/CardCarousel";
import CategoryCard from "@/components/CategoryCard";
import ContactForm from "@/components/ContactForm";
import CourseCard from "@/components/CourseCard";
import Hero from "@/components/home/Hero";
import WebVitals from "@/components/home/web-vitals";
import ComingSoon from "@/components/layout/comingSoon";
import { DEPLOY_URL } from "@/lib/constants";
import { categoryCards, courseCards, reviews } from "data/sampleData";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Locate, LocateIcon, Mail, MapPin, Phone, Pin, Twitter, Youtube } from "lucide-react";
import VerticalSeparator from "@/components/shared/verticalSeparator";
import ReviewCard from "@/components/ReviewCard";
import VideoPlayer from "@/components/home/video";
import { socialMediaLinks } from '../data/sampleData';

export default async function Home() {

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <div className="z-10 w-full">
        <section className="mx-auto h-screen w-full items-center overflow-hidden">
          <Hero></Hero>
        </section>
        <section className="container mx-auto w-full py-10">
          <div className="lg:no container flex flex-col items-center lg:flex-row lg:px-24">
            <Image
              className="w-3/4 p-2 lg:w-1/2 lg:p-10"
              src={"/section-2.png"}
              alt="section-2"
              width={514}
              height={120}
            ></Image>
            <div className="px-10 py-10 align-middle lg:w-1/2 lg:px-0">
              <h1 className="py-5 text-xl font-bold">About The Skip Project</h1>
              <p className="text-justify">
                Founded with a vision to uplift the POC community in technology,
                **Skip** is more than just a learning platform. With our team of
                expert instructors and partnerships with prestigious educational
                institutions, we aim to create a ripple effect of positive
                change in the tech industry.
              </p>
              <button className="my-5 h-10 rounded-lg bg-gradient-button px-5 text-white">
                Watch Video
              </button>
            </div>
          </div>
        </section>
        <section className="container mx-auto h-fit w-full py-10">
          <div className="container lg:h-1/6 lg:px-24">
            <div className="h-1/2 w-full text-center text-4xl font-bold">
              Upcoming <span className="text-green-300">Courses</span>
            </div>
            <div className="mx-auto h-1/2 px-10 py-2 text-center text-lg lg:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporidunt ut labore veniam...
            </div>
          </div>

          <div className="container py-10 lg:h-5/6 lg:px-24">
            <CardCarousel>
              {courseCards.map((courseCard, index) => {
                return (
                  <CourseCard key={index} course={courseCard}></CourseCard>
                );
              })}
            </CardCarousel>
          </div>
        </section>

        <section className="container mx-auto h-fit w-full py-10 font-rowdies">
          <div className="relative  flex flex-col justify-center bg-hero bg-cover bg-no-repeat text-white ">
            <div className="absolute  h-full w-full bg-gradient-to-r from-[#084FC7E5] to-[#7F56D9E5]"></div>
            <div className="z-10 h-full py-10">
              <h1 className="w-full text-center text-4xl font-bold">
                Why <span className="text-green-300">learn</span> with our
                courses?
              </h1>
              <p className="w-full py-10 text-center font-saira">
                Are you wondering why our courses are the best choice for your
                learning journey? Here are three compelling reasons:
              </p>

              <div className="flex h-3/4  justify-center px-5 font-saira ">
                <div className="flex-1 self-center p-2">
                  <div className="m-auto flex justify-center">
                    <Image
                      className="h-40 w-40 self-center lg:p-10"
                      src={"/learn.svg"}
                      alt="icon"
                      height={20}
                      width={20}
                    ></Image>
                  </div>
                  <h3 className="text-center text-lg font-semibold">
                    0.1 Learn
                  </h3>
                  <p className="max-w-prose text-center font-normal">
                    Our courses provide a comprehensive and engaging learning
                    experience. We believe that learning should be a joyful
                    journey, and our courses are designed to make it just that.
                    Whether you`re a beginner or an experienced learner, you`ll
                    find our content both accessible and enriching.
                  </p>
                </div>
                <VerticalSeparator />
                <div className="flex-1 self-center p-2">
                  <div className="m-auto flex justify-center">
                    <Image
                      className="h-40 w-40 self-center lg:p-10"
                      src={"/graduate.svg"}
                      alt="icon"
                      height={20}
                      width={20}
                    ></Image>
                  </div>
                  <h3 className="text-center text-lg font-semibold">
                    0.2 Graduate
                  </h3>
                  <p className="max-w-prose text-center font-normal">
                    We`re proud of our track record of helping learners like you
                    successfully graduate from our courses. Our dedicated
                    instructors and well-structured programs ensure that you
                    acquire the knowledge and skills you need to excel in your
                    chosen field.
                  </p>
                </div>
                <VerticalSeparator />
                <div className="h-full flex-1 self-center p-2">
                  <div className="m-auto flex justify-center">
                    <Image
                      className="h-40 w-40 self-center lg:p-10"
                      src={"/work.svg"}
                      alt="icon"
                      height={20}
                      width={20}
                    ></Image>
                  </div>
                  <h3 className="text-center text-lg font-semibold">
                    0.3 Work
                  </h3>
                  <p className="max-w-prose text-center font-normal">
                    We understand that your ultimate goal is to apply what
                    you`ve learned in a real-world context. That`s why our
                    courses emphasize practicality and hands-on experience.
                    You`ll be well-prepared to confidently step into the
                    workforce and make a meaningful impact from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/2 w-full py-10">
            <div className="w-full text-center">
              <h1 className="text-4xl font-bold">
                Top <span className="text-green-300">Categories</span>
              </h1>
              <h3 className="m-5">12,000+ unique online course list designs</h3>
            </div>
            <div className="flex h-3/4 max-w-full gap-4 overflow-x-auto px-5 lg:justify-center">
              {categoryCards.map((value, index) => {
                return (
                  <div className="flex-1" key={index}>
                    <CategoryCard {...value}></CategoryCard>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="container mx-auto w-full py-5">
          <div className="relative my-5 flex w-full flex-col items-center justify-center text-center lg:h-60">
            <h1 className="text-4xl font-bold">
              <span className="text-[#2AAA94]">Testimonials</span>
            </h1>
            <h3 className="m-5">What our student say about us</h3>
            <div className="absolute bottom-0 right-0 top-0 hidden w-full justify-between lg:flex lg:min-h-fit">
              <Image
                className="my-auto p-5"
                width={114}
                height={121}
                src={"/left-elipse.png"}
                alt="left-banner"
              ></Image>

              <Image
                className="p-5"
                width={324}
                height={260}
                src={"/banner_right.png"}
                alt="right-banner"
              ></Image>
            </div>
          </div>
          <CardCarousel>
            {reviews.map((review, index) => {
              return <ReviewCard {...review} key={index}></ReviewCard>;
            })}
          </CardCarousel>
        </section>
        <section className="container mx-auto py-5">
          <div className="container flex flex-col justify-center rounded-lg bg-[#4C2FBD] lg:flex-row">
            <div className="p-4 leading-relaxed lg:w-1/2 lg:p-10 lg:pl-20">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold leading-relaxed text-white">
                  Let&apos;s discuss{" "}
                </h1>
                <h1 className="text-5xl font-bold leading-relaxed text-white">
                  on something <span className="text-[#A91079]">cool </span>
                </h1>
                <h1 className="text-5xl font-bold leading-relaxed text-white">
                  together
                </h1>
              </div>
              <div className="text-center text-white lg:text-left">
                <div className="mx-auto flex  justify-center gap-5 rounded-lg py-3 hover:border-2 hover:border-[#A91079] hover:bg-[#570A5780] lg:mx-0 lg:justify-start">
                  <Mail className="ml-2"></Mail>NOMT.technologists@gmail.com
                </div>

                <div className="mx-auto flex  justify-center gap-5 rounded-lg py-3 hover:border-2 hover:border-[#A91079] hover:bg-[#570A5780] lg:mx-0 lg:justify-start">
                  <MapPin className="ml-2"></MapPin>Denver, Colorado
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-3 lg:justify-start">
                {socialMediaLinks.map((linkData) => (
                  <a
                    key={linkData.platform}
                    href={linkData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkData.platform === "Twitter" && (
                      <Twitter className="cursor-pointer" color="white" />
                    )}
                    {linkData.platform === "Facebook" && (
                      <Facebook className="cursor-pointer" color="white" />
                    )}
                    {linkData.platform === "Instagram" && (
                      <Instagram className="cursor-pointer" color="white" />
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className="p-4 lg:w-1/2 lg:p-10">
              <ContactForm></ContactForm>
            </div>
          </div>
        </section>
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
