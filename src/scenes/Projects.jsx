import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Projects = () => {
  // Stagger for the animation
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // project componenent for each project

  const Project = ({ title }) => {
    // text to pop up upon the image hover

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="font-playfair text-2xl">{title}</p>
          <p className="mt-7">My first Project represent</p>
        </div>
        <img src={`../../public/${projectTitle}.jpeg`} alt="" />
      </motion.div>
    );
  };

  return (
    <section className="pb-48 pt-48" id="projects">
      {/* headings */}
      <motion.div
        className="mx-auto text-center md:w-2/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className=" font-playfair text-4xl font-semibold">
            My <span className=" text-red">PRO</span>JECTS
          </p>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <p className="mb-7 mt-10">
          Each piece is a testament to my commitment to excellence and
          innovation.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          // initial="scale-50"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <div className="font-playfaire flex max-h-[400px] max-w-[400px] items-center justify-center bg-red p-10 text-2xl font-semibold">
            Beautiful interfaces
          </div>
          <Project title="project 1" />
          <Project title="project 2" />

          {/* row 2 */}

          <Project title={"project 3"} />
          <Project title={"project 4"} />
          <Project title={"project 5"} />

          {/* Row 3 */}

          <Project title={"project 5"} />
          <Project title={"project 6"} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
