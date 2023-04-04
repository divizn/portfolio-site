import React from "react";

const TimelineItem = ({
  startDate,
  endDate = "present",
  icon,
  title,
  description,
}) => {
  return (
    <div className="mb-8 border-b-2 border-blue-600 border-opacity-70 dark:border-lime-500 sm:mx-4">
      <div className="mb-2 flex text-3xl text-blue-600 dark:text-lime-500">
        {icon}
        <p className="ml-3 self-center text-xl text-neutral-700 dark:text-slate-200">
          {title}
        </p>
      </div>
      <p className="w-fit rounded-3xl bg-blue-600 bg-opacity-70 p-1 px-5 font-bold text-neutral-700 dark:bg-lime-500">
        {startDate} - {endDate}
      </p>
      <div className=" -mt-1 ">
        <p className="p-4 text-neutral-700 dark:text-slate-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
