import Image from "next/image";
import React from "react";

const PortfolioItem = ({ repo, picture, name }) => {
  // make loader for image
  const loader = ({ src }) => {
    return src;
  };
  return (
    <a href={repo} target="_blank" rel="noopener noreferrer">
      <Image
        loader={loader}
        width={500}
        height={150}
        alt={name}
        src={picture}
      />
    </a>
  );
};

export default PortfolioItem;
