import React from "react";
import ethereumNigeri from "../assets/portfolio/ethereumNigeria.png";
import payMe from "../assets/portfolio/payMe.png";
import teamApp from "../assets/portfolio/teamApp.png";
import upStore from "../assets/portfolio/upStore.png";
import faqApp from "../assets/portfolio/faq.png";
import rattingApp from "../assets/portfolio/rating.png";
import yala from "../assets/portfolio/useYala.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: yala,
      href: "https://useyala.com/",
      code: "https://github.com/OlaseniGbenga/wallet",
    },
    {
      id: 2,
      src: ethereumNigeri,
      href: "https://ethereumnigeria.org/",
      code: "https://github.com/ETHNIGERIA/eth-nigeria-website",
    },
    {
      id: 3,
      src: upStore,
      href: "https://upstore.vercel.app/",
      code: "https://github.com/OlaseniGbenga/UP-STORE",
    },
  ];
//bg-yellow-400 w-full text-white md:h-screen sm:pt-0 pt-[400px] md:px-8 px-0
  return (
    <div
      name="portfolio"
      className="bg-yellow-400 w-full text-white   py-[50px] md:px-8 px-0 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4  ">
          {portfolios.map(({ id, src, href, code }) => (
            <div key={id} className="shadow-md shadow-blue-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className=" px-6 py-3 m-4 duration-200 hover:scale-105 self-center"
                >
                  visit
                </a>
                {/* <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  code
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
