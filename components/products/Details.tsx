"use client";
import React, { useState } from "react";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import ReviewsData from "@/Reviews.json";
import { useCartStore } from "@/contexts/CartStore";
import { ProductType } from "@/utils/lib/types";

const Details = ({ product }: { product: ProductType }) => {
  const [isLiked, setIsLiked] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const item = {
    id: 1,
    name: "Leather Coot",
    quantity: 1,
    price: 300,
    imgUrl: "/close.svg",
  };

  const handleSubmit = () => {
    console.log("Button clicked");
    addToCart(item);
  };

  return (
    <>
      <div className="rounded-xl p-3  md:p-5 md:px-0 border-dashed border-[#171717] border-2 my-5 md:my-16">
        <div className="px-5 py-3 flex flex-col justify-between items-center md:flex-row gap-5">
          <div className="w-full md:w-3/4 flex items-center justify-between">
            <h2 className="text-white md:text-3xl">{product.name}</h2>
            <Heart
              onClick={() => setIsLiked(!isLiked)}
              className={`text-white cursor-pointer ${isLiked && "fill-red-500 stroke-red-500"} `}
              size={24}
              strokeWidth={2}
            />
          </div>
          <div className="hidden md:flex py-5 md:py-0 w-full md:w-auto items-center justify-between md:justify-center gap-4">
            <button
              onClick={handleSubmit}
              className="hidden lg:flex bg-[#1A1A1A] text-white p-2 cursor-pointer text-xs rounded-lg items-center gap-1"
            >
              <ShoppingCart className="text-white" size={18} />
              Add To Cart
            </button>
            <Link
              href="/"
              className="bg-[#C2B4A3] hover:bg-[#c7af93] transition-all duration-300 text-black p-2 text-xs rounded-lg flex items-center gap-1"
            >
              <Image
                src="/Icon.svg"
                width={16}
                height={16}
                alt="Shopping Icon"
              />
              Shop Now
            </Link>
          </div>
        </div>
        <p className="px-5 py-3 md:py-1 flex text-xs text-[#676665] ">
          {product.brand}
          <span className="flex py-0.5 items-center ml-2 px-2 text-xs rounded-2xl bg-[#8bf2651e] text-[#8AF265]">
            {product.status}
          </span>
        </p>
        <div className="border-t-2 border-dashed mt-10 p-2 md:p-5 border-[#171717] flex flex-col lg:flex-row justify-center md:gap-10 lg:gap-14 xl:gap-40 items-center">
          <div className="flex justify-center  lg:flex-col gap-5 md:gap-8">
            {product.variants[0].images[0] && (
              <Image
                key={0}
                src={product.variants[0].images[0]}
                className="w-2/5 md:w-[200px]"
                width={200}
                height={200}
                alt="Human picture"
              />
            )}

            {product.variants[0].images[1] && (
              <Image
                src={product.variants[0].images[1]}
                className="w-2/5 md:w-[200px]"
                width={200}
                height={200}
                alt="Human picture"
              />
            )}
          </div>
          <div className="flex justify-between mt-5 md:mt-0 md:gap-10 items-center ">
            <ChevronLeft
              className="text-white cursor-pointer"
              size={32}
              strokeWidth={2}
            />
            <Image
              src="/person.svg"
              width={500}
              height={500}
              className="w-4/5 md:w-[500px] md:h-[500px]"
              alt="Product Image"
            />
            <ChevronRight
              className="text-white cursor-pointer"
              size={32}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pt-5 md:pt-10">
        <div className="w-full md:w-3/4">
          <h2 className="text-white md:text-lg px-8 py-5 border-b-2 border-dashed border-[#171717]">
            About the Product
          </h2>

          <p className="text-[#81807E] border-b-2 border-dashed border-[#171717] px-8 py-5 text-xs">
            {product.description}
          </p>

          <div className="px-8 py-5 border-b-2 border-dashed border-[#171717]">
            <span className="text-white inline-block mb-3 text-sm">
              Materials
            </span>

            <p className="flex gap-4 text-[#81807E] text-xs pl-3">
              <span>Satin</span>
              <span>Velvit</span>
              <span>Silk</span>
            </p>
          </div>

          <div className="px-8 py-5 mb-5 border-b-2 border-dashed border-[#171717]">
            <span className="text-white mb-5 inline-block text-sm">
              Color Options
            </span>

            <div className="w-48 grid grid-cols-2 md:grid-cols-2 gap-3 mt-3 bg-[#fbe3c75a]  p-3 rounded-sm">
              <span className="inline-block bg-[#FFF9F9] w-full h-16 cursor-pointer"></span>
              <span className="inline-block bg-[#63480A] w-full h-16 cursor-pointer"></span>
              <span className="inline-block bg-[#DA9C0B] w-full h-16 cursor-pointer"></span>
              <span className="inline-block bg-[#472020] w-full h-16 cursor-pointer"></span>
            </div>
          </div>
        </div>

        <div className="pb-5 border-l-2  flex flex-col gap-5 border-dashed border-[#171717]">
          <h2 className="text-white px-5 py-5">Features</h2>
          <ul className="w-full text-[rgb(129,128,126)] border-b-2 border-dashed border-[#171717] list-disc text-xs pb-5 px-10">
            <li>Distressed detailing for a rugged look</li>
            <li>Button-up front closure with engraved metal buttons</li>
            <li>Two chest pockets with buttoned flaps</li>
            <li>Two side pockets for added functionality</li>
            <li>Adjustable buttoned cuffs for a personalized fit</li>
            <li>Back waist tabs for customizable styling</li>
          </ul>

          <div className="flex flex-col gap-3 py-5 border-b-2 border-dashed border-[#171717] px-5">
            <span className="text-white text-xs">Price</span>

            <div className="flex items-center justify-between">
              <span className="text-white ">
                Br.{product.variants[0].price}
              </span>

              <button
                onClick={handleSubmit}
                className="bg-[#1A1A1A] text-white p-2 cursor-pointer text-xs rounded-lg flex items-center gap-1"
              >
                <ShoppingCart className="text-white" size={18} />
                Add To Cart
              </button>
            </div>
          </div>

          <div className="border-b-2 border-dashed border-[#171717] pb-8">
            <span className="text-white px-5 inline-block mb-3 text-sm">
              Available Sizes
            </span>

            <div className="flex gap-3  px-5 mt-3">
              {product.variants.map((item, index) => (
                <span
                  key={index}
                  className="bg-[#1A1A1A] text-white p-2 text-xs rounded-2xl flex items-center justify-center px-6"
                >
                  {item.size}
                </span>
              ))}

              {/* <span className='bg-[#1A1A1A] text-white p-2 text-xs rounded-2xl flex items-center justify-center px-6'>M</span>
                
                <span className='bg-[#1A1A1A] text-white p-2 text-xs rounded-2xl flex items-center justify-center px-6'>L</span>
                
                <span className='bg-[#1A1A1A] text-white p-2 text-xs rounded-2xl flex items-center justify-center px-6'>XL</span>

                <span className='bg-[#1A1A1A] text-white p-2 text-xs rounded-2xl flex items-center justify-center px-6'>2XL</span> */}
            </div>
          </div>

          <p className="text-white text-xs border-b-2 border-dashed border-[#171717] p-5">
            Ratings & Review
          </p>

          <Ratings />
        </div>
      </div>

      <p className="border-2 p-10 flex flex-col gap-5 border-dashed border-[#171717] rounded-xl mb-5 md:mb-10">
        <span className="text-white text-lg md:text-2xl">
          REVIEWS ABOUT THE PRODUCT
        </span>

        <span className="text-[#676665]">
          At Sheba Market, our customers are the heartbeat of our brand.
        </span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:my-20 lg:my-30">
        {ReviewsData.map((review, index) => (
          <Reviews
            key={index}
            reiewsObject={{
              name: review.name,
              imgPath: review.imgPath,
              rating: review.rating,
              review: review.review,
              location: review.location,
              key: index,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Details;
