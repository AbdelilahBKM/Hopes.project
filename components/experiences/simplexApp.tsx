import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SimplexApp() {
  return (
    <div className=" container mx-auto 2xl mt-5">
      <div className="flex  flex-row justify-between pt-5 border-t">
        <p className="text-gray-300 ">
          <span className="font-semibold">Simplex APP /</span> Academic Project
        </p>
        <p className="text-gray-300">APRIL 2024 - MAY 2024</p>
      </div>
      <div className="w-full flex justify-center pt-3">
        <Image
          src={"/simplexe-app.png"}
          alt="prject"
          width={600}
          height={579}
          className="max-w-full h-auto"
        ></Image>
      </div>
      <div className="text-gray-300">
        <div className="font-semibold pt-5">Description:</div>
        <p className="pt-5">
          Creation of an interactive application using the simplex algorithm to
          solve linear optimization problems. The application allows users to
          formulate problems, solve them efficiently and visualize the results.
          <br />
          <br />
        </p>
      </div>
      <div className="text-gray-300">
        <div className="font-semibold">Key Features:</div>
        <ul className="pl-5 pt-5 list-disc">
          <li className="">
            Intuitive user interface for inputting linear problem data
            (objective function, constraints)..
          </li>
          <li className="pt-5">
            Implementation of the simplex algorithm to provide optimal
            solutions.
          </li>
          <li className="pt-5">
            Generation of detailed reports on the obtained results.
          </li>
        </ul>
        <br />
        <br />
      </div>
      <div className="text-gray-300">
        <div className="font-semibold">Skills Acquired:</div>
        <ul className="pl-5 pt-5 list-disc">
          <li className="">
            Programming optimization algorithms.
          </li>
          <li className="pt-5">
          Creating user-friendly and intuitive interfaces.
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
        <div className="font-semibold">GitHub Repositories:</div>
        <ul className="pl-5 pt-5 list-disc">
          <li className="">
            <Link
              className="text-blue-500 hover:underline"
              href={"https://github.com/AbdelilahBKM/simplexe-app"}
              target="_blank"
            >
              source code
            </Link>
          </li>
        </ul>
        <br />
        <br />
        <div className="font-semibold">Visit the app:</div>
        <ul className="pl-5 pt-5 list-disc">
          <li className="">
            <Link
              className="text-blue-500 hover:underline"
              href={"https://simplexe-app.vercel.app/"}
              target="_blank"
            >
              Simplex solver web app deployed with vercel
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-col flex sm:flex-row">
        <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
          Next.js
        </div>
        <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
          Tailwindcss
        </div>
        <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
          Typescript
        </div>
        <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
          shadcn/ui
        </div>
      </div>
    </div>
  );
}
