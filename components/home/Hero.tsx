import { Search, Star } from "lucide-react"
import Image from "next/image"
import React from 'react'
import Link from "next/link"
function Hero() {
    return (
        <div className="w-full h-full bg-hero bg-no-repeat bg-cover text-white">
            <div className="relative w-full h-5/6 bg-gradient-hero overflow-hidden">
                <div className="hidden lg:block absolute w-full h-full">
                    <Image className="absolute w-auto h-full pt-14 right-[2%] object-cover" src={'/hero.png'} alt="hero" height={890} width={718}></Image>
                    <Image className="object-contain absolute invisible md:visible w-1/3 h-full pt-14 -right-48 -bottom-10" src={'/hero-foreground.png'} alt="foreground" height={1080} width={718}></Image>
                </div>
                <div className="absolute right-0 top-1/2 translate-x-10 -translate-y-40 -rotate-90 lg:-translate-x-1/4 lg:translate-y-20 lg:bottom-0 lg:left-1/2 lg:rotate-0 lg:right-1/2 lg:top-auto md:w-[300px] md:h-[350px] w-60 h-64">
                    <Image src={'/HeroDecoration.svg'} alt="hero-deco" className="object-fill w-full h-full" height={200} width={180}></Image>
                </div>


                <div className="flex flex-col lg:flex-row w-full lg:w-2/3 h-full justify-center items-center p-8">
                    <div className="relative flex flex-col w-full lg:w-1/3">
                        <div className="leading-5 font-thin text-xl font-saira">Learn, Connect, Excel: Skip to Success</div>
                        <div className="font-rowdies leading-relaxed font-bold text-5xl lg:w-1/2 h-fit whitespace-pre-wrap">
                            Empowering <span className="text-green-300">POCs </span>in Tech: Learn, Network, Thrive
                        </div>
                        <div className="flex gap-5 p-2 w-2/3  md:w-1/2 lg:w-full self-start">
                            <Link href='/waitlist' className="flex-1 p-3 rounded-lg bg-gradient-button lg:hover:underline  text-center">Join Waitlist</Link>
                            <Link href='/donate' className="flex-1 p-3 rounded-lg bg-gradient-button lg:hover:underline text-center">Donate To Skip</Link>
                        </div>
                        <div className="relative w-full  lg:mt-10 h-10 lg:w-1/2 hidden lg:flex gap-5 items-center">
                            <input
                                type="text"
                                className="border-2 text-black border-gray-300 rounded-lg w-64 py-2 px-4 focus:outline-none focus:border-blue-500"
                                placeholder="Search"
                            />
                            <button className="flex gap-5 h-full p-5  bg-gradient-button text-white items-center justify-center rounded-lg">
                                <Search></Search>
                                <span>search</span>
                            </button>
                        </div>

                    </div>

                    <div className="flex h-1/3 lg:w-1/3 md:p-5 lg:p-0 z-30 pt-10  lg:pt-0">
                        <div className="self-center hidden md:flex lg:hidden flex-1">What do you want to learn today?</div>
                        <Image className="w-20 object-contain" src={'/review-quote.png'} alt="quote" height={150} width={100}></Image>
                        <div className="m-2 flex-1 self-center">
                            <h1>Janet Murray</h1>
                            <p className="text-wrap text:sm lg:text-base">Skip transformed my tech journey. The courses are comprehensive, and the networking opportunities are unmatched.</p>
                            <div className="mt-4 flex">
                                {(new Array(parseInt('4')).fill(1)).map((value, index) => {
                                    return <Star fill={'#81C7A2'} color={'#81C7A2'} key={index}></Star>
                                })}
                                {(new Array(5 - parseInt('4')).fill(1)).map((value, index) => {
                                    return <Star fill={'#CBC2FF'} color={'#CBC2FF'} key={index}></Star>
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="h-1/6 z-30 max-w-full bg-gradient-to-b from-[#084FC7] to-[#084FC767] py-4 px-2 lg:px-10 overflow-x-auto">
                <div className="container mx-auto flex justify-start md:justify-around items-center h-full gap-3">
                    <Image className="h-full" src="/amazon.svg" alt="Amazon" height={50} width={75} />
                    <Image className="h-full" src="/amd.svg" alt="AMD" height={50} width={75} />
                    <Image className="h-full" src="/cisco.svg" alt="Cisco" height={50} width={75} />
                    <Image className="h-full" src="/dropcam.svg" alt="Dropcam" height={50} width={75} />
                    <Image className="h-full" src="/logitech.svg" alt="Logitext" height={50} width={75} />
                    <Image className="h-full" src="/spotify.svg" alt="Spotify" height={50} width={75} />
                </div>
            </div>
        </div>
    )
}

export default Hero