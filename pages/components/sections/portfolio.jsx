import React from "react";
import Title from "../reusable/title";
import PortfolioItem from "../reusable/portfolio-items";
import { items } from "../../lib/items";

const Portfolio = () => {
  return (
    <section className="mb-8 h-full border-b-2 border-blue-600 bg-neutral-50 dark:border-lime-500 dark:bg-black md:h-screen ">
      <div className="flex w-full flex-col items-center ">
        <Title>Portfolio</Title>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => (
            <PortfolioItem
              key={index}
              name={item.name}
              repo={item.repo}
              picture={item.picture}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
