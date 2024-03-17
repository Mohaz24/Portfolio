import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React.
          </p>

          <p className="py-2 text-gray-600">
            I am proficient in Node.js, leveraging it for robust server-side
            development. Whether it’s handling requests, managing APIs, or
            implementing custom business logic, Node.js is my go-to choice. I’ve
            harnessed the power of Express.js to create RESTful APIs. Its
            simplicity, flexibility, and middleware support make it ideal for
            routing, authentication, and error handling. As a NoSQL database,
            MongoDB offers scalability and versatility. I skillfully design
            schemas, perform CRUD operations, and optimize queries. My journey
            doesn’t stop here—I’m committed to continuous learning. Whether it’s
            server-side or client-side development, I’m ready to tackle
            challenges and create elegant solutions.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
