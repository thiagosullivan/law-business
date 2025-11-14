"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { depoCarouselData } from "@/data/depoimentsCarouseData";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiDoubleQuotesL,
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

const AttorneysIndivisual = () => {
  return (
    <main className="centered-element my-12">
      <section className="flex items-stretch w-full mb-12">
        <div className="w-[500px] h-[610px] relative">
          <Image
            src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/profile-6-1.jpg"
            alt="Victoria"
            fill
            className="object-cover"
            sizes="500px"
          />
        </div>
        <div className="bg-gray-100 border border-neutral-300 p-12 max-w-[720px] w-full flex items-start justify-center flex-col">
          <h1 className="font-playfair text-6xl mb-6">Victoria Knight</h1>
          <p className="border-b border-neutral-300 pb-3 mb-3 w-full text-gray-400">
            Phone: +(012) 2895-154
          </p>
          <p className="border-b border-neutral-300 pb-3 mb-3 w-full text-gray-400">
            Office: +(012) 2947-415
          </p>
          <p className="border-b border-neutral-300 pb-3 mb-3 w-full text-gray-400">
            Email: example@ex.com
          </p>
          <div className="flex items-center justify-between gap-x-2">
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="w-10 h-10 border border-neutral-300 flex justify-center items-center text-lg"
            >
              <RiFacebookFill />
            </a>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="w-10 h-10 border border-neutral-300 flex justify-center items-center text-lg"
            >
              <RiTwitterXFill />
            </a>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              className="w-10 h-10 border border-neutral-300 flex justify-center items-center text-lg"
            >
              <RiLinkedinFill />
            </a>
          </div>
        </div>
      </section>
      <section className="flex items-start justify-between">
        <div className="max-w-[365px]">
          <div className="py-8 border border-neutral-300">
            <h3 className="font-playfair text-2xl text-center mb-6">
              Testimonials
            </h3>
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
                    <div className="text-center flex flex-col items-center justify-center">
                      <div className="w-9 h-9 mb-6">
                        <RiDoubleQuotesL className="text-4xl text-primary" />
                      </div>
                      <p className="text-neutral-400 text-lg mb-8 max-w-[280px]">
                        {depo.comment}
                      </p>
                      <div className="flex items-center gap-x-4 justify-center">
                        <Image
                          src={depo.avatarUrl}
                          alt={depo.avatarUrl}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-left font-playfair text-lg font-medium">
                            {depo.name}
                          </p>
                          <p className="text-neutral-400 text-sm">
                            {depo.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2.5" />
              <CarouselNext className="right-2.5" />
            </Carousel>
          </div>
          <div className="py-8 border border-neutral-300 bg-gray-100">
            <h3 className="font-playfair text-2xl text-center mb-6">
              Book an Appointment:
            </h3>
            <form className="px-8">
              <input
                type="text"
                className="bg-white border border-neutral-300 h-[50px] w-full pl-6 text-sm mb-2"
                placeholder="Your Full Name"
              />
              <input
                type="text"
                className="bg-white border border-neutral-300 h-[50px] w-full pl-6 text-sm mb-2"
                placeholder="Your Phone"
              />
              <input
                type="text"
                className="bg-white border border-neutral-300 h-[50px] w-full pl-6 text-sm mb-2"
                placeholder="Your Select Date"
              />
              <div className="flex items-center justify-between gap-2 mb-2">
                <select
                  name="hour"
                  id="hour"
                  className="bg-white border border-neutral-300 h-[50px] w-full pl-6 text-sm"
                >
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                </select>
                <select
                  name="minute"
                  id="minute"
                  className="bg-white border border-neutral-300 h-[50px] w-full pl-6 text-sm"
                >
                  <option value="00">00</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
              </div>
              <Button className="bg-primary hover:bg-neutral-900 font-playfair rounded-none w-full text-lg py-7 cursor-pointer">
                Book Online
              </Button>
            </form>
          </div>
        </div>
        <div className="pl-12">
          <div>
            <h3 className="font-playfair text-3xl mb-4">Short Biography</h3>
            <p className="text-neutral-400 pb-12 mb-12 border-b border-neutral-300">
              Victoria Knight was born on a crisp winter morning, December 5th,
              in the picturesque town of Aspen, Colorado. Raised in a family
              that valued integrity and social responsibility, Victoria
              developed a strong sense of empathy and a commitment to making a
              positive impact on society. Her parents, both community activists,
              shaped her values from an early age. After completing her high
              school education, Victoria pursued her undergraduate studies at
              Stanford University. She majored in Political Science and minored
              in Women’s Studies, combining her interests in law and social
              justice. Her time at Stanford was marked by her involvement in
              student-led initiatives promoting gender equality and advocating
              for survivors of domestic violence.
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-3xl mb-4">Experience</h3>
            <h4 className="font-playfair text-2xl mb-4">
              Defending Catastrophic Cases
            </h4>
            <p className="text-neutral-400 pb-12 mb-12 border-b border-neutral-300">
              Before devoting his career to representing survivors and the
              families of those who were wrongfully killed, Drew worked for many
              years defending cases for large insurance companies and
              corporations, in both the United States and overseas. In that
              capacity, Drew litigated cases for Fortune 500 companies and eight
              of the top 15 largest insurance companies in the U.S.
            </p>
          </div>
          <div>
            <h4 className="font-playfair text-2xl mb-4">
              Government and Nonprofit Work
            </h4>
            <p className="text-neutral-400 pb-12 mb-12 border-b border-neutral-300">
              Drew has served as private civil counsel to the Georgia Secretary
              of State, the Georgia Securities Commissioner, the Georgia Real
              Estate Commission, and the Georgia Real Estate Appraisers Board.
              He has served as civil counsel to Special Assistant Attorneys
              General, several large metro-Atlanta cities/counties, receivers in
              civil RICO actions, and several District Attorneys throughout
              Georgia. While in law school, Drew served as a legal intern with
              the Office of the General Counsel for the Department of Homeland
              Security, where he did a variety of work, including putting
              together cases that would strip the U.S. citizenship away from
              foreign citizens who were discovered to be horrific international
              human rights abusers. Drew also helped achieve a victory at the
              Supreme Court of the United States and various federal Courts of
              Appeals while litigating first amendment and other constitutional
              issues with the American Center for Law and Justice.
            </p>
          </div>
          <div>
            <h4 className="font-playfair text-2xl mb-4">Education</h4>
            <p className="text-neutral-400 pb-12 mb-12 border-b border-neutral-300">
              Drew graduated from Auburn University where he obtained a
              Bachelor’s of Science in Finance with a concentration in
              Economics. He received his law degree from Regent University
              School of Law where he served on the Trial Advocacy Board and was
              an officer in the Federalist Society.
            </p>
          </div>
          <div>
            <h4 className="font-playfair text-2xl mb-4">Accolades</h4>
            <p className="text-neutral-400 pb-12 mb-12 border-b border-neutral-300">
              Drew has been named both a Rising Star (an honor bestowed on only
              2.5% of lawyers), and a Super Lawyer (only 5% chosen) every year
              since 2016. He is also listed as one of the Best Lawyers in
              America. He was chosen as part of the second LEAD class of the
              Georgia Trial Lawyers Association, where he now serves on the
              Executive Committee, is the Treasurer for the Civil Justice PAC
              Board, and is an editor and contributor to Verdict Magazine. Drew
              also serves as a co-chair of the Legislative Committee for the
              Georgia Trial Lawyer’s Association, where he is active in Georgia
              politics on issues affecting civil justice and the 7th Amendment
              right to a jury trial in civil cases. Because of Drew’s work and
              experience, House and Senate Subcommittees in Georgia have asked
              him to testify on issues involving complex personal injury laws,
              the laws regarding defective products, and civil justice issues
              generally.
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-4xl mb-4">Areas of Expertise</h3>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="w-[350px] h-[230px] relative mb-4">
                  <Image
                    src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-7-new-1-768x506.jpg"
                    alt="service"
                    fill
                    sizes="350px"
                    className="object-cover"
                  />
                </div>
                <Link href="/" className="font-playfair text-2xl">
                  Discrimination Claims
                </Link>
                <p className="text-neutral-400">Employment Law</p>
              </div>
              <div>
                <div className="w-[350px] h-[230px] relative mb-4">
                  <Image
                    src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-4-1-768x506.jpg"
                    alt="service"
                    fill
                    sizes="350px"
                    className="object-cover"
                  />
                </div>
                <Link href="/" className="font-playfair text-2xl">
                  Criminal Defense
                </Link>
                <p className="text-neutral-400">Civil Rights</p>
              </div>
              <div>
                <div className="w-[350px] h-[230px] relative mb-4">
                  <Image
                    src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-2-1-768x506.jpg"
                    alt="service"
                    fill
                    sizes="350px"
                    className="object-cover"
                  />
                </div>
                <Link href="/" className="font-playfair text-2xl">
                  Immigration Services
                </Link>
                <p className="text-neutral-400">Civil Rights</p>
              </div>
              <div>
                <div className="w-[350px] h-[230px] relative mb-4">
                  <Image
                    src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/project-5-1-768x506.jpg"
                    alt="service"
                    fill
                    sizes="350px"
                    className="object-cover"
                  />
                </div>
                <Link href="/" className="font-playfair text-2xl">
                  Personal Injury Claims
                </Link>
                <p className="text-neutral-400">Civil Rights</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AttorneysIndivisual;
