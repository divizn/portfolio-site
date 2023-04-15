import React, { useState } from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { IoMdRocket } from "react-icons/io";

// blame tailwind for this
const Background = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`z-0 flex h-screen overflow-hidden ${isDark ? "dark " : ""}`}
    >
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-blue-950 to-blue-500 transition-all duration-1000 ease-in dark:from-black dark:via-neutral-950 dark:to-gray-950">
        <button
          onClick={handleToggle}
          className="absolute bottom-0 right-0 text-slate-800 transition-all duration-200 ease-in hover:text-white dark:text-slate-400 dark:hover:text-white"
        >
          {isDark ? <GiEarthAmerica size={70} /> : <IoMdRocket size={70} />}
        </button>
        <div className="absolute left-[45%] top-[15%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[20%] top-[13%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[50%] top-[16%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[13%] top-[17%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[75%] top-[20%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[30%] top-[10%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[36%] top-[10%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[83%] top-[8%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[56%] top-[3%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[60%] top-[10%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[71%] top-[9%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[89%] top-[10%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[95%] top-[18%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[98%] top-[7%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[10%] top-[7%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[3%] top-[24%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        <div className="absolute left-[5%] top-[12%] hidden h-1 w-1 animate-pulse rounded bg-white dark:flex"></div>
        {children}
      </div>
    </div>
  );
};

export default Background;
