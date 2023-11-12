import { Search, Star } from "lucide-react"
import Image from "next/image"
import React from 'react'
import Link from "next/link"
function Hero() {
    return (
      <div className="h-full w-full bg-hero bg-cover bg-no-repeat text-white">
        <div className="relative h-5/6 w-full overflow-hidden bg-gradient-hero">
          <div className="absolute hidden h-full w-full lg:block">
            <Image
              className="absolute right-[2%] h-full w-auto object-cover pt-14"
              src={"/hero.png"}
              alt="hero"
              height={890}
              width={718}
            ></Image>
            <Image
              className="invisible absolute -bottom-10 -right-48 h-full w-1/3 object-contain pt-14 md:visible"
              src={"/hero-foreground.png"}
              alt="foreground"
              height={1080}
              width={718}
            ></Image>
          </div>
          <div className="absolute right-0 top-1/2 h-64 w-60 -translate-y-40 translate-x-10 -rotate-90 md:h-[350px] md:w-[300px] lg:bottom-0 lg:left-1/2 lg:right-1/2 lg:top-auto lg:-translate-x-1/4 lg:translate-y-20 lg:rotate-0">
            <Image
              src={"/HeroDecoration.svg"}
              alt="hero-deco"
              className="h-full w-full object-fill"
              height={200}
              width={180}
            ></Image>
          </div>

          <div className="flex h-full w-full flex-col items-center justify-center p-8 lg:w-2/3 lg:flex-row">
            <div className="relative flex w-full flex-col lg:w-1/3">
              <div className="font-saira text-xl font-thin leading-5">
                Learn, Connect, Excel: Skip to Success
              </div>
              <div className="text-center lg:text-left">
                <div className="mx-auto max-w-screen-md p-2 sm:p-4 md:p-6 lg:p-8">
                  <div className="text-4xl font-bold leading-relaxed sm:text-5xl">
                    Empowering <span className="text-green-300">POCs </span> in
                    Tech:
                  </div>
                  <div className="text-4xl font-bold leading-relaxed sm:text-5xl">
                    Learn, Network, Thrive
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-5 self-start p-2 md:w-1/2 lg:w-full">
                <Link
                  href="/waitlist"
                  className="flex-1 rounded-lg bg-gradient-button p-3 text-center lg:hover:underline"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/donate"
                  className="flex-1 rounded-lg bg-gradient-button p-3 text-center lg:hover:underline"
                >
                  Donate To Skip
                </Link>
              </div>

              <div className="relative hidden  h-10 w-full items-center gap-5 lg:mt-10 lg:flex lg:w-1/2">
                <input
                  type="text"
                  className="w-64 rounded-lg border-2 border-gray-300 px-4 py-2 text-black focus:border-blue-500 focus:outline-none"
                  placeholder="Search"
                />
                <button className="flex h-full items-center justify-center  gap-5 rounded-lg bg-gradient-button p-5 text-white">
                  <Search></Search>
                  <span>search</span>
                </button>
              </div>
            </div>

            <div className="z-30 flex h-1/3 pt-10 md:p-5 lg:w-1/3 lg:p-0  lg:pt-0">
              <div className="hidden flex-1 self-center md:flex lg:hidden">
                What do you want to learn today?
              </div>
              <Image
                className="w-20 object-contain"
                src={"/review-quote.png"}
                alt="quote"
                height={150}
                width={100}
              ></Image>
              <div className="m-2 flex-1 self-center">
                <h1>Janet Murray</h1>
                <p className="text-wrap text:sm lg:text-base">
                  Skip transformed my tech journey. The courses are
                  comprehensive, and the networking opportunities are unmatched.
                </p>
                <div className="mt-4 flex">
                  {new Array(parseInt("4")).fill(1).map((value, index) => {
                    return (
                      <Star
                        fill={"#81C7A2"}
                        color={"#81C7A2"}
                        key={index}
                      ></Star>
                    );
                  })}
                  {new Array(5 - parseInt("4")).fill(1).map((value, index) => {
                    return (
                      <Star
                        fill={"#CBC2FF"}
                        color={"#CBC2FF"}
                        key={index}
                      ></Star>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="z-30 h-1/6 max-w-full overflow-x-auto bg-gradient-to-b from-[#084FC7] to-[#084FC767] px-2 py-4 lg:px-10">
          <div className="container mx-auto flex h-full items-center justify-start gap-3 md:justify-around">
            <Image
              className="h-full"
              src="/amazon.svg"
              alt="Amazon"
              height={50}
              width={75}
            />
            <Image
              className="h-full"
              src="/amd.svg"
              alt="AMD"
              height={50}
              width={75}
            />
            <Image
              className="h-full"
              src="/cisco.svg"
              alt="Cisco"
              height={50}
              width={75}
            />
            <Image
              className="h-full"
              src="/dropcam.svg"
              alt="Dropcam"
              height={50}
              width={75}
            />
            <Image
              className="h-full"
              src="/logitech.svg"
              alt="Logitext"
              height={50}
              width={75}
            />
            <Image
              className="h-full"
              src="/spotify.svg"
              alt="Spotify"
              height={50}
              width={75}
            />
          </div>
        </div>
      </div>
    );
}

export default Hero