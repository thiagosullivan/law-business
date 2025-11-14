import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const TeamCard = ({ team, index }) => {
  return (
    <div className="relative h-[450px] group">
      <div className="w-[285px] h-[400px] relative">
        <Image
          src={team.imgUrl}
          alt={team.name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 285px"
          priority={index < 4}
        />
        <div className="bg-primary/90 absolute w-full h-full flex items-center justify-center gap-x-5 opacity-0 group-hover:opacity-100 transition duration-300 z-10 ">
          <a
            href={team.socials.facebook}
            className="flex items-center gap-x-4 text-white text-2xl hover:text-white/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href={team.socials.instagram}
            className="flex items-center gap-x-4 text-white! text-2xl hover:text-white/80"
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning={true}
          >
            <FaInstagram />
          </a>
          <a
            href={team.socials.linkedin}
            className="flex items-center gap-x-4 text-white text-2xl hover:text-white/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="border border-gray-300 bg-white p-4 w-[235px] absolute bottom-[0%] left-[50%] -translate-x-[50%] text-center z-20">
        <h5 className="font-playfair text-lg">{team.name}</h5>
        <p className="text-gray-400">{team.role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
