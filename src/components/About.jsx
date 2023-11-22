import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-yellow-400 text-white md:px-8 px-0 sm:pt-0 pt-[400px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello! I'm Gbenga Olaseni, a frontend developer based in Lagos, Nigeria, specializing in crafting elegant and user-friendly interfaces using the latest frontend technologies. With over 2 years of experience, I've honed my skills in HTML, CSS, JavaScript, React, Tailwind, and more.

In addition to my frontend expertise, I'm deeply engaged in researching Web 3 technologies and am an active member of Ethereum Nigeria, a community dedicated to advancing blockchain adoption. My project portfolio spans from small business websites to large-scale e-commerce platforms, where I emphasize the seamless integration of form and function.

I believe in creating interfaces that are visually captivating and intuitive to navigate. Beyond coding, I find joy in gardening, exploring new recipes in the kitchen, and indulging in live music at concerts whenever possible.

If you're interested in collaborating or exploring how we can work together, feel free to reach out via email or connect with me on LinkedIn. I'm excited about the possibilities and look forward to connecting with you!</p>

        <br />

      
      </div>
    </div>
  );
};

export default About;
