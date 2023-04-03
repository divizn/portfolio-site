import React from "react";

const Section = ({ children, className = "" }) => {
  return (
    <section
      className={
        "h-full border-b-2 border-blue-600 bg-neutral-50 dark:border-lime-500 dark:bg-black md:h-auto " +
        className
      }
    >
      {children}
    </section>
  );
};
//     <section className="h-screen border-b border-blue-600 bg-neutral-50 dark:border-green-500 dark:bg-black ">
// {title && (
//   <h1 className="mt-20 text-center text-4xl font-medium text-neutral-700 dark:text-slate-200">
//     {title}
//   </h1>
// )}
// {children}
// </section>
export default Section;
