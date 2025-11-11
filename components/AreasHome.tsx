import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PracticeArea {
  imgUrl: string;
  title: string;
  category: string;
  link: string;
}

const practiceAreasData: PracticeArea[] = [
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-7-new-1-768x506.jpg",
    title: "Discrimination Claims",
    category: "Employment Law",
    link: "/",
  },
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-4-1-768x506.jpg",
    title: "Criminal Defense",
    category: "Civil Rights",
    link: "/",
  },
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-2-1-768x506.jpg",
    title: "Immigration Services",
    category: "Civil Rights",
    link: "/",
  },
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-5-1-768x506.jpg",
    title: "Personal Injury Claims",
    category: "Civil Rights",
    link: "/",
  },
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-6-1-768x506.jpg",
    title: "Business Transactions",
    category: "Corporate Law",
    link: "/",
  },
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-3-1-768x506.jpg",
    title: "Family Law and Divorce",
    category: "Family Law",
    link: "/",
  },
];

const AreasHome = () => {
  return (
    <section className="border-b border-gray-300 mb-24">
      <div className="centered-element px-4 ">
        <h3 className="font-playfair text-4xl text-center text-secondary-foreground mb-12">
          Areas of Practice
        </h3>
        <div className="grid grid-cols-3 gap-7 mb-12">
          {practiceAreasData.map((area, index) => (
            <div key={index}>
              <Image
                src={area.imgUrl}
                alt={area.title}
                width={375}
                height={245}
                className="mb-4"
              />
              <Link
                href={area.title}
                className="flex items-center font-playfair text-2xl mb-1 hover:text-primary transition duration-200"
              >
                → {area.title}
              </Link>
              <Link
                href={area.category}
                className="text-muted-foreground ml-8 hover:text-primary transition duration-200"
              >
                {area.category}
              </Link>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="bg-primary transition-all w-[215px] h-[60px] flex justify-center items-center text-white font-playfair text-lg mx-auto mb-12 hover:bg-neutral-900 transition duration-200"
        >
          View All Cases
        </Link>
      </div>
    </section>
  );
};

export default AreasHome;
