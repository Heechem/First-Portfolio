import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="fixed right-7 top-[60%] flex flex-col gap-6">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } h-3 w-3 rounded-full `}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        } h-3 w-3 rounded-full `}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        } h-3 w-3 rounded-full `}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
        } h-3 w-3 rounded-full `}
        href="#testimonials"
        onClick={() => setSelectedPage("testimonials")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } h-3 w-3 rounded-full `}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
