"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextTwo,
  CarouselPreviousTwo,
} from "./ui/carousel";
import TeamCard from "./commons/TeamCard";
import { teamData } from "@/data/teamData";

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
                  <TeamCard team={team} index={index} />
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
