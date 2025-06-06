"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProductType } from "@/utils/lib/types";
import { useRouter } from "next/navigation";

const ProductCard = ({ props, k }: { props: ProductType; k: number }) => {
  const navigate = useRouter();

  return (
    <div
      className={clsx(
        `
            w-full cursor-pointer p-3 border-dashed border-2 border-l-0  border-[#171717]  
            md:${k % 3 === 0 ? "border-l-2" : "border-l-0"}
            lg:${k % 4 === 0 ? "border-l-2" : "border-l-0"}

            `,
      )}
      onClick={() => navigate.push(`/products/${props._id}`)}
    >
      <Image
        className="w-full rounded-tl-lg rounded-tr-lg"
        src={
          props.variants[0].images[0] ===
          "https://example.com/images/product1-red.jpg"
            ? "https://res.cloudinary.com/dqho0rsp3/image/upload/v1734374527/farm_4_qap5bn.jpg"
            : props.variants[0].images[0]
        }
        alt="Product Image"
        width={300}
        height={300}
      />

      <div className="w-full flex justify-between items-center mt-5">
        <p className="bg-[#1A1A1A] px-3 py-2 text-xs text-[#B3B3B2] rounded-3xl">
          {props.category}
        </p>

        <Link
          href="/"
          className="bg-[#1A1A1A] text-[#B3B3B2] p-2 text-xs rounded-lg flex items-center gap-1"
        >
          Shop Now
          <ArrowUpRight className="text-[#B3B3B2]" size={18} />
        </Link>
      </div>

      <p className="  py-2 text-xs text-[#B3B3B2] mt-3">{props.subCategory}</p>

      <p className="mt-5 text-sm text-white">{props.name}</p>

      <div className="flex justify-between items-center mt-3">
        <p className="text-xs  text-[#B3B3B2]">
          <span>Fit : </span> {props.variants[0].size}
        </p>
        <p className="text-xs  text-[#B3B3B2]">
          <span>Price : </span> Birr {props.variants[0].price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
