import Image from "next/image";

export type CategoryCardProps = {
    title: string;
    courseCount: number;
    image: string
}

const CategoryCard = ({ title, courseCount, image }: CategoryCardProps) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-around items-center h-full w-40 lg:w-auto">
            {/* Replace 'faCategoryIcon' with the actual icon you want to use */}
            <div className="lg:p-5 h-1/2 w-full">
                <Image className="h-full w-full lg:p-4" src={image} alt="icon" height={20} width={20}></Image>
            </div>
            <h3 className="text-lg font-semibold text-center">{title}</h3>
            <p className="text-gray-500 text-center">{`${courseCount} Courses`}</p>
        </div>
    );
};

export default CategoryCard;