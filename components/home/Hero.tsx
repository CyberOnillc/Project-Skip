import { Search, Star } from "lucide-react"
import Image from "next/image"
import React from 'react'

function Hero() {
    return (
        <div className="w-full h-full bg-hero bg-no-repeat bg-cover text-white">
            <div className="relative w-full h-5/6 bg-gradient-hero">
                <div className="absolute w-full h-full">
                    <Image className="absolute w-auto h-full pt-14 right-[5%] object-cover" src={'/hero.png'} alt="hero" height={890} width={718}></Image>
                    <Image className="absolute invisible md:visible w-1/3 h-full pt-14 -right-10 -bottom-10" src={'/hero-foreground.png'} alt="foreground" height={890} width={718}></Image>
                </div>


                <div className="flex flex-col lg:flex-row w-full lg:w-2/3 h-full lg:justify-center lg:items-center">
                    <div className="relative flex flex-col lg:w-1/3">
                        <div className="leading-5 font-semibold text-xl font-saira">Learn, Connect, Excel: Skip to Success</div>
                        <div className="font-rowdies leading-relaxed font-bold text-5xl w-1/2">
                            <div>Empowering</div>
                            <div className=""><span className="text-green-300">POCs</span> in Tech:</div>
                            <div> Learn, Network, </div>
                            <div>Thrive</div>
                        </div>
                        <div className="flex gap-5 pl-10">
                            <div>Join Waitlist</div>
                            <div>Donate To Skip</div>
                        </div>
                        <div className="relative w-full  lg:mt-10 h-10 lg:w-1/2 flex gap-5 items-center">
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

                    <div className="hidden md:flex lg:w-1/3 p-2 z-30">
                        <Image src={'/review-quote.png'} alt="quote" height={150} width={24}></Image>
                        <div className="m-2">
                            <h1>Janet Murray</h1>
                            <p className="text-wrap">Skip transformed my tech journey. The courses are comprehensive, and the networking opportunities are unmatched.</p>
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

            <div className="h-1/6 max-w-full bg-gradient-to-b from-[#084FC7] to-[#084FC767] py-4 px-2 lg:px-10 overflow-x-auto">
                <div className="container mx-auto flex justify-start lg:justify-around items-center h-full gap-3">
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