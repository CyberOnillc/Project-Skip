import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="font-mont absolute w-full bg-gradient-to-r from-[#331DA8]  to-[#865AEF] px-10 py-10 text-center text-white">
      <div className=" font-mont mt-10 grid w-full py-10 text-center lg:grid-cols-4 lg:grid-rows-1 lg:px-10">
        <div className="flex flex-col">
          <div className="my-2 flex gap-3"></div>
          <div className="my-2 text-left text-lg font-semibold"></div>
          <div className="my-2 text-left text-base font-normal">
            Project Skip Me is dedicated to empowering individuals in the tech
            industry. We believe in the power of knowledge, collaboration, and
            innovation to drive positive change. Our mission is to provide
            high-quality courses and resources that enable you to thrive in the
            ever-evolving tech landscape. Join us on this exciting journey of
            learning, networking, and making a meaningful impact in the world of
            technology.{" "}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="px-10 text-left font-bold">Quick Links</h2>
          <div className="mt-10 grid grid-cols-2 grid-rows-2">
            <Link className="my-2 px-10 text-left" href={"/terms_conditions"}>
              Terms and Conditions
            </Link>
            <Link
              href={"/privacy_policy"}
              className="my-2 px-10 text-left"
             
            >
              PrivacyPolicy
            </Link>
            <Link className="my-2 px-10 text-left" href={"/contactus"}>
              Contact Us
            </Link>
            <Link className="my-2 px-10 text-left" href={"/courses"}>
              Login
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <h2 className="px-10 text-left font-bold ">Contact</h2>
          <div className="my-2 mt-10 flex h-16 items-center justify-start px-10 align-middle">
            <div className="bg-darkblue flex h-10 w-10 items-center justify-center rounded-full">
              <Image
                className="z-10"
                src={"/mail.svg"}
                alt={""}
                width={20}
                height={20}
              ></Image>
            </div>
            <div className=" h-3/4 w-full rounded ">
              <span className="mx-4">NOMT@projectskip.me</span>
            </div>
          </div>
          <div className="my-2 flex h-16 items-center justify-start px-10  align-middle">
            <div className="bg-darkblue flex h-10 w-10 items-center justify-center rounded-full">
              <Image
                className="bg-darkblue z-10 rounded-full "
                src={"/phone.svg"}
                alt={""}
                width={20}
                height={20}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mx-10 my-5 flex flex-col-reverse justify-between gap-0 lg:flex-row">
        <p className="text-gray-100">Copyright 2023 | All Rights Reserved</p>
        <p className="text-gray-100">
          Created By{" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://www.cybershoptech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CyberOniLLC
          </a>
        </p>
        <div className="my-2 flex justify-center gap-4">
          <Youtube className="" color="white"></Youtube>
          <Linkedin className="" color="white"></Linkedin>
          <Twitter className="" color="white"></Twitter>
          <Facebook className="" color="white"></Facebook>
          <Instagram className="" color="white"></Instagram>
        </div>
      </div>
    </div>
  );
}
