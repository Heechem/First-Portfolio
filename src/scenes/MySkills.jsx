import React from "react";
import UseMediaQuery from "../hooks/UseMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

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
            chain management, my background is rooted in precision and
            problem-solving.
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
      </div>
    </section>
  );
};

export default MySkills;
