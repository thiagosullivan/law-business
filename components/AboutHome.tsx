import { AboutCardsTypes } from "@/types/AboutHomeTypes";
import { CardAbout } from "./CardAboutHome";
import Image from "next/image";
import Link from "next/link";

const aboutData: AboutCardsTypes[] = [
  {
    icon: "/knowledge-icon.png",
    title: "Knowledge",
    text: "The company unites lawyers and lawyers, auditors and financiers, notaries into a strong and well-coordinated team.",
    url: "/",
  },
  {
    icon: "/diversity-icon.png",
    title: "Diversity",
    text: "Our team constantly keeps abreast of legislative changes and trends in the legal field. We analyze each case in detail.",
    url: "/",
  },
  {
    icon: "/representation-icon.png",
    title: "Representation",
    text: "Now the company employs a team of 20 specialists who help in all areas of law, both in private life and in business",
    url: "/",
  },
  {
    icon: "/dedication-icon.png",
    title: "Dedication",
    text: "What makes the reputation of any law firm impeccable? This is the level of qualification and academic performance of its workers.",
    url: "/",
  },
];

const AboutHome = () => {
  return (
    <section className="border-b border-gray-300 mb-24 px-4">
      <div className="centered-element">
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 mb-24">
            {aboutData.map((item, index) => (
              <CardAbout key={index} item={item} />
            ))}
          </div>
          <div className="flex items-stretch">
            <div className="relative h-[560px] max-w-[545px] w-full">
              <Image
                src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/home-4-3.jpg"
                alt="About image"
                className="object-cover w-full h-[560px]"
                fill
              />
            </div>
            <div className="font-playfair border border-gray-300 bg-gray-100 w-full flex items-center justify-center">
              <div className="max-w-[410px] p-4">
                <h4 className="text-lg text-gray-500">Our Mission</h4>
                <p className="text-gray-800 text-4xl mb-10">
                  All <span className="text-gray-500">people are equal</span>{" "}
                  before the law. A{" "}
                  <span className="text-primary">good attorney</span> is what
                  makes a difference.
                </p>
                <Link
                  href="/"
                  className="text-white bg-primary transition-all text-lg w-[200px] h-[55px] flex items-center justify-center hover:bg-neutral-900 transition duration-200"
                >
                  Who We Are
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
