import React from "react";
import todoApp from "../assets/portfolio/todoApp.png";
import gameApp from "../assets/portfolio/gameApp.png";
import teamApp from "../assets/portfolio/teamApp.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todoApp,
      href:"https://my-schedule-app.vercel.app/",
      code:"https://github.com/OlaseniGbenga/My-schedule-app/tree/master",
    },
    {
      id: 2,
      src: gameApp,
      href:"https://react-game-olive.vercel.app/",
      code:"https://github.com/OlaseniGbenga/React-Game",
    },
    {
      id: 3,
      src: teamApp,
      href:"https://team-member-allocation.olasenigbenga.repl.co/",
      code:"https://github.com/OlaseniGbenga/TEAM-MEMBER-ALLOCATION",
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: gameApp,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-yellow-400 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href, code }) => (
            <div key={id} className="shadow-md shadow-blue-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  visit
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
