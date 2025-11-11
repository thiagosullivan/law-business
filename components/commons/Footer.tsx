import { Mail, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-24 pb-4">
      <div className="centered-element">
        <div className="font-playfair flex items-center justify-between pb-24 border-b border-gray-700">
          <p className="text-gray-200 text-4xl max-w-[625px]">
            Committed to Helping Our Clients Succeed. Let’s Talk!
          </p>
          <Link
            href="/"
            className="bg-primary text-gray-200 w-[190px] h-[60px] flex items-center justify-center text-lg rounded-xs"
          >
            Contact Us
          </Link>
        </div>
        <div className="py-10 flex items-start justify-between border-b border-gray-700">
          <div className="max-w-[270px] text-gray-500">
            <Link href="/" className="pb-6 block">
              <Image
                src="/footer_logo_temp-2.png"
                alt="Logo"
                width={220}
                height={47}
              />
            </Link>
            <p className="mb-10">
              Why delay, describe the task now and you will be surprised how
              quickly we will respond!
            </p>
            <div className="flex gap-2">
              <Link
                href="https://facebook.com"
                className="p-2 border border-gray-600"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com"
                className="p-2 border border-gray-600"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 border border-gray-600"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://youtube.com"
                className="p-2 border border-gray-600"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://instagram.com"
                className="p-2 border border-gray-600"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="text-gray-200">
            <h4 className="font-playfair text-2xl mb-3">Our Services</h4>
            <div className="border-b-2 border-primary w-5 mb-6" />
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/">Discrimation Claims</Link>
              </li>
              <li>
                <Link href="/">Criminal Defense</Link>
              </li>
              <li>
                <Link href="/">Immigration Services</Link>
              </li>
              <li>
                <Link href="/">Personal Injury Claims</Link>
              </li>
              <li>
                <Link href="/">Business Transactions</Link>
              </li>
              <li>
                <Link href="/">Family Law and Divorce</Link>
              </li>
              <li>
                <Link href="/">Estate Planning</Link>
              </li>
            </ul>
          </div>
          <div className="text-gray-200">
            <h4 className="font-playfair text-2xl mb-3">Our Attorneys</h4>
            <div className="border-b-2 border-primary w-5 mb-6" />
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/">Maxwell Frost</Link>
              </li>
              <li>
                <Link href="/">Isabella Cruz</Link>
              </li>
              <li>
                <Link href="/">Oliver Quinn</Link>
              </li>
              <li>
                <Link href="/">Victoria Knight</Link>
              </li>
              <li>
                <Link href="/">Dominic Archer</Link>
              </li>
              <li>
                <Link href="/">Eleanor Wolfe</Link>
              </li>
              <li>
                <Link href="/">Alexandra Sterling</Link>
              </li>
              <li>
                <Link href="/">Nathanial Blackwood</Link>
              </li>
            </ul>
          </div>
          <div className="text-gray-200 max-w-[250px]">
            <h4 className="font-playfair text-2xl mb-3">Find Us</h4>
            <div className="border-b-2 border-primary w-5 mb-6" />
            <p className="mb-3 text-muted-foreground">
              Corporate Headquarters: 85 Broad Street, New York, NY 10004
            </p>
            <p className="mb-6 text-muted-foreground">
              Routing Number: 111923607
            </p>
            <div className="flex items-center gap-x-3 mb-3">
              <Smartphone />
              <p>1-800-643-4300</p>
            </div>
            <div className="flex items-center gap-x-3 mb-3">
              <Mail />
              <p>info@lawbusiness.com</p>
            </div>
          </div>
        </div>
        <div className="pt-8 text-sm text-center flex items-center justify-center gap-x-2">
          <a href="https://google.com.br" className="text-primary">
            ATS - Web Solutions
          </a>
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
