"use client"
import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";


type ComingSoonPageProps = {
  image: string;
  title: string;
  subtitle: string;
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const InnerContainer = styled.div`
 
  padding-bottom: 14rem;
  
  @media (min-width: 640px) {
  
  }
  @media (min-width: 1024px) {
    overflow: hidden;
    padding-bottom: 24rem;
  
  }
`;

const Grid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;
const ImageDiv = styled(motion.div)`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const r = 10; // This determines the radius of the circular movement.
const duration = 5; // This determines the time taken for one circular motion.

const floatVariants = {
  animate: {
    y: [
      0,
      r * Math.sin(0),
      r * Math.sin(Math.PI / 2),
      r * Math.sin(Math.PI),
      r * Math.sin((3 * Math.PI) / 2),
      0,
    ],
    x: [
      0,
      r * Math.cos(0),
      r * Math.cos(Math.PI / 2),
      r * Math.cos(Math.PI),
      r * Math.cos((3 * Math.PI) / 2),
      0,
    ],
    transition: {
      y: { duration: duration, repeat: Infinity, ease: "linear" },
      x: { duration: duration, repeat: Infinity, ease: "linear" },
    },
  },
};

const Footer = styled.footer`
  background-color: white;
`;


const ComingSoonPage: FC<ComingSoonPageProps> = ({
  image,
  title,
  subtitle,
 
}) => {
  return (
    <Container className="mt-20">
      <InnerContainer>
        <div className="mx-auto  lg:px-8">
          <Grid>
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:order-1 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 text-center text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  {title}
                </h1>
                <p className="mt-3 text-center text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {subtitle}
                </p>
                <div className="mt-10 sm:mt-12">
                  <form
                    className="sm:mx-auto sm:max-w-xl lg:mx-0"
                    action="https://api.web3forms.com/submit"
                  >
                    {/* Name Field */}
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-2 w-full rounded-md border p-3"
                        placeholder="Enter your name"
                      />
                    </div>
                    {/* Email Field */}
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-md border p-3"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-3 sm:ml-3 sm:mt-0">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-cyan-500 px-4 py-3 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                        onClick={() => console.log("run")}
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <ImageDiv className="flex h-full w-full items-center justify-center lg:order-2 lg:order-2 ">
              <motion.img
                className="mt-12 flex items-center justify-center rounded-md "
                width={500}
                height={1000}
                src={image}
                initial="initial"
                animate="animate"
                variants={floatVariants}
                alt="Landing"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
            </ImageDiv>
          </Grid>
        </div>
      </InnerContainer>
      <Footer>{/* ... rest of the footer code ... */}</Footer>
    </Container>
  );
};

export default ComingSoonPage;
