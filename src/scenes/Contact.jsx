import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* Headings */}

      <motion.div
        className="flex w-full justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair text-4xl font-semibold">
            <span className="text-yellow">Contact me</span> to start
          </p>
          <div className="my-5 flex md:justify-end">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* Form and Image section  */}
      <div className="mt-5 gap-16 md:flex md:justify-between">
        <motion.div
          className="flex basis-1/2 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../../public/contact-image.jpeg" alt="contact" />
        </motion.div>
        <motion.div
          className="mt-10 basis-1/2 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/5680d0fedc37cfefd452384cf02602c8"
            method="POST"
          >
            <input
              className="w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-red">
                {errors.name.type === "required" && "This Field is required"}
                {errors.name.type === "maxLength" && "Max length is 20 char"}
              </p>
            )}
            <input
              className="mt-5 w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-red">
                {errors.email.type === "required" && "This Field is required"}
                {errors.email.type === "pattern" &&
                  "Please write a correct email address"}
              </p>
            )}

            <textarea
              className="mt-5 w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              type="text"
              placeholder="Message"
              rows={"4"}
              cols={"50"}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-red">
                {errors.message.type === "required" && "This Field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              type="submit"
              className="bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:cursor-pointer hover:bg-red hover:text-white"
            >
              {" "}
              Send me a message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
