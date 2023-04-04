import React from "react";

// TODO: fix the progress bar, find out why w-[${progress}%] doesn't work so I can remove glabal.css styles --- SORT OF FIXED: template strings + props dont work

const Languages = ({ icon, progress, name }) => {
  const variants = {
    nextjs: "text-neutral-700 dark:text-slate-200",
    reactjs: "text-blue-500",
    tailwindcss: "text-cyan-600",
    clang: "text-blue-500",
    javascript: "text-yellow-400",
    lua: "text-blue-500",
    python: "text-yellow-500",
    html: "text-red-500",
    css: "text-blue-500",
    java: "text-orange-500",
    csharp: "text-blue-500",
    typescript: "text-blue-500",
  };
  const progBar = `w-${progress}%`;
  return (
    <div className="flex flex-row">
      <p className={`${variants[name]} py-3 text-7xl`}>{icon}</p>
      <p className="mx-3 self-center text-neutral-700 dark:text-slate-200 ">
        {progress}%
      </p>
      <div className="mt-3 h-3 w-full self-center bg-neutral-700 dark:bg-white">
        <div
          className={`h-full bg-blue-600 dark:bg-lime-500 ` + `${name}`}
        ></div>
      </div>
    </div>
  );
};

export default Languages;
