import React from "react";

const Section = ({ children }) => {
  return (
    <section className="mb-8 h-full border-b-2 border-blue-600 bg-neutral-50 dark:border-lime-500 dark:bg-black md:h-screen ">
      {children}
    </section>
  );
};

export default Section;
