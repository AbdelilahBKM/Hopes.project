import React from "react";
import Link from "next/link";
import Image from "next/image";
import Bi3smart from "./experiences/bi3smart";
import DevHire from "./experiences/devhire";
import SimplexApp from "./experiences/simplexApp";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   py-[35px]">
        Projects
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <SimplexApp />
      <Bi3smart />
      <DevHire />
    </section>
  );
};

export default Experience;
