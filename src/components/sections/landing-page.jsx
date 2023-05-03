import React, { useState } from "react";
import {
  BsFilePdf,
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";
import Section from "../reusable/section";
import Contact from "../reusable/contact-items";

const items = [
  {
    name: "GitHub",
    link: "https://github.com/divizn",
    icon: <BsGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hassanjaved186/",
    icon: <BsLinkedin />,
  },
  {
    name: "Email",
    link: "mailto:hassanjaved186@gmail.com",
    icon: <GrMail />,
  },
];

const Landing = ({ getDark }) => {
  const [darkMode, setDarkMode] = useState(true);
  getDark(darkMode);

  return (
    <Section className="h-screen">
      <div className="flex h-full flex-col">
        <div className="flex justify-between">
          <button
            aria-label="Dark Mode"
            alt="Dark Mode"
            className="my-10 ml-10 flex"
          >
            <BsFillMoonStarsFill
              size={40}
              className="select-none text-black dark:text-neutral-50"
              onClick={() => setDarkMode(!darkMode)}
            />
          </button>
          <a
            alt="CV"
            aria-label="CV"
            href="https://drive.google.com/file/d/1C3KaFUDf4j-14dhSrZ8x-yDbq_JW0gVz/view?usp=sharing"
            rel="noreferrer noopener"
            target="_blank"
            className="m-10 flex select-none items-center font-medium text-neutral-700 dark:text-slate-200 sm:hidden"
          >
            CV/Resume
            <BsFilePdf
              size={40}
              className="ml-2 select-none text-black dark:text-neutral-50"
            />
          </a>
        </div>
        <div className="relative flex h-auto flex-col items-center justify-center px-[5%] py-[40%] text-center text-neutral-700 dark:text-slate-200 sm:py-[15%]">
          <h2 className="py-2 text-3xl font-medium sm:text-5xl">
            <span className=" text-neutral-700 dark:text-slate-200">
              Hi, I am
            </span>{" "}
            <span className="text-blue-600 dark:text-lime-500">
              <TypeAnimation
                sequence={[
                  "Hassan",
                  1000,
                  "a Developer",
                  1000,
                  "a Student",
                  1000,
                ]}
                repeat={Infinity}
              />
            </span>
          </h2>
          <h3 className="-mb-3 py-5 text-lg font-medium sm:text-xl">
            Welcome to my site!
          </h3>
          <p className="mb-10 text-sm font-medium text-neutral-700 dark:text-slate-200  sm:text-base">
            Here you can see my journey while programming, information about me,
            my projects, and my future plans.
          </p>
          <div className="flex justify-center  gap-16 py-3 text-3xl text-neutral-700 dark:text-slate-200">
            {items.map((item) => (
              <Contact
                key={item.name}
                name={item.name}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
