import React from "react";
import UseMediaQuery from "../hooks/UseMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import {
  SiCsharp,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

// the sKills array

const skills = [
  {
    name: "HTML",
    icon: (
      <SiHtml5
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#E34F26]"
      />
    ),
  },
  {
    name: "CSS",
    icon: (
      <SiCss3
        size={"3em"}
        className="origin-bottom  transition duration-300 group-hover:text-[#1572B6]"
      />
    ),
  },
  {
    name: "Javascript",
    icon: (
      <SiJavascript
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#F7DF1E]"
      />
    ),
  },
  {
    name: "React",
    icon: (
      <SiReact
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#61DAFB]"
      />
    ),
  },

  {
    name: "Tailwind",
    icon: (
      <SiTailwindcss
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#06B6D4]"
      />
    ),
  },

  {
    name: "Git",
    icon: (
      <SiGit
        size={"3em"}
        className="origin-bottom transition duration-300 group-hover:text-[#F05032]"
      />
    ),
  },
];

const MySkills = () => {
  const isAbodeMediumScreens = UseMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pb-24 pt-10">
      {/* header */}
      <div className="mt-32 md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-5 font-playfair text-4xl font-semibold">
            My <span className=" text-red">Skills</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mb-7 mt-10">
            In my journey as a self taught developer, I bring a unique blend of
            expertise to the table. Armed with a master&rsquo;s degree in supply
            chain management, and strong customer service experience, my
            background is rooted in precision and problem-solving.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAbodeMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-left-20 before:-top-10 before:z-[-1]  before:h-full before:w-full  before:border-2 before:border-blue md:before:max-w-[600px]">
              <img
                src="src/assets/skills-image.png"
                alt="Profile"
                className="z-10"
              />
            </div>
          ) : (
            <img
              src="src/assets/skills-image.png"
              alt="Profile"
              className="z-10"
            />
          )}
        </div>
      </div>
      {/* Skills */}
      <div className="mt-16 gap-32 md:flex md:justify-between">
        {/* experience */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-5xl font-semibold">01</p>
              <p className="mt-3 font-playfair text-3xl font-semibold">
                Experience
              </p>
            </div>
            <div className="md:w-3/2 absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-blue"></div>
          </div>
          <ul>
            <li> ✔️ 5 years of exceptional Customer Service </li>
            <li> ✔️ Effective Communication Skills: </li>
            <li> ✔️ Documentation and Support Improvement</li>
            <li> ✔️ Collaboration and Problem Resolution</li>
          </ul>
        </motion.div>
        {/* Inovation */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-5xl font-semibold">02</p>
              <p className="mt-3 font-playfair text-3xl font-semibold">
                Frontend Developer
              </p>
            </div>
            <div className="md:w-3/2 absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-red"></div>
          </div>
          <div className=" md:flex md:flex-wrap md:justify-between md:gap-3">
            {skills.map((item) => (
              <div
                key={item.name}
                className="group flex w-1/3  items-center  justify-between gap-2 md:gap-0"
              >
                <p className=" text-base sm:text-lg">{item.name}</p>
                <div className="m-2 hover:cursor-pointer">{item.icon}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
