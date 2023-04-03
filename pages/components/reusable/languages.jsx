import React from "react";

// TODO: fix the progress bar, find out why w-[${progress}%] doesn't work so I can remove glabal.css styles

const Languages = ({ icon, progress, name, color }) => {
  return (
    <div className="flex flex-row">
      <p className={`py-3 text-7xl ${color}`}>{icon}</p>
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
