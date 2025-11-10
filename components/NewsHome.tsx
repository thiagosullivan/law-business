import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsArea {
  imgUrl: string;
  title: string;
  category: string;
  link: string;
  description: string;
}

const newsData: NewsArea[] = [
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2022/04/blog-9-1-768x494.jpg",
    title: "The Best Ways to Protect Your Family and Business in 2023",
    category: "Labor Law",
    description:
      "The business owners must have an agreement restricting stock holding to family members. The succession of ownership should be set up so that in",
    link: "/",
  },
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2022/04/blog-8-1-768x494.jpg",
    title: "Ten Myths About Lawyers and Criminal Defence Attorneys",
    category: "Labor Law",
    description:
      "Many retailers now offer customization options, such as monogramming or engraving, to add a personal touch to your purchases.",
    link: "/",
  },
  {
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2022/04/blog-7-1-768x494.jpg",
    title: "Top 10 Law Schools: Justice Education for a Better Future",
    category: "Labor Advise",
    description:
      "Law schools play a crucial role in nurturing the next generation of legal minds, imparting knowledge, and fostering critical thinking skills. While there are",
    link: "/",
  },
];

const NewsHome = () => {
  return (
    <section className="border-b border-gray-300">
      <div className="centered-element px-4 ">
        <h3 className="font-playfair text-4xl text-center text-secondary-foreground mb-12">
          News & Articles
        </h3>

        <div className="grid grid-cols-3 gap-6 mb-10">
          {newsData.map((news, index) => (
            <div key={index} className="max-w-[375px] w-full">
              <Image
                src={news.imgUrl}
                width={375}
                height={240}
                alt={news.title}
              />
              <span className="uppercase text-muted-foreground text-xs py-3 block border-b border-gray-300">
                {news.category}
              </span>
              <h4 className="font-playfair text-2xl py-4">{news.title}</h4>
              <p className="text-muted-foreground">{news.description}</p>
              <Link href="/" className="font-playfair text-xl py-4 block">
                Read More →
              </Link>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="bg-primary hover:bg-primary/90 transition-all w-[215px] h-[60px] flex justify-center items-center text-white font-playfair text-lg mx-auto mb-12"
        >
          View All Cases
        </Link>
      </div>
    </section>
  );
};

export default NewsHome;
