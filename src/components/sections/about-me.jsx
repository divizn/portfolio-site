import React from "react";
import Section from "../reusable/section";
import Title from "../reusable/title";
import Languages from "../reusable/languages";
import { currentLanguages, otherLanguages } from "../../lib/languages";
import Description from "../description";
import TimelineItem from "../reusable/timeline-items";
import { timelineItems } from "../../lib/items";

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
          <div className="mx-4 my-10 grid h-full grid-cols-1 sm:mx-10 md:grid-cols-2">
            {timelineItems.map((item) => (
              <TimelineItem
                key={item.title}
                startDate={item.startDate}
                endDate={item.endDate}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
