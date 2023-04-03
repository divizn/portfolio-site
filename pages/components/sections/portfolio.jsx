import React from "react";
import Title from "../reusable/title";
import PortfolioItem from "../reusable/portfolio-items";
import { items } from "../../lib/items";
import Section from "../reusable/section";

const Portfolio = () => {
  return (
    <Section>
      <div className="mb-40 flex h-full w-full flex-col items-center ">
        <Title>Portfolio</Title>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          {items.map((item) => (
            <PortfolioItem
              key={item.name}
              name={item.name}
              repo={item.repo}
              picture={item.picture}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
