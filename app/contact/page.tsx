import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <main>
      <section className="bg-[url('https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/about-us-1-1.jpg')] bg-cover bg-center text-white font-playfair flex justify-center items-center flex-col gap-y-4 py-36 px-2">
        <h1 className="text-6xl">Contacts</h1>
        <p className="text-center text-2xl max-w-[580px]">
          All people are equal before the law. A good attorney is what makes a
          difference.
        </p>
      </section>
      <section className="py-24 mb-24 border-b border-gray-300">
        <div className="centered-element flex justify-between gap-4">
          <div>
            <h2 className="font-playfair text-4xl mb-12">
              Contact Information
            </h2>

            <div className="mb-6">
              <h4 className="font-playfair text-lg mb-3">
                Customer Service Enquires:
              </h4>
              <p className="mb-3 text-muted-foreground">
                Email:{" "}
                <Link href="/" className="text-neutral-800 hover:text-primary">
                  hello@example.com
                </Link>
              </p>
              <p className="mb-3 text-muted-foreground">
                Phone:{" "}
                <Link href="/" className="text-neutral-800 hover:text-primary">
                  +1 233 456 2123
                </Link>
              </p>
            </div>
            <div className="mb-6">
              <h4 className="font-playfair text-lg mb-3">Opening Hours:</h4>
              <p className="mb-3 text-muted-foreground">
                Monday - Thursday: <span className="">9:00 - 15:00</span>
              </p>
              <p className="mb-3 text-muted-foreground">
                Friday: <span className="">9:00 - 14:00</span>
              </p>
              <p className="mb-3 text-muted-foreground">
                Saturday - Sunday: <span className="text-primary">Closed</span>
              </p>
            </div>
          </div>
          <div className="w-[720px] h-[475px] relative">
            <Image
              src="https://law-business.cmsmasters.studio/wp-content/uploads/2025/02/google-map-placeholder-bw.webp"
              alt="Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="pb-24 mb-24 border-b border-gray-300">
        <h2 className="font-playfair text-4xl mb-12 text-center w-full">
          All Locations
        </h2>
        <div className="centered-element flex justify-between gap-6">
          <div className="">
            <div className="w-[610px] h-[310px] relative mb-8">
              <Image
                src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/contacts-2-1-1.jpg"
                alt="Office"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-medium font-playfair text-3xl mb-4">
              Apple Valley
            </h3>
            <div className="flex items-start justify-start gap-12 mb-6">
              <div className="">
                <p className="font-playfair text-lg mb-2">Address:</p>
                <p className="text-muted-foreground">14960 Florence Trail</p>
                <p className="text-muted-foreground">Apple Valley, MN 55124</p>
              </div>
              <div className="">
                <p className="font-playfair text-lg mb-2">Service Times:</p>
                <p className="text-muted-foreground">Saturdays 4 pm</p>
                <p className="text-muted-foreground">Sundays 9 & 11 am</p>
              </div>
            </div>
            <Link href="/" className="font-playfair text-lg font-medium">
              Get Directions ⟶
            </Link>
          </div>
          <div className="">
            <div className="w-[610px] h-[310px] relative mb-8">
              <Image
                src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/contacts-3-1-1.jpg"
                alt="Office"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-medium font-playfair text-3xl mb-4">
              White Bear Lake
            </h3>
            <div className="flex items-start justify-start gap-12 mb-6">
              <div className="">
                <p className="font-playfair text-lg mb-2">Address:</p>
                <p className="text-muted-foreground">2401 East Buffalo St.</p>
                <p className="text-muted-foreground">
                  White Bear Lake, MN 55110
                </p>
              </div>
              <div className="">
                <p className="font-playfair text-lg mb-2">Service Times:</p>
                <p className="text-muted-foreground">Saturdays 4 pm</p>
                <p className="text-muted-foreground">Sundays 9 & 11 am</p>
              </div>
            </div>
            <Link href="/" className="font-playfair text-lg font-medium">
              Get Directions ⟶
            </Link>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="centered-element flex justify-between items-center gap-6">
          <div className="w-[590px] h-[760px] relative">
            <Image
              src="https://law-business.cmsmasters.studio/wp-content/uploads/2023/08/contacts-4-1-1.jpg"
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-playfair text-4xl mb-4">Ask a Question</h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions, you can contact us. Please, fill out
              the form below.
            </p>
            <form>
              <div className="flex gap-4 mb-4">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    type="text"
                    className="border border-neutral-300 bg-gray-200 h-[58px] px-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    className="border border-neutral-300 bg-gray-200 h-[58px] px-4 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full mb-4">
                <label htmlFor="subject">Subject</label>
                <select
                  className="border border-neutral-300 bg-gray-200 h-[58px] px-4 w-full outline-none"
                  name="subject"
                  id="subject"
                >
                  <option
                    defaultValue=""
                    selected
                    disabled
                    className="text-muted-foreground"
                  >
                    Choose Your Option
                  </option>
                  <option defaultValue="General Enquiry">
                    General Enquiry
                  </option>
                  <option defaultValue="Orders, Shipping & Returns">
                    Orders, Shipping & Returns
                  </option>
                  <option defaultValue="Careers">Careers</option>
                  <option defaultValue="Complaints">Complaints</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full mb-4">
                <label htmlFor="your-message">Your Message</label>
                <textarea
                  id="your-message"
                  className="border border-neutral-300 bg-gray-200 h-[58px] p-4 outline-none min-h-[150px] resize-none"
                />
              </div>
              <Button className="bg-primary text-white rounded-none text-lg font-playfair w-[215px] p-8">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
