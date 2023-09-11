import React, { useState } from "react";
import UseMediaQuery from "../hooks/UseMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Nabar Links and fct
const Link = ({ page, selectedPage, setSelectedPage }) => {
  const loweCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === loweCasePage ? "text-yellow" : ""
      } hover::text-yellow transition duration-500`}
      href={`#${loweCasePage}`}
      onClick={() => setSelectedPage(loweCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = UseMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`fixed top-0 z-40 w-full py-6 ${navbarBackground}`}>
      <div className="mx-auto flex w-5/6 items-center justify-between">
        <h4 className="font-playfair text-3xl font-bold">Heechem</h4>

        {/* Dsektop Nav */}

        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-3"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="src/assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}

        {/* Menu mobile popup */}

        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed bottom-0 right-0 h-full w-[300px] bg-blue">
            {/* Close Icon  */}
            <div className=" flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="src/assets/close-icon.svg" alt="" />
              </button>
            </div>
            {/* Menu Items */}
            <div className="tex-2xl ml-[33%] flex flex-col gap-10 text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
