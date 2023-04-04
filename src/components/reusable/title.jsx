import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className="mt-20 text-4xl font-medium text-neutral-700 dark:text-slate-200">
      {children}
    </h1>
  );
};

export default Title;
