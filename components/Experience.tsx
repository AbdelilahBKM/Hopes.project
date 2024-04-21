import React from "react";
import Link from "next/link";
import Image from "next/image";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   py-[35px]">
        Projects
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      
      {/* ***************************** bi3smart ********************************************************** */}
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">BI3-SMART /</span> Academic Project
          </p>
          <p className="text-gray-300">FEBRUARY 2024 - </p>
        </div>
        <div className="w-full flex justify-center pt-3">
          <Image
            src={"/bi3smartapp.png"}
            alt="prject"
            width={600}
            height={579}
            className="max-w-full h-auto"
          ></Image>
        </div>
        <div className="text-gray-300">
          <div className="font-semibold pt-5">Description:</div>
          <p className="pt-5">
            I collaborated on an academic project to develop an ecommerce
            website called BI3-SMART, featuring an integrated chatbot powered by
            the Google Gemini API. This project aimed to provide users with
            personalized product recommendations and guidance throughout the
            purchasing process, enhancing the overall user experience.
            <br />
            <br />
          </p>
        </div>
        <div className="text-gray-300">
          <div className="font-semibold">Key Features:</div>
          <ul className="pl-5 pt-5 list-disc">
            <li className="">
              Chatbot interacts with users to understand their needs and
              preferences.
            </li>
            <li className="pt-5">
              Provides personalized product recommendations based on user input.
            </li>
            <li className="pt-5">
              Assists users in placing orders by answering questions and guiding
              them through the purchasing process
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="text-gray-300">
          <div className="font-semibold">AI Integration:</div>
          <p className="pt-5">
            Integration of the Google Gemini API enables the chatbot to analyze
            user inquiries and provide relevant product recommendations. This
            AI-driven approach enhances user engagement and satisfaction by
            offering tailored solutions to their needs.
            <br />
            <br />
          </p>
        </div>
        <div className="text-gray-300">
          <div className="font-semibold pt-5">Status:</div>
          <p className="pt-5">
            While the project is currently in development, it represents an
            exciting opportunity for future enhancements. Plans include refining
            the chatbot&apos;s functionality, optimizing user interactions, and
            implementing additional features to further improve the ecommerce
            experience.
            <br />
            <br />
            I will upload a Demo video showcasing Chatbot Interaction soon!
            <br />
            <br />
          </p>
        </div>
        <div className="text-gray-300">
          <div className="font-semibold pt-5">Conclusion:</div>
          <p className="pt-5">
            This project served as a valuable learning experience, allowing me
            to explore the integration of AI technologies into web applications.
            Overcoming challenges such as API integration and user experience
            design provided insights into best practices and fostered skill
            development in backend and frontend development.
            <br />
            <br />
          </p>
        </div>
        <div className="text-gray-300">
          <div className="font-semibold">GitHub Repositories:</div>
          <ul className="pl-5 pt-5 list-disc">
            <li className="">
              <Link
                className="text-blue-500 hover:underline"
                href={"https://github.com/AbdelilahBKM/nextjs-simple-ecommerce"}
                target="_blank"
              >
                frontend repository
              </Link>
            </li>
            <li className="pt-5">
              <Link
                className="text-blue-500 hover:underline"
                href={"https://github.com/omaarjb/Bi3Smart"}
                target="_blank"
              >
                backend repository (currently private, will update that soon)
              </Link>
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Python
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Django REST framework
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Google Gemini API
          </div>
        </div>
      </div>
      {/* ***************************** DEVHIRE *********************************************************** */}
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">DevHire /</span> Personal Project
          </p>
          <p className="text-gray-300">APRIL 2024 - </p>
        </div>
        <div className="w-full flex justify-center pt-3">
          <Image
            src={"/devhireapp.png"}
            alt="prject"
            width={600}
            height={579}
            className="max-w-full h-auto"
          ></Image>
        </div>
        <div className="text-gray-300">
          <div className="font-semibold pt-5">Description:</div>
          <p className="pt-5">
            DevHire is a platform with the idea of bridging the gap between
            students, graduates, and software engineering opportunities.
            Inspired by popular job search websites like Indeed, this project
            serves as a mock-up platform aimed at helping aspiring software
            engineers kickstart their careers and assisting companies in
            creating job listings specifically tailored for the tech industry.
            <br />
            <br />
          </p>
        </div>
        <div className="text-gray-300">
          <div className="font-semibold">Challenges Faced:</div>
          <ul className="pl-5 pt-5 list-disc">
            <li className="">
              Designing an intuitive user interface that appeals to both job
              seekers and companies.
            </li>
            <li className="pt-5">
              Integrating authentication and authorization functionalities to
              ensure data security and user privacy.
            </li>
            <li className="pt-5">
              Managing and querying data effectively in MongoDB to provide
              relevant job search results.
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="text-gray-300">
          <div className="font-semibold">Lessons Learned:</div>
          <ul className="pl-5 pt-5 list-disc">
            <li className="">
              Gain valuable experience in full-stack development using modern
              technologies like Next.js, Tailwind CSS, Express.js, and MongoDB.
            </li>
            <li className="pt-5">
              Enhanced understanding of user authentication, RESTful API
              development, database management, and frontend design principles.
            </li>
            <li className="pt-5">
              Developed problem-solving skills through overcoming challenges and
              finding solutions to technical issues.
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="text-gray-300">
          <div className="font-semibold pt-5">Status:</div>
          <p className="pt-5">
            This project is a work in progress and serves as a learning
            experience to improve my full-stack development skills. While
            it&apos;s not fully completed, it demonstrates my ability to build
            functional web applications using a variety of technologies.
            <br />
            <br />
          </p>
        </div>
        <div className="text-gray-300">
          <div className="font-semibold">GitHub Repositories:</div>
          <ul className="pl-5 pt-5 list-disc">
            <li className="">
              <Link
                className="text-blue-500 hover:underline"
                href={"https://github.com/AbdelilahBKM/DevHire"}
                target="_blank"
              >
                frontend repository
              </Link>
            </li>
            <li className="pt-5">
              <Link
                className="text-blue-500 hover:underline"
                href={"https://github.com/AbdelilahBKM/DevHireAPI"}
                target="_blank"
              >
                backend repository
              </Link>
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Tailwindcss
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Express.js
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Mongodb
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
