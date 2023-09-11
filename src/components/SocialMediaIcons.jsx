import React from "react";
import linkedinImg from "../../public/linkedin.png";
import FacebokkImg from "../../public/facebook.png";
import GithubImg from "../../public/github-mark.png";

const SocialMediaIcons = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-red text-4xl cursor-pointer`;

  return (
    <div className="my-10 flex justify-center gap-7 md:justify-start">
      <div className="scale-50">
        {/* <p className={overlayStyles}>Linked in</p> */}
        <a
          className="z-50 scale-50 transition duration-500 hover:opacity-50"
          href="https://www.linkedin.com/in/ichallamene-hichem/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Linkedin-link" src={linkedinImg}></img>
        </a>
      </div>
      <div className="scale-50">
        {/* <p className={overlayStyles}>Facebook</p> */}
        <a
          className=" over:border-cyan-300 scale-50 transition   duration-500 hover:opacity-50 "
          href="https://www.facebook.com/hich.icha.92/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Facebook-link" src={FacebokkImg}></img>
        </a>
      </div>
      <div className="scale-50">
        {/* <p className={overlayStyles}>Github</p> */}
        <a
          className="scale-50 transition duration-500 hover:opacity-50  "
          href="https://github.com/Heechem"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src={GithubImg}></img>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
