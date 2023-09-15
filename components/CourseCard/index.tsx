import { ShoppingCart } from "lucide-react";
import { type } from "os";
import React from 'react';

export type CourseCardProps = {
    course: {
        name: string,
        students: number,
        price: string,
        length: string,
        date: string,
        image: string,
    }
}
const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
            <div className="flex justify-between">
                <p className="text-gray-600">{course.students} students</p>
                    <p className="text-gray-600">{course.length}</p>
            </div>
                <h2 className="text-lg font-semibold py-5">{course.name}</h2>
                
                <div className="flex justify-between">
                    <p className="text-gray-600">{course.price}</p>
                    <button className="mt-4  text-gray-800 py-2 px-4 rounded-full">
                        <ShoppingCart></ShoppingCart>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;