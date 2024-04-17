import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

const Technologies: React.FC<{}> = () => {
  const ref = useRef<HTMLElement>(null);
  
  return (
    <section ref={ref}
      id="technologies"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">
          Preferred Technologies
        </h1>
        <div className="mt-[20px]">
          <p className="tracking-[0.5em] text-transparent font-medium pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-2xl">
            frontend
          </p>
          <div className="lg:flex lg:gap-16">
            <div className="flex flex-col items-center">
              <Image
                src={"/technologies/typescript.svg"}
                alt="typescript"
                width={250}
                height={250}
              ></Image>
              <Link target="_blank" href={"https://www.typescriptlang.org/"} className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                Typescript
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/technologies/react.svg"}
                alt="react"
                width={250}
                height={250}
              ></Image>
              <Link target="_blank" href={"https://react.dev/"} className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                React
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/technologies/tailwind.svg"}
                alt="tailwind"
                width={250}
                height={250}
              ></Image>
              <Link target="_blank" href={"https://tailwindcss.com/"} className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                Tailwindcss
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <p className="tracking-[0.5em] text-transparent font-medium  pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-2xl">
            backend
          </p>
          <div className="lg:flex lg:gap-16">
            <div className="flex flex-col items-center">
              <Image
                src={"/technologies/node-js.svg"}
                alt="node"
                width={250}
                height={250}
              ></Image>
              <Link href={"https://nodejs.org/en"} className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                Node.js
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/technologies/express.svg"}
                alt="express"
                width={250}
                height={250}
              ></Image>
              <Link href={"https://expressjs.com/"} className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                Express.js
              </Link>
            </div>
            <div>
              <Image
                src={"/technologies/mongodb.svg"}
                alt="mongodb"
                width={250}
                height={250}
              ></Image>
              <Link href={"https://www.mongodb.com/"} className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                MongoDB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
