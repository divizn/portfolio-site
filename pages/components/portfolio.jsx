import React from "react";

const Portfolio = () => {
  return (
    <div className="mb-10 mt-20 grid h-full grid-cols-1 justify-items-center md:grid-cols-3">
      <a
        className="w-fit"
        href="https://github.com/divizn/discord-spotify-bot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Discord Spotify Bot"
          src={
            "https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=discord-spotify-bot&hide_border=true&theme=dark&bg_color=0d1117"
          }
        />
      </a>
      <a
        className="w-fit"
        href="https://github.com/divizn/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=react-weather-app&hide_border=true&theme=dark&bg_color=0d1117" />
      </a>
      <a
        className="w-fit"
        href="https://github.com/divizn/legacy-portfolio-site"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=legacy-portfolio-site&hide_border=true&theme=dark&bg_color=0d1117" />
      </a>
      <a
        className="w-fit"
        href="https://github.com/divizn/portfolio-site"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=portfolio-site&hide_border=true&theme=dark&bg_color=0d1117" />
      </a>
      <a
        className="w-fit"
        href="https://github.com/divizn/clone-sites"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=divizn&repo=clone-sites&hide_border=true&theme=dark&bg_color=0d1117" />
      </a>
    </div>
  );
};

export default Portfolio;
