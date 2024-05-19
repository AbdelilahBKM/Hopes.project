"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner: React.FC<{}> = () => {
  const text: string[] =
    "Passionate Software Engineer with a focus on full stack development, dedicated to crafting elegant and user-friendly web applications.".split(
      " "
    );
    
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex">
          <Image
            priority
            src="/me.jpg"
            height={300}
            width={300}
            alt="Abdelilah"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Boukhatem Abdelilah
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            You can call me{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 pl-3 uppercase tracking-widest">
              Hope
            </span>
          </p>
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("https://www.upwork.com/freelancers/~018515c88feb86fae1?mp_source=share")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Work with Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
