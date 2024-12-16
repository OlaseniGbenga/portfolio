import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="pt-32  md:h-auto w-full bg-yellow-400 md:px-8 px-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-white py-4 max-w-md">
          Unlock the power of exceptional web applications with my 2 years of hands-on experience in software design and development. I specialize in creating high-performance, responsive solutions using the latest technologies like HTML, CSS, Tailwind, JavaScript, React, Next.js, Firebase, and GitHub. Whether you're looking to bring your ideas to life or elevate your digital presence, I have the expertise to deliver seamless, cutting-edge results that drive success. Let's build something amazing together!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-600 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
