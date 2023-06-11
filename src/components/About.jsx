import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-yellow-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello! My name is Gbenga Olaseni and I am a frontend developer based in Lagos, Nigeria. With over 2 years of experience in the industry, I specialize in creating elegant, user-friendly interfaces using the latest frontend development technologies.
My skills include HTML, CSS, JavaScript, React, Tailwind among others. I have worked on a variety of projects in the past, ranging from small business websites to large-scale e-commerce platforms.

As a developer, I believe that form and function should work together seamlessly. I strive to create interfaces that are not only visually appealing but also easy to use and navigate. 

When I'm not coding, I enjoy planting, reading, and trying out new recipes in the kitchen. I'm also a big fan of live music and love going to concerts whenever I can.

If you're interested in working with me, please feel free to reach out to me through the mail or connect with me on LinkedIn. I look forward to hearing from you!
        </p>

        <br />

      
      </div>
    </div>
  );
};

export default About;
