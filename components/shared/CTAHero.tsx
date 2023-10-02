"use client"
import React, { FC, FormEvent, ReactNode, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

type ComingSoonPageProps = {
  image: string;
  title: string;
  subtitle: string;
  form: ReactNode
};

const r = 10;
const duration = 5;

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

const ComingSoonPage: FC<ComingSoonPageProps> = ({
  image,
  title,
  subtitle,
  form

}) => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    city: ''
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => (

      { ...prev, [name]: value }
    ))
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    console.log(event.target);
    let res = await fetch('/api/marketing/add', { method: 'POST', body: JSON.stringify(userData) });

    if (res.status == 200) alert('Added to waitlist')
    else alert('Error')
  }
  return (
    <Container className="mt-20 ">
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
                  {form}
                </div>
              </div>
            </div>
            <ImageDiv className="flex h-full w-full items-center justify-center lg:order-2 ">
              <motion.img
                className="mt-12 flex items-center justify-center rounded-md"
                width={500}
                height={1000}
                src={image}
                initial="initial"
                animate="animate"
                variants={floatVariants}
                alt="Landing"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 -z-10"></div>
            </ImageDiv>
          </Grid>
        </div>
      </InnerContainer>
    </Container>
  );
};

export default ComingSoonPage;