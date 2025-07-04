import React from "react";
import Image from "next/image";
import Scroller from "./Scroller";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex  flex-col gap-5 p-3 xl:pl-24  mt-15 md:mt-35">
      <Scroller />

      <div className="flex flex-col py-5 gap-10 md:flex-row px-0 md:py-20 border-b-2 border-dashed border-[#171717] justify-between items-center">
        <p className="text-white text-4xl font-bold ">SHEBA MARKET</p>
        <p className="flex gap-5 md:gap-2 items-center">
          <Link
            href="/"
            className="inline-block p-2 md:p-3 bg-[#C7BAAA] rounded-lg"
          >
            <Image
              src="/insta.svg"
              width={20}
              height={20}
              alt="Instagram icon"
            />
          </Link>
          <Link
            href="/"
            className="inline-block p-2 md:p-3 bg-[#C7BAAA] rounded-lg"
          >
            <Image
              src="/world.svg"
              width={20}
              height={20}
              alt="Instagram icon"
            />
          </Link>
          <Link
            href="/"
            className="inline-block p-2 md:p-3 bg-[#C7BAAA] rounded-lg"
          >
            <Image
              src="/twitterBlack.svg"
              width={20}
              height={20}
              alt="Instagram icon"
            />
          </Link>
          <Link
            href="/"
            className="inline-block p-2 md:p-3 bg-[#C7BAAA] rounded-lg"
          >
            <Image src="/Be.svg" width={20} height={20} alt="Instagram icon" />
          </Link>
        </p>
      </div>

      <div className="px-5 lg:px-0 grid grid-cols-2 lg:grid-cols-3 gap-5 py-5 border-b-2 border-dashed border-[#171717] md:py-15 ">
        <div className="flex px-5 md:px-0 flex-col gap-3">
          <p className="text-white text-sm md:text-base  ">Home</p>
          <ul className="px-5 flex space-x-2 list-disc gap-5 flex-col md:flex-row text-[#676665] text-xs">
            <li>
              <Link href="/" className="hover:text-white">
                Why Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex  flex-col gap-3">
          <p className="text-white text-sm md:text-base  ">Products</p>
          <ul className="px-5 flex space-x-2 list-disc gap-5 flex-col md:flex-row text-[#676665] text-xs">
            <li>
              <Link href="/" className="hover:text-white">
                Clothes
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Footwears
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative col-span-full lg:col-span-1 lg:w-auto my-5 lg:my-0 lg:px-5 flex flex-col gap-5 lg:gap-3">
          <p className="text-white text-sm md:text-base text-center md:text-start  ">
            Subscribe to Newslettter
          </p>
          <input
            className="p-2 px-4 text-white text-xs placeholder:text-[#676665] placeholder:text-xs rounded-md bg-[#1A1A1A]"
            type="email"
            placeholder="Your Email"
          />
          <ArrowRight
            className="absolute hover:text-white right-6 bottom-2 text-[#676665] cursor-pointer"
            size={18}
          />
        </div>
      </div>

      <p className="py-5 md:py-8 text-[#676665] text-xs flex flex-col gap-5 md:flex-row justify-between items-center">
        <span>&copy; 2023 Sheba Markets. All rights reserved.</span>
        <span className="flex gap-3 md:gap-2 text-[#676665] text-xs">
          <Link href="/">Terms & Conditions</Link>
          <span className="w-[1px] h-4 inline-block bg-[#676665]"></span>
          <Link href="/">Privacy Policy</Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;
