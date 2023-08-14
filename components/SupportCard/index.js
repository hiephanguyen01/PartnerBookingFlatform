"use client";
import React from "react";
import classes from "./supportcard.module.scss";
import { useRouter } from "next/navigation";
import { Image } from "antd";

const SupportCard = ({ item }) => {
  const router = useRouter();
  return (
    <div
      className={classes.supportSectionItem}
      onClick={() => router.push(`/home/support/${item.id}`)}
    >
      <div className={classes.icon}>
        <Image src={item.image} preview={false} />
      </div>
      <label>{item.title}</label>
      <p className={classes.content}>{item.content}</p>
    </div>
  );
};

export default SupportCard;
