import React from "react";
//w-full h-screen bg-yellow-400 text-white md:px-8 px-0 sm:pt-0 pt-[400px]
const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-yellow-400 text-white md:px-8 px-0 sm:pt-0 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            About
          </p>
        </div>

        <p className="text-xl">
          A developer with two years of experience in building user interfaces
          and a strong foundation in both Linux and Windows operating systems.
          Proficient in HTML, CSS, JavaScript, React, and Tailwind, I am skilled
          in creating responsive, intuitive, and visually appealing web
          applications. I have a basic understanding of SQL and am comfortable
          writing simple queries to interact with databases. In my role at Yala,
          I significantly contributed to improving the stability and performance
          of the web platform by developing reusable and maintainable code. I
          worked closely with senior developers and cross-functional teams to
          ensure the quality and scalability of the system. Additionally, my
          volunteer work with Ethereum Nigeria allowed me to design and
          implement user-friendly interfaces for blockchain education platforms,
          focusing on accessibility and user engagement.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
