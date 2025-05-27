"use client";
import React from "react";
import Image from "next/image";
import { useUserStore } from "@/contexts/UserStore";
import { Edit3 } from "lucide-react";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  console.log(user, "user here");

  return (
    <div className="p-5">
      <h1 className="text-white text-2xl font-bold">Profile</h1>
      <p className="text-[#606060] text-xs">
        View all your profile details here
      </p>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 py-10">
        <div className=" sm:w-1/3 lg:w-1/3 flex flex-col gap-3 items-center border border-[#262626] rounded-lg p-5">
          <h2 className="text-white text-xl">
            {user
              ? `${user.firstName ?? ""} ${user.lastName ?? ""}`
              : "Not Provided"}
          </h2>
          <p className="text-green-300 text-sm -mt-2 mb-5">Buyer</p>
          <Image
            src={user?.profilePicture || "/profile.jpg"}
            className="w-full h-auto rounded-md"
            width={300}
            height={300}
            alt="Profile Image"
          />
        </div>

        <div className="relative sm:w-2/3 flex flex-col gap-3 border border-[#262626] rounded-lg p-5">
          <h2 className="text-white text-xl mb-5">Bio & Other Details</h2>
          <Edit3
            className="absolute right-5 top-5 text-white cursor-pointer"
            size={20}
          />

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between border-b border-[#262626] w-full pb-3">
            <p className="relative sm:w-1/2 flex flex-col gap-1">
              <span className="text-[#494949]">First Name</span>
              <input
                name="firstName"
                className="text-white text-sm outline-none w-full"
                value={user?.firstName || "Not Provided"}
                disabled
                onChange={(e) => console.log(e.target.value)}
              />
            </p>
            <p className="flex sm:w-1/2 flex-col gap-1">
              <span className="text-[#494949]">Last Name</span>
              <input
                name="lastName"
                className="text-white text-sm w-full outline-none"
                value={user?.lastName || "Not Provided"}
                onChange={(e) => console.log(e.target.value)}
              />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between border-b border-[#262626] w-full pb-3">
            <p className="relative sm:w-1/2 flex flex-col gap-1">
              <span className="text-[#494949]">Email</span>
              <input
                name="email"
                className="text-white text-sm outline-none w-full"
                value={user?.email || "Not Provided"}
                onChange={(e) => console.log(e.target.value)}
              />
            </p>
            <p className="flex sm:w-1/2 flex-col gap-1">
              <span className="text-[#494949]">Phone Number</span>
              <input
                name="phone"
                className="text-white text-sm w-full outline-none"
                value={user?.phone || "Not Provided"}
                onChange={(e) => console.log(e.target.value)}
              />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between border-b border-[#262626] w-full pb-3">
            <p className="relative sm:w-1/2 flex flex-col gap-1">
              <span className="text-[#494949]">Date Of Birth</span>
              <input
                name="dob"
                className="text-white text-sm outline-none w-full"
                value={user?.dateOfBirth || "Not Provided"}
                onChange={(e) => console.log(e.target.value)}
              />
            </p>
            <p className="flex sm:w-1/2 flex-col gap-1">
              <span className="text-[#494949]">Gender</span>
              <input
                name="gender"
                className="text-white text-sm w-full outline-none"
                value={user?.gender || "Not Provided"}
                onChange={(e) => console.log(e.target.value)}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
