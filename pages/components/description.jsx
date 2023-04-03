import React from "react";

const Description = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="align-center mt-10 w-9/12">
        <h3 className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500 ">
          Past
        </h3>
        <p className="text-center text-neutral-700  dark:text-slate-200">
          My first ever programming language was Lua on ROBLOX in 2010. 2 years
          later, I was introduced to Scratch and then Python. I have been
          constantly working on my skills and am now pursuing my passion by
          studying Computer Science in university. Check out my CV to see more
          skills I have developed on my journey.
        </p>
        <h3 className="py-3 text-center text-3xl font-semibold text-blue-600  dark:text-lime-500">
          Present
        </h3>
        <p className="text-center text-neutral-700 dark:text-slate-200">
          I am constantly working on my skills and I love watching videos online
          of new things that I have never learnt before. Currently, I am
          learning front end web development using technologies such as
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
  );
};

export default Description;
