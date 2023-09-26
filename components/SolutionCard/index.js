"use client";
import React from "react";
import classes from "./solutioncard.module.scss";
import ArrowRight from "@/assets/svg/SolutionSection/ArrowRight";
import { Image } from "antd";
import { useRouter } from "next/navigation";

const SolutionCard = ({ item }) => {
  const router = useRouter();
  return (
    <div
      className={classes.solutionSectionItem}
      onClick={() => router.push(`/home/solution/${item.id}`)}
    >
      <Image
        preview={false}
        src={item.image}
        className={classes.image}
        alt=""
      />
      <div className={classes.title}>
        <p> {item.title}</p>
        {/* <ArrowRight /> */}
      </div>
    </div>
  );
};

export default SolutionCard;
