import React from "react";
import classes from "./homeSection.module.scss";

const HomeSection = ({
  className = "",
  classContent = "",
  style = {},
  children = <></>,
}) => {
  return (
    <section className={[className, classes.section].join(" ")} style={style}>
      <div className="container">
        <div className={[classes.wrapper, classContent].join(" ")}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
