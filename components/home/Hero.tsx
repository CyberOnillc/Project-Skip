import { Search } from "lucide-react"
import Image from "next/image"
import React from 'react'

function Hero() {
    return (
        <div className="w-full h-full bg-hero bg-no-repeat bg-cover text-white">
            <div className="relative w-full h-5/6 bg-gradient-hero">
                <Image className="absolute w-1/3 h-full pt-14 right-0" src={'/hero.png'} alt="hero" height={890} width={718}></Image>

                <div className="relative flex flex-col pl-[10%] pt-[10%]">

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
                    <div className="relative mt-10 h-10 w-1/2 flex gap-5 items-center">
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-lg w-64 py-2 px-4 focus:outline-none focus:border-blue-500"
                            placeholder="Search"
                        />
                        <button className="flex gap-5 h-full p-5  bg-gradient-button text-white items-center justify-center rounded-lg">
                            <Search></Search>
                            <span>search</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-1/6 bg-gradient-to-b from-[#084FC7] to-[#084FC767] py-4 px-10">
                <div className="container mx-auto flex justify-around items-center h-full">
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