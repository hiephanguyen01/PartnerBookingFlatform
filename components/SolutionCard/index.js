"use client";
import React from "react";
import classes from "./solutioncard.module.scss";
import ArrowRight from "@/assets/svg/SolutionSection/ArrowRight";
import { Image } from "antd";

const SolutionCard = ({ item }) => {
  return (
    <div className={classes.solutionSectionItem}>
      <Image
        preview={false}
        src="https://picsum.photos/seed/picsum/200/300"
        alt=""
        style={{
          width: "100%",
          objectFit: "cover",
          height: "196px",
          borderRadius: "8px",
        }}
      />
      <div className={classes.title}>
        {item.title}
        <ArrowRight />
      </div>
    </div>
  );
};

export default SolutionCard;
