import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiC,
  SiJava,
  SiSpring,
  SiCsharp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiLua,
} from "react-icons/si";

const AboutMe = () => {
  return (
    <section className="border-t-2 border-blue-600  bg-neutral-50 dark:border-lime-500 dark:bg-black">
      <div className="flex flex-col py-3 px-4 ">
        <h3 className="pt-24 pb-20 text-center text-4xl font-medium text-neutral-700 dark:text-slate-200">
          About Me
        </h3>
        <div className="flex w-full flex-col items-center">
          <div className="align-center w-9/12">
            <h3 className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500 ">
              Past
            </h3>
            <p className="text-center text-neutral-700  dark:text-slate-200">
              My first ever programming language was Lua on ROBLOX in 2010. 2
              years later, I was introduced to Scratch and then Python. I have
              been constantly working on my skills and am now pursuing my
              passion by studying Computer Science in university. Check out my
              CV to see more skills I have developed on my journey.
            </p>
            <h3 className="py-3 text-center text-3xl font-semibold text-blue-600  dark:text-lime-500">
              Present
            </h3>
            <p className="text-center text-neutral-700 dark:text-slate-200">
              I am constantly working on my skills and I love watching videos
              online of new things that I have never learnt before. Currently, I
              am learning front end web development using technologies such as
              JavaScript, React, TailwindCSS, Node.JS and I am also trying out
              Next.JS.
            </p>
            <h3 className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500">
              Future
            </h3>
            <p className="text-center text-neutral-700 dark:text-slate-200">
              I want to complete university and start working as a software
              developer as soon as possible. I also really want to travel and
              potentially find work abroad.
            </p>
          </div>
        </div>
        <div className=" mt-36 flex w-full flex-col">
          <h3 className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500">
            Currently working on
          </h3>
          <div className=" grid h-full grid-cols-1 justify-around gap-5 md:grid-cols-2">
            <div className="flex flex-row">
              <p className="py-3 text-7xl text-yellow-400">
                <SiJavascript />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                90%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="javascript h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex flex-row">
              <p className=" py-3 text-7xl text-cyan-500">
                <SiReact />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200">
                85%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="reactjs h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex flex-row">
              <p className=" py-3 text-7xl text-cyan-600">
                <SiTailwindcss />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                79%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="tailwindcss h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex flex-row">
              <p className=" py-3 text-7xl text-neutral-300">
                <SiNextdotjs />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                55%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="nextjs h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex h-full flex-row">
              <p className=" py-3 text-7xl text-blue-600">
                <SiC />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                10%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="clang h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-36 flex w-full flex-col">
          <h3 className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500">
            Worked on
          </h3>
          <div className="grid h-full grid-cols-1 justify-around gap-5 md:grid-cols-2">
            <div className="flex flex-row">
              <p className="py-3 text-7xl text-blue-900">
                <SiJava />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                90%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="java h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex flex-row">
              <p className=" py-3 text-7xl text-lime-500">
                <SiSpring />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200">
                50%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="spring h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex flex-row">
              <p className=" py-3 text-7xl text-cyan-600">
                <SiCsharp />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                80%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="csharp h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex flex-row">
              <p className=" py-3 text-7xl text-yellow-300">
                <SiPython />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                90%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="python h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex h-full flex-row">
              <p className=" py-3 text-7xl text-orange-600">
                <SiHtml5 />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                100%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="html h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex h-full flex-row">
              <p className=" py-3 text-7xl text-blue-900">
                <SiCss3 />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                100%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="css h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
            <div className="flex h-full flex-row">
              <p className=" py-3 text-7xl text-blue-800">
                <SiLua />
              </p>
              <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
                65%
              </p>
              <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
                <div className="lua h-full bg-blue-600 dark:bg-lime-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-36 flex w-full flex-col">
          <h3 className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500">
            My Timeline
          </h3>
          <div className="mx-10 my-10 grid h-full grid-cols-1 md:grid-cols-2">
            <div className="mx-4 border-b-2 border-blue-600 border-opacity-70 dark:border-lime-500">
              <div className="flex text-blue-600 dark:text-lime-500">
                <FaGraduationCap className="text-5xl" />
                <p className="ml-3 self-center text-xl text-neutral-700 dark:text-slate-200">
                  Brunel University, London
                </p>
              </div>
              <p className="w-fit rounded-3xl bg-blue-600 bg-opacity-70 p-1 px-5 font-bold text-neutral-700 dark:bg-lime-500">
                Sept 2021 - present
              </p>
              <div className=" -mt-1 ">
                <p className="p-4 text-neutral-700 dark:text-slate-200">
                  Computer science student at Brunel University.
                </p>
              </div>
            </div>
            <div className="mx-4 border-b-2 border-blue-600 border-opacity-70 dark:border-lime-500">
              <div className="flex text-blue-600 dark:text-lime-500">
                <BsBriefcaseFill className="text-5xl" />
                <p className="ml-3 self-center text-xl text-neutral-700 dark:text-slate-200">
                  BTMG USA - Software Tester (Remote), Chicago, IL
                </p>
              </div>
              <p className=" w-fit rounded-3xl bg-blue-600 bg-opacity-70 p-1 px-5 font-bold text-neutral-700 dark:bg-lime-500">
                Sept 2022 - Nov 2022
              </p>
              <div className=" -mt-1 ">
                <p className="p-4 text-neutral-700 dark:text-slate-200">
                  Working alongside a Senior Software Engineer, rigorously
                  testing real world software developed for clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
