import React from "react";

const Contact = ({ name, link, icon }) => {
  return (
    <a
      className="transition-all duration-700 ease-out hover:text-blue-600 dark:hover:text-lime-500"
      alt={name}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Contact;
