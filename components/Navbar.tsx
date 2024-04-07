"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[150px] bg-['#111'] fixed backdrop-blur-sm z-50 px-20">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="flex">
          <a href="/" className="h-auto w-auto flex flex-row items-center">
            <Image src="/HopesLogo.png" alt="logo" width={115} height={115} />
          </a>
          <div className="h-auto hidden lg:flex w-auto flex-col justify-center text-white">
            <div className="uppercase text-[2rem] tracking-[1rem]">ope&apos;s</div>
            <p className="uppercase w-[100%] text-center text-[1.2rem] font-[300] tracking-[.9rem]">
              project
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <Link
            href={"/#about"}
            className="hidden md:flex z-[1] bg-transparent border border-white padding-10 cursor-pointer bg-black hover:bg-white hover:text-black rounded-xl  text-white py-2 px-5 transition-colors"
          >
            About me
          </Link>
          <div
            onClick={() => window.open("mailto:")}
            className=" z-[1] bg-white text-black  padding-10 cursor-pointer hover:bg-black border hover:border-white hover:text-white rounded-xl  py-2 px-5 transition"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
