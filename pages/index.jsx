/* eslint-disable react/jsx-no-target-blank */
import Head from "next/head";
import { BsGithub, BsLinkedin, BsFillMoonStarsFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiDocusign,
} from "react-icons/si";
0;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio - Hassan Javed</title>
        <meta name="description" content="Hassan Javed Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-black h-screen">
          <nav className="py-3 pt-10 mx-5 mb-12 ">
            <ul className="flex justify-e text-slate-200 items-center text-3xl">
              <li className="mr-3">
                <BsFillMoonStarsFill />
              </li>
            </ul>
          </nav>
          <div className="text-center text-slate-200 pt-60">
            <h2 className="text-5xl py-2 font-medium">
              Hi, I am <span className="text-lime-500">Hassan Javed</span>
            </h2>
            <h3 className="text-2xl font-medium py-5">
              Software developer and student
            </h3>
            <p className="font-medium text-slate-200 mb-10">
              Here you can see my journey as a software developer and what I
              have done in the past
            </p>
          </div>

          <div className="text-slate-200 flex justify-center gap-16 py-3 text-3xl">
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
        </section>

        <section className="bg-black">
          <div className="py-3 px-4">
            <h3 className="text-4xl border-t-2 text-center pt-24 pb-20 border-lime-500 text-slate-200 font-medium">
              About Me
            </h3>
            <div className="flex sm:flex-row flex-col ">
              <div className="flex flex-col w-full flex-wrap">
                <h3 className="text-3xl text-slate-200 text-center font-semibold py-3 ">
                  The Past
                </h3>
                <p className="text-slate-200 ">
                  My first ever programming language was Lua on ROBLOX in 2010.
                  2 years later, I was introduced to Scratch and then Python. I
                  have been constantly working on my skills and am now pursuing
                  my passion by studying Computer Science in university. Check
                  out my CV to see more skills I have developed on my journey.
                </p>
                <h3 className="text-3xl text-slate-200 text-center font-semibold  py-3">
                  The Present
                </h3>
                <p className="text-slate-200 ">
                  I am constantly working on my skills and I love watching
                  videos online of new things that I have never learnt before.
                  Currently, I am learning front end web development using
                  technologies such as JavaScript, React, TailwindCSS, Node and
                  I am also trying out Next.JS.
                </p>
                <h3 className="text-slate-200 text-3xl text-center font-semibold py-3">
                  The Future
                </h3>
                <p className="text-slate-200">
                  I want to complete university and start working as a software
                  developer as soon as possible. I also really want to travel
                  and potentially find work abroad.
                </p>
              </div>
              <div className=" flex flex-col w-full">
                <div className="flex justify-center flex-row">
                  <h3 className="text-3xl font-semibold py-3 text-slate-200">
                    Currently working on
                  </h3>
                </div>
                <div className="flex flex-row justify-around h-full">
                  <div className="flex flex-col">
                    <p className="text-7xl py-3 text-yellow-400">
                      <SiJavascript />
                    </p>
                    <p className="text-slate-200 text-center">90%</p>
                    <div className="w-1/6 self-center mt-3 bg-white h-full">
                      <div className="javascript w-full bg-lime-500"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className=" text-7xl py-3 text-cyan-500">
                      <SiReact />
                    </p>
                    <p className="text-slate-200 text-center">60%</p>
                    <div className="w-1/6 self-center mt-3 bg-white h-full">
                      <div className="reactjs w-full bg-lime-500"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className=" text-7xl py-3 text-cyan-600">
                      <SiTailwindcss />
                    </p>
                    <p className="text-slate-200 text-center">60%</p>
                    <div className="w-1/6 self-center mt-3 bg-white h-full">
                      <div className="tailwindcss w-full bg-lime-500"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className=" text-7xl py-3 text-neutral-300">
                      <SiNextdotjs />
                    </p>
                    <p className="text-slate-200 text-center">10%</p>
                    <div className="w-1/6 self-center mt-3 bg-white h-full">
                      <div className="nextjs w-full bg-lime-500"></div>
                    </div>
                  </div>
                  <div className="flex flex-col h-full">
                    <p className=" text-7xl py-3 text-blue-600">
                      <SiCplusplus />
                    </p>
                    <p className="text-slate-200 text-center">10%</p>
                    <div className="w-1/6 self-center mt-3 bg-white h-full">
                      <div className="cplusplus bg-lime-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center overflow-hidden">
            <embed
              className="mt-48 mb-8 inline-block w-1/2 min-h-screen"
              src="CV Hassan Javed.pdf"
            />
            <div className="flex">
              {" "}
              <a
                href="https://drive.google.com/file/d/1C3KaFUDf4j-14dhSrZ8x-yDbq_JW0gVz/view?usp=sharing"
                target="_blank"
              >
                <samp className=" text-lime-500 underline text-3xl mr-4">
                  Download CV
                </samp>
              </a>
              <h1 className="text-lime-500 text-3xl pb-8 pt-1">
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
