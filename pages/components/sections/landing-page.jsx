import React, { useState } from "react";
import {
  BsCloud,
  BsCloudArrowUp,
  BsDownload,
  BsFilePdf,
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Landing = ({ getDark }) => {
  const [darkMode, setDarkMode] = useState(true);
  getDark(darkMode);

  return (
    <section className="flex h-screen flex-col bg-neutral-50 dark:bg-black">
      <div className="flex justify-between">
        <button className="my-10 ml-10 flex bg-neutral-50 dark:bg-black">
          <BsFillMoonStarsFill
            size={40}
            className="select-none text-black dark:text-neutral-50"
            onClick={() => setDarkMode(!darkMode)}
          />
        </button>
        <a
          href="https://drive.google.com/file/d/1C3KaFUDf4j-14dhSrZ8x-yDbq_JW0gVz/view?usp=sharing"
          rel="noreferrer noopener"
          target="_blank"
          className="m-10 flex select-none items-center bg-neutral-50 font-medium text-neutral-700 dark:bg-black dark:text-slate-200 sm:hidden"
        >
          CV/Resume
          <BsFilePdf
            size={40}
            className="ml-2 select-none text-black dark:text-neutral-50"
          />
        </a>
      </div>
      <div className="flex h-full flex-col items-center justify-center p-[5%] text-center text-neutral-700 dark:text-slate-200">
        <h2 className="py-2 text-5xl font-medium">
          Hi, I am{" "}
          <span className="text-blue-600 dark:text-lime-500">Hassan Javed</span>
        </h2>
        <h3 className="py-5 text-2xl font-medium">
          Software developer and student
        </h3>
        <p className="mb-10 font-medium text-neutral-700  dark:text-slate-200">
          Here you can see my journey as a software developer and what I have
          done in the past
        </p>
        <div className="flex justify-center  gap-16 py-3 text-3xl text-neutral-700 dark:text-slate-200">
          <a
            alt="Github"
            href="https://github.com/divizn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            alt="Linkedin"
            href="https://www.linkedin.com/in/hassanjaved186/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            alt="Email"
            href="mailto:hassanjaved186@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrMail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
