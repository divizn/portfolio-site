import React from "react";
import { SiDocusign } from "react-icons/si";
import Title from "../reusable/title";
import Section from "../reusable/section";

const Cv = () => {
  return (
    <Section className="hidden sm:flex">
      <div className="flex w-full flex-col items-center ">
        <Title>Resume/CV</Title>
        <embed
          className="mt-24 mb-8 hidden min-h-screen w-1/2 sm:inline-block"
          src="CV Hassan Javed.pdf"
        />
        <div className="flex">
          <a
            href="https://drive.google.com/file/d/1C3KaFUDf4j-14dhSrZ8x-yDbq_JW0gVz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-end text-center text-lime-500">
              <samp className="mr-4 text-3xl text-blue-600 underline dark:text-lime-500">
                PDF
              </samp>
              <SiDocusign size={30} />
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Cv;
