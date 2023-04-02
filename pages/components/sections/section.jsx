import React from "react";

const Section = ({ children, title }) => {
  return (
    <section className="h-screen border-b border-blue-600 bg-neutral-50 dark:border-green-500 dark:bg-black ">
      {title && (
        <h1 className="mt-20 text-center text-4xl font-medium text-neutral-700 dark:text-slate-200">
          {title}
        </h1>
      )}
      {children}
    </section>
  );
};

export default Section;
