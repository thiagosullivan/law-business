"use client";
import TeamCard from "@/components/commons/TeamCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { depoCarouselData } from "@/data/depoimentsCarouseData";
import { teamData } from "@/data/teamData";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const AttorneysPage = () => {
  return (
    <main>
      <section className="bg-[url('https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/about-us-1-1.jpg')] bg-cover bg-center text-white font-playfair flex justify-center items-center flex-col gap-y-4 py-36 px-2">
        <h1 className="text-6xl">Our Attorneys</h1>
        <p className="text-center text-2xl max-w-[580px]">
          All people are equal before the law. A good attorney is what makes a
          difference.
        </p>
      </section>
      <section className="border-b border-gray-300 mb-24">
        <div className="centered-element py-24">
          <div className="text-center">
            <h3 className="font-playfair text-4xl mb-4">Our Leadership</h3>
            <p className="text-neutral-600 mb-14">
              We have more than 30 years of experience as trial lawyers.
            </p>
          </div>
          <div className="flex items-stretch justify-center mb-6">
            <div className="w-[500px] h-[610px] relative">
              <Image
                src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-3-1.jpg"
                alt="Attorney"
                fill
                sizes="500px"
                className="object-cover"
              />
            </div>
            <div className="max-w-[520px] border border-gray-300 bg-gray-100 p-10">
              <h4 className="font-playfair text-4xl mb-2">
                Nathanial Blackwood
              </h4>
              <p className="text-neutral-400 text-lg mb-6">Attorney</p>

              <p className="text-neutral-500 mb-8">
                With a razor-sharp wit and an unyielding dedication to justice,
                Alexandra Sterling is known for her no-nonsense approach to
                litigation. Her courtroom presence is commanding, and her
                cross-examinations are legendary for dismantling opposing
                arguments with surgical precision.
              </p>
              <Link href="/" className="font-playfair text-lg font-medium">
                Learn More ⟶
              </Link>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="w-[500px] h-[610px] relative">
              <Image
                src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-1-1.jpg"
                alt="Attorney"
                fill
                sizes="500px"
                className="object-cover"
              />
            </div>
            <div className="max-w-[520px] border border-gray-300 bg-gray-100 p-10">
              <h4 className="font-playfair text-4xl mb-2">
                Alexandra Sterling
              </h4>
              <p className="text-neutral-400 text-lg mb-6">
                Co-Founder Trial Lawyer
              </p>

              <p className="text-neutral-500 mb-8">
                Short Biography Alexandra Sterling was born on a sunny morning
                on May 15th in the charming town of Charleston, South Carolina.
                Growing up in a family deeply rooted in the legal profession,
                Alexandra was exposed to discussions about justice, ethics, and
                the law from an early age. Her parents, both respected
                attorneys, instilled in her …
              </p>
              <Link href="/" className="font-playfair text-lg font-medium">
                Learn More ⟶
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-gray-300 mb-24">
        <div className="centered-element py-24">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2">
              <p className="font-playfair text-neutral-400 text-lg mb-4">
                Who We Are?
              </p>
              <h3 className="font-playfair text-4xl mb-6">Our Leadership</h3>
              <Link href="/" className="font-playfair text-lg font-medium">
                Share Your Story ⟶
              </Link>
            </div>
            {teamData.map((team, index) => (
              <TeamCard team={team} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center mb-24">
        <Carousel
          className="w-full max-w-[900px]"
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="">
            {depoCarouselData.map((depo, index) => (
              <CarouselItem key={index}>
                <div className="text-center">
                  <div className="w-[60px] h-[60px] mx-auto">
                    <RiDoubleQuotesL className="text-6xl text-primary" />
                  </div>
                  <p className="font-playfair text-3xl mb-8">{depo.comment}</p>
                  <div className="flex items-center gap-x-4 justify-center">
                    <Image
                      src={depo.avatarUrl}
                      alt={depo.avatarUrl}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-playfair text-lg font-medium">
                        {depo.name}
                      </p>
                      <p className="text-neutral-400 text-sm">{depo.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default AttorneysPage;
