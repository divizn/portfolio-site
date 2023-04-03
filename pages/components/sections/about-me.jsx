import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import Section from "../reusable/section";
import Title from "../reusable/title";
import Languages from "../reusable/languages";
import { currentLanguages, otherLanguages } from "../../lib/languages";
import Description from "../description";

const AboutMe = () => {
  return (
    <Section>
      <div className="flex flex-col items-center py-3 px-4 ">
        <Title>About Me</Title>
        <Description />
        <div className=" mt-36 flex w-full flex-col">
          <h3 className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500">
            Currently working on
          </h3>
          <div className=" grid h-full grid-cols-1 justify-around gap-5 md:grid-cols-2">
            {currentLanguages.map((language) => (
              <Languages
                key={language.name}
                color={language.color}
                icon={language.icon}
                name={language.name}
                progress={language.progress}
              />
            ))}
          </div>
        </div>
        <div className=" mt-36 flex w-full flex-col">
          <h3 className="py-3 text-center text-3xl font-semibold text-blue-600 dark:text-lime-500">
            Worked on
          </h3>
          <div className="grid h-full grid-cols-1 justify-around gap-5 md:grid-cols-2">
            {otherLanguages.map((language) => (
              <Languages
                key={language.name}
                color={language.color}
                icon={language.icon}
                name={language.name}
                progress={language.progress}
              />
            ))}
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
    </Section>
  );
};

export default AboutMe;
