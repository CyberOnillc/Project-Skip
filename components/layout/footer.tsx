import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="absolute bg-gradient-to-r from-[#331DA8] to-[#865AEF] text-white  w-full text-center py-10 px-10 font-mont">
      <div className=" grid lg:grid-cols-4 lg:grid-rows-1 w-full text-center py-10 lg:px-10 font-mont mt-10">
        <div className="flex flex-col">
          <div className="flex gap-3 my-2">
          </div>
          <div className="font-semibold text-lg text-left my-2">
          </div>
          <div className="font-normal text-base text-left my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-left px-10">Quick Links</h2>
          <div className="grid grid-cols-2 grid-rows-2 mt-10">
            <Link className="my-2 text-left px-10" href={'/about'}>About us</Link>
            <Link className="my-2 text-left px-10" href={'/blog'}>Products</Link>
            <Link className="my-2 text-left px-10" href={'/contactus'}>Contact Us</Link>
            <Link className="my-2 text-left px-10" href={'/courses'}>Login</Link>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <h2 className="font-bold text-left px-10 ">Contact</h2>
          <div className="flex my-2 h-16 px-10 justify-start items-center align-middle mt-10">
            <div className="flex justify-center items-center bg-darkblue rounded-full h-10 w-10">
              <Image className="z-10" src={'/mail.svg'} alt={""} width={20} height={20}></Image>
            </div>
            <div className=" rounded h-3/4 w-full "><span className="mx-4">michelle.rivera@example.com</span></div>
          </div>
          <div className="flex my-2 h-16 px-10 justify-start items-center  align-middle">
            <div className="flex justify-center items-center bg-darkblue rounded-full h-10 w-10">
              <Image className="z-10 bg-darkblue rounded-full " src={'/phone.svg'} alt={""} width={20} height={20}></Image>
            </div>
            <div className=" rounded h-3/4 w-full"><span className="mx-4">412 444 1124</span></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col-reverse lg:flex-row gap-0 justify-between mx-10 my-5">
        <p className="text-gray-100">
        Copyright 2023 | All Rights Reserved
        </p>
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
        <div className="flex justify-center gap-4 my-2">
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
