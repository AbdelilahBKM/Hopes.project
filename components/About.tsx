import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          I am a passionate web developer and software engineering student based
          in Marrakech, I have a strong enthusiasm for creating elegant,
          responsive, and user-friendly websites and applications. As a lifelong
          learner, I am constantly expanding my skills and staying up-to-date
          with the latest technologies in the ever-evolving field of software
          development.
          <br />
          <br />
          When I'm not coding, you can find me exploring new technologies,
          reading about industry trends, or immersing myself in creative
          pursuits. I am driven by a relentless desire to innovate and create
          solutions that make a meaningful impact on people's lives.
        </p>
      </div>
    </section>
  );
};

export default About;
