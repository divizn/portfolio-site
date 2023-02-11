/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import Head from "next/head";
import { useState } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFillMoonStarsFill,
  BsBriefcaseFill,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiC,
  SiDocusign,
  SiJava,
  SiSpring,
  SiCsharp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiLua,
} from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";

// TODO: FIX THIS UGLY CODE

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio - Hassan Javed</title>
        <meta
          name="description"
          content="Computer science student and passionate software developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="flex flex-col bg-neutral-50 dark:bg-black h-screen">
          <nav className="py-3 pt-10 mx-5 mb-12 ">
            <ul className="flex justify-e text-neutral-700 dark:text-slate-200 items-center text-3xl">
              <li className="mr-3">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center justify-center h-full text-center text-neutral-700 dark:text-slate-200">
            <h2 className="text-5xl py-2 font-medium">
              Hi, I am{" "}
              <span className="text-blue-600 dark:text-lime-500">
                Hassan Javed
              </span>
            </h2>
            <h3 className="text-2xl font-medium py-5">
              Software developer and student
            </h3>
            <p className="font-medium text-neutral-700 dark:text-slate-200  mb-10">
              Here you can see my journey as a software developer and what I
              have done in the past
            </p>
            <div className="text-neutral-700 dark:text-slate-200  flex justify-center gap-16 py-3 text-3xl">
              <a href="https://github.com/divizn" target="_blank">
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hassanjaved186/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="mailto:hassanjaved186@gmail.com" target="_blank">
                <GrMail />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 dark:bg-black  border-t-2 border-blue-600 dark:border-lime-500">
          <div className="py-3 px-4 flex flex-col ">
            <h3 className="text-4xl text-center pt-24 pb-20 text-neutral-700 dark:text-slate-200 font-medium">
              About Me
            </h3>
            <div className="flex flex-col w-full items-center">
              <div className="align-center w-9/12">
                <h3 className="text-3xl text-blue-600 dark:text-lime-500 text-center font-semibold py-3 ">
                  Past
                </h3>
                <p className="text-neutral-700 dark:text-slate-200  text-center">
                  My first ever programming language was Lua on ROBLOX in 2010.
                  2 years later, I was introduced to Scratch and then Python. I
                  have been constantly working on my skills and am now pursuing
                  my passion by studying Computer Science in university. Check
                  out my CV to see more skills I have developed on my journey.
                </p>
                <h3 className="text-3xl text-blue-600 dark:text-lime-500 text-center font-semibold  py-3">
                  Present
                </h3>
                <p className="text-neutral-700 dark:text-slate-200 text-center">
                  I am constantly working on my skills and I love watching
                  videos online of new things that I have never learnt before.
                  Currently, I am learning front end web development using
                  technologies such as JavaScript, React, TailwindCSS, Node.JS
                  and I am also trying out Next.JS.
                </p>
                <h3 className="text-blue-600 dark:text-lime-500 text-3xl text-center font-semibold py-3">
                  Future
                </h3>
                <p className="text-neutral-700 dark:text-slate-200 text-center">
                  I want to complete university and start working as a software
                  developer as soon as possible. I also really want to travel
                  and potentially find work abroad.
                </p>
              </div>
            </div>
            <div className=" mt-36 flex flex-col w-full">
              <h3 className="text-3xl font-semibold py-3 text-center text-blue-600 dark:text-lime-500">
                Currently working on
              </h3>
              <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 justify-around h-full">
                <div className="flex flex-row">
                  <p className="text-7xl py-3 text-yellow-400">
                    <SiJavascript />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    90%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="javascript h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className=" text-7xl py-3 text-cyan-500">
                    <SiReact />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3">
                    85%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="reactjs h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className=" text-7xl py-3 text-cyan-600">
                    <SiTailwindcss />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    79%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="tailwindcss h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className=" text-7xl py-3 text-neutral-300">
                    <SiNextdotjs />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    55%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="nextjs h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row h-full">
                  <p className=" text-7xl py-3 text-blue-600">
                    <SiC />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    10%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="clang h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-36 flex flex-col w-full">
              <h3 className="text-3xl font-semibold py-3 text-center text-blue-600 dark:text-lime-500">
                Worked on
              </h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-around h-full">
                <div className="flex flex-row">
                  <p className="text-7xl py-3 text-blue-900">
                    <SiJava />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    90%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="java h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className=" text-7xl py-3 text-lime-500">
                    <SiSpring />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3">
                    50%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="spring h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className=" text-7xl py-3 text-cyan-600">
                    <SiCsharp />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    80%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="csharp h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className=" text-7xl py-3 text-yellow-300">
                    <SiPython />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    90%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="python h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row h-full">
                  <p className=" text-7xl py-3 text-orange-600">
                    <SiHtml5 />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    100%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="html h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row h-full">
                  <p className=" text-7xl py-3 text-blue-900">
                    <SiCss3 />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    100%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="css h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
                <div className="flex flex-row h-full">
                  <p className=" text-7xl py-3 text-blue-800">
                    <SiLua />
                  </p>
                  <p className="text-neutral-700 dark:text-slate-200 self-center mx-3 ">
                    65%
                  </p>
                  <div className="w-full self-center mt-3 bg-neutral-700 dark:bg-white h-3">
                    <div className="lua h-full bg-blue-600 dark:bg-lime-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" my-36 flex flex-col w-full">
              <h3 className="text-3xl font-semibold py-3 text-center text-blue-600 dark:text-lime-500">
                My Timeline
              </h3>
              <div className="grid grid-cols-1 mx-10 my-10 md:grid-cols-2 h-full">
                <div className="mx-4 border-b-2 border-opacity-70 dark:border-lime-500 border-blue-600">
                  <div className="dark:text-lime-500 flex text-blue-600">
                    <FaGraduationCap className="text-5xl" />
                    <p className="self-center ml-3 text-neutral-700 text-xl dark:text-slate-200">
                      Brunel University, London
                    </p>
                  </div>
                  <p className="bg-blue-600 dark:bg-lime-500 bg-opacity-70 px-5 w-fit font-bold p-1 rounded-3xl text-neutral-700">
                    Sept 2021 - present
                  </p>
                  <div className=" -mt-1 ">
                    <p className="p-4 text-neutral-700 dark:text-slate-200">
                      Computer science student at Brunel University.
                    </p>
                  </div>
                </div>
                <div className="mx-4 border-b-2 border-opacity-70 dark:border-lime-500 border-blue-600">
                  <div className="dark:text-lime-500 flex text-blue-600">
                    <BsBriefcaseFill className="text-5xl" />
                    <p className="self-center ml-3 text-neutral-700 text-xl dark:text-slate-200">
                      BTMG USA - Software Tester (Remote), Chicago, IL
                    </p>
                  </div>
                  <p className=" bg-blue-600 dark:bg-lime-500 bg-opacity-70 px-5 w-fit font-bold p-1 rounded-3xl text-neutral-700">
                    August 2022 - present
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
        <section className="bg-neutral-50 dark:bg-black border-t-2 border-blue-600 dark:border-lime-500 ">
          <div className="py-3 px-4">
            <h1 className="text-4xl mt-20 text-neutral-700 dark:text-slate-200 text-center font-medium">
              Portfolio
            </h1>
            <div className="grid  grid-cols-1 justify-items-center mb-10 mt-20 md:grid-cols-3 h-full">
              <a
                className="w-fit"
                href="https://github.com/divizn/discord-spotify-bot"
                target="_blank"
              >
                <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=discord-spotify-bot&hide_border=true&theme=dark&bg_color=0d1117" />
              </a>
              <a
                className="w-fit"
                href="https://github.com/divizn/react-weather-app"
                target="_blank"
              >
                <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=react-weather-app&hide_border=true&theme=dark&bg_color=0d1117" />
              </a>
              <a
                className="w-fit"
                href="https://github.com/divizn/legacy-portfolio-site"
                target="_blank"
              >
                <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=legacy-portfolio-site&hide_border=true&theme=dark&bg_color=0d1117" />
              </a>
              <a
                className="w-fit"
                href="https://github.com/divizn/portfolio-site"
                target="_blank"
              >
                <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=portfolio-site&hide_border=true&theme=dark&bg_color=0d1117" />
              </a>
              <a
                className="w-fit"
                href="https://github.com/divizn/clone-sites"
                target="_blank"
              >
                <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=clone-sites&hide_border=true&theme=dark&bg_color=0d1117" />
              </a>
            </div>
            <div className="h-screen"></div>
          </div>
        </section>
        <section className=" bg-neutral-50 dark:bg-black border-t-2 border-blue-600 dark:border-lime-500 ">
          <div className="flex flex-col w-full items-center ">
            <h1 className="text-neutral-700 font-medium  dark:text-slate-200 mt-20 text-4xl">
              Resume/CV
            </h1>
            <embed
              className=" mt-24 mb-8 inline-block w-1/2 min-h-screen"
              src="CV Hassan Javed.pdf"
            />
            <div className="flex">
              <a
                href="https://drive.google.com/file/d/1C3KaFUDf4j-14dhSrZ8x-yDbq_JW0gVz/view?usp=sharing"
                target="_blank"
              >
                <samp className=" dark:text-lime-500 text-blue-600 underline text-3xl mr-4">
                  PDF
                </samp>
              </a>
              <h1 className="dark:text-lime-500 text-blue-600 text-3xl pb-8 pt-1">
                <a
                  href="https://drive.google.com/file/d/1C3KaFUDf4j-14dhSrZ8x-yDbq_JW0gVz/view?usp=sharing"
                  target="_blank"
                >
                  <SiDocusign />
                </a>
              </h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
