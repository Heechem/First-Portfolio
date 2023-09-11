import { motion } from "framer-motion";
import React from "react";
import LineGradient from "../components/LineGradient";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:-top-[120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="testimonials" className="pb-16 pt-32">
      {/* Heading  */}
      <motion.div
        className="text-center md:w-1/3 md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="mb-5 font-playfair text-4xl font-semibold text-red">
          Textimonials
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className=" mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          asperiores expedita eius ratione odit aspernatur, minima et porro
          facilis. Aliquam, quisquam. Reprehenderit consequuntur voluptatum
          vitae esse praesentium quis id veritatis porro officia asperiores
          fugit aliquid quas odit, illo ipsum dolore tempore aspernatur
          consequatur laborum itaque laudantium mollitia expedita accusantium
          earum!
        </p>
      </motion.div>

      {/* tESTIMONIAL SECTION  */}

      <div className="gap-8 md:flex md:justify-between">
        <motion.div
          className={`bg-blue ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">&quot;</p>
          <p className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero unde
            est magnam hic aliquam, dolorem magni natus ab soluta harum.
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">&quot;</p>
          <p className="text-center text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            cumque quod unde expedita soluta veritatis! Placeat reiciendis id
            sequi vero.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">&quot;</p>
          <p className="text-center text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            cumque quod unde expedita soluta veritatis! Placeat reiciendis id
            sequi vero.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
