import React from "react";
import { motion } from "framer-motion";
import UseMediaQuery from "../hooks/UseMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = UseMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="gap-16 py-10 md:flex md:h-full md:items-center md:justify-between"
    >
      {/* Image section  */}

      <div className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-left-20 before:-top-20 before:z-[-1]
          before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:border-2 before:border-blue md:before:max-w-[600px]"
          >
            <img
              src="src/assets/profile-image.jpg"
              alt="Profile"
              className="md:mx-w-[600px] z-10 w-full max-w-[400px] rounded-lg border-2  border-red transition duration-500  hover:saturate-200 hover:filter"
            />
          </div>
        ) : (
          <img
            src="src/assets/profile-image.jpg"
            alt="Profile"
            className="md:mx-w-[600px] z-10 w-full max-w-[400px] rounded-lg border-2  border-red transition duration-500  hover:saturate-200 hover:filter"
          />
        )}
      </div>
      {/* Main section  */}
      <div className="z-30 mt-12 basis-2/5 md:mt-32">
        {/* heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-10 text-center font-playfair text-6xl md:text-start">
            heechem {""}
            <span className="z-20 text-center before:absolute before:-left-[32px] before:-top-[125px] before:z-[-1] xs:relative xs:font-semibold  xs:text-gray-50 xs:before:content-brush  ">
              Ichallamene
            </span>
          </p>
          <p className="text-md mb-7 mt-10 text-center leading-loose md:text-start">
            I'm Heechem, a self-taught software developer with a goal to give
            birth to ideas from my mind to the real world .
            <br />
            <p className="mt-10">
              In this portfolio, you will discover a collection of projects that
              reflect my dedication, skills, and commitment to innovation. As a
              self-learner, my journey has been a filled with peaks and valleys,
              and I am still learning .
            </p>{" "}
            <br /> This portfolio is a testament to my journey, dive in, explore
            my work, and lets connect to explore new possibilities in the world
            of technology
          </p>
        </motion.div>
        {/* call to action  */}
        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="rounded-sm bg-gradient-rainblue px-7 py-3 font-semibold text-deep-blue transition duration-500 ease-in-out hover:bg-blue  hover:text-white"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 ease-in-out hover:text-red">
              {" "}
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
