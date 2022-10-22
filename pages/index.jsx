/* eslint-disable react/jsx-no-target-blank */
import Head from "next/head";
import {
  BsGithub,
  BsLinkedin,
  BsFillMoonStarsFill,
  BsInbox,
  BsPaperclip,
} from "react-icons/bs";
import { GrMail, GrResume } from "react-icons/gr";

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
            <BsGithub />
            <BsLinkedin />
            <GrMail />
          </div>
        </section>

        <section className="bg-black">
          <div className="py-3 px-4">
            <h3 className="text-4xl py-5 border-t-2 border-lime-500 text-slate-200 font-medium">
              About Me
            </h3>
            <div className="flex flex-col w-1/2 flex-wrap">
              <h3 className="text-3xl text-slate-200 font-semibold py-3 ">
                The Past
              </h3>
              <p className="text-slate-200 ">
                My first ever programming language was Lua on ROBLOX in 2010. 2
                years later, I was introduced to Scratch and then Python. I have
                been constantly working on my skills and am now pursuing my
                passion by studying Computer Science in university. Check out my
                CV to see more skills I have developed on my journey.
              </p>
              <h3 className="text-3xl text-slate-200 font-semibold  py-3">
                The Present
              </h3>
              <p className="text-slate-200 ">
                I am constantly working on my skills and I love watching videos
                online of new things that I have never learnt before. Currently,
                I am learning front end web development using technologies such
                as JavaScript, React, TailwindCSS, Node and I am also trying out
                Next.JS.
              </p>
              <h3 className="text-slate-200 text-3xl font-semibold py-3">
                The Future
              </h3>
              <p className="text-slate-200">
                I want to complete university and start working as a software
                developer as soon as possible. I also really want to travel and
                potentially find work abroad.
              </p>
            </div>
          </div>
          <embed
            className=" mt-48 inline-block min-w-full px-96 min-h-screen"
            src="CV Hassan Javed.pdf"
          />
        </section>
      </main>
    </div>
  );
}
