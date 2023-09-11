import SocialMediaIcons from "../components/SocialMediaIcons";

import React from "react";

const Footer = () => {
  return (
    <footer className="h-84  bg-red pt-8">
      <div className="mx-auto  w-5/6  ">
        <SocialMediaIcons className="scale-50" />
        <div className="items-center text-center md:flex md:justify-center ">
          <p className="flex justify-center text-2xl font-semibold text-yellow">
            Heechem Ichallamene
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
