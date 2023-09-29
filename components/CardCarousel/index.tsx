'use client'
import useSwipe from "@/lib/hooks/use-swipe-gesture"
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { Children, useState } from 'react'
import { JsxElement } from "typescript"

function CardCarousel({ cards, children }: React.HTMLAttributes<HTMLDivElement> & { cards?: React.ReactNode[] }) {

    const list = cards ? cards : children ? Children.toArray(children) : []
    const totalPages = list.length % 3 === 0 ? list.length / 3 : Math.floor(list.length / 3) + 1;

    console.log(totalPages)
    const [currentPage, setCurrentPage] = useState(0);
    const swipehandlers = useSwipe({ onSwipedLeft: prevSlide, onSwipedRight: nextSlide })

    function prevSlide() {
        setCurrentPage(prev => prev == 0 ? totalPages - 1 : prev - 1)

    }
    function nextSlide() {
        setCurrentPage(prev => prev == totalPages - 1 ? 0 : prev + 1)
    }
    return (
        <>
            <div {...swipehandlers} className='flex flex-col justify-center items-center h-full w-full'>
                <div className="flex flex-col md:flex-row w-full h-full gap-5">
                    {list.slice(currentPage * 3, currentPage * 3 + 3).map((card, index) => {
                        return <div key={index} className="w-full h-full px-5">{card}</div>
                    })}
                </div>
                <div className="flex h-1/6 w-full justify-center items-center align-middle gap-5">
                    <button onClick={prevSlide} className="text-black py-2 px-4 border-none cursor-pointer">
                        <ChevronLeft className=''></ChevronLeft>
                    </button>
                    {(new Array(totalPages).fill(1)).map((value, index) => {
                        return <div key={index} className={`${index === currentPage ? 'w-20 bg-blue-800' : 'w-7 bg-gray-400'}  h-2 rounded-full`}></div>
                    })}
                    <button onClick={nextSlide} className="text-black py-2 px-4 border-none cursor-pointer">
                        <ChevronRight className=''></ChevronRight>
                    </button>
                </div>

            </div>
        </>
    )
}

export default CardCarousel