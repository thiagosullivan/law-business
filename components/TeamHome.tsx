"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselNextTwo,
  CarouselPrevious,
  CarouselPreviousTwo,
} from "./ui/carousel";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

interface TeamData {
  name: string;
  role: string;
  imgUrl: string;
  link: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

const teamData: TeamData[] = [
  {
    name: "Victoria Knight",
    role: "Attorney",
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-6-1.jpg",
    link: "/",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Dominic Archer",
    role: "Attorney",
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-4-1.jpg",
    link: "/",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Eleanor Wolfe",
    role: "Attorney",
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-2-1.jpg",
    link: "/",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Maxwell Frost",
    role: "Attorney",
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-7-1.jpg",
    link: "/",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Isabella Cruz",
    role: "Attorney",
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-8-1.jpg",
    link: "/",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Oliver Quinn",
    role: "Trail Lawyer",
    imgUrl:
      "https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-5-1.jpg",
    link: "/",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const TeamHome = () => {
  return (
    <section className="border-b border-gray-300 mb-24">
      <div className="centered-element mb-24">
        {/* <h3 className="font-playfair text-4xl">Our Expert Team</h3> */}
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-playfair text-4xl">Our Expert Team</h3>
              <div className="flex items-center gap-x-2">
                <CarouselPreviousTwo className="w-[45px] h-[45px] flex items-center justify-center" />
                <CarouselNextTwo className="w-[45px] h-[45px] flex items-center justify-center" />
              </div>
            </div>
            <CarouselContent className="">
              {teamData.map((team, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="relative h-[450px] group">
                    <div className="w-[285px] h-[400px] relative">
                      <Image
                        src={team.imgUrl}
                        alt={team.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="bg-primary/90 absolute w-full h-full flex items-center justify-center gap-x-5 opacity-0 group-hover:opacity-100 transition duration-300 z-10 ">
                        <Link
                          href={team.socials.facebook}
                          className="flex items-center gap-x-4 text-white text-2xl hover:text-white/80"
                        >
                          <FaFacebookF />
                        </Link>
                        <Link
                          href={team.socials.instagram}
                          className="flex items-center gap-x-4 text-white text-2xl hover:text-white/80"
                        >
                          <FaInstagram className="text-white" />
                        </Link>
                        <Link
                          href={team.socials.linkedin}
                          className="flex items-center gap-x-4 text-white text-2xl hover:text-white/80"
                        >
                          <FaLinkedinIn />
                        </Link>
                      </div>
                    </div>
                    <div className="border border-gray-300 bg-white p-4 w-[235px] absolute bottom-[0%] left-[50%] -translate-x-[50%] text-center z-20">
                      <h5 className="font-playfair text-lg">{team.name}</h5>
                      <p className="text-gray-400">{team.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamHome;
