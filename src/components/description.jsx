import React from "react";

const Description = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="align-center mt-10 w-9/12">
        <p className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500 ">
          Past
        </p>
        <p className="text-center text-neutral-700  dark:text-slate-200">
          My first ever programming language was Lua on ROBLOX in 2010. 2 years
          later, I was introduced to Scratch and then Python. I have been
          constantly working on my skills and am now pursuing my passion by
          studying Computer Science in university. Check out my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 underline dark:text-lime-500"
            href="https://drive.google.com/file/d/1C3KaFUDf4j-14dhSrZ8x-yDbq_JW0gVz/view?usp=sharing"
          >
            CV
          </a>{" "}
          to see more skills I have developed on my journey.
        </p>
        <p className="py-3 text-center text-3xl font-semibold text-blue-600  dark:text-lime-500">
          Present
        </p>
        <p className="text-center text-neutral-700 dark:text-slate-200">
          I am constantly working on my skills and I love watching videos online
          of new things that I have never learnt before. Currently, I am
          learning backend web development using technologies such as{" "}
          <span className="font-semibold text-blue-600 dark:text-lime-500">
            JavaScript
          </span>{" "}
          (a bit of{" "}
          <span className="font-semibold text-blue-600 dark:text-lime-500">
            TypeScript
          </span>{" "}
          too) ,{" "}
          <span className="font-semibold text-blue-600 dark:text-lime-500">
            NodeJs
          </span>
          ,
          <span className="font-semibold text-blue-600 dark:text-lime-500"></span>{" "}
          and{" "}
          <span className="font-semibold text-blue-600 dark:text-lime-500">
            NextJS
          </span>
          .
        </p>
        <p className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500">
          Future
        </p>
        <p className="text-center text-neutral-700 dark:text-slate-200">
          I want to complete university and start working as a software
          developer as soon as possible. I also really want to travel and
          potentially find work abroad.
        </p>
      </div>
    </div>
  );
};

export default Description;
