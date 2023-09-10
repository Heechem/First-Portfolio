import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="my-10 flex justify-center gap-7 md:justify-start">
      <a
        className="scale-50 transition duration-500 hover:opacity-50"
        href="https://www.linkedin.com/in/ichallamene-hichem/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Linkedin-link" src="src/assets/linkedin.png"></img>
      </a>

      <a
        className=" over:border-cyan-300 scale-50 transition   duration-500 hover:opacity-50 "
        href="https://www.facebook.com/hich.icha.92/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Facebook-link" src="src/assets/facebook.png"></img>
      </a>

      <a
        className="scale-50 transition duration-500 hover:opacity-50 "
        href="https://github.com/Heechem"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="src/assets/github-mark.png"></img>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
