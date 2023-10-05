import { Star } from "lucide-react";
import Image from "next/image";
import React from 'react';

export type ReviewCardProps = {
    image: string;
    name: string;
    content: string;
    rating: '1' | '2' | '3' | '4' | '5';
}

const ReviewCard = ({ image, name, content, rating }: ReviewCardProps) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-10">
            <div className="flex items-center">
                <Image
                    src={image} // Replace with the actual profile image URL
                    alt={`${name}'s Profile`}
                    className="w-12 h-12 rounded-full object-cover"
                    height={300}
                    width={300}
                />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                </div>
            </div>
            <p className="mt-4 text-gray-700">{content}</p>
            <div className="mt-4 flex">
                {(new Array(parseInt(rating)).fill(1)).map((value, index) => {
                    return <Star fill={'#FAB437'} color={'#FAB437'} key={index}></Star>
                })}
                {(new Array(5-parseInt(rating)).fill(1)).map((value, index) => {
                    return <Star fill={'#CBC2FF'} color={'#CBC2FF'} key={index}></Star>
                })}
            </div>
        </div>
    );
};

export default ReviewCard;